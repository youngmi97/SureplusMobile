import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

import "../App.css";
import AppBar from "../components/AppbarOneSub";
import Main from "../components/MainOneSub";
import { Link, useLocation } from "react-router-dom";
function Subscription(props) {
  const { setOnesub, onesub, backlink, setBacklink } = useContext(AuthContext);
  const location = useLocation();

  const li = location.list;
  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "5.72vh",
          backgroundColor: "white",
        }}
      >
        <AppBar name={onesub.name} link={backlink} />
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
