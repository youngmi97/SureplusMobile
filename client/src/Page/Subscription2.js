import "../App.css";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import { API, graphqlOperation } from "aws-amplify";
import AppBar from "../components/Appbar3";
import Main from "../components/MainSubscribe2";
import gql from "graphql-tag";

import { serviceByUser } from "../graphql/queries";

import PullToRefresh from "react-simple-pull-to-refresh";
import Loading from "../components/Loading";

import BottomNavigation from "../components/BottomNavigation";

function Subscription(props) {
  const { user, setUser, subscriptions, setSubscriptions } = useContext(
    AuthContext
  );
  props.setValue(1);
  const onRefresh = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };
  const [data, setData] = React.useState([]);

  async function callServiceByUser() {
    const subscriptionData = await API.graphql({
      query: serviceByUser,
      variables: {
        userID: user.sub,
      },
    });
    setSubscriptions(subscriptionData.data.serviceByUser.items);
  }

  useEffect(() => {
    callServiceByUser();
  }, []);
  const [value, setValue] = React.useState(1);
  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "11.4vh",
          backgroundColor: "white",
        }}
      >
        <AppBar
          Text={"Subscriptions"}
          Tab1="List"
          Tab2="Calendar"
          Link="Subscription"
          state={1}
        />
      </div>
      <div>
        <PullToRefresh
          refreshingContent={
            <div style={{ height: "70px" }}>
              <Loading />
            </div>
          }
          pullingContent={<div></div>}
          canFetchMore={true}
          onRefresh={onRefresh}
        >
          <div
            style={{
              width: "100%",
              alignContent: "center",
            }}
          >
            <Main list={subscriptions} />
          </div>
        </PullToRefresh>
      </div>
    </div>
  );
}

export default Subscription;
