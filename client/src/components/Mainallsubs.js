//Home, Report
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Box } from "@material-ui/core";

import ListCard from "./ListCard6";
import { Link } from "react-router-dom";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  ListItemSize2: {
    color: "#8a8a8F",
    padding: 0,
    backgroundColor: "white",
    fontSize: "12px",
    lineHeight: "17px",
    fontWeight: 500,
    margin: 0,
    borderRadius: "12px 12px 0px 0px",
    paddingLeft: 20,
    paddingTop: 20,
  },
}));

function Subscribe(props) {
  const today = new Date();

  function get_date(today, day) {
    day.setMonth(day.getMonth() + 1);
    return parseInt((day - today) / 86400000);
  }

  function get_time(day1) {
    const day = new Date(day1.getTime() + day1.getTimezoneOffset() * 60 * 1000);

    return (
      day.getMonth() +
      1 +
      "/" +
      day.getDate() +
      " " +
      day.getHours() +
      ":" +
      day.getMinutes()
    );
  }

  const classes = useStyles();

  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",
        minHeight: "79.0365vh",
        maxHeight: "79.0365vh",
        overflow: "auto",
        paddingBottom: 24,
      }}
    >
      <div>
        <div
          style={{
            margin: 0,
            padding: 0,
            marginTop: "1.96vh",
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

          {props.list.map((array, index) => {
            return (
              <div>
                <div
                  style={{
                    marginTop: "1.3vh",
                    marginRight: "24px",
                    marginLeft: "24px",
                    backgroundColor: "white",
                    borderRadius: 8,
                    // boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Button
                    component={Link}
                    style={{ margin: 0, padding: 0, width: "100%" }}
                    to={{ pathname: "/OneSub", list: array, link: "/" }}
                  >
                    <ListCard
                      r1="0px"
                      r2="0px"
                      r3="0px"
                      r4="0px"
                      src={"/Img/" + array.name + "/[32].svg"}
                      name={array.name}
                      plan={"$" + array.cost + " / " + array.period}
                      day={get_date(today, new Date(array.lastDate))}
                    ></ListCard>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
