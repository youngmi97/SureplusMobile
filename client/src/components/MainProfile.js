import React from "react";

import { Grid, Typography, Box } from "@material-ui/core";

import { Link } from "react-router-dom";

import "../App.css";

function Subscribe() {
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
        style={{ padding: 0, margin: 0, backgroundColor: "#F8F9FB" }}
      >
        <Box
          p={1}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          style={{
            margin: 0,
            padding: 0,
            width: "26.7vw",
            height: "8.33vh",
          }}
        >
          <Typography
            style={{ margin: 0, padding: 0, fontSize: 17, fontWeight: 600 }}
          >
            10
          </Typography>
          <Typography
            style={{ margin: 0, padding: 0, fontSize: 12, fontWeight: 400 }}
          >
            Subscriptions
          </Typography>
        </Box>
        <Box
          p={1}
          Button
          component={Link}
          to="/Followers"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          style={{
            margin: 0,
            padding: 0,
            width: "26.7vw",
            textDecoration: "none",
            color: "black",
            height: "8.33vh",
            marginLeft: "3.6vw",
            marginRight: "3.6vw",
          }}
        >
          <Typography
            style={{ margin: 0, padding: 0, fontSize: 17, fontWeight: 600 }}
          >
            10
          </Typography>
          <Typography
            style={{ margin: 0, padding: 0, fontSize: 12, fontWeight: 400 }}
          >
            Followers
          </Typography>
        </Box>
        <Box
          p={1}
          Button
          component={Link}
          to="/Following"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          style={{
            margin: 0,
            padding: 0,
            width: "26.7vw",
            textDecoration: "none",
            color: "black",
            height: "8.33vh",
          }}
        >
          <Typography
            style={{ margin: 0, padding: 0, fontSize: 17, fontWeight: 600 }}
          >
            10
          </Typography>
          <Typography
            style={{ margin: 0, padding: 0, fontSize: 12, fontWeight: 400 }}
          >
            Following
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
          <img
            alt="name"
            src={"/Img/Aaptiv/[48].svg"}
            style={{
              width: "7.8125vh",
              height: "7.8125vh",
              margin: 0,
              padding: 0,
            }}
          ></img>
          <Typography
            style={{ margin: 0, padding: 0, fontSize: 12, fontWeight: 400 }}
          >
            Netflix
          </Typography>
        </Grid>
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
          <img
            alt="name"
            src={"/Img/Aaptiv/[48].svg"}
            style={{
              width: "7.8125vh",
              height: "7.8125vh",
              margin: 0,
              padding: 0,
            }}
          ></img>
          <Typography
            style={{ margin: 0, padding: 0, fontSize: 12, fontWeight: 400 }}
          >
            Netflix
          </Typography>
        </Grid>
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
          <img
            alt="name"
            src={"/Img/Aaptiv/[48].svg"}
            style={{
              width: "7.8125vh",
              height: "7.8125vh",
              margin: 0,
              padding: 0,
            }}
          ></img>
          <Typography
            style={{ margin: 0, padding: 0, fontSize: 12, fontWeight: 400 }}
          >
            Netflix
          </Typography>
        </Grid>
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
          <img
            alt="name"
            src={"/Img/Aaptiv/[48].svg"}
            style={{
              width: "7.8125vh",
              height: "7.8125vh",
              margin: 0,
              padding: 0,
            }}
          ></img>
          <Typography
            style={{ margin: 0, padding: 0, fontSize: 12, fontWeight: 400 }}
          >
            Netflix
          </Typography>
        </Grid>
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
          <img
            alt="name"
            src={"/Img/Aaptiv/[48].svg"}
            style={{
              width: "7.8125vh",
              height: "7.8125vh",
              margin: 0,
              padding: 0,
            }}
          ></img>
          <Typography
            style={{ margin: 0, padding: 0, fontSize: 12, fontWeight: 400 }}
          >
            Netflix
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Subscribe;
