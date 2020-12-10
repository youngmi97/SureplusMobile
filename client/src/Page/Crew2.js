import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import AppBar from "../components/Appbar2";
import Main from "../components/MainCrew2";

const useStyles = makeStyles((theme) => ({}));

function Crew2() {
  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "19.7vh",
          backgroundColor: "white",
        }}
      >
        <AppBar Text={"내 크루"} Tab1="리더" Tab2="크루원" state={1} />
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

export default Crew2;
