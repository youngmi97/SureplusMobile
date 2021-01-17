import React from "react";

import { Button, Typography, Box } from "@material-ui/core";
import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";

function Wallet() {
  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",
        maxHeight: "78vh",
        overflow: "auto",
      }}
    >
      <div
        style={{
          marginRight: "24px",
          marginLeft: "24px",
          height: "63.67vh",
        }}
      >
        <Box
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
              Sureplus Pro
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
            borderRadius: "12px",

            width: "100%",
            height: "8.33vh",
            textTransform: "none",
            // Drop Shadow / Default
            filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
          }}
        >
          <Box
            display="flex"
            p={1}
            alignItems="center"
            style={{ margin: 0, padding: 0, width: "100%", height: "100%" }}
          >
            <Box p={1} style={{ margin: 0, padding: 0, marginLeft: 16 }}>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <img
                  alt="name"
                  src="Transfer.svg"
                  style={{ width: "3vh", height: "3vh", margin: 0, padding: 0 }}
                ></img>
              </div>
            </Box>
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
                Transactions
              </Typography>
            </Box>
            <Box p={1} style={{ margin: 0, padding: 0, marginRight: 20 }}>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <img
                  alt="name"
                  src="chevron.right -s.svg"
                  style={{ width: "3vh", height: "3vh", margin: 0, padding: 0 }}
                ></img>
              </div>
            </Box>
          </Box>
        </Button>
      </div>
    </div>
  );
}

export default Wallet;
