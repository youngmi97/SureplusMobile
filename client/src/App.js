import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Report from "./Page/Report";

import Subscription from "./Page/Subscription";
import Subscription2 from "./Page/Subscription2";
import Accounts from "./Page/Accounts";
import Transaction from "./Page/Transaction";
import Notification from "./Page/Notification";
import Crew from "./Page/Crew";
import Crew2 from "./Page/Crew2";
import Profile from "./Page/Profile";
import Onboarding from "./Page/Onboarding";
import UsePhone from "./Page/UsePhone";
import Wallet from "./Page/Wallet";
import UsePhoneCode from "./Page/UsePhoneCode";
import WalletActivity from "./Page/WalletActivity";
import OneSub from "./Page/OneSub";
import Customersupport from "./Page/CustomerSupport";

import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
  AmplifySignIn,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

import { AuthProvider } from "./context/auth";

const AuthStateApp = (props) => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  //const context = useContext(AuthContext)
  //prompt users to download pwa
  //console.log("App", props.client);

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, [user, authState]);

  return authState == AuthState.SignedIn && user ? (
    <AuthProvider>
      <div className="App">
        <Router>
          <div>
            <Route
              exact
              path="/"
              component={() => (
                <Report
                  userData={user.attributes}
                  client={props.client}
                  param1={null}
                />
              )}
            />
            <Route
              exact
              path="/Profile"
              component={() => (
                <Profile userData={user.attributes} client={props.client} />
              )}
            />
            <Route
              exact
              path="/Wallet"
              component={() => (
                <Wallet userData={user.attributes} client={props.client} />
              )}
            />
            <Route
              exact
              path="/Accounts"
              component={() => (
                <Accounts userData={user.attributes} client={props.client} />
              )}
            />
            {/* <Route exact path="/Home" component={Home} /> */}
            <Route
              exact
              path="/Transaction"
              component={() => (
                <Transaction userData={user.attributes} client={props.client} />
              )}
            />
            <Route
              exact
              path="/Notification"
              component={() => (
                <Notification
                  userData={user.attributes}
                  client={props.client}
                />
              )}
            />
            <Route
              exact
              path="/Subscription"
              component={() => (
                <Subscription
                  userData={user.attributes}
                  client={props.client}
                />
              )}
            />
            <Route
              exact
              path="/Subscription2"
              component={() => (
                <Subscription2
                  userData={user.attributes}
                  client={props.client}
                />
              )}
            />
            <Route
              exact
              path="/Crew"
              component={() => (
                <Crew userData={user.attributes} client={props.client} />
              )}
            />
            <Route
              exact
              path="/Crew2"
              component={() => (
                <Crew2 userData={user.attributes} client={props.client} />
              )}
            />
            <Route
              exact
              path="/OneSub"
              component={() => (
                <OneSub userData={user.attributes} client={props.client} />
              )}
            />
            <Route
              exact
              path="/WalletActivity"
              component={() => (
                <WalletActivity
                  userData={user.attributes}
                  client={props.client}
                />
              )}
            />
            <Route
              exact
              path="/Onboarding"
              component={() => (
                <Onboarding userData={user.attributes} client={props.client} />
              )}
            />
            <Route
              exact
              path="/UsePhone"
              component={() => (
                <UsePhone userData={user.attributes} client={props.client} />
              )}
            />
            <Route
              exact
              path="/UsePhoneCode"
              component={() => (
                <UsePhoneCode
                  userData={user.attributes}
                  client={props.client}
                />
              )}
            />
            <Route
              exact
              path="/Customersupport"
              component={() => (
                <Customersupport
                  userData={user.attributes}
                  client={props.client}
                />
              )}
            />
            {/* <Route
							exact
							path="/Following"
							component={() => (
								<Following userData={user.attributes} client={props.client} />
							)}
						/>
						<Route
							exact
							path="/Followers"
							component={() => (
								<Followers userData={user.attributes} client={props.client} />
							)}
						/> */}
            {/* Component with no routes are sent to signout prompt */}
            {/* <AmplifySignOut /> */}
          </div>
        </Router>
      </div>
    </AuthProvider>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="phone_number"
        formFields={[
          {
            type: "name",
            label: "Name",
            placeholder: "Name",
            required: true,
          },

          {
            type: "password",
            label: "Custom Password Label",
            placeholder: "custom password placeholder",
            required: true,
          },

          {
            type: "phone_number",
            label: "Custom Phone Label",
            placeholder: "custom Phone placeholder",
            required: false,
          },
        ]}
      />
      <AmplifySignIn slot="sign-in" usernameAlias="phone_number" />
    </AmplifyAuthenticator>
  );
};

export default AuthStateApp;
