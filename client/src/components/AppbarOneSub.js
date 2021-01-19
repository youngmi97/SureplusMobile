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
}));

function Appbar1(props) {
  const [open, setOpen] = React.useState(false);
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
          to={props.link}
        >
          <img
            alt="name"
            src="Back.svg"
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
        <Box
          Button
          onClick={handleClickOpen}
          p={1}
          style={{
            position: "absolute",
            margin: 0,
            padding: 0,
            right: "2.13vw",
          }}
        >
          <img
            alt="name"
            src="Back.svg"
            style={{ width: "4.16vh", height: "4.16vh" }}
          ></img>
        </Box>
      </Box>
      <Dialog
        fullWidth
        maxWidth={"100vw"}
        open={open}
        onClose={handleClose}
        classes={{
          paper: classes.dialogPaper,
          paperScrollPaper: classes.dialogpaperScroll,
        }}
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        <Button
          style={{
            margin: 0,
            marginTop: 32,
            padding: 0,
            height: "5.99vh",
            borderRadius: "24px",
            background: "linear-gradient(90deg, #8610EB 0%, #430985 100%)",
            color: "white",
            textTransform: "none",
            width: "100%",
          }}
        >
          <Typography
            style={{
              margin: 0,
              padding: 0,
              color: "white",

              fontWeight: 500,
              fontSize: "17px",
            }}
          >
            Hide
          </Typography>
        </Button>
        <Button
          style={{
            margin: 0,
            marginTop: 16,
            padding: 0,
            height: "5.99vh",
            borderRadius: "24px",
            background: "#f7f7f7",
            color: "white",
            textTransform: "none",
            width: "100%",
          }}
        >
          <Typography
            style={{
              margin: 0,
              padding: 0,
              color: "Black",

              fontWeight: 500,
              fontSize: "17px",
            }}
          >
            Delete
          </Typography>
        </Button>
      </Dialog>
    </div>
  );
}

export default Appbar1;
