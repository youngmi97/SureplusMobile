import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";

import AppBar from "../components/Appbar1";
import Main from "../components/MainWallet";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Typography from "@material-ui/core/Typography";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({}));

function Wallet() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "5.72vh",
          backgroundColor: "white",
        }}
      >
        <AppBar name={"내 지갑"} />
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

export default Wallet;
