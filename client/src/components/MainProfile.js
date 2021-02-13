import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

import { Grid, Typography, Button, Box } from "@material-ui/core";

import { Link } from "react-router-dom";

import "../App.css";

function Subscribe(props) {
  const { setOnesub, onesub, backlink, setBacklink } = useContext(AuthContext);
  console.log(props.list.length);
  return (
    <div
      style={{
        alignContent: "center",
        maxHeight: "70vh",
        overflow: "auto",
        paddingBottom: 10,
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <Box
        display="flex"
        p={1}
        justifyContent="center"
        alignItems="center"
        style={{ padding: 0, margin: 0 }}
      >
        <Box
          p={1}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          style={{
            margin: 0,
            backgroundColor: "#F8F9FB",
            padding: 0,
            width: "26.7vw",
            height: "8.33vh",
          }}
        >
          <Typography
            style={{ margin: 0, padding: 0, fontSize: 17, fontWeight: 600 }}
          >
            {props.list.length}
          </Typography>
          <Typography
            style={{ margin: 0, padding: 0, fontSize: 12, fontWeight: 400 }}
          >
            Subscriptions
          </Typography>
        </Box>
      </Box>
      <hr
        style={{
          marginTop: 16,
          borderTop: "0px solid #bbb",

          width: "100%",
          height: 0,
        }}
      />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={"16px"}
        style={{
          backgroundColor: "rgba(241,242,244,0.3)",
          borderRadius: "36px",
          padding: 0,
          margin: 0,
          marginTop: 8,
          paddingTop: 8,
          textAlign: "center",
        }}
      >
        {props.list.map((array, indx) => {
          return (
            <Grid
              item
              xs={4}
              display="flex"
              style={{
                margin: 0,
                padding: 0,

                height: "14.5vh",
              }}
            >
              <Button
                component={Link}
                style={{ margin: 0, padding: 0 }}
                onClick={() => {
                  setOnesub(array);
                  setBacklink("/Profile");
                }}
                to={{ pathname: "/OneSub" }}
              >
                <img
                  alt="name"
                  src={"/Img/" + array.name + "/[32].svg"}
                  style={{
                    width: "7.8125vh",
                    height: "7.8125vh",
                    margin: 0,
                    padding: 0,
                  }}
                ></img>
              </Button>
              <Typography
                style={{ margin: 0, padding: 0, fontSize: 12, fontWeight: 400 }}
              >
                {array.name}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Subscribe;
