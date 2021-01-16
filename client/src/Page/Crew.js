import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import AppBar from "../components/Appbar3";
import Main from "../components/MainCrew";
import BottomNavigation from "../components/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({}));

function Crew() {
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
          state={0}
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

export default Crew;
