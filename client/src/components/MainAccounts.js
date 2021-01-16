import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, Box } from "@material-ui/core";
import ListCard from "./ListCard3";
import ListCard2 from "./ListCard7";
import ListCard3 from "./ListCard8";
import { Link } from "react-router-dom";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  ListItemSize2: {
    color: "#666666",
    padding: 0,
    backgroundColor: "white",
    fontSize: "11px",
    margin: 0,
    borderRadius: "12px 12px 0px 0px",
    paddingLeft: 20,
    paddingTop: 20,
  },
}));

function Subscribe() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",
        maxHeight: "77vh",
        overflow: "auto",
      }}
    >
      <div
        style={{
          marginTop: "2.956vh",
          marginRight: "24px",
          marginLeft: "24px",

          borderRadius: "12px",
        }}
      >
        <div
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          {/* <ListCard1
            r1="12px"
            r2="12px"
            r3="0px"
            r4="0px"
            text="This Week"
            second="$11.8"
            src="Recurring.svg"
          ></ListCard1> */}

          <ListCard3
            r1="12px"
            r2="12px"
            r3="12px"
            r4="12px"
            month="Mar"
            src="/Img/Aaptiv/[32].svg"
            name="$10000"
            plan="Citi Bank"
            day={1}
          ></ListCard3>
          <div style={{ height: 16 }}></div>
          <ListCard3
            r1="12px"
            r2="12px"
            r3="12px"
            r4="12px"
            month="Mar"
            src="/Img/AppleMusic/[32].svg"
            name="$200"
            plan="Wells Fargo"
            day={0}
          ></ListCard3>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
