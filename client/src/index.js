import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider, AuthContext } from "./context/auth";

//import gql from "graphql-tag";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import AppSyncConfig from "./aws-exports";
//import { GetServicePlaid } from "./graphql/queries";
import Amplify, { Auth } from "aws-amplify";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import { Rehydrated } from "aws-appsync-react";
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

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Avenir Next", serif',
  },
});

ReactDOM.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <div style={{ paddingTop: 10 }}>
          <Router>
            <App />
          </Router>
        </div>
      </MuiThemeProvider>
    </ApolloProvider>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
