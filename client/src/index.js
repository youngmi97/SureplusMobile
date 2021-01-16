import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import gql from "graphql-tag";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import AppSyncConfig from "./aws-exports";
import { listPosts } from "./graphql/queries";
import Amplify, { Auth } from "aws-amplify";
import { ApolloProvider } from "react-apollo";

//import { withAuthenticator } from 'aws-amplify-react';
Amplify.configure(AppSyncConfig);

const client = new AWSAppSyncClient({
	url: AppSyncConfig.aws_appsync_graphqlEndpoint,
	region: AppSyncConfig.aws_appsync_region,
	auth: {
		type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
		jwtToken: async () =>
			(await Auth.currentSession()).getIdToken().getJwtToken(),
	},
});

try {
	client
		.query({
			query: gql(listPosts),
		})
		.then(({ data }) => {
			console.log("demoData", data);
		});
} catch (e) {
	console.log("query error", e);
}

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
