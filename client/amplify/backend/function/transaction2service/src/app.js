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

/*********************************
 * Subscription Service Extractor *
 * save services from transaction records
 ********************************/
app.post("/extract/subscription", function (req, res) {
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
    "Comcast",
  ];

  const testServiceNameList = ["KFC"];

  var params = {
    TableName: "UserBankTransactions",
    ProjectionExpression: "#user, transactionName",
    FilterExpression: "#user = :userid",
    ExpressionAttributeNames: {
      "#user": "userID",
    },
    ExpressionAttributeValues: {
      ":userid": "abcc5b49-bca5-49fa-ac91-079269e9168d",
    },
  };

  transactionDDB.scan(params, onScan);

  //recursive scan
  function onScan(err, data) {
    if (err) {
      res.json({ fail: "scan fail!" });
    } else {
      // print all the movies
      console.log("Scan succeeded.");
      data.Items.forEach(function (transaction) {
        console.log("transaction", transaction);
      });

      // continue scanning if we have more movies, because
      // scan can retrieve a maximum of 1MB of data
      if (typeof data.LastEvaluatedKey != "undefined") {
        console.log("Scanning for more...");
        params.ExclusiveStartKey = data.LastEvaluatedKey;
        transactionDDB.scan(params, onScan);
      } else {
        res.json({ data: data });
      }
    }
  }
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
