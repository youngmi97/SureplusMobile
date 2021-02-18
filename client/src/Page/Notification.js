import React, { useContext, useEffect } from "react";

import "../App.css";

import { AuthContext } from "../context/auth";
import { notificationsByUser, getUser } from "../graphql/queries";
import { API } from "aws-amplify";
import AppBar from "../components/AppbarTran";
import Main from "../components/MainNotification";
import BottomNavigation from "../components/BottomNavigation";
import { set, get } from "idb-keyval";

function Wallet(props) {
  const {
    user,
    setUser,
    subscriptions,
    setSubscriptions,
    link,
    setLink,
  } = useContext(AuthContext);
  const [readlist, setReadlist] = React.useState([]);

  const [notificationData, setNotificationData] = React.useState([]);

  const check_empty = (str) => {
    if (str == "") {
      setLink(true);
    }
  };

  async function callgetUser() {
    const linkData = await API.graphql({
      query: getUser,
      variables: {
        id: user.sub,
      },
    });
    console.log("data", linkData);
    check_empty(linkData.data.getUser.plaidToken);
  }
  async function callnotificationsByUser() {
    const notification = await API.graphql({
      query: notificationsByUser,
      variables: {
        userID: user.sub,
      },
    });
    console.log(notification);
    set("list", notification.data.NotificationsByUser.items)
      .then(() => {
        console.log();
      })
      .catch((err) => console.log("It failed!", err));
    setNotificationData(notification.data.NotificationsByUser.items.reverse());
  }

  useEffect(() => {
    get("list").then((val) => {
      console.log(val);
      setReadlist(val);
    });
    callgetUser();
    callnotificationsByUser();

    // if (li == []) {
    //   console.log(readllist);
    //   set("list", readllist)
    //     .then(() => {
    //       console.log();
    //     })
    //     .catch((err) => console.log("It failed!", err));
    // } else {
    //   console.log(li);

    // }
  }, []);

  props.setValue(2);
  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "5.72vh",
          backgroundColor: "white",
        }}
      >
        <AppBar name={"Notification"} link={"/"} back={false} />
      </div>
      <div
        style={{
          width: "100%",
          alignContent: "center",
        }}
      >
        <Main
          empty={link}
          data={notificationData}
          readlist={readlist}
          setReadlist={setReadlist}
        />
      </div>
    </div>
  );
}

export default Wallet;
