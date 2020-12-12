import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import "../App.css";

const useStyles = makeStyles((theme) => ({}));

function Appbar1(props) {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ minHeight: "5vh" }}></div>
      <Box
        display="flex"
        p={1}
        alignItems="center"
        style={{ margin: 0, padding: 0, height: "7vh" }}
      >
        <Box p={1} flexGrow={1} style={{ margin: 0, padding: 0 }}>
          <Typography
            style={{ fontWeight: 600, fontSize: "3vh", marginLeft: 16 }}
          >
            {props.name}
          </Typography>
        </Box>
        <Box p={1} style={{ margin: 0, padding: 0, marginRight: 9 }}>
          <img
            src="Frame 248.svg"
            style={{ width: "4.43vh", height: "4.43vh" }}
          ></img>
        </Box>
      </Box>
    </div>
  );
}

export default Appbar1;
