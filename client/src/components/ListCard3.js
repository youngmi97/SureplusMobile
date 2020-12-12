import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, Box } from "@material-ui/core";
import "../App.css";

const useStyles = makeStyles((theme) => ({}));

function ListCard2(props) {
  return (
    <div style={{ width: "100%", alignContent: "center" }}>
      <Button
        style={{
          padding: 0,
          marginTop: 1,
          backgroundColor: "#FFFFFF",
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
            height: "100%",
          }}
        >
          <Box p={1} style={{ margin: 0, padding: 0, width: "7.88vh" }}>
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
                    공유중
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
