import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import AppBar from "../components/Appbar1";
import Main from "../components/MainWallet";

const useStyles = makeStyles((theme) => ({}));

function Wallet() {
  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "12vh",
          backgroundColor: "white",
        }}
      >
        <AppBar name={"내 지갑"} />
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
