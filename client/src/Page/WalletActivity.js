import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import { API, graphqlOperation } from "aws-amplify";
import "../App.css";

import gql from "graphql-tag";

import { serviceByUser } from "../graphql/queries";

import AppBar from "../components/AppbarTran";
import Main from "../components/MainTransactions";
import BottomNavigation from "../components/BottomNavigation";

function Wallet(props) {
  const { subscriptions, setSubscriptions } = useContext(AuthContext);
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState(0);

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

  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "5.72vh",
          backgroundColor: "white",
          boxShadow: "0px 0.347222px 0.347222px rgba(196, 196, 196, 0.75)",
        }}
      >
        <AppBar name={"Wallet Activity"} link={"/"} />
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
