import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import AppBar from "../components/Appbar3";
import Main from "../components/MainCrew2";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
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
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100vw",
          height: "10vh",
          "& .MuiBottomNavigationAction-root": {
            "@media (max-width: 768px)": {
              minWidth: "auto",
              padding: "0px",
            },
          },
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label={<Typography style={{ color: "black" }}>Home</Typography>}
          style={{ margin: 0, padding: 0, minWidth: "auto" }}
          icon={
            <img
              style={{ width: "3.92vh", height: "3.92vh" }}
              src="Property 1=Home.svg"
            ></img>
          }
        />
        <BottomNavigationAction
          component={Link}
          to="/Subscription"
          label={
            <Typography style={{ color: "black" }}>Subscriptions</Typography>
          }
          style={{ margin: 0, padding: 0, minWidth: "auto" }}
          icon={
            <img
              style={{ width: "3.92vh", height: "3.92vh" }}
              src="Property 1=Subscriptions.svg"
            ></img>
          }
        />
        <BottomNavigationAction
          component={Link}
          to="/Crew"
          label={<Typography style={{ color: "black" }}>Groups</Typography>}
          style={{ margin: 0, padding: 0, minWidth: "auto" }}
          icon={
            <img
              style={{ width: "3.92vh", height: "3.92vh" }}
              src="Property 1=Group.svg"
            ></img>
          }
        />
      </BottomNavigation>
    </div>
  );
}

export default Crew2;
