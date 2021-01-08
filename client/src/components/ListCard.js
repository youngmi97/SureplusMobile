import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, Box } from "@material-ui/core";
import "../App.css";

const useStyles = makeStyles((theme) => ({}));

function ListCard(props) {
  return (
    <Button
      style={{
        padding: 0,
        marginTop: 1,
        backgroundColor: "white",
        borderTopLeftRadius: props.r1,
        borderTopRightRadius: props.r2,
        borderBottomLeftRadius: props.r3,
        borderBottomRightRadius: props.r4,
        width: "100%",
        height: "7.88vh",
        textTransform: "none",
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
                      width: "3vh",
                      height: "3vh",
                      margin: 0,
                      padding: 0,
                    }}
                  ></img>
                </div>
              </Box>
              <Box p={1} style={{ margin: 0, padding: 0, marginLeft: 8 }}>
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
                    src={"chevron.up -s.svg"}
                    style={{
                      width: "3vh",
                      height: "3vh",
                      margin: 0,
                      padding: 0,
                    }}
                  ></img>
                </div>
              </Box>
              <Box
                p={1}
                display="flex"
                style={{ margin: 0, padding: 0, marginRight: 20 }}
              >
                <Box p={1} style={{ margin: 0, padding: 0, marginRight: 4 }}>
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
                {/* <Box p={1} style={{ margin: 0, padding: 0 }}>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      src="chevron.right -s.svg"
                      style={{
                        width: "3vh",
                        height: "3vh",
                        margin: 0,
                        padding: 0,
                      }}
                    ></img>
                  </div>
                </Box> */}
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
              <Box
                p={1}
                display="flex"
                style={{ margin: 0, padding: 0, marginRight: 20 }}
              >
                <Box p={1} style={{ margin: 0, padding: 0, marginRight: 4 }}>
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
                <Box p={1} style={{ margin: 0, padding: 0 }}>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      src="chevron.right -s.svg"
                      style={{
                        width: "3vh",
                        height: "3vh",
                        margin: 0,
                        padding: 0,
                      }}
                    ></img>
                  </div>
                </Box>
              </Box>
            </Box>
          );
        }
      })()}
    </Button>
  );
}

export default ListCard;
