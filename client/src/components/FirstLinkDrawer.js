//Home, Report, Upcoming Subscriptions, List

import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography, Dialog } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { Link, useLocation } from "react-router-dom";

import PlaidLinkFirst from "./PlaidLinkFirst";
import "../App.css";

const drawerWidth = "100vw";

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  dialogPaper: {
    margin: 0,
    width: "100vw",
    height: "100vh",

    borderRadius: "24px 24px 0px 0px",
  },
  dialogpaperScroll: {
    marginTop: "49.8vh",
    maxHeight: "50.2vh",
  },
  drawer: {
    width: drawerWidth,
    height: "50.76vh",
    overflow: "hidden",
  },
  drawerPaper: {
    width: drawerWidth,
    height: "50.76vh",
    borderRadius: "24px 24px 0px 0px",
    overflow: "hidden",
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FirstLinkDrawer(props) {
  const [open, setOpen] = React.useState(true);
  const [state, setState] = React.useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div>
      {(() => {
        if (state == 0) {
          return (
            <Dialog
              fullWidth
              maxWidth={"100vw"}
              open={open}
              keepMounted
              onClose={handleClose}
              TransitionComponent={Transition}
              classes={{
                paper: classes.dialogPaper,
                paperScrollPaper: classes.dialogpaperScroll,
              }}
            >
              <div style={{ width: "100vw", height: "50.76vh" }}>
                <div
                  style={{
                    marginTop: 52,

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    alt="name"
                    src="LinkFirst.svg"
                    style={{ width: "20vh", height: "20vh" }}
                  ></img>
                  <Typography
                    style={{
                      margin: 0,
                      padding: 0,
                      marginTop: 24,
                      fontWeight: 500,
                      fontSize: 17,
                      alignItems: "center",
                    }}
                  >
                    Link your Bank to view your subscriptions!
                  </Typography>
                  <PlaidLinkFirst
                    userData={props.userData}
                    state={state}
                    setState={setState}
                  />
                </div>
              </div>
            </Dialog>
          );
        } else {
          return (
            <Dialog
              fullWidth
              maxWidth={"100vw"}
              open={open}
              keepMounted
              onClose={handleClose}
              TransitionComponent={Transition}
              classes={{
                paper: classes.dialogPaper,
                paperScrollPaper: classes.dialogpaperScroll,
              }}
            >
              <div style={{ width: "100vw", height: "50.76vh" }}>
                <div
                  style={{
                    marginTop: 52,

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    alt="name"
                    src="LinkFirst.svg"
                    style={{ width: "20vh", height: "20vh" }}
                  ></img>
                  <Typography
                    style={{
                      margin: 0,
                      padding: 0,
                      marginTop: 24,
                      fontWeight: 500,
                      fontSize: 17,
                      alignItems: "center",
                    }}
                  >
                    Link your Bank to view your subscriptions!!!
                  </Typography>
                  <PlaidLinkFirst userData={props.userData} />
                </div>
              </div>
            </Dialog>
          );
        }
      })()}
    </div>
  );
}

export default FirstLinkDrawer;
