import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Box, Typography, Tabs, Tab } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AddSubscription from "./Add";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../App.css";

function ToolBar(props) {
  const useStyles = makeStyles((theme) => ({}));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const StyledTabs = withStyles({
    root: {
      minHeight: "auto",
      padding: 0,
      margin: 0,
    },
    indicator: {
      display: "flex",
      padding: 0,
      justifyContent: "center",
      backgroundColor: "transparent",
      bottom: 0,
      "& > span": {
        width: "90%",
        backgroundColor: "black",
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

  const StyledTab = withStyles((theme) => ({
    root: {
      minHeight: "auto",
      minWidth: "auto",
      textTransform: "none",
      color: "#000000",
      fontWeight: 500,
      fontSize: "2.08vh",
      margin: 0,
      padding: 2,
      opacity: 0.2,
      "&:focus": {
        opacity: 1,
      },
    },
  }))((props) => <Tab disableRipple {...props} />);
  const value = props.value;
  const setValue = props.setValue;
  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        p={1}
        alignItems="center"
        style={{ margin: 0, padding: 0, height: "5.72vh" }}
      >
        {(() => {
          if (value == 0) {
            return (
              <Box
                p={1}
                style={{ margin: 0, padding: 0, marginLeft: "2.13vw" }}
              >
                <Button
                  onClick={() => setValue(0)}
                  style={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "18px",
                    textTransform: "none",
                    backgroundColor: "#7610EB",
                  }}
                >
                  <Typography
                    style={{
                      margin: 0,
                      padding: 0,
                      color: "white",
                      fontSize: "15px",
                      fontFamily: "Avenir Next",
                      fontWeight: 600,
                      height: 20,
                    }}
                  >
                    Report
                  </Typography>
                </Button>
              </Box>
            );
          } else {
            return (
              <Box
                p={1}
                style={{ margin: 0, padding: 0, marginLeft: "2.13vw" }}
              >
                <Button
                  onClick={() => setValue(0)}
                  style={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "18px",
                    textTransform: "none",
                  }}
                >
                  <Typography
                    style={{
                      margin: 0,
                      padding: 0,
                      color: "#666666",
                      fontSize: "15px",
                      fontFamily: "Avenir Next",
                      fontWeight: 600,
                      height: 20,
                    }}
                  >
                    Report
                  </Typography>
                </Button>
              </Box>
            );
          }
        })()}
        {(() => {
          if (value == 1) {
            return (
              <Box p={1} style={{ margin: 0, padding: 0, marginLeft: "5px" }}>
                <Button
                  onClick={() => setValue(1)}
                  style={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "18px",
                    textTransform: "none",
                    backgroundColor: "#7610EB",
                  }}
                >
                  <Typography
                    style={{
                      margin: 0,
                      padding: 0,
                      color: "white",
                      fontSize: "15px",
                      fontFamily: "Avenir Next",
                      fontWeight: 600,
                      height: 20,
                    }}
                  >
                    Wallet
                  </Typography>
                </Button>
              </Box>
            );
          } else {
            return (
              <Box p={1} style={{ margin: 0, padding: 0, marginLeft: "5px" }}>
                <Button
                  onClick={() => setValue(1)}
                  style={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "18px",
                    textTransform: "none",
                  }}
                >
                  <Typography
                    style={{
                      margin: 0,
                      padding: 0,
                      color: "#666666",
                      fontSize: "15px",
                      fontFamily: "Avenir Next",
                      fontWeight: 600,
                      height: 20,
                    }}
                  >
                    Wallet
                  </Typography>
                </Button>
              </Box>
            );
          }
        })()}
        {(() => {
          if (value == 2) {
            return (
              <Box p={1} style={{ margin: 0, padding: 0, marginLeft: "5px" }}>
                <Button
                  onClick={() => setValue(2)}
                  style={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "18px",
                    textTransform: "none",
                    backgroundColor: "#7610EB",
                  }}
                >
                  <Typography
                    style={{
                      margin: 0,
                      padding: 0,
                      color: "white",
                      fontSize: "15px",
                      fontFamily: "Avenir Next",
                      fontWeight: 600,
                      height: 20,
                    }}
                  >
                    For You
                  </Typography>
                </Button>
              </Box>
            );
          } else {
            return (
              <Box p={1} style={{ margin: 0, padding: 0, marginLeft: "5px" }}>
                <Button
                  onClick={() => setValue(2)}
                  style={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "18px",
                    textTransform: "none",
                  }}
                >
                  <Typography
                    style={{
                      margin: 0,
                      padding: 0,
                      color: "#666666",
                      fontSize: "15px",
                      fontFamily: "Avenir Next",
                      fontWeight: 600,
                      height: 20,
                    }}
                  >
                    For You
                  </Typography>
                </Button>
              </Box>
            );
          }
        })()}
      </Box>
    </div>
  );
}

export default ToolBar;
