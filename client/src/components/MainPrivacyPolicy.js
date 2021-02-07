/*
Seunghyun Hwang

Page : "/TermofService"

link from "/"

main content of TermofService Page
   
*/

import React from "react";

import "../App.css";
import { Typography } from "@material-ui/core";

function Main(props) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <iframe
        src="https://www.sureplus.io/privacy-policy"
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          height: "93vh",
          borderWidth: 0,
        }}
      ></iframe>
    </div>
  );
}

export default Main;
