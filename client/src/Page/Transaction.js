import React from "react";

import "../App.css";

import AppBar from "../components/AppbarTran";
import Main from "../components/MainTransactions";
import BottomNavigation from "../components/BottomNavigation";

function Wallet() {
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
        <AppBar name={"Transactions"} link={"/Wallet"} />
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
