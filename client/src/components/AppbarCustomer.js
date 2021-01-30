import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Dialog, Button } from "@material-ui/core";

import "../App.css";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    margin: 0,
    width: "100vw",
    height: "100vh",
    padding: 24,
    borderRadius: "15px 15px 0px 0px",
  },
  dialogpaperScroll: {
    marginTop: "71.1vh",
    maxHeight: "28.9vh",
  },
  dialogPaper2: {
    margin: 0,
    width: "90vw",
    height: "100vh",
    padding: 20,
    borderRadius: "15px 15px 15px 15px",
    backgroundColor: "#ECECEC",
  },
  dialogpaperScroll2: {
    maxWidth: "80vw",
    maxHeight: "22vh",
  },
}));

function Appbar1(props) {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const classes = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        p={1}
        alignItems="center"
        style={{ margin: 0, padding: 0, height: "5.72vh" }}
      >
        <Box
          Button
          p={1}
          style={{
            position: "absolute",
            margin: 0,
            padding: 0,
            left: "2.13vw",
          }}
          component={Link}
          to={{ pathname: props.link, param2: 1 }}
        >
          <img
            alt="name"
            src="Icons[32]/Type=Back.svg"
            style={{ width: "4.16vh", height: "4.16vh" }}
          ></img>
        </Box>
        <Box p={1} flexGrow={1} style={{ margin: 0, padding: 0 }}>
          <Typography
            style={{
              width: "100vw",
              fontWeight: 600,
              fontSize: "2.21vh",
              textAlign: "center",
            }}
          >
            {props.name}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Appbar1;
