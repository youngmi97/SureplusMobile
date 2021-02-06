/*
Seunghyun Hwang

Page : "/TermofService"

link from "/"

main content of TermofService Page
   
*/

import React from "react";

import "../App.css";

function Main(props) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <iframe
        src="https://www.sureplus.io/terms-of-service"
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          height: "93vh",
          borderWidth: 0,
        }}
      ></iframe>
      <div style={{ backgroundColor: "white", height: "10vh" }}></div>
    </div>
  );
}

export default Main;
