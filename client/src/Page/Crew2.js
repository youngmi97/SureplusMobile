import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import AppBar from "../components/Appbar3";
import Main from "../components/MainCrew2";
import BottomNavigation from "../components/BottomNavigation";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({}));

function Crew2() {
  const [value, setValue] = React.useState(2);
  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "11.4vh",
          backgroundColor: "white",
        }}
      >
        <AppBar
          Text={"Groups"}
          Tab1="Created"
          Tab2="Joined"
          Link={"Crew"}
          state={1}
        />
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

export default Crew2;
