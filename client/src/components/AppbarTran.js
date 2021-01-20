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
          to={props.link}
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
            {props.name}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Appbar1;
