//Home, Report, Upcoming Subscriptions, List

import React from "react";

import { Button, Typography, Box } from "@material-ui/core";
import "../App.css";

function ListCard2(props) {
  //defaulting to Placeholder directory when image asset doesnt exist
  var image = new Image();
  var url_img = props.src;
  image.src = url_img;
  if (image.width == 0) {
    url_img = "/Img/" + "Placeholder" + "/[32].svg";
  }
  return (
    <div style={{ width: "100%", alignContent: "center" }}>
      <Button
        style={{
          padding: 0,
          marginTop: 0,

          borderTopLeftRadius: props.r1,
          borderTopRightRadius: props.r2,
          borderBottomLeftRadius: props.r3,
          borderBottomRightRadius: props.r4,

          width: "100%",
          height: "9.38vh",
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
            height: "9.38vh",
          }}
        >
          <Box
            p={1}
            flexGrow={1}
            style={{ margin: 0, padding: 0, marginLeft: 20 }}
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
                    src={url_img}
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
                    fontSize: "10px",
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
            if (props.day <= 7) {
              return (
                <Box
                  p={1}
                  style={{
                    margin: 0,
                    padding: "3px 8px",
                    marginRight: 16,
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "#FF3B30",
                      fontWeight: 600,
                      letterSpacing: "-0.08px",
                    }}
                  >
                    D-{props.day}
                  </Typography>
                </Box>
              );
            } else if (props.day <= 14) {
              return (
                <Box
                  p={1}
                  style={{
                    margin: 0,
                    padding: "3px 8px",
                    marginRight: 16,
                    backgroundColor: "rgba(255, 204, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "#FFCC00",
                      fontWeight: 600,
                      letterSpacing: "-0.08px",
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
                    padding: "3px 8px",
                    marginRight: 16,
                    backgroundColor: "rgba(30, 215, 96, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "#4CD964",
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
