import React from "react";

import { Button, Box, Typography } from "@material-ui/core";

import "../App.css";
import { Link } from "react-router-dom";

function AppbarProfile() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        p={1}
        alignItems="center"
        justifyContent="center"
        style={{ margin: 0, padding: 0, height: "25vh" }}
      >
        <Box
          Button
          p={1}
          style={{
            position: "absolute",
            margin: 0,
            padding: 0,
            top: 6,
            left: "2.13vw",
          }}
          component={Link}
          to="/"
        >
          <img
            alt="name"
            src="Back.svg"
            style={{ width: "4.16vh", height: "4.16vh" }}
          ></img>
        </Box>
        <Box
          Button
          p={1}
          style={{
            position: "absolute",
            margin: 0,
            padding: 0,
            top: "3.125vh",
          }}
        >
          <img
            alt="name"
            src="largeProfile.svg"
            style={{ width: "9.375vh", height: "9.375vh" }}
          ></img>
        </Box>
        <Box
          p={1}
          style={{
            position: "absolute",
            margin: 0,
            padding: 0,
            top: "13.54vh",
          }}
        >
          <Typography style={{ fontWeight: 600, fontSize: 15 }}>
            Name
          </Typography>
        </Box>
        <Box
          p={1}
          style={{
            position: "absolute",
            margin: 0,
            padding: 0,
            top: "18.2vh",
          }}
        >
          <Button
            style={{
              margin: 0,
              padding: "6px 16px",
              border: "1px solid #ACB5BE",
              borderRadius: "16px",
              boxSizing: "border-box",
              textTransform: "none",
            }}
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "#ACB5BE",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              Edit Profile
            </Typography>
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default AppbarProfile;
