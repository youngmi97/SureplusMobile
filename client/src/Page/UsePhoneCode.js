import React from "react";

import "../App.css";
import { Link } from "react-router-dom";
import { Button, Typography, Grid } from "@material-ui/core";

function Onboarding() {
  const [number, setNumber] = React.useState("");

  const makeText = (a) => {
    if (a === "-") {
      setNumber(number.substring(0, number.length - 1));
    } else {
      setNumber(number + a);
    }
  };

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
            alt="name"
            src="Question.svg"
            style={{
              width: "3.94vh",
              height: "3.94vh",
              margin: 0,
              padding: 0,
            }}
          ></img>
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
        <Typography style={{ fontWeight: 400, fontSize: "3.125vh" }}>
          Please enter the code sent to jinjae@sureplus.io
        </Typography>
        {(() => {
          if (number === "") {
            return (
              <Typography
                style={{
                  fontWeight: 400,
                  color: "#8A8A8F",
                  fontSize: "2.21vh",
                  marginTop: "1.82vh",
                }}
              >
                Confirmation Code
              </Typography>
            );
          } else {
            return (
              <Typography
                style={{
                  fontWeight: 400,
                  color: "#8A8A8F",
                  fontSize: "2.21vh",
                  marginTop: "1.82vh",
                }}
              >
                {number}
              </Typography>
            );
          }
        })()}
        <Typography
          style={{
            fontWeight: 400,
            color: "#8A8A8F",
            fontSize: "2.21vh",
            marginTop: "1.82vh",
          }}
        ></Typography>
      </div>

      <Grid
        container
        space={0}
        style={{
          display: "flex",
          position: "absolute",
          bottom: "34px",
          paddingLeft: 24,
          paddingRight: 24,
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <Grid item xs={4} style={{}}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "7.29vh",

              textTransform: "none",
            }}
            onClick={() => {
              makeText(1);
            }}
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "Black",
                width: "100%",
                fontWeight: 500,
                fontSize: "3.125vh",
              }}
            >
              1
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4} style={{}}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "7.29vh",
              width: "100%",
              color: "white",
              textTransform: "none",
            }}
            onClick={() => {
              makeText(2);
            }}
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "Black",

                fontWeight: 500,
                fontSize: "3.125vh",
              }}
            >
              2
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "7.29vh",
              width: "100%",
              boxSizing: "border-box",
            }}
            onClick={() => {
              makeText(3);
            }}
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "Black",
                fontWeight: 500,
                fontSize: "3.125vh",
              }}
            >
              3
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4} style={{}}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "7.29vh",

              textTransform: "none",
            }}
            onClick={() => {
              makeText(4);
            }}
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "Black",
                width: "100%",
                fontWeight: 500,
                fontSize: "3.125vh",
              }}
            >
              4
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4} style={{}}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "7.29vh",
              width: "100%",
              color: "white",
              textTransform: "none",
            }}
            onClick={() => {
              makeText(5);
            }}
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "Black",

                fontWeight: 500,
                fontSize: "3.125vh",
              }}
            >
              5
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "7.29vh",
              width: "100%",
              boxSizing: "border-box",
            }}
            onClick={() => {
              makeText(6);
            }}
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "Black",
                fontWeight: 500,
                fontSize: "3.125vh",
              }}
            >
              6
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4} style={{}}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "7.29vh",

              textTransform: "none",
            }}
            onClick={() => {
              makeText(7);
            }}
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "Black",
                width: "100%",
                fontWeight: 500,
                fontSize: "3.125vh",
              }}
            >
              7
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4} style={{}}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "7.29vh",
              width: "100%",
              color: "white",
              textTransform: "none",
            }}
            onClick={() => {
              makeText(8);
            }}
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "Black",

                fontWeight: 500,
                fontSize: "3.125vh",
              }}
            >
              8
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "7.29vh",
              width: "100%",
              boxSizing: "border-box",
            }}
            onClick={() => {
              makeText(9);
            }}
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "Black",
                fontWeight: 500,
                fontSize: "3.125vh",
              }}
            >
              9
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4} style={{}}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "7.29vh",

              textTransform: "none",
            }}
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "Black",
                width: "100%",
                fontWeight: 500,
                fontSize: "3.125vh",
              }}
            >
              ABC
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4} style={{}}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "7.29vh",
              width: "100%",
              color: "white",
              textTransform: "none",
            }}
            onClick={() => {
              makeText(0);
            }}
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "Black",

                fontWeight: 500,
                fontSize: "3.125vh",
              }}
            >
              0
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "7.29vh",
              width: "100%",
              boxSizing: "border-box",
            }}
            onClick={() => {
              makeText("-");
            }}
          >
            <Typography
              style={{
                margin: 0,
                padding: 0,
                color: "Black",
                fontWeight: 500,
                fontSize: "3.125vh",
              }}
            >
              -
            </Typography>
          </Button>
        </Grid>
        <Button
          style={{
            margin: 0,
            padding: 0,
            height: "48px",
            borderRadius: "24px",
            background: "linear-gradient(90deg, #8610EB 0%, #430985 100%)",
            color: "white",
            textTransform: "none",
            width: "100%",
            marginTop: "3.38vh",
          }}
        >
          <Typography
            style={{
              margin: 0,
              padding: 0,
              color: "white",

              fontWeight: 500,
              fontSize: "17px",
            }}
            component={Link}
            to="/"
          >
            Next
          </Typography>
        </Button>
      </Grid>
    </div>
  );
}

export default Onboarding;
