//Home, Report, Upcoming Subscriptions, List

import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography, Dialog } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { Link, useLocation } from "react-router-dom";

import PlaidLinkFirst from "./PlaidLinkFirst";
import PlaidLinkSecond from "./PlaidLinkSecond";
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
  dialogPaper1: {
    margin: 0,
    width: "100vw",
    height: "100vh",
    borderRadius: "24px 24px 0px 0px",
  },
  dialogpaperScroll: {
    marginTop: "49.8vh",
    maxHeight: "50.2vh",
  },
  dialogpaperScroll1: {
    marginTop: "31.8vh",
    maxHeight: "68.2vh",
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
  const _sleep = (delay) =>
    new Promise((resolve) => setTimeout(resolve, delay));

  const loadingSucc = async () => {
    setState(1);
    await _sleep(5000);
    setState(2);
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
                    Link your Bank to view your subscriptions!a
                  </Typography>
                  <PlaidLinkFirst
                    userData={props.userData}
                    setState={loadingSucc}
                  />
                </div>
              </div>
            </Dialog>
          );
        } else if (state == 1) {
          return (
            <Dialog
              fullWidth
              maxWidth={"100vw"}
              open={open}
              keepMounted
              onClose={handleClose}
              TransitionComponent={Transition}
              classes={{
                paper: classes.dialogPaper1,
                paperScrollPaper: classes.dialogpaperScroll1,
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
                    Analyzing your payment data
                  </Typography>
                  <Typography
                    style={{
                      margin: 0,
                      padding: 0,
                      marginTop: 25,
                      fontWeight: 500,
                      fontSize: 14,
                      alignItems: "center",
                    }}
                  >
                    This will only take a minute
                  </Typography>

                  <img
                    alt="name"
                    src="Loading Data.gif"
                    style={{ width: "36.3vh", height: "41vh" }}
                  ></img>
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
                    marginTop: 64,

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: 24,
                    paddingRight: 24,
                  }}
                >
                  <img
                    alt="name"
                    src="Done.gif"
                    style={{ width: "16.27vh", height: "16.27vh" }}
                  ></img>
                  <Typography
                    style={{
                      margin: 0,
                      padding: 0,
                      marginTop: 13,
                      fontWeight: 500,
                      fontSize: 17,
                      alignItems: "center",
                    }}
                  >
                    14 Subscriptions Found
                  </Typography>
                  <Button
                    onClick={() => setOpen(false)}
                    style={{
                      margin: 0,
                      marginTop: 32,
                      padding: 0,
                      height: "5.99vh",
                      borderRadius: "24px",
                      background:
                        "linear-gradient(90deg, #8610EB 0%, #430985 100%)",
                      color: "white",
                      textTransform: "none",
                      width: "100%",
                    }}
                  >
                    <Typography
                      style={{
                        margin: 0,
                        padding: 0,
                        color: "white",

                        fontWeight: 500,
                        fontSize: "17px",
                      }}
                    >
                      Start Managing
                    </Typography>
                  </Button>
                  <PlaidLinkSecond
                    userData={props.userData}
                    setState={loadingSucc}
                  ></PlaidLinkSecond>
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
