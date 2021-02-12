import React from "react";

import "../App.css";

import AppBar from "../components/AppbarTran";
import Main from "../components/MainNotification";
import BottomNavigation from "../components/BottomNavigation";

function Wallet(props) {
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
        <Main />
      </div>
    </div>
  );
}

export default Wallet;
