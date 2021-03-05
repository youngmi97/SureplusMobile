// import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";

import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";

import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Typography, Box, Dialog } from "@material-ui/core";
//Sort

import InputBase from "@material-ui/core/InputBase";

import "../App.css";
import { set, get } from "idb-keyval";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    bottom: 0,
    backgroundColor: "#ffffff",
  },
  ListItemSize5: {
    color: "white",
    borderColor: "white",
    backgroundColor: "#7610EB",
    fontSize: "14px",
    fontWeight: 400,
    alignItems: "center",
    borderRadius: 5,
    textTransform: "none",
    height: "40px",
  },
  Dialog: {
    height: "100vh",
    width: "100%",
    padding: 0,
    overflowY: "auto",
    backgroundColor: "#f1f2f4",
  },
  Dialog1: {
    width: "448px",
    height: "563px",
    backgroundColor: "#ffffff",
  },
  Avatar: {
    Width: "100%",
    margin: 0,
    padding: 0,
  },

  dialogPaper: {
    margin: 0,
    width: "100vw",
    height: "100vh",
    padding: 0,
    borderRadius: "15px",
  },

  dialogPaper2: {
    margin: 0,
    width: "70vw",
    height: "100vh",
    padding: 20,
    borderRadius: "15px 15px 15px 15px",
    backgroundColor: "#ECECEC",
  },
  dialogpaperScroll2: {
    maxWidth: "70vw",
    maxHeight: "22vh",
  },

  List: {
    backgroundColor: "white",
    height: "7.29vh",
    "&:hover, &:focus": {
      backgroundColor: "white",
    },
  },
  List1: {
    backgroundColor: "white",
    height: "32.5vh",
    "&:hover, &:focus": {
      backgroundColor: "white",
    },
  },
}));
const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#4CD964",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
const shortmonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export default function Subscription(props) {
  const classes = useStyles();

  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [ind1, setIndex1] = React.useState(0);
  const [day, setDay] = React.useState(1);

  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState(0);

  const [open1, setOpen1] = React.useState(false);

  const changeName = (name) => {};

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const lists = ["Aaptiv", "AppleMusic", "AudiSelect", "Avast", "BarkBox"];

  lists.sort();

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const [value, setValue] = React.useState(null);

  const [enable, setEnable] = React.useState(true);
  const [email, setEmail] = React.useState("");

  const [text, setText] = React.useState("");
  const onChange = (event) => {
    if (event.target.value == "") {
      setEnable(true);
    } else {
      setEnable(false);
    }
  };

  const handleEmail = (email) => {
    if (email == "") {
      set("email", "your@email.com")
        .then(() => console.log("It worked!"))
        .catch((err) => console.log("It failed!", err));
    } else {
      set("email", email)
        .then(() => console.log("It worked!"))
        .catch((err) => console.log("It failed!", err));
    }
  };

  get("email").then((val) => {
    if (val == null) {
      setEmail("your@email.com");
    } else {
      setEmail(val);
    }
  });

  return (
    <div>
      <div className={classes.Dialog}>
        <div
          className={classes.Avatar}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <List
            style={{
              padding: 24,
              paddingTop: 20,
              width: "100%",
              paddingBottom: "14.3vh",
            }}
          >
            <ListItem
              button={false}
              className={classes.List}
              style={{ marginBottom: "1vh", borderRadius: "12px" }}
            >
              <Typography
                style={{
                  margin: 0,
                  padding: 0,
                  fontWeight: 500,
                  fontSize: "2.21vh",
                  color: "#8A8A8F",
                }}
              >
                Email
              </Typography>
              <ListItemSecondaryAction
                style={{ fontWeight: 400, color: "#000000" }}
              >
                <InputBase
                  placeholder={email}
                  inputProps={{
                    style: { textAlign: "right" },
                  }}
                  style={{
                    margin: 0,
                    padding: 0,
                    width: "300px",
                  }}
                  onChange={(event) => setValue(event.target.value)}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <div
              button={false}
              className={classes.List1}
              style={{ borderRadius: "12px", padding: 12 }}
            >
              <InputBase
                placeholder={"Write your message here"}
                inputProps={{
                  style: {
                    textAlign: "left",
                    width: "300px",
                    fontWeight: 500,
                    color: "black",
                    opacity: 1,
                  },
                }}
                onChange={onChange}
                style={{
                  margin: 0,
                  padding: 0,
                }}
              />
            </div>
          </List>
          {enable ? (
            <Button
              onClick={() => (handleEmail(value), handleClickOpen1())}
              disabled
              style={{
                position: "absolute",
                bottom: 24,
                margin: 0,
                padding: 0,
                height: "48px",
                borderRadius: "24px",
                background: "linear-gradient(90deg, #8610EB 0%, #430985 100%)",
                color: "white",
                textTransform: "none",
                width: "calc(100% - 48px)",
              }}
            >
              <Typography
                style={{
                  margin: 0,
                  padding: 0,
                  color: "#666666",

                  fontWeight: 500,
                  fontSize: "17px",
                }}
              >
                Send
              </Typography>
            </Button>
          ) : (
            <Button
              onClick={() => (handleEmail(value), handleClickOpen1())}
              style={{
                position: "absolute",
                bottom: 24,
                margin: 0,
                padding: 0,
                height: "48px",
                borderRadius: "24px",
                background: "linear-gradient(90deg, #8610EB 0%, #430985 100%)",
                color: "white",
                textTransform: "none",
                width: "calc(100% - 48px)",
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
                Send
              </Typography>
            </Button>
          )}
        </div>
      </div>
      <Dialog
        open={open1}
        onClose={() => setOpen1(false)}
        classes={{
          paper: classes.dialogPaper2,
          paperScrollPaper: classes.dialogpaperScroll2,
        }}
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        <Typography
          style={{
            fontSize: 20,
            color: "#333333",
            margin: 0,
            padding: 0,
            fontWeight: 600,
          }}
        >
          Your message has been sent!
        </Typography>
        <Typography
          style={{
            fontSize: 14,
            color: "#333333",
            margin: 0,
            padding: 0,
            marginTop: 12,
            fontWeight: 500,
          }}
        >
          Your message has been sent to our developers. We will get back to you
          asap.
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              position: "absolute",
              margin: 0,
              bottom: 15,
              padding: 0,
              height: "5.99vh",
              borderRadius: "8px",
              background: "#7610EB",
              color: "white",
              textTransform: "none",
              width: "90%",
            }}
            component={Link}
            to={{ pathname: "/" }}
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
              Got it 👍
            </Typography>
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
