import React from "react";
import "../App.css";
import "../index.css";

import AppBar from "../components/Appbar4";
import Main from "../components/MainAccounts";
import BottomNavigation from "../components/BottomNavigation";

function Wallet(props) {
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
        <AppBar name={"Linked Accounts"} userData={props.userData} />
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
