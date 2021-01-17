import React from "react";

import { Button, Typography, Box } from "@material-ui/core";
import "../App.css";

function ListCard2(props) {
  return (
    <div style={{ width: "100%", alignContent: "center" }}>
      <Button
        style={{
          padding: 0,
          marginTop: 0,
          backgroundColor: "white",
          borderTopLeftRadius: props.r1,
          borderTopRightRadius: props.r2,
          borderBottomLeftRadius: props.r3,
          borderBottomRightRadius: props.r4,
          backdropFilter: "blur(28.14px)",
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
          <Box
            p={1}
            style={{
              margin: 0,
              marginRight: 20,
              padding: 0,
            }}
          >
            <Typography
              style={{
                fontSize: "2.21vh",
                color: "Black",
                fontWeight: 500,
              }}
            >
              {props.price}
            </Typography>
          </Box>
        </Box>
      </Button>
    </div>
  );
}

export default ListCard2;
