import "./App.css";

import "./scss_ex.scss";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Report from "./Page/Report";

//import { Toast } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

import Subscription from "./Page/Subscription";
import Subscription2 from "./Page/Subscription2";
import Accounts from "./Page/Accounts";
import Transaction from "./Page/Transaction";
import Notification from "./Page/Notification";
// import Crew from "./Page/Crew";
// import Crew2 from "./Page/Crew2";
import Profile from "./Page/Profile";
import Onboarding from "./Page/Onboarding";
import UsePhone from "./Page/UsePhone";
import Wallet from "./Page/Wallet";
import UsePhoneCode from "./Page/UsePhoneCode";
import WalletActivity from "./Page/WalletActivity";
import OneSub from "./Page/OneSub";
import Customersupport from "./Page/CustomerSupport";
import AllSubscription from "./Page/Allsubscription";
import PrivacyPolicy from "./Page/PrivacyPolicy";

import BottomNavigation from "./components/BottomNavigation";
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
  AmplifySignIn,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

import { Link, useLocation } from "react-router-dom";
import TermofService from "./Page/TermofService";

const AuthStateApp = (props) => {
  const [user, setUser] = useState();
  const location = useLocation();
  const path = location.pathname;
  const [loading, setLoading] = useState(true);
  const [authState, setAuthState] = useState();
  const [value, setValue] = React.useState(0);
  // const [notification, setNotification] = useState({ title: "", body: "" });
  // const [show, setShow] = useState(false)

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <div>
        <Route
          exact
          path="/"
          component={() => (
            <Report
              param1={null}
              value={value}
              setValue={setValue}
              loading={loading}
              setLoading={setLoading}
              userData={user.attributes}
            />
          )}
        />
        <Route exact path="/Profile" component={() => <Profile />} />
        <Route exact path="/Wallet" component={() => <Wallet />} />
        <Route exact path="/Allsubs" component={() => <AllSubscription />} />
        <Route exact path="/Accounts" component={() => <Accounts />} />
        {/* <Route exact path="/Home" component={Home} /> */}
        <Route exact path="/Transaction" component={() => <Transaction />} />
        <Route
          exact
          path="/Notification"
          component={() => <Notification value={value} setValue={setValue} />}
        />
        <Route
          exact
          path="/Subscription"
          component={() => <Subscription value={value} setValue={setValue} />}
        />
        <Route
          exact
          path="/Subscription2"
          component={() => <Subscription2 value={value} setValue={setValue} />}
        />
        <Route exact path="/OneSub" component={() => <OneSub />} />
        <Route
          exact
          path="/WalletActivity"
          component={() => <WalletActivity />}
        />
        <Route exact path="/Onboarding" component={() => <Onboarding />} />
        <Route
          exact
          path="/TermofService"
          component={() => <TermofService />}
        />
        <Route
          exact
          path="/PrivacyPolicy"
          component={() => <PrivacyPolicy />}
        />
        <Route exact path="/UsePhone" component={() => <UsePhone />} />
        <Route exact path="/UsePhoneCode" component={() => <UsePhoneCode />} />
        <Route
          exact
          path="/Customersupport"
          component={() => <Customersupport />}
        />

        {(() => {
          if (
            ((path == "/") |
              (path == "/Subscription") |
              (path == "/Subscription2") |
              (path == "/Notification")) &
            (loading == false)
          ) {
            return <BottomNavigation value={value} setValue={setValue} />;
          }
        })()}
        <AmplifySignOut />
      </div>
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
