import React from "react";

import { Box, Typography } from "@material-ui/core";

import "../App.css";
import { Link } from "react-router-dom";

function Appbar1(props) {
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
          to="/"
        >
          <img
            alt="name"
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
            Cards
          </Typography>
        </Box>
        <Box
          p={1}
          style={{
            position: "absolute",
            margin: 0,
            padding: 0,
            right: "10vw",
          }}
        >
          <img
            alt="name"
            src="Icons[32]/Type=Sort.svg"
            style={{ width: "4.16vh", height: "4.16vh" }}
          ></img>
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
          <img
            alt="name"
            src="Icons[32]/Type=Add.svg"
            style={{ width: "4.16vh", height: "4.16vh" }}
          ></img>
        </Box>
      </Box>
    </div>
  );
}

export default Appbar1;
