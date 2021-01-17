import React from "react";

import { Button, Box, Typography } from "@material-ui/core";

import "../App.css";

function ToolBar(props) {
  const value = props.value;
  const setValue = props.setValue;
  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        p={1}
        alignItems="center"
        style={{ margin: 0, padding: "4px 16px 4px 16px", height: "5.72vh" }}
      >
        {(() => {
          if (value === 0) {
            return (
              <Box p={1} style={{ margin: 0, padding: 0 }}>
                <Button
                  onClick={() => setValue(0)}
                  style={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "18px",
                    textTransform: "none",
                    backgroundColor: "#7610EB",
                  }}
                >
                  <Typography
                    style={{
                      margin: 0,
                      padding: 0,
                      color: "white",
                      fontSize: "15px",
                      fontFamily: "Avenir Next",
                      fontWeight: 600,
                      height: 20,
                    }}
                  >
                    Report
                  </Typography>
                </Button>
              </Box>
            );
          } else {
            return (
              <Box p={1} style={{ margin: 0, padding: 0 }}>
                <Button
                  onClick={() => setValue(0)}
                  style={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "18px",
                    textTransform: "none",
                  }}
                >
                  <Typography
                    style={{
                      margin: 0,
                      padding: 0,
                      color: "#666666",
                      fontSize: "15px",
                      fontFamily: "Avenir Next",
                      fontWeight: 600,
                      height: 20,
                    }}
                  >
                    Report
                  </Typography>
                </Button>
              </Box>
            );
          }
        })()}
        {(() => {
          if (value === 1) {
            return (
              <Box p={1} style={{ margin: 0, padding: 0, marginLeft: "5px" }}>
                <Button
                  onClick={() => setValue(1)}
                  style={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "18px",
                    textTransform: "none",
                    backgroundColor: "#7610EB",
                  }}
                >
                  <Typography
                    style={{
                      margin: 0,
                      padding: 0,
                      color: "white",
                      fontSize: "15px",
                      fontFamily: "Avenir Next",
                      fontWeight: 600,
                      height: 20,
                    }}
                  >
                    Wallet
                  </Typography>
                </Button>
              </Box>
            );
          } else {
            return (
              <Box p={1} style={{ margin: 0, padding: 0, marginLeft: "5px" }}>
                <Button
                  onClick={() => setValue(1)}
                  style={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                    margin: 0,
                    minHeight: 0,
                    minWidth: 0,
                    borderRadius: "18px",
                    textTransform: "none",
                  }}
                >
                  <Typography
                    style={{
                      margin: 0,
                      padding: 0,
                      color: "#666666",
                      fontSize: "15px",
                      fontFamily: "Avenir Next",
                      fontWeight: 600,
                      height: 20,
                    }}
                  >
                    Wallet
                  </Typography>
                </Button>
              </Box>
            );
          }
        })()}
      </Box>
    </div>
  );
}

export default ToolBar;
