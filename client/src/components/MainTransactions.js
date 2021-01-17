import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, Box, Divider } from "@material-ui/core";
import ListCard from "./ListCard3";
import ListCard2 from "./ListCard7";
import ListCard3 from "./ListCard6";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  ListItemSize2: {
    color: "#666666",
    padding: 0,
    backgroundColor: "white",
    fontSize: "11px",
    margin: 0,
    borderRadius: "12px 12px 0px 0px",
  },
}));

function Subscribe() {
  const classes = useStyles();

  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",
        maxHeight: "77vh",
        overflow: "auto",
        paddingBottom: 10,
      }}
    >
      <div
        style={{
          marginTop: "2.956vh",
          marginRight: "24px",
          marginLeft: "24px",

          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
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
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              backgroundColor: "white",
              paddingLeft: 20,
              paddingTop: 20,
              alignItems: "center",
              borderRadius: "12px 12px 0px 0px",
            }}
          >
            <Typography className={classes.ListItemSize2}>
              2021.01.02
            </Typography>
            <hr
              style={{
                borderTop: "0.6px solid #bbb",
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "70%",
                height: 0,
              }}
            />
          </div>

          <ListCard2
            r1="0px"
            r2="0px"
            r3="0px"
            r4="0px"
            month="Mar"
            day="4"
            src="/Img/Aaptiv/[32].svg"
            name="Aaptiv"
            plan="12:30"
            price="$ 5.9"
          ></ListCard2>
          <ListCard2
            r1="0px"
            r2="0px"
            r3="12px"
            r4="12px"
            month="Mar"
            day="4"
            src="/Img/AppleMusic/[32].svg"
            name="AppleMusic"
            plan="12:30"
            price="$ 5.9"
          ></ListCard2>
        </div>
      </div>
      <div
        style={{
          marginTop: "2.956vh",
          marginRight: "24px",
          marginLeft: "24px",

          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
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
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              backgroundColor: "white",
              paddingLeft: 20,
              paddingTop: 20,
              alignItems: "center",
              borderRadius: "12px 12px 0px 0px",
            }}
          >
            <Typography className={classes.ListItemSize2}>
              2021.01.02
            </Typography>
            <hr
              style={{
                borderTop: "0.6px solid #bbb",
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "70%",
                height: 0,
              }}
            />
          </div>

          <ListCard2
            r1="0px"
            r2="0px"
            r3="0px"
            r4="0px"
            month="Mar"
            day="4"
            src="/Img/Aaptiv/[32].svg"
            name="Aaptiv"
            plan="12:30"
            price="$ 5.9"
          ></ListCard2>
          <ListCard2
            r1="0px"
            r2="0px"
            r3="12px"
            r4="12px"
            month="Mar"
            day="4"
            src="/Img/AppleMusic/[32].svg"
            name="AppleMusic"
            plan="12:30"
            price="$ 5.9"
          ></ListCard2>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
