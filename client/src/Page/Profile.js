import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import { API, graphqlOperation } from "aws-amplify";

import "../App.css";

import gql from "graphql-tag";
import { serviceByUser } from "../graphql/queries";
import AppBar from "../components/AppbarProfile";
import Main from "../components/MainProfile";
import BottomNavigation from "../components/BottomNavigation";

function Wallet(props) {
  const { subscriptions, setSubscriptions } = useContext(AuthContext);

  async function callServiceByUser() {
    const subscriptionData = await API.graphql({
      query: serviceByUser,
      variables: {
        userID: props.userData.sub,
      },
    });
    setSubscriptions(subscriptionData.data.serviceByUser.items);
  }

  useEffect(() => {
    callServiceByUser();
  }, []);

  const [value, setValue] = React.useState(0);
  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "25vh",
          backgroundColor: "white",
        }}
      >
        <AppBar name={props.userData.name} />
      </div>
      <div
        style={{
          width: "100%",
          alignContent: "center",
        }}
      >
        <Main list={subscriptions} />
      </div>
      <BottomNavigation value={value} setValue={setValue} />
    </div>
  );
}

export default Wallet;
