import { useState } from "react";

import "../App.css";
import { Link } from "react-router-dom";
import { Button, Typography, Grid } from "@material-ui/core";
import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";

String.prototype.replaceAt = function (index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function Onboarding() {
  const [initialNumber, setInitialNumbers] = useState("0000000000");
  const [number, setNumber] = useState("0000000000");
  const [first, setFirst] = useState(true);
  const [index, setIndex] = useState(0);

  const makeText = (a) => {
    if (index < 10 || a == "del") {
      if (a == "del") {
        if (index > 0) {
          setNumber(number.replaceAt(index - 1, String(0)));
          setIndex(index - 1);
        }
      } else {
        setNumber(number.replaceAt(index, String(a)));
        setIndex(index + 1);
      }
    } else {
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
        <Typography
          style={{ fontWeight: 400, fontSize: "3.125vh", height: "4.16vh" }}
        >
          Enter your Phone
        </Typography>
        {(() => {
          console.log(first);
          if (first == true) {
            return (
              <Typography
                style={{
                  fontWeight: 400,
                  color: "gray",
                  fontSize: "2.7vh",
                  marginTop: "1.82vh",
                }}
              >
                {"+1 (" +
                  initialNumber.slice(0, 3) +
                  ") " +
                  initialNumber.slice(3, 6) +
                  " " +
                  initialNumber.slice(6)}
              </Typography>
            );
          } else {
            return (
              <Typography
                style={{
                  fontWeight: 400,
                  color: "black",
                  fontSize: "2.7vh",
                  marginTop: "1.82vh",
                }}
              >
                {"+1 (" +
                  number.slice(0, 3) +
                  ") " +
                  number.slice(3, 6) +
                  " " +
                  number.slice(6)}
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
        {(() => {
          return (
            <Typography
              style={{
                fontWeight: 400,
                color: "#8A8A8F",
                fontSize: "2.21vh",
                marginTop: "0.2vh",
              }}
            >
              By entering and tapping Next, you agree to the Beta Software
              Program Agreement & Privacy Policy
            </Typography>
          );
        })()}
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
              setFirst(false);
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

              textTransform: "none",
            }}
            onClick={() => {
              makeText(2);
              setFirst(false);
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
              setFirst(false);
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
              setFirst(false);
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

              textTransform: "none",
            }}
            onClick={() => {
              makeText(5);
              setFirst(false);
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
              setFirst(false);
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
              setFirst(false);
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

              textTransform: "none",
            }}
            onClick={() => {
              makeText(8);
              setFirst(false);
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
              setFirst(false);
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
            ></Typography>
          </Button>
        </Grid>
        <Grid item xs={4} style={{}}>
          <Button
            style={{
              margin: 0,
              padding: 0,
              height: "7.29vh",
              width: "100%",

              textTransform: "none",
            }}
            onClick={() => {
              makeText(0);
              setFirst(false);
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
              makeText("del");
            }}
          >
            <BackspaceOutlinedIcon></BackspaceOutlinedIcon>
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
          component={Link}
          to={{
            pathname: "/UsePhoneCode",
            param1:
              "+1 (" +
              number.slice(0, 3) +
              ") " +
              number.slice(3, 6) +
              " " +
              number.slice(6),
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
          >
            Next
          </Typography>
        </Button>
      </Grid>
    </div>
  );
}

export default Onboarding;
