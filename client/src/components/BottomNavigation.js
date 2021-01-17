import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Box from "@material-ui/core/Box";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import "../App.css";

export default function BottomNav(props) {
  const value = props.value;
  const setValue = props.setValue;

  return (
    <div style={{ width: "100%" }}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100vw",
          height: "9.11vh",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          paddingBottom: "24px",
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
                icon={
                  <img
                    style={{ width: "3.92vh", height: "3.92vh" }}
                    src="Property 1=Home.svg"
                  ></img>
                }
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
                icon={
                  <img
                    style={{ width: "3.92vh", height: "3.92vh" }}
                    src="Property 1=Home.svg"
                  ></img>
                }
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
                icon={
                  <img
                    style={{ width: "3.92vh", height: "3.92vh" }}
                    src="Property 1=Subscriptions.svg"
                  ></img>
                }
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
                icon={
                  <img
                    style={{ width: "3.92vh", height: "3.92vh" }}
                    src="Property 1=Subscriptions.svg"
                  ></img>
                }
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
                    Groups
                  </Typography>
                }
                style={{ margin: 0, padding: 0, minWidth: "auto" }}
                icon={
                  <img
                    style={{ width: "3.92vh", height: "3.92vh" }}
                    src="Property 1=Group.svg"
                  ></img>
                }
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
                    Groups
                  </Typography>
                }
                style={{
                  margin: 0,
                  padding: 0,
                  minWidth: "auto",
                  opacity: 0.3,
                }}
                icon={
                  <img
                    style={{ width: "3.92vh", height: "3.92vh" }}
                    src="Property 1=Group.svg"
                  ></img>
                }
              />
            );
          }
        })()}
      </BottomNavigation>
    </div>
  );
}