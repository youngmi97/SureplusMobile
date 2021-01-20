import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ListCard from "./ListCard9";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  ListItemSize2: {
    color: "black",
    padding: 0,
    fontWeight: 500,
    fontSize: "14px",
    margin: 0,
    marginTop: 24,
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
      <div style={{ paddingLeft: 16, paddingRight: 16 }}>
        <Typography className={classes.ListItemSize2}>Today</Typography>

        <ListCard
          r1="12px"
          r2="12px"
          r3="12px"
          r4="12px"
          month="Mar"
          day="4"
          src="/Img/Aaptiv/[32].svg"
          name="Upcoming Payment"
          plan="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          price="$ 5.9"
        ></ListCard>
        <Typography className={classes.ListItemSize2}>Yesterday</Typography>

        <ListCard
          r1="12px"
          r2="12px"
          r3="12px"
          r4="12px"
          month="Mar"
          day="4"
          src="/Img/Aaptiv/[32].svg"
          name="Upcoming Payment"
          plan="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          price="$ 5.9"
        ></ListCard>
      </div>
    </div>
  );
}

export default Subscribe;
