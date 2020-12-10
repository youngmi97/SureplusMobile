import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import AppBar from "../components/Appbar2";
import Main from "../components/MainSubscribe";

const useStyles = makeStyles((theme) => ({}));

function Subscription() {
  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "19.7vh",
          backgroundColor: "white",
        }}
      >
        <AppBar Text={"내 구독"} Tab1="전체 보기" Tab2="간편 관리" />
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

export default Subscription;
