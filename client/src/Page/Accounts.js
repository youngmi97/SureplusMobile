import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import "../App.css";
import "../index.css";

import AppBar from "../components/Appbar4";
import Main from "../components/MainAccounts";
import BottomNavigation from "../components/BottomNavigation";

function Wallet(props) {
  const { user, setUser, subscriptions, setSubscriptions } = useContext(
    AuthContext
  );
  const [value, setValue] = React.useState(0);
  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "5.72vh",
          backgroundColor: "white",
        }}
      >
        <AppBar name={"Linked Accounts"} userData={user} />
      </div>
      <div
        style={{
          width: "100%",
          alignContent: "center",
        }}
      >
        <Main />
      </div>
      <BottomNavigation value={value} setValue={setValue} />
    </div>
  );
}

export default Wallet;
