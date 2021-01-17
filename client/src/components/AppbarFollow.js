import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Box, Typography, Tabs, Tab } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AddSubscription from "./Add";
import { Grid } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
    marginRight: 2,
    height: "4.69vh",
    width: "100%",
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "4.69vh",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.grey.main,
  },
  inputRoot: {
    alignItems: "center",
    justifyItems: "center",
    height: "100%",
    width: "100%",
    borderRadius: 18,
  },
  inputInput: {
    padding: 0,
    fontSize: 16,
    backgroundColor: "#C8C7CC",
    color: "black",
    height: "4.69vh",
    opacity: 0.5,
    borderRadius: 18,
    fontWeight: 300,

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,

    width: "100%",
    // "&:hover": {
    //   // backgroundColor: fade(theme.palette.common.white, 0.25),
    //   // border: `1px solid ${theme.palette.primary.main}`,
    // },
    // "&:focus": {
    //   width: "20ch",
    // },
  },
}));

function Appbar2(props) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

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
      fontSize: "15px",
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
        <Box
          Button
          p={1}
          style={{
            position: "absolute",
            margin: 0,
            padding: 0,
            left: "2.13vw",
          }}
          component={Link}
          to="/Profile"
        >
          <img
            src="Back.svg"
            style={{ width: "4.16vh", height: "4.16vh" }}
          ></img>
        </Box>
        <Box p={1} flexGrow={1} style={{ margin: 0, padding: 0 }}>
          <Typography
            style={{
              width: "100vw",
              fontWeight: 600,
              fontSize: "2.21vh",
              textAlign: "center",
            }}
          >
            {props.name}
          </Typography>
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
          label={props.Follower + " Followers"}
          {...{ to: "/Followers" }}
          component={Link}
        />
        <StyledTab
          label={props.Following + " Following"}
          {...{ to: "/Following" }}
          component={Link}
        />
      </StyledTabs>
      <Box
        display="flex"
        p={1}
        style={{
          margin: 0,
          padding: 0,
          marginTop: 10,
          height: "6.25vh",
          backgroundColor: "white",
        }}
      >
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchRoundedIcon />
          </div>
          <InputBase
            placeholder="Search subscriptions"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Box>
    </div>
  );
}

export default Appbar2;
