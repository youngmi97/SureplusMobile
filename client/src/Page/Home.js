import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import AppBar from "../components/Appbar1";
import Main from "../components/MainHome";

const useStyles = makeStyles((theme) => ({}));

function Home() {
  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "12vh",
          backgroundColor: "white",
        }}
      >
        <AppBar name={"홈"} />
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

export default Home;
