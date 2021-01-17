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
import Following from "./Page/Following";
import Followers from "./Page/Followers";

import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
  AmplifySignIn,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

const AuthStateApp = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  //prompt users to download pwa

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState == AuthState.SignedIn && user ? (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Report} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Wallet" component={Wallet} />
          <Route exact path="/Accounts" component={Accounts} />
          {/* <Route exact path="/Home" component={Home} /> */}
          <Route exact path="/Transaction" component={Transaction} />
          <Route exact path="/Notification" component={Notification} />
          <Route exact path="/Subscription" component={Subscription} />
          <Route exact path="/Subscription2" component={Subscription2} />
          <Route exact path="/Crew" component={Crew} />
          <Route exact path="/Crew2" component={Crew2} />
          <Route exact path="/Onboarding" component={Onboarding} />
          <Route exact path="/UsePhone" component={UsePhone} />
          <Route exact path="/UsePhoneCode" component={UsePhoneCode} />
          <Route exact path="/Following" component={Following} />
          <Route exact path="/Followers" component={Followers} />
          {/* Component with no routes are sent to signout prompt */}
          <AmplifySignOut />
        </div>
      </Router>
    </div>
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
