import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Route } from "react-router-dom";
import Report from "./Page/Report";

//import { Toast } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

import { API, graphqlOperation } from "aws-amplify";
import { updateUser } from "./graphql/mutations";
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

import BottomNavigation from "./components/BottomNavigation";

import firebase from "./firebase";

import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

import { UserContext, AuthContext } from "./context/";
import { useLocation } from "react-router-dom";
import TermofService from "./Page/TermofService";

const AuthStateApp = (props) => {
  const { user, setUser } = useContext(UserContext);
  const { authState, setAuthState } = useContext(AuthContext);

  const location = useLocation();
  const path = location.pathname;
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

    const updateFirebaseToken = await API.graphql(
      graphqlOperation(updateUser, {
        input: {
          id: authData.attributes.sub,
          firebaseToken: firebaseTokenList,
        },
      })
    );
  }

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
      const messaging = firebase.messaging();
      messaging
        .getToken()
        .then((token) => {
          console.log("Token: ", token);
          updateFirebaseToken(authData, token);
        })
        .catch(() => {
          console.log("error occured");
        });

      new Promise((resolve) => {
        messaging.onMessage((payload) => {
          console.log("payload", payload);
          setShow(true);
          setNotification({
            title: payload.notification.title,
            body: payload.notification.body,
          });
          resolve(payload);
        });
      });
    });
  }, [user, authState]);

  return authState == AuthState.SignedIn && user ? (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      {/* <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        animation
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          minWidth: 200,
        }}
      >
        <Toast.Header>
          <img
            src="images/SureplusFavicon.png"
            className="rounded mr-2"
            style={{ width: "10px", height: "10px" }}
            alt=""
          />
          <strong className="mr-auto">{notification.title}</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{notification.body}</Toast.Body>
      </Toast> */}

      <div>
        <Route exact path="/" component={() => <Report />} />
        <Route exact path="/Profile" component={() => <Profile />} />
        <Route exact path="/Wallet" component={() => <Wallet />} />
        <Route exact path="/Allsubs" component={() => <AllSubscription />} />
        <Route exact path="/Accounts" component={() => <Accounts />} />
        <Route exact path="/Transaction" component={() => <Transaction />} />
        <Route exact path="/Notification" component={() => <Notification />} />
        <Route exact path="/Subscription" component={() => <Subscription />} />
        <Route
          exact
          path="/Subscription2"
          component={() => <Subscription2 />}
        />
        <Route exact path="/Crew" component={() => <Crew />} />
        <Route exact path="/Crew2" component={() => <Crew2 />} />
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
        <Route exact path="/UsePhone" component={() => <UsePhone />} />
        <Route exact path="/UsePhoneCode" component={() => <UsePhoneCode />} />
        <Route
          exact
          path="/Customersupport"
          component={() => <Customersupport />}
        />
        {/* <Route

							exact
							path="/Following"
							component={() => (
								<Following   client={props.client} />
							)}
						/>
						<Route
							exact
							path="/Followers"
							component={() => (
								<Followers   client={props.client} />
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
