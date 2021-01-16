import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Box, Typography, Tabs, Tab } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AddSubscription from "./Add";
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
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        p={1}
        alignItems="center"
        style={{ margin: 0, padding: 0, height: "5.72vh" }}
      >
        <Box p={1} flexGrow={1} style={{ margin: 0, padding: 0 }}>
          <Typography
            style={{
              width: "100vw",
              fontWeight: 600,
              fontSize: "2.21vh",
              textAlign: "center",
            }}
          >
            {props.Text}
          </Typography>
        </Box>
        <Box
          p={1}
          style={{
            position: "absolute",
            margin: 0,
            padding: 0,
            right: "2.13vw",
          }}
        >
          <Button
            onClick={handleClickOpen}
            style={{
              padding: 0,
              margin: 0,
              minHeight: 0,
              minWidth: 0,
              borderRadius: "100%",
            }}
          >
            <img
              src="Frame 318.svg"
              style={{ width: "4.16vh", height: "4.16vh" }}
            ></img>
          </Button>
        </Box>
      </Box>
      <StyledTabs
        value={props.state}
        centered
        variant="fullWidth"
        style={{
          margin: 0,
          padding: 0,
          marginTop: "1.6vh",
          width: "100%",
        }}
      >
        <StyledTab
          label={props.Tab1}
          {...{ to: "/" + props.Link }}
          component={Link}
        />
        <StyledTab
          label={props.Tab2}
          {...{ to: "/" + props.Link + "2" }}
          component={Link}
        />
      </StyledTabs>
      <AddSubscription
        open={open}
        handleClose={() => handleClose()}
        handleClickOpen={() => handleClickOpen()}
      />
    </div>
  );
}

export default Appbar2;
