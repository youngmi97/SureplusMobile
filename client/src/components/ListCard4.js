import React from "react";

import { Button, Typography, Box } from "@material-ui/core";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";
import "../App.css";

function ListCard4(props) {
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
            if (props.finish === 1) {
              return (
                <Box
                  p={1}
                  style={{
                    width: "5.91vh",
                    height: "5.91vh",
                    margin: 0,
                    padding: 0,
                    marginRight: 16,
                    backgroundColor: "#F1F3F5",
                    borderRadius: "5.91vh",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Typography style={{ fontSize: "2.09vh", color: "#AEB5BC" }}>
                    Done
                  </Typography>
                </Box>
              );
            } else {
              return (
                <div
                  style={{ width: "5.91vh", height: "5.91vh", marginRight: 16 }}
                >
                  <CircularProgressbarWithChildren
                    value={parseInt((100 * props.a) / props.b) - 1}
                    strokeWidth={8}
                    styles={buildStyles({
                      pathColor: "#007AFF",
                      trailColor: "E9EBEF",
                    })}
                  >
                    <Box
                      p={1}
                      display="flex"
                      alignItems="flex-end"
                      style={{ margin: 0, padding: 0, hegiht: "80%" }}
                    >
                      <Box
                        p={1}
                        style={{ margin: 0, padding: 0, hegiht: "100%" }}
                      >
                        <Typography
                          style={{ fontWeight: 500, fontSize: "2.07vh" }}
                        >
                          {props.a}
                        </Typography>
                      </Box>
                      <Box
                        p={1}
                        style={{
                          margin: 0,
                          padding: 0,
                          hegiht: "100%",
                          paddingBottom: 3,
                        }}
                      >
                        <Typography
                          style={{ fontWeight: 300, fontSize: "0.974vh" }}
                        >
                          /{props.b}
                        </Typography>
                      </Box>
                    </Box>
                    <RadialSeparators
                      count={props.b}
                      style={{
                        background: "#ffffff",
                        width: "2.5px",
                        // This needs to be equal to props.strokeWidth
                        height: "10%",
                      }}
                    />
                  </CircularProgressbarWithChildren>
                </div>
              );
            }
          })()}
        </Box>
      </Button>
    </div>
  );
}

export default ListCard4;
