import "./App.css";


import "./scss_ex.scss";
import React, { useEffect, useState, useContext } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Report from "./Page/Report";

//import { Toast } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

import { API, graphqlOperation } from "aws-amplify";
import { UpdateUserNotification, updateUser } from "./graphql/mutations";
import { getUser } from "./graphql/queries";

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
import AllSubscription from "./Page/Allsubscription";
import PrivacyPolicy from "./Page/PrivacyPolicy";

import BottomNavigation from "./components/BottomNavigation";

// import firebase from "./firebase";

import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
  AmplifySignIn,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

import { AuthProvider, AuthContext } from "./context/auth";
import { Link, useLocation } from "react-router-dom";
import TermofService from "./Page/TermofService";

const AuthStateApp = (props) => {
  const [user, setUser] = useState();
  const location = useLocation();
  const path = location.pathname;
  const [authState, setAuthState] = useState();
  const [value, setValue] = React.useState(0);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [show, setShow] = useState(false);

  async function updateFirebaseToken(authData, token) {
    //getUser
    const existingUser = await API.graphql({
      query: getUser,
      variables: {
        id: authData.attributes.sub,
      },
    });

    let firebaseTokenList = existingUser.data.getUser.firebaseToken;
    if (!firebaseTokenList.includes(token)) {
      firebaseTokenList.push(token);
    }

    const updateNotificationToken = await API.graphql(
      graphqlOperation(updateUser, {
        input: {
          id: authData.attributes.sub,
          firebaseToken: firebaseTokenList,
        },
      })
    );
  }

  useEffect(() => {
    // const messaging = firebase.messaging();

    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);

      //check firebase.messaging.isSupported();

      // messaging
      //   .getToken()
      //   .then((token) => {
      //     console.log("Token: ", token);
      //     updateFirebaseToken(authData, token);
      //   })
      //   .catch(() => {
      //     console.log("error occured");
      //   });
    });

    // new Promise((resolve) => {
    //   messaging.onMessage((payload) => {
    //     console.log("payload", payload);
    //     setShow(true);
    //     setNotification({
    //       title: payload.notification.title,
    //       body: payload.notification.body,
    //     });
    //     resolve(payload);
    //   });
  }, []);

  return authState == AuthState.SignedIn && user ? (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <div>
        <Route
          exact
          path="/"
          component={() => <Report userData={user.attributes} param1={null} />}
        />
        <Route
          exact
          path="/Profile"
          component={() => <Profile userData={user.attributes} />}
        />
        <Route
          exact
          path="/Wallet"
          component={() => <Wallet userData={user.attributes} />}
        />
        <Route
          exact
          path="/Allsubs"
          component={() => <AllSubscription userData={user.attributes} />}
        />
        <Route
          exact
          path="/Accounts"
          component={() => <Accounts userData={user.attributes} />}
        />
        {/* <Route exact path="/Home" component={Home} /> */}
        <Route
          exact
          path="/Transaction"
          component={() => <Transaction userData={user.attributes} />}
        />
        <Route
          exact
          path="/Notification"
          component={() => <Notification userData={user.attributes} />}
        />
        <Route
          exact
          path="/Subscription"
          component={() => <Subscription userData={user.attributes} />}
        />
        <Route
          exact
          path="/Subscription2"
          component={() => <Subscription2 userData={user.attributes} />}
        />
        <Route
          exact
          path="/Crew"
          component={() => <Crew userData={user.attributes} />}
        />
        <Route
          exact
          path="/Crew2"
          component={() => <Crew2 userData={user.attributes} />}
        />
        <Route
          exact
          path="/OneSub"
          component={() => <OneSub userData={user.attributes} />}
        />
        <Route
          exact
          path="/WalletActivity"
          component={() => <WalletActivity userData={user.attributes} />}
        />
        <Route
          exact
          path="/Onboarding"
          component={() => <Onboarding userData={user.attributes} />}
        />
        <Route
          exact
          path="/TermofService"
          component={() => <TermofService userData={user.attributes} />}
        />
        <Route
          exact
          path="/UsePhone"
          component={() => <UsePhone userData={user.attributes} />}
        />
        <Route
          exact
          path="/UsePhoneCode"
          component={() => <UsePhoneCode userData={user.attributes} />}
        />
        <Route
          exact
          path="/Customersupport"
          component={() => <Customersupport userData={user.attributes} />}
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
        {(() => {
          if (
            (path == "/") |
            (path == "/Subscription") |
            (path == "/Subscription2") |
            (path == "/Crew") |
            (path == "/Crew2")
          ) {
            return <BottomNavigation value={value} setValue={setValue} />;
          }
        })()}
        {/* <AmplifySignOut /> */}
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
