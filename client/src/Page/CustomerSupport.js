import React from "react";

import "../App.css";
import AppBar from "../components/AppbarCustomer";
import Main from "../components/MainCustomerSupport";
import { useLocation } from "react-router-dom";

function Subscription(props) {
  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "5.72vh",
          backgroundColor: "white",
        }}
      >
        <AppBar name={"Ask us anything!"} link={"/"} />
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
