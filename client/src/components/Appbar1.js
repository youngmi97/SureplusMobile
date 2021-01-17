// Home > Wallet > Cards

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import "../App.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({}));

function Appbar1(props) {
  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        p={1}
        alignItems="center"
        style={{ margin: 0, 
        padding:0,
        height: "5.73vh" }}
      >
        <Box
          Button
          p={1}
          display="flex"
          alignItems="center"
          style={{
            position: "absolute",
            margin: 0,
            padding: 0,
            left: "16px",
          }}
          component={Link}
          to="/"
        >
          <img
            src="/Icons[32]/Type=Back.svg"
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
          display="flex"
          alignItems="center"
          style={{
            position: "absolute",
            margin: 0,
            padding: 0,
            right: `calc(32px + 4.16vh)`,
          }}
        >
          <img
            src="/Icons[32]/Type=Sort.svg"
            style={{ width: "4.16vh", height: "4.16vh" }}
          ></img>
        </Box>
        <Box
          p={1}
          display="flex"
          alignItems="center"
          style={{
            position: "absolute",
            margin: 0,
            padding: 0,
            right: "16px",
          }}
        >
          <img
            src="Icons[32]/Type=Add.svg"
            style={{ width: "4.16vh", height: "4.16vh" }}
          ></img>
        </Box>
      </Box>
    </div>
  );
}

export default Appbar1;
