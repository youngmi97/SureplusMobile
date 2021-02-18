import React from "react";

import { Button, Typography, Box } from "@material-ui/core";
import "../App.css";

function ListCard2(props) {
  return (
    <div style={{ width: "100%", alignContent: "center" }}>
      {props.opacity.includes(props.id) ? (
        <div
          style={{
            padding: "20px 16px 20px 16px",
            textTransform: "none",
            opacity: 0.3,
            marginTop: 1,
          }}
        >
          <Box
            display="flex"
            p={1}
            style={{
              margin: 0,
              padding: 0,
              width: "100%",
            }}
          >
            <Box p={1} flexGrow={1} style={{ margin: 0, padding: 0 }}>
              <Box
                display="flex"
                p={1}
                style={{
                  margin: 0,
                  padding: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  p={1}
                  style={{ margin: 0, padding: 0, marginRight: "16px" }}
                >
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      alt="name"
                      src={props.src}
                      style={{
                        width: "40px",
                        height: "40px",
                        margin: 0,
                        padding: 0,
                        borderRadius: "100%",
                      }}
                    ></img>
                  </div>
                </Box>
                <Box
                  p={1}
                  flexGrow={1}
                  style={{ margin: 0, padding: 0, width: "55%" }}
                >
                  <Typography
                    style={{
                      fontSize: "14px",
                      textAlign: "left",
                      color: "#000000",
                      fontWeight: 500,
                    }}
                  >
                    {props.name}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      textAlign: "left",
                      color: "#000000",
                    }}
                  >
                    {props.plan}
                  </Typography>
                </Box>
                <Box>
                  <Typography style={{ fontSize: "10px", fontWeight: 400 }}>
                    {props.day + "d ago"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      ) : (
        <div
          style={{
            padding: "20px 16px 20px 16px",
            textTransform: "none",

            marginTop: 1,
          }}
        >
          <Box
            display="flex"
            p={1}
            style={{
              margin: 0,
              padding: 0,
              width: "100%",
            }}
          >
            <Box p={1} flexGrow={1} style={{ margin: 0, padding: 0 }}>
              <Box
                display="flex"
                p={1}
                style={{
                  margin: 0,
                  padding: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  p={1}
                  style={{ margin: 0, padding: 0, marginRight: "16px" }}
                >
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      alt="name"
                      src={props.src}
                      style={{
                        width: "40px",
                        height: "40px",
                        margin: 0,
                        padding: 0,
                        borderRadius: "100%",
                      }}
                    ></img>
                  </div>
                </Box>
                <Box
                  p={1}
                  flexGrow={1}
                  style={{ margin: 0, padding: 0, width: "55%" }}
                >
                  <Typography
                    style={{
                      fontSize: "14px",
                      textAlign: "left",
                      color: "#000000",
                      fontWeight: 500,
                    }}
                  >
                    {props.name}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      textAlign: "left",
                      color: "#000000",
                    }}
                  >
                    {props.plan}
                  </Typography>
                </Box>
                <Box>
                  <Typography style={{ fontSize: "10px", fontWeight: 400 }}>
                    {props.day + "d ago"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
}

export default ListCard2;
