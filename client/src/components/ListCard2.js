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
          backgroundColor: "#F5F6F7",
          borderTopLeftRadius: props.r1,
          borderTopRightRadius: props.r2,
          borderBottomLeftRadius: props.r3,
          borderBottomRightRadius: props.r4,
          backdropFilter: "blur(28.14px)",
          width: "100%",
          height: "7.88vh",
        }}
      >
        {(() => {
          if (props.src != "") {
            return (
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
                <Box p={1} style={{ margin: 0, padding: 0, marginLeft: 16 }}>
                  <Typography style={{ fontSize: "2.1vh", textAlign: "left" }}>
                    {props.text}
                  </Typography>
                </Box>
                <Box
                  p={1}
                  flexGrow={1}
                  style={{ margin: 0, padding: 0, marginLeft: 8 }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      src={props.src}
                      style={{
                        width: "2.1vh",
                        height: "2.1vh",
                        margin: 0,
                        padding: 0,
                      }}
                    ></img>
                  </div>
                </Box>
                <Box p={1} style={{ margin: 0, padding: 0, marginRight: 16 }}>
                  <Typography
                    style={{
                      fontSize: "2.1vh",
                      textAlign: "left",
                      color: "rgba(51,51,51,0.8)",
                    }}
                  >
                    {props.second}
                  </Typography>
                </Box>
              </Box>
            );
          } else {
            return (
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
                <Box
                  p={1}
                  flexGrow={1}
                  style={{ margin: 0, padding: 0, marginLeft: 16 }}
                >
                  <Typography style={{ fontSize: "2.1vh", textAlign: "left" }}>
                    {props.text}
                  </Typography>
                </Box>
                <Box p={1} style={{ margin: 0, padding: 0, marginRight: 16 }}>
                  <Typography
                    style={{
                      fontSize: "2.1vh",
                      textAlign: "left",
                      color: "rgba(51,51,51,0.8)",
                    }}
                  >
                    {props.second}
                  </Typography>
                </Box>
              </Box>
            );
          }
        })()}
      </Button>
    </div>
  );
}

export default ListCard2;
