import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, Box } from "@material-ui/core";
import "../App.css";

const useStyles = makeStyles((theme) => ({}));

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
          marginTop: "6.77vh",
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
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              height: "25.12vh",
              width: "100%",
            }}
          >
            <img
              src="Card.png"
              style={{ height: "25.12vh", width: "100%" }}
            ></img>
          </div>
        </Box>
        <Button
          style={{
            padding: 0,
            marginTop: "3.94vh",
            backgroundColor: "white",
            borderRadius: "12px",
            width: "100%",
            height: "7.88vh",
            textTransform: "none",
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
              <Typography style={{ fontSize: "2.1vh", textAlign: "left" }}>
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
                  src="chevron.right -s.svg"
                  style={{ width: "3vh", height: "3vh", margin: 0, padding: 0 }}
                ></img>
              </div>
            </Box>
          </Box>
        </Button>
        <Button
          style={{
            padding: 0,
            marginTop: "1.97vh",
            backgroundColor: "white",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            width: "100%",
            height: "7.88vh",
            textTransform: "none",
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
                  src="Card.svg"
                  style={{ width: "3vh", height: "3vh", margin: 0, padding: 0 }}
                ></img>
              </div>
            </Box>
            <Box
              p={1}
              flexGrow={1}
              display="flex"
              style={{ margin: 0, padding: 0, marginLeft: 16 }}
            >
              <Box p={1} style={{ margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: "2.1vh", textAlign: "left" }}>
                  Card
                </Typography>
              </Box>
              <Box p={1} style={{ margin: 0, padding: 0, marginLeft: 4 }}>
                <Typography
                  style={{
                    fontSize: "2.1vh",
                    textAlign: "left",
                    color: "rgba(51,51,51,0.8)",
                  }}
                >
                  2
                </Typography>
              </Box>
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
                  src="chevron.right -s.svg"
                  style={{ width: "3vh", height: "3vh", margin: 0, padding: 0 }}
                ></img>
              </div>
            </Box>
          </Box>
        </Button>
        <Button
          style={{
            padding: 0,
            marginTop: 1,
            backgroundColor: "white",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
            width: "100%",
            height: "7.88vh",
            textTransform: "none",
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
                  src="Bank.svg"
                  style={{ width: "3vh", height: "3vh", margin: 0, padding: 0 }}
                ></img>
              </div>
            </Box>
            <Box
              p={1}
              flexGrow={1}
              display="flex"
              style={{ margin: 0, padding: 0, marginLeft: 16 }}
            >
              <Box p={1} style={{ margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: "2.1vh", textAlign: "left" }}>
                  Bank
                </Typography>
              </Box>
              <Box p={1} style={{ margin: 0, padding: 0, marginLeft: 4 }}>
                <Typography
                  style={{
                    fontSize: "2.1vh",
                    textAlign: "left",
                    color: "rgba(51,51,51,0.8)",
                  }}
                >
                  3
                </Typography>
              </Box>
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
                  src="chevron.right -s.svg"
                  style={{ width: "3vh", height: "3vh", margin: 0, padding: 0 }}
                ></img>
              </div>
            </Box>
          </Box>
        </Button>
        {/* <Button
          style={{
            padding: 0,
            marginTop: "1.97vh",
            backgroundColor: "white",
            borderRadius: "12px",
            width: "100%",
            height: "7.88vh",
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
                  src="LinkBank.svg"
                  style={{ width: "3vh", height: "3vh", margin: 0, padding: 0 }}
                ></img>
              </div>
            </Box>
            <Box
              p={1}
              flexGrow={1}
              style={{ margin: 0, padding: 0, marginLeft: 16 }}
            >
              <Typography style={{ fontSize: "2.1vh", textAlign: "left" }}>
                카드 또는 계좌 연결하기
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
                  src="chevron.right -s.svg"
                  style={{ width: "3vh", height: "3vh", margin: 0, padding: 0 }}
                ></img>
              </div>
            </Box>
          </Box>
        </Button> */}
      </div>
    </div>
  );
}

export default Wallet;
