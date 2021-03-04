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
var servicesDdb = new AWS.DynamoDB.DocumentClient();

// if (process.env.ENV && process.env.ENV !== "NONE") {
//   tableName = tableName + "-" + process.env.ENV;
// }

// declare a new express app
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
  env: plaid.environments.sandbox,
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
    //res.header("Access-Control-Allow-Headers", "*");

    res.json({
      access_token: ACCESS_TOKEN,
      item_id: ITEM_ID,
    });
  });
});

app.get("/transactions", function (req, res) {
  // Pull transactions for the last 30 days
  let startDate = moment().subtract(365, "days").format("YYYY-MM-DD");
  let endDate = moment().format("YYYY-MM-DD");

  console.log("made it past variables");
  console.log("called /transactions");

  //suddenly error occuring with GET request ??
  if (req.body.token !== null) {
    console.log("TOKEN EXISTS", req.body.token);
    ACCESS_TOKEN = req.body.token;
  }

  client.getTransactions(
    ACCESS_TOKEN,
    startDate,
    endDate,
    {
      count: 400,
      offset: 0,
    },
    function (error, transactionsResponse) {
      res.json({ transactions: transactionsResponse });

      const tableName = "UserCards-jzofihw23vdc5jdrwrs2rhgw5a-dev";
      const transactionTableName = "UserBankTransactions";

      var filteredAccounts = transactionsResponse["accounts"].filter(
        (account) => {
          var key = "credit" || "other";
          return account.type == key;
        }
      );

      var filteredTransactions = transactionsResponse["transactions"].filter(
        (transaction) =>
          filteredAccounts.every((account) => {
            var key = account.account_id;
            return transaction.account_id == key;
          })
      );

      // Save relevant accounts to DB
      if (filteredAccounts.length > 0) {
        filteredAccounts.forEach((account) => {
          let ddbParams = {
            Item: {
              // '__typename': {S: 'User'},
              id: account.account_id.toString(),
              userID: userId,
              name: account.name.toString(),
              balance: account.balances.current.toString(),
            },
            TableName: tableName,
          };

          // Call DynamoDB
          try {
            //ddb.put(ddbParams).promise();
            ddb.put(ddbParams, function (err, data) {
              if (err) {
                console.log("DB Error", err);
              } else {
                console.log("DB Success", data);
              }
            });
            console.log("Success");
          } catch (err) {
            console.log("Error", err);
          }
        });
      }

      //Save relevant Transactions to DB
      if (filteredTransactions.length > 0) {
        filteredTransactions.forEach((transaction) => {
          //console.log("transaction", transaction);
          let ddbParams = {
            Item: {
              // '__typename': {S: 'User'},
              id: transaction.transaction_id.toString(),
              userID: userId,
              acoountId: transaction.account_id.toString(),
              amount: transaction.amount.toString(),
              date: transaction.date.toString(),
              merchantName: transaction.merchant_name || "",
              transactionName: transaction.name || "",
              paymentChannel: transaction.payment_channel || "",
              transactionType: transaction.transaction_type || "",
            },
            TableName: transactionTableName,
          };

          try {
            //ddb.put(ddbParams).promise();
            transactionDdb.put(ddbParams, function (err, data) {
              if (err) {
                console.log("DB Error", err);
              } else {
                console.log("DB Success", data);
              }
            });
          } catch (err) {
            console.log("Error", err);
          }
        });
      }
    }
  );
});

/*********************************
 * Subscription Service Extractor *
 * save services from transaction records
 ********************************/

app.put("/extract/subscriptions", function (req, res) {
  const userID = req.body.userID;
  //servicesDdb, transactionsDdb

  /*
  1. Find transactions under "userID"
  2. Group the transactions by transactionName
  3. Check if the transactionName is in serviceNameList
  4. Sort by date
  5. Write to DB
  6. count number of writes and pass res.json
  */

  const serviceNameList = [
    "Netflix",
    "Creative Cloud",
    "Opal",
    "ExpressVPN",
    "Blinkist",
    "Hulu",
    "Disney",
    "Notion",
    "Notability",
    "ESPN plus",
    "Spotify",
    "Superhuman",
  ];

  // var params = {
  //   TableName: "Movies",
  //   KeyConditionExpression: "#user = :yyyy",
  //   ExpressionAttributeNames: {
  //     "#user": "userID",
  //   },
  //   ExpressionAttributeValues: {
  //     ":yyyy": 1985,
  //   },
  // };

  res.json({
    data: {
      total: 5,
    },
  });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
