/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const plaid = require("plaid");
var moment = require("moment");

var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

const { v4: uuidv4 } = require("uuid");

const region = "us-east-2";
AWS.config.update({ region: region });
var ddb = new AWS.DynamoDB.DocumentClient();
var transactionDdb = new AWS.DynamoDB.DocumentClient();

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

/****************************
 * TestFlight API calls *
 ****************************/

const client = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET,
  env: plaid.environments.development,
});

var PUBLIC_TOKEN = null;
var ACCESS_TOKEN = null;
var ITEM_ID = null;

app.get("/api/info", function (req, res) {
  res.send({
    application: process.env.PLAID_CLIENT_ID,
    version: "1",
  });
});

app.post("/plaid", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.post("/plaid/*", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Plaid Token Exchnage and Transaction Save *
 ****************************/

var userId = "";

app.post("/auth/publictoken", function (req, res) {
  let PUBLIC_TOKEN = req.body.public_token;
  userId = req.body.userData;

  console.log("called /auth/publictoken");

  client.exchangePublicToken(PUBLIC_TOKEN, function (error, tokenResponse) {
    console.log("error", error);
    console.log("tokenResponse", tokenResponse);

    ACCESS_TOKEN = tokenResponse.access_token;
    ITEM_ID = tokenResponse.item_id;
    console.log("ACCESS_TOKEN", ACCESS_TOKEN);

    client.getItem(ACCESS_TOKEN, function (error, itemResponse) {
      console.log("itemResponse", itemResponse);
      console.log("inst", itemResponse.item.institution_id);
      const INSTITUTION_ID = itemResponse.item.institution_id;
      client.getInstitutionById(INSTITUTION_ID, ["US"], function (
        error,
        instResponse
      ) {
        console.log("instResponse", instResponse);
        let INSTITUTION_NAME = instResponse.institution.name;
        res.json({
          access_token: ACCESS_TOKEN,
          item_id: ITEM_ID,
          institution: INSTITUTION_NAME,
        });
      });
    });
  });
});

async function saveAccounts(accounts) {
  const tableName = "UserCards-jzofihw23vdc5jdrwrs2rhgw5a-dev";
  var filteredAccounts = accounts.filter((account) => {
    var key = "credit" || "other";
    return account.type === key || account.subtype.includes("card");
  });

  if (filteredAccounts.length > 0) {
    filteredAccounts.forEach(async (account) => {
      let ddbParams = {
        TableName: tableName,
        Item: {
          id: account.account_id.toString(),
          userID: userId,
          name: account.name.toString(),
          balance: account.balances.current.toString(),
        },
      };

      try {
        const db_result = await ddb.put(ddbParams).promise();
        console.log("Success account add: ", db_result);
      } catch (err) {
        console.log("Error", err);
      }
    });
  }

  return filteredAccounts;
}

async function saveTransactions(transactions) {
  const transactionTableName = "UserBankTransactions";
  transactions.forEach(async (transaction) => {
    let ddbParams = {
      TableName: transactionTableName,
      Item: {
        id: transaction.transaction_id.toString(),
        userID: userId,
        accountId: transaction.account_id.toString(),
        amount: transaction.amount.toString(),
        date: transaction.date.toString(),
        merchantName: transaction.merchant_name || "unavailable",
        transactionName: transaction.name || "",
        paymentChannel: transaction.payment_channel || "",
        transactionType: transaction.transaction_type || "",
      },
    };

    try {
      const db_result = await transactionDdb.put(ddbParams).promise();
      console.log("Success transaction add: ", db_result);
    } catch (err) {
      console.log("Error", err);
    }
  });
}

app.get("/transactions", async function (req, res) {
  // Pull transactions for the last 30 days
  let startDate = moment().subtract(365, "days").format("YYYY-MM-DD");
  let endDate = moment().format("YYYY-MM-DD");

  console.log("made it past variables");
  console.log("called /transactions");

  if (req.query) {
    ACCESS_TOKEN = req.query.token;
    userId = req.query.userID;
    console.log("CALLED queryString", userId + " " + ACCESS_TOKEN);
  }

  //New Transaction Method
  const plaidResponse = await client
    .getTransactions(ACCESS_TOKEN, startDate, endDate, {})
    .catch((err) => {
      console.log("transaction err: ", err);
      res.json({ statuscode: 400, message: err });
    });

  let accounts = plaidResponse.accounts;
  let transactions = plaidResponse.transactions;
  const total_transactions = plaidResponse.total_transactions;

  while (transactions.length < total_transactions) {
    const paginatedTransactionsResponse = await client.getTransactions(
      ACCESS_TOKEN,
      startDate,
      endDate,
      {
        offset: transactions.length,
      }
    );
    transactions = transactions.concat(
      paginatedTransactionsResponse.transactions
    );
  }
  //at this point we have the accounts and transactions lists that we need

  new Promise(async function (resolve, reject) {
    const filteredAccounts = await saveAccounts(accounts);
    resolve(filteredAccounts);
  }).then(async function (filteredAccounts) {
    //remove account filter
    console.log("filteredAccounts", filteredAccounts);
    var filteredTransactions = transactions.filter((transaction) => {
      var selection = false;
      filteredAccounts.every((account) => {
        var key = account.account_id;
        if (transaction.account_id === key) {
          selection = true;
        }
      });
      return selection;
    });

    if (filteredTransactions.length > 0) {
      await saveTransactions(filteredTransactions);
    }
    //await saveTransactions(transactions);
    console.log("NUMBER OF TRANSACTIONS: ", transactions.length);

    res.json({ statuscode: 200, transactions: transactions });
  });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
