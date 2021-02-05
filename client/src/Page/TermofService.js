/*
Seunghyun Hwang

Page : "/TermofService"

link from "/"
   

*/

import React from "react";

import "../App.css";

import AppBar from "../components/AppbarTran";
import Main from "../components/MainTermofService";

function TermofService() {
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
          maxHeight: "5.72vh",
          backgroundColor: "white",
        }}
      >
        <AppBar name={"Term of Service"} link={"/"} />
      </div>
      <div
        style={{
          width: "100%",
          maxHeight: "94.28vh",

          alignContent: "center",
        }}
      >
        <Main />
      </div>
    </div>
  );
}

export default TermofService;
