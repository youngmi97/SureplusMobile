import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";

import gql from "graphql-tag";

import {
  serviceByUser,
  serviceByUserAccount,
  accountByUser,
} from "../graphql/queries";
import PullToRefresh from "react-simple-pull-to-refresh";

import ToolBar from "../components/ToolBar";
import Main from "../components/MainReport";
import Main2 from "../components/MainReport2";
import Typography from "@material-ui/core/Typography";

import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import { Box, Button } from "@material-ui/core";
//import { AuthContext } from "../context/auth";

import Loading from "../components/Loading";

const drawerWidth = "75vw";

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
    maxHeight: "100vh",
    overflow: "hidden",
  },
  drawerPaper: {
    width: drawerWidth,
    maxHeight: "100vh",
    overflow: "hidden",
  },
}));

export function Report(props) {
  const location = useLocation();

  var num = 0;
  if (location.param1 != null) {
    num = 1;
  }
  var op = false;
  if (location.param2 != null) {
    op = true;
  }

  //console.log("Report Client", props.client);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [ind, setIndex] = React.useState(num);
  const [open, setOpen] = React.useState(op);
  const [data, setData] = React.useState([]);
  const [data1, setData1] = React.useState([]);

  //const context = useContext(AuthContext);
  //props.userData.sub --> userID used for query

  try {
    props.client
      .query({
        query: gql(serviceByUser),
        variables: { userID: props.userData.sub },
      })
      .then(({ data }) => {
        setData(data.serviceByUser.items);
      });
  } catch (e) {
    console.log("query error", e);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const callServiceByUser = () => {
    try {
      console.log("sub", props.userData);
      props.client
        .query({
          query: gql(serviceByUser),
          fetchPolicy: "network-only",
          variables: { userID: props.userData.sub },
        })
        .then(({ data }) => {
          console.log("data", data);
          setData(data.serviceByUser.items);
        });
    } catch (e) {
      console.log("query error", e);
    }
  };

  useEffect(() => {
    callServiceByUser();
  }, []);

  const onRefresh = () => {
    return Promise.all([
      new Promise((resolve) => setTimeout(resolve, 2000)),
    ]).then(callServiceByUser());
  };

  return (
    <div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
      <div>
        <div
          position="absolute"
          style={{
            width: "100%",
            height: "5.73vh",
          }}
        >
          <div style={{ width: "100%" }}>
            <Box
              display="flex"
              // p={1}
              alignItems="center"
              style={{
                margin: 0,
                padding: "4px 16px 4px 16px",
                height: "5.72vh",
              }}
            >
              <Box p={1} flexGrow={1} style={{ margin: 0, padding: 0 }}>
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
                    alt="name"
                    src="ProfileIcon.png"
                    style={{ width: "4.16vh", height: "4.16vh" }}
                  ></img>
                </Button>
              </Box>

              <Box
                p={1}
                style={{
                  margin: 0,
                  padding: 0,
                }}
              >
                <Button
                  component={Link}
                  to="/Notification"
                  style={{
                    padding: 0,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "100%",
                  }}
                >
                  <img
                    src="/Icons[32]/Type=Notifications.svg"
                    alt="name"
                    style={{ width: "4.16vh", height: "4.16vh" }}
                  ></img>
                </Button>
              </Box>
            </Box>
          </div>
        </div>
        <div>
          <PullToRefresh
            refreshingContent={
              <div style={{ height: "70px" }}>
                <Loading />
              </div>
            }
            pullingContent={<div></div>}
            canFetchMore={true}
            onRefresh={onRefresh}
          >
            <div
              position="fixed"
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
              style={{
                width: "100%",
                alignContent: "center",
              }}
            >
              {(() => {
                if (ind == 0) {
                  return <Main list={data} />;
                } else {
                  return (
                    <Main2 client={props.client} userData={props.userData} />
                  );
                }
              })()}
            </div>
          </PullToRefresh>
        </div>
        <div position="fixed"></div>
      </div>

      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClick={toggleDrawer("left", false)}
      >
        <div
          style={{
            marginTop: 16,
            padding: "12px 20px 12px 20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            alt="name"
            src="ProfileIcon.png"
            style={{ width: "4.16vh", height: "4.16vh" }}
          ></img>
          <Typography
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 16,
              fontWeight: 500,
              fontSize: 17,
              alignItems: "center",
            }}
          >
            {props.userData.name}
          </Typography>
        </div>
        {/* Notice List */}
        <Button
          component={Link}
          to="/Profile"
          style={{
            margin: 0,
            padding: 0,

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: 16,
            height: 48,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 12,
            paddingBottom: 12,
            textTransform: "none",
          }}
        >
          <img
            alt="Profile"
            src="/Icons[24]/Type=Profile.svg"
            style={{ width: "3.125vh", height: "3.125vh" }}
          ></img>

          <Typography
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 16,
              fontWeight: 500,
              fontSize: 17,
              alignItems: "center",
            }}
          >
            Profile
          </Typography>
        </Button>
        <Button
          component={Link}
          to="/Notification"
          style={{
            margin: 0,
            padding: 0,

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: 16,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 12,
            paddingBottom: 12,
            height: 48,
            textTransform: "none",
          }}
        >
          <img
            alt="Notification"
            src="/Icons[24]/Type=Notice.svg"
            style={{ width: "3.125vh", height: "3.125vh" }}
          ></img>
          <Typography
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 16,
              fontWeight: 500,
              fontSize: 17,
              alignItems: "center",
            }}
          >
            Notice
          </Typography>
        </Button>
        <Button
          component={Link}
          to="/Customersupport"
          style={{
            margin: 0,
            padding: 0,

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: 16,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 12,
            paddingBottom: 12,
            height: 48,
            textTransform: "none",
          }}
        >
          <img
            alt="name"
            src="/Icons[24]/Type=CustomerSupport.svg"
            style={{ width: "3.125vh", height: "3.125vh" }}
          ></img>
          <Typography
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 16,
              fontWeight: 500,
              fontSize: 17,
              alignItems: "center",
            }}
          >
            Customer Support
          </Typography>
        </Button>

        <div
          style={{ backgroundColor: "grey", height: "0.5px", marginTop: 16 }}
        ></div>
        {/* Privacy and Settings */}
        <Button
          component={Link}
          to="/TermofService"
          style={{
            margin: 0,
            padding: 0,

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: 16,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 12,
            paddingBottom: 12,
            height: 48,
            textTransform: "none",
          }}
        >
          <Typography
            style={{
              margin: 0,
              padding: 0,
              fontWeight: 500,
              fontSize: 17,
              alignItems: "center",
            }}
          >
            Term of Service
          </Typography>
        </Button>

        {/* Customer Support */}
      </Drawer>
    </div>
  );
}

export default Report;
