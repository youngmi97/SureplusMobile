import React from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";

import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import "../App.css";

export default function BottomNav(props) {
  const value = props.value;
  const setValue = props.setValue;
  const home = (
    <img
      alt="name"
      style={{ width: "3.92vh", height: "3.92vh" }}
      src="Property 1=Home.svg"
    ></img>
  );
  const subscription = (
    <img
      alt="name"
      style={{ width: "3.92vh", height: "3.92vh" }}
      src="Property 1=Subscriptions.svg"
    ></img>
  );
  const tab = (
    <img
      alt="name"
      style={{ width: "3.92vh", height: "3.92vh" }}
      src="Property 1=Tab.svg"
    ></img>
  );

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "9.5vh",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        "& .MuiBottomNavigationAction-root": {
          "@media (max-width: 768px)": {
            minWidth: "auto",
            padding: "0px",
          },
        },
        boxShadow: "0px -4px 15px rgba(0, 0, 0, 0.08)",
      }}
    >
      {(() => {
        if (value == 0) {
          return (
            <BottomNavigationAction
              component={Link}
              showLabel={true}
              to="/"
              label={
                <Typography style={{ color: "black", fontSize: 12 }}>
                  Home
                </Typography>
              }
              style={{ margin: 0, padding: 0, minWidth: "auto" }}
              icon={home}
            />
          );
        } else {
          return (
            <BottomNavigationAction
              component={Link}
              showLabel={true}
              to="/"
              label={
                <Typography style={{ color: "black", fontSize: 12 }}>
                  Home
                </Typography>
              }
              style={{
                margin: 0,
                padding: 0,
                minWidth: "auto",
                opacity: 0.3,
              }}
              icon={home}
            />
          );
        }
      })()}
      {(() => {
        if (value == 1) {
          return (
            <BottomNavigationAction
              component={Link}
              to="/Subscription"
              showLabel={true}
              label={
                <Typography style={{ color: "black", fontSize: 12 }}>
                  Subscriptions
                </Typography>
              }
              style={{ margin: 0, padding: 0, minWidth: "auto" }}
              icon={subscription}
            />
          );
        } else {
          return (
            <BottomNavigationAction
              component={Link}
              to="/Subscription"
              showLabel={true}
              label={
                <Typography style={{ color: "black", fontSize: 12 }}>
                  Subscriptions
                </Typography>
              }
              style={{
                margin: 0,
                padding: 0,
                minWidth: "auto",
                opacity: 0.3,
              }}
              icon={subscription}
            />
          );
        }
      })()}
      {(() => {
        if (value == 2) {
          return (
            <BottomNavigationAction
              component={Link}
              to="/Crew"
              showLabel={true}
              label={
                <Typography style={{ color: "black", fontSize: 12 }}>
                  Notifications
                </Typography>
              }
              style={{ margin: 0, padding: 0, minWidth: "auto" }}
              icon={tab}
            />
          );
        } else {
          return (
            <BottomNavigationAction
              component={Link}
              to="/Crew"
              showLabel={true}
              label={
                <Typography style={{ color: "black", fontSize: 12 }}>
                  Notifications
                </Typography>
              }
              style={{
                margin: 0,
                padding: 0,
                minWidth: "auto",
                opacity: 0.3,
              }}
              icon={tab}
            />
          );
        }
      })()}
    </BottomNavigation>
  );
}
