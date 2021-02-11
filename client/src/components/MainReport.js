//Home, Report
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Box } from "@material-ui/core";

import { AuthContext } from "../context/auth";
import ListCard2 from "./ListCard7";
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
  const open = props.open;
  const setOpen = props.setOpen;
  const { subscriptions } = useContext(AuthContext);
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
      <div
        style={{
          marginTop: "2.956vh",
          marginRight: "24px",
          marginLeft: "24px",
          backgroundColor: "white",

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
          <Typography className={classes.ListItemSize2}>
            Upcoming Subscriptions
          </Typography>
          {(() => {
            if (props.empty) {
              return (
                <div style={{ paddingBottom: "20px" }}>
                  <Typography className={classes.ListItemSize2}>
                    To track your upcoming subscriptions,
                  </Typography>
                  <Typography
                    className={classes.ListItemSize2}
                    style={{ paddingTop: 0 }}
                  >
                    link your bank.
                  </Typography>

                  <Button
                    onClick={() => setOpen(true)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(168, 110, 235, 0.2)",
                      width: "70px",
                      color: "#7610EB",
                      borderRadius: "10px",
                      width: "120px",
                      padding: " 0px 16px 0px 8px",
                      height: "36px",
                      fontWeight: 600,
                      textTransform: "none",

                      marginLeft: 20,
                      marginTop: 15,
                    }}
                  >
                    <div>
                      <img
                        alt="name"
                        src="link.svg"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "14px",
                          height: "14px",
                          margin: 0,
                          marginRight: "4px",
                          padding: 0,
                        }}
                      ></img>
                    </div>
                    Link Bank
                  </Button>
                </div>
              );
            } else {
              return (
                <div>
                  {subscriptions.slice(0, 2).map((array, index) => {
                    return (
                      <div>
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
                    );
                  })}
                  <Button
                    component={Link}
                    to="/Allsubs"
                    style={{
                      padding: 0,
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px",
                      width: "100%",

                      marginTop: 1,
                      backgroundColor: "white",
                      height: "5.08vh",
                      textTransform: "none",
                      paddingLeft: 20,
                    }}
                  >
                    <Box
                      display="flex"
                      p={1}
                      style={{
                        margin: 0,
                        padding: 0,
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Box
                        p={1}
                        flexGrow={1}
                        style={{ margin: 0, padding: 0, textAlign: "left" }}
                      >
                        <Typography
                          style={{
                            fontSize: "1.82vh",
                            color: "#000000",
                          }}
                        >
                          View All
                        </Typography>
                      </Box>

                      <Box
                        p={1}
                        style={{ margin: 0, padding: 0, marginRight: 16 }}
                      >
                        <img
                          alt="name"
                          src="chevron.right -s.svg"
                          style={{
                            width: "3vh",
                            height: "3vh",
                            margin: 0,
                            padding: 0,
                          }}
                        ></img>
                      </Box>
                    </Box>
                  </Button>
                </div>
              );
            }
          })()}
        </div>
      </div>
      {(() => {
        if (!props.empty) {
          return (
            <div
              style={{
                marginTop: "2.0833vh",
                marginRight: "24px",
                marginLeft: "24px",
                backgroundColor: "white",

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
                <Typography className={classes.ListItemSize2}>
                  Wallet Activity
                </Typography>
                {subscriptions.slice(0, 2).map((array, index) => {
                  return (
                    <ListCard2
                      r1="0px"
                      r2="0px"
                      r3="0px"
                      r4="0px"
                      day="4"
                      src={"/Img/" + array.name + "/[32].svg"}
                      name={array.name}
                      plan={get_time(new Date(array.lastDate))}
                      price={"- $" + array.cost}
                    ></ListCard2>
                  );
                })}

                <Button
                  component={Link}
                  to="/WalletActivity"
                  style={{
                    padding: 0,
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    width: "100%",
                    marginTop: 1,
                    height: "5.08vh",
                    textTransform: "none",
                    backgroundColor: "white",
                    paddingLeft: 20,
                  }}
                >
                  <Box
                    display="flex"
                    p={1}
                    style={{
                      margin: 0,
                      padding: 0,
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Box
                      p={1}
                      flexGrow={1}
                      style={{ margin: 0, padding: 0, textAlign: "left" }}
                    >
                      <Typography
                        style={{
                          fontSize: "1.82vh",
                          color: "#000000",
                        }}
                      >
                        View All
                      </Typography>
                    </Box>

                    <Box
                      p={1}
                      style={{ margin: 0, padding: 0, marginRight: 16 }}
                    >
                      <img
                        alt="name"
                        src="chevron.right -s.svg"
                        style={{
                          width: "3vh",
                          height: "3vh",
                          margin: 0,
                          padding: 0,
                        }}
                      ></img>
                    </Box>
                  </Box>
                </Button>
              </div>
            </div>
          );
        } else {
          return <div></div>;
        }
      })()}
    </div>
  );
}

export default Subscribe;
