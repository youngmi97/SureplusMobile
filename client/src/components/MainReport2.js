//Home, Wallet

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Box } from "@material-ui/core";

import ListCard2 from "./ListCard7";
import ListCard3 from "./ListCard8";
import { Link } from "react-router-dom";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  ListItemSize2: {
    color: "#8A8A8F",
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

function Subscribe() {
  const classes = useStyles();

  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",
        maxHeight: "79.0365vh",
        overflow: "auto",
        paddingBottom: 20,
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
            Physical Cards 1
          </Typography>
          <Button
            component={Link}
            to={{ pathname: "/Wallet", param1: 0 }}
            style={{ margin: 0, padding: 0, width: "100%" }}
          >
            <ListCard2
              r1="0px"
              r2="0px"
              r3="0px"
              r4="0px"
              month="Mar"
              day="4"
              src="/PhysicalCards/Card.svg"
              name="Wells Fargo"
              plan="Master Card ･･34"
              price={""}
            ></ListCard2>
          </Button>
          <Button
            component={Link}
            to={{ pathname: "/Wallet", param1: 1 }}
            style={{ margin: 0, padding: 0, width: "100%" }}
          >
            <ListCard2
              r1="0px"
              r2="0px"
              r3="12px"
              r4="12px"
              month="Mar"
              day="4"
              src="/PhysicalCards/Card.svg"
              name="Amex"
              plan="Visa Card ･･34"
              price={""}
            ></ListCard2>
          </Button>
          {/* <Button
            component={Link}
            to="/Wallet"
            style={{
              padding: 0,
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
              width: "100%",
              backgroundColor: "white",
              marginTop: 1,

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
          </Button> */}
        </div>
      </div>
      <div
        style={{
          marginTop: "2.0833vh",
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
          <Typography className={classes.ListItemSize2}>
            Linked Accounts 3
          </Typography>
          <ListCard3
            r1="0px"
            r2="0px"
            r3="0px"
            r4="0px"
            month="Mar"
            src="/Bank/CitiBank.svg"
            name="$10000"
            plan="Citi Bank"
            day={1}
          ></ListCard3>
          <ListCard3
            r1="0px"
            r2="0px"
            r3="0px"
            r4="0px"
            month="Mar"
            src="/Bank/WellsFargo.svg"
            name="$200"
            plan="Wells Fargo"
            day={0}
          ></ListCard3>
          <Button
            component={Link}
            to="/Accounts"
            style={{
              padding: 0,
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
              width: "100%",
              backgroundColor: "white",
              marginTop: 1,
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
                    fontSize: "14px",
                    color: "#000000",
                  }}
                >
                  View All
                </Typography>
              </Box>

              <Box p={1} style={{ margin: 0, padding: 0, marginRight: 16 }}>
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
    </div>
  );
}

export default Subscribe;
