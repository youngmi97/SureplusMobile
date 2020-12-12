import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, Box } from "@material-ui/core";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ListCard from "./ListCard4";
import RadialSeparators from "./RadialSeparators";
import "../App.css";

const useStyles = makeStyles((theme) => ({}));

function Crew() {
  return (
    <div style={{ width: "100%", alignContent: "center" }}>
      <div
        style={{
          marginTop: "2.956vh",
          marginRight: "24px",
          marginLeft: "24px",
        }}
      >
        <Box
          style={{
            margin: 0,
            padding: 0,
            filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
          }}
        >
          <Button
            style={{
              padding: 0,
              marginTop: 1,
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              width: "100%",
              height: "7.88vh",
              textTransform: "None",
            }}
          >
            <Box p={1} display="flex" style={{ maring: 0, padding: 0 }}>
              <Box p={1} style={{ maring: 0, padding: 0, marginRight: 8 }}>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <img
                    src={"Group 316.svg"}
                    style={{
                      width: "2.956vh",
                      height: "2.956vh",
                      margin: 0,
                      padding: 0,
                    }}
                  ></img>
                </div>
              </Box>
              <Box p={1} style={{ maring: 0, padding: 0 }}>
                <Typography
                  style={{
                    fontSize: "2.093vh",
                    textAlign: "center",
                    color: "#000000",
                    fontWeight: 500,
                  }}
                >
                  크루 만들기
                </Typography>
              </Box>
            </Box>
          </Button>
        </Box>

        <Box
          style={{
            margin: 0,
            marginTop: 24,
            padding: 0,
            filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
          }}
        >
          <ListCard
            r1="12px"
            r2="12px"
            r3="12px"
            r4="12px"
            month="3월"
            day="4"
            src="/Img/Aaptiv/[32].svg"
            name="Aaptiv"
            plan="5900원 / 매월"
            a={1}
            b={3}
            finish={1}
          ></ListCard>
        </Box>
        <Box
          style={{
            margin: 0,
            marginTop: 24,
            padding: 0,
            filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
          }}
        >
          <ListCard
            r1="12px"
            r2="12px"
            r3="12px"
            r4="12px"
            month="3월"
            day="4"
            src="/Img/AppleMusic/[32].svg"
            name="AppleMusic"
            plan="5900원 / 매월"
            a={1}
            b={3}
            finish={0}
          ></ListCard>
        </Box>
        <Box
          style={{
            margin: 0,
            marginTop: 16,
            padding: 0,
            filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
          }}
        >
          <ListCard
            r1="12px"
            r2="12px"
            r3="0px"
            r4="0px"
            month="12월"
            day="4"
            src="/Img/BarkBox/[32].svg"
            name="BarkBox"
            plan="5900원 / 매월"
            a={1}
            b={5}
            finish={0}
          ></ListCard>
          <ListCard
            r1="0px"
            r2="0px"
            r3="0px"
            r4="0px"
            month="12월"
            day="6"
            src="/Img/AppleMusic/[32].svg"
            name="AppleMusic"
            plan="5900원 / 매월"
            a={2}
            b={3}
            finish={0}
          ></ListCard>
          <ListCard
            r1="0px"
            r2="0px"
            r3="12px"
            r4="12px"
            month="12월"
            day="12"
            src="/Img/Avast/[32].svg"
            name="Avast"
            plan="5900원 / 매월"
            a={2}
            b={4}
            finish={0}
          ></ListCard>
        </Box>
      </div>
    </div>
  );
}

export default Crew;
