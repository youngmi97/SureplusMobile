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
          marginTop: 16,
          backgroundColor: "white",
          borderTopLeftRadius: props.r1,
          borderTopRightRadius: props.r2,
          borderBottomLeftRadius: props.r3,
          borderBottomRightRadius: props.r4,
          backdropFilter: "blur(28.14px)",
          width: "100%",
          height: "12.76vh",
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
            height: "12.76vh",
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
                    src={props.src}
                    style={{
                      width: "5.21vh",
                      height: "5.21vh",
                      margin: 0,
                      padding: 0,
                      borderRadius: "100%",
                      paddingBottom: 16,
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
                    fontSize: "12px",
                    fontWeight: 400,
                    textAlign: "left",
                    color: "#000000",
                    width: "65vw",
                    marginTop: 5,
                  }}
                >
                  {props.plan}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Button>
    </div>
  );
}

export default ListCard2;
