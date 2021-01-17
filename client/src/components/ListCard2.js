import React from "react";

import { Button, Typography, Box } from "@material-ui/core";
import "../App.css";

function ListCard2(props) {
  return (
    <div style={{ width: "100%", alignContent: "center" }}>
      <Button
        style={{
          padding: 0,
          marginTop: 1,
          backgroundColor: "rgba(250, 250, 250, 1)",
          borderTopLeftRadius: props.r1,
          borderTopRightRadius: props.r2,
          borderBottomLeftRadius: props.r3,
          borderBottomRightRadius: props.r4,
          backdropFilter: "blur(28.14px)",
          width: "100%",
          height: "7.88vh",
          textTransform: "none",
        }}
      >
        <Box
          display="flex"
          p={1}
          alignItems="center"
          style={{
            margin: 0,
            padding: 0,
            width: "100%",
            height: "7.88vh",
          }}
        >
          <Box
            p={1}
            flexGrow={1}
            style={{ margin: 0, padding: 0, marginLeft: 16 }}
          >
            <Box
              display="flex"
              p={1}
              alignItems="center"
              style={{
                margin: 0,
                padding: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Box p={1} style={{ margin: 0, padding: 0, marginRight: 16 }}>
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
                      width: "3.94vh",
                      height: "3.94vh",
                      margin: 0,
                      padding: 0,
                    }}
                  ></img>
                </div>
              </Box>
              <Box p={1} style={{ margin: 0, padding: 0 }}>
                <Typography
                  style={{
                    fontSize: "1.72vh",
                    textAlign: "left",
                    color: "#000000",
                    fontWeight: 500,
                  }}
                >
                  {props.name}
                </Typography>
                <Typography
                  style={{
                    fontSize: "1.23vh",
                    fontWeight: 400,
                    textAlign: "left",
                    color: "#8A8A8F",
                  }}
                >
                  {props.plan}
                </Typography>
              </Box>
            </Box>
          </Box>
          {(() => {
            if (props.day !== 7) {
              return (
                <Box
                  p={1}
                  style={{
                    margin: 0,
                    padding: "4px 8px",
                    marginRight: 16,
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                    borderRadius: "10.5px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "1.23vh",
                      color: "#FF3B30",
                      fontWeight: 600,
                    }}
                  >
                    D-{props.day}
                  </Typography>
                </Box>
              );
            } else {
              return (
                <Box
                  p={1}
                  style={{
                    margin: 0,
                    padding: "4px 8px",
                    marginRight: 16,
                    backgroundColor: "rgba(255, 204, 0, 0.1)",
                    borderRadius: "10.5px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "1.23vh",
                      color: "#FFCC00",
                      fontWeight: 600,
                    }}
                  >
                    D-{props.day}
                  </Typography>
                </Box>
              );
            }
          })()}
        </Box>
      </Button>
    </div>
  );
}

export default ListCard2;
