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
    backgroundColor:"#ECECEC"
  },
  dialogpaperScroll2: {
    maxWidth:"80vw",
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
          to={props.link}
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
            src="Icons[32]/Type=More.svg"
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
        onClick={()=>(setOpen1(true),setOpen(false))}
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
            Not a subscription
          </Typography>
        </Button>
      </Dialog>
      <Dialog
        
        maxWidth={"90vw"}
        open={open1}
        onClose={()=>(setOpen1(false), setOpen(true))}
        classes={{
          paper: classes.dialogPaper2,
          paperScrollPaper: classes.dialogpaperScroll2,
        }}
        style={{
          padding: 0,
          margin: 0,
        }}
      >
      <Typography style={{fontSize:15,color:"#333333", margin:0,padding:0, fontWeight:600,}}>Delete this subscription?</Typography>
      <Typography style={{fontSize:14,color:"#333333", margin:0,padding:0, marginTop:12, fontWeight:500}}>Are you sure you want to delete this subscription? This payment will no longer be tracked.</Typography>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
        <Button
        onClick={()=>(setOpen1(false), setOpen(true))}
          style={{
            margin: 0,
            marginTop: 20,
            padding: 0,
            height: "5.99vh",
            borderRadius: "8px",
            background: "#C8C7CC",
            color: "white",
            textTransform: "none",
            width: "45%",
            marginRight:"2%",
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
            Cancel
          </Typography>
        </Button><Button
          style={{
            margin: 0,
            marginTop: 20,
            padding: 0,
            height: "5.99vh",
            borderRadius: "8px",
            background: "#FF3B30",
            color: "white",
            textTransform: "none",
            width: "45%",
            marginLeft:"2%",
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
            Delete
          </Typography>
        </Button></div>
      </Dialog>
    </div>
  );
}

export default Appbar1;
