import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Box, Typography, Tabs, Tab } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../App.css";

function Appbar2(props) {
  const useStyles = makeStyles((theme) => ({}));
  const [value, setValue] = React.useState(0);

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
      fontWeight: 600,
      fontSize: "1.97vh",
      margin: 0,
      padding: 0,
      opacity: 0.2,
      "&:focus": {
        opacity: 1,
      },
    },
  }))((props) => <Tab disableRipple {...props} />);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ minHeight: "5.788vh" }}></div>
      <Box display="flex" p={1} style={{ margin: 0, padding: 0 }}>
        <Box p={1} flexGrow={1} style={{ margin: 0, padding: 0 }}></Box>
        <Box p={1} style={{ margin: 0, padding: 0 }}>
          <div style={{ margin: 0, padding: 0, marginRight: 16 }}>
            <img
              src="Frame 318.svg"
              style={{
                width: "4.43vh",
                height: "4.43vh",
              }}
            ></img>
          </div>
        </Box>
      </Box>

      <Typography
        style={{
          fontWeight: 600,
          fontSize: "3vh",
          margin: 0,
          padding: 0,
          marginLeft: 16,
        }}
      >
        {props.Text}
      </Typography>
      <StyledTabs
        value={props.state}
        centered
        variant="fullWidth"
        style={{
          margin: 0,
          padding: 0,
          marginTop: "1.47vh",
          width: "100%",
        }}
      >
        <StyledTab label={props.Tab1} {...{ to: "/crew" }} component={Link} />
        <StyledTab label={props.Tab2} {...{ to: "/crew2" }} component={Link} />
      </StyledTabs>
    </div>
  );
}

export default Appbar2;
