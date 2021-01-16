import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, Box } from "@material-ui/core";
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
    paddingLeft: 20,
    paddingTop: 20,
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
          <Typography className={classes.ListItemSize2}>
            Recent Transactions
          </Typography>
          <ListCard2
            r1="0px"
            r2="0px"
            r3="0px"
            r4="0px"
            month="Mar"
            day="4"
            src="/Img/Aaptiv/[32].svg"
            name="Aaptiv"
            plan="$5.9 / Monthly"
            price="$ 5.9"
          ></ListCard2>
          <ListCard2
            r1="0px"
            r2="0px"
            r3="0px"
            r4="0px"
            month="Mar"
            day="4"
            src="/Img/AppleMusic/[32].svg"
            name="AppleMusic"
            plan="$5.9 / Monthly"
            price="$ 5.9"
          ></ListCard2>
          <Button
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

              <Box p={1} style={{ margin: 0, padding: 0, marginRight: 16 }}>
                <img
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
          <Typography className={classes.ListItemSize2}>
            Upcoming Subscriptions
          </Typography>
          <ListCard3
            r1="0px"
            r2="0px"
            r3="0px"
            r4="0px"
            month="Mar"
            day="4"
            src="/Img/Aaptiv/[32].svg"
            name="Aaptiv"
            plan="$5.9 / Monthly"
            day={1}
          ></ListCard3>
          <ListCard3
            r1="0px"
            r2="0px"
            r3="0px"
            r4="0px"
            month="Mar"
            day="4"
            src="/Img/AppleMusic/[32].svg"
            name="AppleMusic"
            plan="$5.9 / Monthly"
            day={7}
          ></ListCard3>
          <Button
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

              <Box p={1} style={{ margin: 0, padding: 0, marginRight: 16 }}>
                <img
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
    </div>
  );
}

export default Subscribe;
