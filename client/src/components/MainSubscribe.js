import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, Box } from "@material-ui/core";
import ListCard from "./ListCard3";
import ListCard1 from "./ListCard";
import ListCard2 from "./ListCard2";
import "../App.css";

const useStyles = makeStyles((theme) => ({}));

function Subscribe() {
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
        }}
      >
        <Box
          style={{
            margin: 0,
            padding: 0,
            filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
          }}
        >
          <ListCard1
            r1="12px"
            r2="12px"
            r3="0px"
            r4="0px"
            text="This Week"
            second="$11.8"
            src="Recurring.svg"
          ></ListCard1>
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
            day={1}
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
            day={7}
          ></ListCard2>
          <Button
            style={{
              padding: 0,
              marginTop: 1,
              backgroundColor: "rgba(250, 250, 250, 1)",
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
              backdropFilter: "blur(28.14px)",
              width: "100%",
              height: "5.08vh",
              textTransform: "none",
            }}
          >
            <Typography
              style={{
                fontSize: "2.0vh",
                fontWeight: 400,

                color: "#8A8A8F",
              }}
            >
              Don't Show Today
            </Typography>
          </Button>
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
            r3="12px"
            r4="12px"
            month="Mar"
            day="4"
            src="/Img/Aaptiv/[32].svg"
            name="Aaptiv"
            plan="$5.9 / Monthly"
            share={0}
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
            r3="12px"
            r4="12px"
            month="Mar"
            day="4"
            src="/Img/AppleMusic/[32].svg"
            name="AppleMusic"
            plan="$5.9 / Monthly"
            share={1}
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
            month="Dec"
            day="4"
            src="/Img/BarkBox/[32].svg"
            name="BarkBox"
            plan="$5.9 / Monthly"
            share={1}
          ></ListCard>
          <ListCard
            r1="0px"
            r2="0px"
            r3="0px"
            r4="0px"
            month="Dec"
            day="6"
            src="/Img/AppleMusic/[32].svg"
            name="AppleMusic"
            plan="$5.9 / Monthly"
            share={1}
          ></ListCard>
          <ListCard
            r1="0px"
            r2="0px"
            r3="12px"
            r4="12px"
            month="Dec"
            day="12"
            src="/Img/Avast/[32].svg"
            name="Avast"
            plan="$5.9 / Monthly"
            share={1}
          ></ListCard>
        </Box>
      </div>
    </div>
  );
}

export default Subscribe;
