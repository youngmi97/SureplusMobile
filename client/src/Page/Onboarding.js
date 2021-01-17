import React from "react";

import "../App.css";
import { Link } from "react-router-dom";
import { Button, Typography, InputBase, Grid } from "@material-ui/core";

function Onboarding() {
  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "5.72vh",
          backgroundColor: "white",
          textAlign: "right",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button style={{ margin: 0, padding: 0, minWidth: 0, minHeight: 0 }}>
          <img
            src="Question.svg"
            style={{
              width: "3.94vh",
              height: "3.94vh",
              margin: 0,
              padding: 0,
            }}
            alt="question"
          />
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2.34vh",
          marginLeft: "24px",
          marginRight: "24px",
          backgroundColor: "white",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{ fontWeight: 400, fontSize: "3.125vh", height: "4.16vh" }}
        >
          Enter your email
        </Typography>
        <InputBase
          placeholder="Email Address"
          style={{ margin: 0, padding: 0, marginTop: "1.82vh" }}
        />
      </div>
      <Grid
        container
        space={0}
        style={{
          display: "flex",
          position: "absolute",
          bottom: "291px",
          backgroundColor: "white",
        }}
      >
        <Grid item xs={6} style={{ textAlign: "right", paddingRight: 3 }}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "48px",
              borderRadius: "24px",
              background: "#f7f7f7",
              textTransform: "none",
              width: "42.6vw",
            }}
            component={Link}
            to="/UsePhone"
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "Black",

                fontWeight: 500,
                fontSize: "17px",
              }}
            >
              Use Phone
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left", paddingLeft: 3 }}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "48px",
              borderRadius: "24px",
              background: "linear-gradient(90deg, #8610EB 0%, #430985 100%)",
              color: "white",
              textTransform: "none",
              width: "42.6vw",
            }}
            component={Link}
            to="/UsePhoneCode"
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "white",
                opacity: 0.3,
                fontWeight: 500,
                fontSize: "17px",
              }}
            >
              Next
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Onboarding;
