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
          marginTop: 1,

          borderTopLeftRadius: props.r1,
          borderTopRightRadius: props.r2,
          borderBottomLeftRadius: props.r3,
          borderBottomRightRadius: props.r4,
          width: "100%",
          height: "7.88vh",
          textTransform: "None",
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
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            style={{
              margin: 0,
              padding: 0,
              width: "7.88vh",
              height: "7.88vh",
              backgroundColor: "rgba(200, 199, 204, 0.1)",
            }}
          >
            <Typography
              style={{
                fontSize: "1.23vh",
                textAlign: "center",
                color: "#ACB5BE",
              }}
            >
              {props.month}
            </Typography>
            <Typography
              style={{
                fontSize: "2.1vh",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {props.day}
            </Typography>
          </Box>
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
            if (props.share == 1) {
              return (
                <Box
                  p={1}
                  style={{
                    margin: 0,
                    padding: "4px 8px",
                    marginRight: 16,
                    backgroundColor: "#F1F3F5",
                    borderRadius: "10.5px",
                  }}
                >
                  <Typography style={{ fontSize: "1.23vh", color: "#666666" }}>
                    Shared
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
