import React, { useState } from "react";
import "../App.css";
import {
  fade,
  makeStyles,
  withStyles,
  useTheme,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ToolBar2 from "./ToolBar2";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const useStyles = makeStyles((theme) => ({
  List: {
    backgroundColor: "white",
    height: "7.29vh",
    "&:hover, &:focus": {
      backgroundColor: "white",
    },
  },
}));
const smallmonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const numbermonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function make_list(li) {
  const result = [];
  for (let index = 0; index < 5; index++) {
    const a = [];
    for (let index1 = 1; index1 < 8; index1++) {
      if (index * 7 + index1 <= li) {
        a.push(index * 7 + index1);
      } else {
        a.push("");
      }
    }
    result.push(a);
  }
  return result;
}

export default function InputCalendar(props) {
  const classes = useStyles();
  const ind = props.ind;
  const setIndex = props.setIndex;
  const state = props.state;
  const setState = props.setState;

  const month = props.month;
  const setMonth = props.setMonth;

  const changeM = (i) => {
    var v = month + i;
    if (v == -1) {
      v = 11;
    } else if (v == 12) {
      v = 0;
    }
    setMonth(v);
  };

  function make_cal(mon) {
    return (
      <div>
        {make_list(numbermonth[mon]).map((entry, index) => (
          <Box
            display="flex"
            flexDirection="row"
            p={1}
            style={{
              margin: 0,
              padding: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {entry.map((entry1, index1) => {
              if (entry1 != state) {
                return (
                  <Box
                    display="flex"
                    Button
                    onClick={() => setState(entry1)}
                    style={{
                      margin: 0,
                      padding: 0,
                      width: "14%",
                      height: "7.1vh",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {entry1}
                  </Box>
                );
              } else {
                return (
                  <Box
                    display="flex"
                    Button
                    onClick={() => setState(entry1)}
                    style={{
                      margin: 0,
                      padding: 0,
                      width: "14%",
                      height: "7.1vh",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        margin: 0,
                        padding: 0,
                        width: "4.1vh",
                        height: "4.1vh",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#7610EB",
                        borderRadius: "100%",
                        color: "white",
                      }}
                    >
                      {entry1}
                    </div>
                  </Box>
                );
              }
            })}
          </Box>
        ))}
      </div>
    );
  }

  const Jan = make_cal(0);

  return (
    <div style={{ width: "100%" }}>
      <ListItem
        button={false}
        className={classes.List}
        style={{ marginBottom: "1vh", borderRadius: "12px" }}
      >
        <Typography
          style={{
            margin: 0,
            padding: 0,
            fontSize: "2.21vh",
            color: "#8A8A8F",
          }}
        >
          Price
        </Typography>
        <ListItemSecondaryAction
          style={{
            fontWeight: 400,
            color: "#000000",
          }}
        >
          <ToolBar2 value={ind} setValue={setIndex} />
        </ListItemSecondaryAction>
      </ListItem>
      {(() => {
        if (ind == 0) {
          return (
            <div
              style={{
                width: "calc(100% - 16)",
                paddingLeft: 8,
                paddingRight: 8,
                height: "272px",
              }}
            >
              {Jan}
            </div>
          );
        } else {
          return (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "10%",
                    justifyContent: "flex-start",

                    paddingLeft: 16,
                  }}
                >
                  <Button
                    onClick={() => changeM(-1)}
                    style={{
                      minWidth: 0,
                      minHeight: 0,
                      color: "#666666",
                      fontWeight: 600,
                    }}
                  >
                    {"<"}
                  </Button>
                </div>
                <div
                  style={{
                    width: "80%",
                    textAlign: "center",
                    color: "#666666",
                  }}
                >
                  {smallmonth[month]}
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "10%",
                    justifyContent: "flex-end",

                    paddingRight: 16,
                  }}
                >
                  <Button
                    onClick={() => changeM(1)}
                    style={{
                      minWidth: 0,
                      minHeight: 0,
                      color: "#666666",
                      fontWeight: 600,
                    }}
                  >
                    {">"}
                  </Button>
                </div>
              </div>
              <div
                style={{
                  width: "calc(100% - 16)",
                  paddingLeft: 8,
                  paddingRight: 8,
                  height: "272px",
                }}
              >
                {make_cal(month)}
              </div>
            </div>
          );
        }
      })()}
    </div>
  );
}
