import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import { API, graphqlOperation } from "aws-amplify";

import "../App.css";
import AppBar from "../components/Appbar3";
import Main from "../components/MainSubscribe";

import gql from "graphql-tag";

import { serviceByUser } from "../graphql/queries";
import PullToRefresh from "react-simple-pull-to-refresh";

import BottomNavigation from "../components/BottomNavigation";
import Loading from "../components/Loading";

function Subscription(props) {
  const { subscriptions, setSubscriptions } = useContext(AuthContext);
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
        userID: props.userData.sub,
      },
    });
    setSubscriptions(subscriptionData.data.serviceByUser.items);
  }

  useEffect(() => {
    callServiceByUser();
  }, []);
  const [value, setValue] = React.useState(1);
  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",

        height: "100vh",
      }}
    >
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
          state={0}
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
