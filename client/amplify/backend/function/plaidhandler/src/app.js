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
const dynamodb = new AWS.DynamoDB.DocumentClient();

let tableName = "UserBankTransactions";
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

//Enable CORS for all methods
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT"
//   );
//   next();
// });

// app.use(function (request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.get("/api/info", function (req, res) {
  res.send({
    application: process.env.PLAID_CLIENT_ID,
    version: "1",
  });
});

/****************************
 * Plaid Token Exchnage and Transaction Save *
 ****************************/

const client = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET,
  env: plaid.environments.sandbox,
});

var PUBLIC_TOKEN = null;
var ACCESS_TOKEN = null;
var ITEM_ID = null;

app.post("/plaid", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.post("/plaid/*", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
