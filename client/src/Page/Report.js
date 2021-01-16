import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";

import AppBar2 from "../components/Appbar2";
import ToolBar from "../components/ToolBar";
import Main from "../components/MainReport";
import Main2 from "../components/MainReport2";
import BottomNavigation from "../components/BottomNavigation";
import Typography from "@material-ui/core/Typography";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import { Box, Button } from "@material-ui/core";

const drawerWidth = "84vw";

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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

export function Report() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [ind, setIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    if (open == true) {
      setOpen(false);
    }
  };

  return (
    <div
      onClick={handleDrawerClose}
      style={{ width: "100%", alignContent: "center", height: "100vh" }}
    >
      <div>
        <div
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          style={{
            width: "100%",
            height: "5.73vh",
          }}
        >
          <div style={{ width: "100%" }}>
            <Box
              display="flex"
              p={1}
              alignItems="center"
              style={{ margin: 0, padding: 0, height: "5.72vh" }}
            >
              <Box
                p={1}
                flexGrow={1}
                style={{ margin: 0, padding: 0, marginLeft: "2.13vw" }}
              >
                <Button
                  onClick={handleDrawerOpen}
                  style={{
                    padding: 0,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "100%",
                  }}
                >
                  <img
                    src="MyProfile.png"
                    style={{ width: "4.16vh", height: "4.16vh" }}
                  ></img>
                </Button>
              </Box>
              <Box
                p={1}
                style={{
                  margin: 0,
                  padding: 0,
                  marginRight: "2.13vw",
                }}
              >
                <Button
                  style={{
                    padding: 0,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "100%",
                  }}
                >
                  <img
                    src="search.svg"
                    style={{ width: "4.16vh", height: "4.16vh" }}
                  ></img>
                </Button>
              </Box>
              <Box
                p={1}
                style={{
                  margin: 0,
                  padding: 0,
                  marginRight: "2.13vw",
                }}
              >
                <Button
                  style={{
                    padding: 0,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "100%",
                  }}
                >
                  <img
                    src="Icons.svg"
                    style={{ width: "4.16vh", height: "4.16vh" }}
                  ></img>
                </Button>
              </Box>
            </Box>
          </div>
        </div>
        <div
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          style={{
            width: "100%",
            height: "5.73vh",
            marginTop: "1.56vh",
          }}
        >
          <ToolBar value={ind} setValue={setIndex} />
        </div>
        <div
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          style={{
            width: "100%",
            alignContent: "center",
          }}
        >
          {(() => {
            if (ind == 0) {
              return <Main />;
            } else {
              return <Main2 />;
            }
          })()}
        </div>

        <div
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <BottomNavigation value={value} setValue={setValue} />
        </div>
      </div>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div
          style={{
            marginTop: 28,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src="MyProfile.png"
            style={{ width: "4.16vh", height: "4.16vh", marginLeft: 12 }}
          ></img>
          <Typography
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 16,
              alignItems: "center",
            }}
          >
            Jinjae Kim
          </Typography>
        </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 20,
              alignItems: "center",
            }}
          >
            17
          </Typography>
          <Typography
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 4,
              alignItems: "center",
              color: "#666666",
            }}
          >
            Following
          </Typography>
          <Typography
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 16,
              alignItems: "center",
            }}
          >
            8
          </Typography>
          <Typography
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 4,
              alignItems: "center",
              color: "#666666",
            }}
          >
            Followers
          </Typography>
        </div>
        <div
          style={{ backgroundColor: "grey", height: "0.6px", marginTop: 16 }}
        ></div>
        <Box
          Button
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 48,
          }}
        >
          <img
            src="MyProfile.png"
            style={{ width: "4.16vh", height: "4.16vh", marginLeft: 12 }}
          ></img>
          <Typography
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 16,
              alignItems: "center",
            }}
          >
            Profile
          </Typography>
        </Box>
        <Box
          Button
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 48,
          }}
        >
          <img
            src="MyProfile.png"
            style={{ width: "4.16vh", height: "4.16vh", marginLeft: 12 }}
          ></img>
          <Typography
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 16,
              alignItems: "center",
            }}
          >
            Saved
          </Typography>
        </Box>
        <div
          style={{ backgroundColor: "grey", height: "0.6px", marginTop: 16 }}
        ></div>
        <Box
          Button
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 48,
          }}
        >
          <Typography
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 16,
              alignItems: "center",
            }}
          >
            Privacy and Settings
          </Typography>
        </Box>
        <Box
          Button
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 48,
          }}
        >
          <Typography
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 16,
              alignItems: "center",
            }}
          >
            Customer Support
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
}

export default Report;