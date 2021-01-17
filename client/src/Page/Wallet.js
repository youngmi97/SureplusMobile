import React from "react";

import "../App.css";
import "../index.css";

import AppBar from "../components/Appbar1";
import Main from "../components/MainWallet";
import BottomNavigation from "../components/BottomNavigation";

function Wallet() {
  const [value, setValue] = React.useState(0);
  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      {/* Wallet */}
      <div
        style={{
          width: "100%",
          height: "5.73vh",
          backgroundColor: "white",
          boxShadow: "0px 0.347222px 0.347222px rgba(196, 196, 196, 0.75)"
        }}
      >
        <AppBar name={"Wallet"} />
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
