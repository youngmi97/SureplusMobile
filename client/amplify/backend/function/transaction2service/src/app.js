/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const AWS = require("aws-sdk");

var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
var moment = require("moment");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(awsServerlessExpressMiddleware.eventContext());

const region = "us-east-2";
AWS.config.update({ region: region });
var transactionDDB = new AWS.DynamoDB.DocumentClient();
var subscriptionDDB = new AWS.DynamoDB.DocumentClient();

const subscriptionTable = "SubscriptionServices-jzofihw23vdc5jdrwrs2rhgw5a-dev";

/*********************************
 * Subscription Service Extractor *
 * save services from transaction records
 ********************************/
app.post("/extract/subscription", function (req, res) {
  // Move this content to DB
  const serviceNameList = [
    "Netflix",
    "Creative",
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
    "Comcast",
    "Youtube",
    "Stratechery",
    "Lemonade Insurance",
    "Godaddy",
    "Amazon Kindle",
    "Linkedin",
    "Blue Apron",
    "Kindle",
    "Apple One",
    "Apple",
  ];

  let thresholdDate = moment().subtract(31, "days").format("YYYY-MM-DD");
  let currentDate = moment().format("YYYY-MM-DD");

  var params = {
    TableName: "UserBankTransactions",
    IndexName: "userID-merchantName-index",
    KeyConditionExpression: "userID = :userid",
    ExpressionAttributeValues: {
      ":userid": req.body.userid,
    },
  };

  transactionDDB.query(params, async function (err, data) {
    if (err) {
      console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
      res.json({ statuscode: 400, message: "Query Error", description: err });
    } else {
      var finalList = [];
      console.log("Query succeeded.");
      // res.json({ message: "Query Success", data: data });
      data.Items.forEach(function (transactionItem) {
        if (
          transactionItem.merchantName !== "" &&
          transactionItem.merchantName !== null
        ) {
          serviceNameList.forEach(async (name) => {
            //check that the subscription service name is predefined
            if (transactionItem.merchantName.includes(name)) {
              //check that the date is within a month span
              if (
                transactionItem.date <= currentDate &&
                transactionItem.date >= thresholdDate
              ) {
                /**
                 * Problems with current method of extraction
                 * 1. annual subscriptions
                 * 2. multiple merchant name within past one month span (e.g. Lemonade Insurance)
                 * -> if multiple instance = not a subscription(?)
                 */
                if (
                  transactionItem.amount.includes(".99") ||
                  transactionItem.amount.includes(".95")
                ) {
                  finalList.push(transactionItem);

                  //write to the subscription service db
                  /**
                   * Changes Needed
                   * 1. full list of transactions under the merchantName --> sorted by Date to get (firstAddedDate and lastDate)
                   * 2. accountID attribute should be included from the indexing in dynamoDB
                   * 3. Need an archive to store (i) subscription service names (ii) service category
                   */
                  var subscriptionParams = {
                    TableName: subscriptionTable,
                    Item: {
                      id: transactionItem.id,
                      __typename: "SubscriptionServices",
                      userID: transactionItem.userID,
                      transactionID: transactionItem.id,
                      accountID: transactionItem.accountId,
                      name: transactionItem.merchantName,
                      cost: transactionItem.amount,
                      period: "monthly",
                      firstAddedDate: transactionItem.date,
                      lastDate: transactionItem.date,
                      category: ["hello", "there"],
                      source: "usercard",
                      createdAt: new Date().toISOString(),
                      updatedAt: new Date().toISOString(),
                    },
                  };

                  try {
                    const db_result = await subscriptionDDB
                      .put(subscriptionParams)
                      .promise();

                    console.log("Success service add: ", db_result);
                  } catch (err) {
                    console.log("Error", err);
                  }
                }
              }
            }
          });
        }
      });

      res.json({
        statuscode: 200,
        message: "Query Success",
        data: { list: finalList, count: finalList.length },
      });
    }
  });
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
