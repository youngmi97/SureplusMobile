import React from "react";

import { Button, Typography, Box } from "@material-ui/core";
import "../App.css";
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
          marginTop: "2.5vh",
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
              position: "relative",
              backgroundColor: "#7610EB",
              marginTop: 24,
              height: "158px",
              width: "257px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.6)",
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
                fontSize: "15px",
                color: "white",
                fontWeight: 400,
              }}
            >
              Sureplus Pro
            </Typography>
          </div>
        </Box>
        <Button
          to="/Transaction"
          component={Link}
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
                  alt="name"
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
                <img alt="name"
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
                <img alt="name"
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
                <img alt="name"
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
                <img alt="name"
                  src="chevron.right -s.svg"
                  style={{ width: "3vh", height: "3vh", margin: 0, padding: 0 }}
                ></img>
              </div>
            </Box>
          </Box>
        </Button> */}
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
                <img alt="name"
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
                <img alt="name"
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
