import React from "react";

import { Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";
import ListCard2 from "./ListCard7";

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

function Wallet(props) {
  const ind = props.ind;
  const setIndex = props.setIndex;
  const classes = useStyles();

  const data = props.data;
  console.log(data);

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

  function get_total(data) {
    var total = 0;
    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      total += Number(element.cost);
    }
    return total;
  }

  const total = get_total(data);

  const dayindex = {};

  for (let i = 0; i < 1; i++) {
    for (let index1 = 0; index1 < data.length; index1++) {
      const element = data[data.length - 1 - index1];
      const index = new Date(element.lastDate);
      index.setMonth(index.getMonth() - i);
      if (index in dayindex) {
        dayindex[index].push(element);
      } else {
        dayindex[index] = [element];
      }
    }
  }

  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",
        maxHeight: "92vh",
        overflow: "auto",
      }}
    >
      <div
        style={{
          marginRight: "24px",
          marginLeft: "24px",
        }}
      >
        <Box
          position="relative"
          display="flex"
          p={1}
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          justifyItems="center"
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          <div
            // Shadow
            style={{
              position: "absolute",
              backgroundColor: "rgba(118, 16, 235, 0.4)",
              marginTop: "4.17vh",

              height: "145.7px",
              width: "237px",
              filter: "blur(10px)",
              borderRadius: "9.22px",
            }}
          ></div>
          {(() => {
            if (ind != 0) {
              return (
                <Button
                  onClick={() => {
                    setIndex(0);
                  }}
                  style={{
                    minWidth: 0,
                    minHeight: 0,
                    padding: 0,
                    margin: 0,
                    marginTop: "2.08vh",
                    position: "absolute",
                    left: "24px",
                  }}
                >
                  <img src="left.svg" style={{}} />
                </Button>
              );
            }
          })()}

          {(() => {
            if (ind != props.maxind - 1) {
              return (
                <Button
                  onClick={() => {
                    setIndex(1);
                  }}
                  style={{
                    minWidth: 0,
                    minHeight: 0,
                    padding: 0,
                    margin: 0,
                    marginTop: "2.08vh",
                    position: "absolute",
                    right: "24px",
                  }}
                >
                  <img src="right.svg" style={{}} />
                </Button>
              );
            }
          })()}
          <div
            style={{
              position: "relative",
              backgroundColor: "#7610EB",
              marginTop: "4.17vh",
              height: "158px",
              width: "257px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img
              alt="name"
              src="/Mastercard.svg"
              style={{
                position: "absolute",

                left: 189,
                top: 109,

                width: "47.5px",
                height: "29.28px",
              }}
            />
            <Typography
              style={{
                margin: 0,
                padding: 0,
                marginLeft: 16,
                marginTop: "16px",
                color: "white",
                fontWeight: 400,
              }}
            >
              {props.name}
            </Typography>
          </div>
        </Box>

        <Button
          // Transaction Button
          to="/Transaction"
          component={Link}
          style={{
            padding: 0,
            marginTop: "4.17vh",
            backgroundColor: "white",
            borderRadius: "12px 12px 0px 0px",

            width: "100%",
            height: "8.33vh",
            textTransform: "none",
            // Drop Shadow / Default
          }}
        >
          <Box
            display="flex"
            p={1}
            alignItems="center"
            style={{ margin: 0, padding: 0, width: "100%", height: "100%" }}
          >
            <Box
              p={1}
              flexGrow={1}
              style={{ margin: 0, padding: 0, marginLeft: 16 }}
            >
              <Typography
                style={{
                  fontSize: "2.1vh",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Subscriptions
              </Typography>
            </Box>
            <Box p={1} style={{ margin: 0, padding: 0, marginRight: 20 }}>
              <Typography>{data.length}</Typography>
            </Box>
          </Box>
        </Button>
        <Button
          // Transaction Button
          to="/Transaction"
          component={Link}
          style={{
            padding: 0,
            marginTop: "1px",
            backgroundColor: "white",
            borderRadius: "0px 0px 12px 12px",

            width: "100%",
            height: "8.33vh",
            textTransform: "none",
            // Drop Shadow / Default
          }}
        >
          <Box
            display="flex"
            p={1}
            alignItems="center"
            style={{ margin: 0, padding: 0, width: "100%", height: "100%" }}
          >
            <Box
              p={1}
              flexGrow={1}
              style={{ margin: 0, padding: 0, marginLeft: 16 }}
            >
              <Typography
                style={{
                  fontSize: "2.1vh",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Total
              </Typography>
            </Box>
            <Box p={1} style={{ margin: 0, padding: 0, marginRight: 20 }}>
              <Typography>{"- $ " + total}</Typography>
            </Box>
          </Box>
        </Button>
      </div>
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
        {Object.keys(dayindex).map(function (key, index) {
          const day1 = new Date(key);
          const day = new Date(
            day1.getTime() + day1.getTimezoneOffset() * 60 * 1000
          );
          return (
            <div
              style={{
                marginTop: "2.956vh",
                marginRight: "24px",
                marginLeft: "24px",
                backgroundColor: "white",
                borderRadius: 8,
                // boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  margin: 0,
                  padding: 0,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",

                    paddingLeft: 20,
                    paddingTop: 20,
                    alignItems: "center",
                    borderRadius: "12px 12px 0px 0px",
                  }}
                >
                  <Typography className={classes.ListItemSize2}>
                    {day.getFullYear() +
                      "." +
                      (day.getMonth() + 1) +
                      "." +
                      day.getDate()}
                  </Typography>
                  <hr
                    style={{
                      border: "1px solid #C8C7CC",
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: "59.4667vw",
                      height: 0,
                      opacity: "30%",
                    }}
                  />
                </div>
              </div>
              {dayindex[key].map((array, index) => {
                return (
                  <ListCard2
                    r1="0px"
                    r2="0px"
                    r3="0px"
                    r4="0px"
                    src={"/Img/" + array.name + "/[32].svg"}
                    name={array.name}
                    plan={get_time(new Date(array.lastDate))}
                    price={"- $" + array.cost}
                  ></ListCard2>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Wallet;
