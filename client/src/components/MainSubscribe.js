//List View
import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

import { Box, Button, Typography } from "@material-ui/core";
import ListCard from "./ListCard3";
import { Link } from "react-router-dom";
import "../App.css";

function Subscribe(props) {
  const { setOnesub, onesub, backlink, setBacklink } = useContext(AuthContext);
  const shortmonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = props.list;

  const dayindex = {};

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element.lastDate in dayindex) {
      dayindex[element.lastDate].push(element);
    } else {
      dayindex[element.lastDate] = [element];
    }
  }

  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",
        height: "73.3365vh",
        overflow: "auto",
        paddingBottom: 24,
      }}
    >
      {(() => {
        if (props.empty == true) {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "73.3365vh",
              }}
            >
              <Typography style={{ margin: 0, padding: 0, fontSize: 50 }}>
                👋
              </Typography>
              <Typography
                style={{ margin: 0, padding: 0, fontSize: 14, fontWeight: 500 }}
              >
                Welcome to Sureplus.
              </Typography>
              <Typography
                style={{ margin: 0, padding: 0, fontSize: 14, fontWeight: 500 }}
              >
                To track your subscriptions,
              </Typography>
              <Typography
                style={{ margin: 0, padding: 0, fontSize: 14, fontWeight: 500 }}
              >
                link your bank.
              </Typography>
              <Button
                component={Link}
                to="/"
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
            <div
              style={{
                marginTop: "2.956vh",
                marginRight: "24px",
                marginLeft: "24px",
              }}
            >
              {Object.keys(dayindex).map(function (key, index) {
                return (
                  <Box
                    style={{
                      margin: 0,
                      marginTop: 16,
                      padding: 0,
                      backgroundColor: "white",
                      borderRadius: "12px",
                      filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
                    }}
                  >
                    {dayindex[key].map((array1, index1) => {
                      return (
                        <Button
                          component={Link}
                          style={{ margin: 0, padding: 0, width: "100%" }}
                          onClick={() => {
                            setBacklink("/Subscription");
                            setOnesub(array1);
                          }}
                          to={{
                            pathname: "/OneSub",
                          }}
                        >
                          <ListCard
                            r1="0px"
                            r2="0px"
                            r3="0px"
                            r4="0px"
                            month={shortmonth[new Date(key).getMonth()]}
                            day={new Date(key).getDate()}
                            src={"/Img/" + array1.name + "/[32].svg"}
                            name={array1.name}
                            plan={"$" + array1.cost + " / " + array1.period}
                            share={0}
                          ></ListCard>
                        </Button>
                      );
                    })}
                  </Box>
                );
              })}
            </div>
          );
        }
      })()}
    </div>
  );
}

export default Subscribe;
