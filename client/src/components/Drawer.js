import React, { useState, useEffect } from "react";
import { useStyles } from "../styles/Drawer";

import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { Link, useLocation } from "react-router-dom";

import { Box, Button } from "@material-ui/core";
function CustomDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(props.show);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  useEffect(() => {
    setOpen(props.show);
  });

  return (
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
          alt="Notice"
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
        to="/Profile"
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
          Notice Board
        </Typography>
      </Button>

      <div
        style={{ backgroundColor: "grey", height: "0.5px", marginTop: 16 }}
      ></div>
      {/* Privacy and Settings */}
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
            paddingTop: 12,
            paddingLeft: 20,
            paddingBottom: 12,
            fontWeight: 500,
            fontSize: 17,
            alignItems: "center",
          }}
        >
          Privacy and Settings
        </Typography>
      </Box>
      {/* Customer Support */}
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
            paddingTop: 12,
            paddingLeft: 20,
            paddingBottom: 12,
            fontWeight: 500,
            fontSize: 17,
            alignItems: "center",
          }}
        >
          Customer Support
        </Typography>
      </Box>
    </Drawer>
  );
}

export default CustomDrawer;
