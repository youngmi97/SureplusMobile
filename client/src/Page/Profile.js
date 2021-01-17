import React from "react";

import "../App.css";

import AppBar from "../components/AppbarProfile";
import Main from "../components/MainProfile";
import BottomNavigation from "../components/BottomNavigation";

function Wallet() {
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
        <AppBar />
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
