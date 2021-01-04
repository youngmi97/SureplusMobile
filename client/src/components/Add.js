// import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import InputLabel from "@material-ui/core/InputLabel";

import EventRoundedIcon from "@material-ui/icons/EventRounded";
import TextField from "@material-ui/core/TextField";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import UpdateRoundedIcon from "@material-ui/icons/UpdateRounded";
import Button from "@material-ui/core/Button";
import {
  fade,
  makeStyles,
  withStyles,
  useTheme,
} from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";

import FormHelperText from "@material-ui/core/FormHelperText";

import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DialogContent from "@material-ui/core/DialogContent";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";

import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import React from "react";
import { ButtonBase, Typography, Avatar, Box } from "@material-ui/core";
//Sort
import FormControl from "@material-ui/core/FormControl";

import InputBase from "@material-ui/core/InputBase";
import { Select } from "@material-ui/core";

import MenuItem from "@material-ui/core/MenuItem";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import "../App.css";

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
  Avatar1: {
    backgroundColor: "#fafafa",
    height: 183,
  },
  marginStyle: {
    flexGrow: 1,
    display: "block",
  },
  dialogPaper: {
    margin: 0,
    width: "100vw",
    height: "100vh",
    padding: 0,
    borderRadius: "15px",
  },
  imageIcon: { width: "4.15vh", height: "4.15vh" },
  search: {
    position: "relative",
    borderRadius: 8,
    border: "1px solid #EFEFF4",
    backgroundColor: "white",
    marginRight: 2,
    height: "40px",
    width: "auto",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: "384px",
    marginTop: 4,
  },
  selectEmpty: {
    width: 384,
  },
  selectEmpty1: {
    width: 150,
  },
  left: {
    marginLeft: 32,
    marginRight: 32,
    marginTop: 20,
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  left1: {
    marginLeft: 32,
    marginRight: 32,
    marginTop: 20,
  },
  forgrid: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    width: 188,
    height: 56,
    marginRight: 4,
  },
  forgrid1: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    width: 188,
    height: 56,
    marginLeft: 4,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "40px",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.grey.main,
  },
  inputRoot: {
    color: "inherit",
    height: "100%",
    alignItems: "center",
    justifyItems: "center",
    borderRadius: 8,
  },
  inputInput: {
    padding: "10.5px 26px 10.5px 12px",
    fontSize: 16,

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "12ch",
    "&:hover": {
      borderRadius: 8,
      // backgroundColor: fade(theme.palette.common.white, 0.25),
      // border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: "0 0 0 0.2rem rgba(118, 16, 235, 0.25)",
    },
    "&:focus": {
      width: "20ch",
      borderRadius: 8,
      boxShadow: "0 0 0 0.2rem rgba(118, 16, 235, 0.25)",
    },
  },
  inputInput1: {
    padding: "10.5px 26px 10.5px 12px",
    fontSize: "14px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "20ch",
  },
  dialogpaperScroll: {
    marginTop: "7.2vh",
    maxHeight: "92.8vh",
  },
  Switchstyle: {
    height: "40px",
  },
  regularButton: {
    padding: "9.5px",
    height: "100%",
    borderRadius: 8,
    margin: theme.spacing(1),
    // border: "1px solid #EFEFF4",
    color: theme.palette.grey.main,
    backgroundColor: "white",
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(239, 239, 244, 0.25)",
    },
  },
  highlightButton: {
    padding: "9.5px",
    height: "40px",
    borderRadius: 8,
    backgroundColor: theme.palette.primary.light,
    color: "white",
    border: "1px solid #7610EB",
    margin: theme.spacing(1),
    "&:hover, &:focus": {
      backgroundColor: "#7C45BA",
      borderColor: "#5C0CB8",
    },
  },
  sortButton: {
    padding: "9.5px",
    borderRadius: "8px 8px 8px 8px",
    margin: theme.spacing(1),
    color: theme.palette.grey.main,
    backgroundColor: "white",
  },
  formControl: {
    minWidth: 120,
  },
  sortStyle: {
    width: "fit-content",
    borderRadius: 8,
  },

  menuItemStyle: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    backgroundColor: "#FFFFFF",
  },
  margins: {
    marginTop: 24,
  },
  Title: {
    fontSize: "24px",
    flexGrow: 1,
  },
  Title1: {
    fontSize: "14px",
    color: "#666666",
    flexGrow: 1,
  },
  closeButton: {
    position: "absolute",
    right: 16,
    top: 16,
    fontSize: 32,
    "&:hover, &:focus": {
      backgroundColor: "#ffffff",
      borderColor: "#ffffff",
    },
  },
  closeButton1: {
    position: "absolute",
    left: theme.spacing(1),
    top: theme.spacing(1),
    fontSize: 32,
    "&:hover, &:focus": {
      backgroundColor: "#fafafa",
      borderColor: "#fafafa",
    },
  },
  ListItemSize4: {
    fontSize: 11,
    height: 32,
    minWidth: "330px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  inputmargin: {
    margin: 0,
    height: 40,
  },
  remind: {
    fontSize: 16,
  },
  List: {
    backgroundColor: "white",
    height: "8.3vh",
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
        backgroundColor: "#7610EB",
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

export default function Subscription(props) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [index, setIndex] = React.useState(0);
  const [plan, setPlan] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [temporalname, setName] = React.useState(false);

  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [selectedDate, handleDateChange] = React.useState(new Date());

  const [open1, setOpen1] = React.useState(false);

  const changeName = (name) => {
    setName(name);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleIndex = (event) => {
    setIndex(event.target.value);
    setPlan(Netflix_plan[event.target.value]);
    setPrice(Netflix_price[event.target.value]);
  };

  const lists = ["Aaptiv", "AppleMusic", "AudiSelect", "Avast", "BarkBox"];

  lists.sort();

  const Netflix_plan = ["", "Basic", "Standard", "Premium"];
  const Netflix_price = ["", "$8.99", "$12.99", "$15.99"];
  const [state, setState] = React.useState({
    checkedA: true,
  });

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth={"100vw"}
        open={props.open}
        onClose={props.handleClose}
        classes={{
          paper: classes.dialogPaper,
          paperScrollPaper: classes.dialogpaperScroll,
        }}
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        <div className={classes.Dialog}>
          <Box
            display="flex"
            p={1}
            alignItems="center"
            style={{
              margin: 0,
              padding: 0,
              height: "6.51vh",
              backgroundColor: "white",
            }}
          >
            <Box
              p={1}
              style={{
                position: "absolute",
                margin: 0,
                padding: 0,
                left: "2.13vw",
              }}
            >
              <SearchRoundedIcon
                style={{
                  width: "3.12vh",
                  height: "3.12vh",
                  margin: 0,
                  padding: 0,
                }}
              />
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
                Add Subscriptions
              </Typography>
            </Box>
            <Box
              p={1}
              style={{
                position: "absolute",
                margin: 0,
                padding: 0,
                right: "2.13vw",
              }}
            >
              <IconButton
                aria-label="close"
                onClick={props.handleClose}
                disableRipple={true}
                disableFocusRipple={true}
                style={{ padding: 0, margin: 0, minHeight: 0, minWidth: 0 }}
              >
                <img
                  src="Exit.svg"
                  style={{ width: "3.12vh", height: "3.12vh" }}
                />
              </IconButton>
            </Box>
          </Box>
          <DialogContent className={classes.Avatar}>
            <div>
              <List style={{ padding: 24 }}>
                {lists.map((name) => {
                  return (
                    <ListItem
                      button
                      className={classes.List}
                      style={{ marginBottom: "1vh", borderRadius: "12px" }}
                      onClick={() => {
                        handleClickOpen1();
                        props.handleClose();
                        changeName(name);
                      }}
                    >
                      <ListItemIcon className={classes.ListItemSize}>
                        <img
                          className={classes.imageIcon}
                          src={"/Img/" + name + "/[48].svg"}
                          alt="upcoming"
                        />
                      </ListItemIcon>
                      <Typography
                        style={{ margin: 0, padding: 0, fontSize: "2.21vh" }}
                      >
                        {name}
                      </Typography>
                      <ListItemSecondaryAction>
                        <img src="/MovetoPage.svg" />
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </DialogContent>
        </div>
      </Dialog>
      <Dialog
        fullWidth
        maxWidth={"100vw"}
        open={open1}
        classes={{
          paper: classes.dialogPaper,
          paperScrollPaper: classes.dialogpaperScroll,
        }}
        onClose={() => {
          props.handleClickOpen();
          handleClose1();
        }}
      >
        <div className={classes.Dialog}>
          <Box
            display="flex"
            p={1}
            alignItems="center"
            style={{
              margin: 0,
              padding: 0,
              height: "6.51vh",
              backgroundColor: "white",
            }}
          >
            <Box
              p={1}
              style={{
                position: "absolute",
                margin: 0,
                padding: 0,
                left: "2.13vw",
              }}
            >
              <IconButton
                aria-label="back"
                onClick={() => {
                  props.handleClickOpen();
                  handleClose1();
                }}
                disableRipple={true}
                disableFocusRipple={true}
                style={{ padding: 0, margin: 0, minHeight: 0, minWidth: 0 }}
              >
                <img
                  src="Back.svg"
                  style={{ width: "3.12vh", height: "3.12vh" }}
                />
              </IconButton>
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
                Add Subscriptions
              </Typography>
            </Box>
            <Box
              p={1}
              style={{
                position: "absolute",
                margin: 0,
                padding: 0,
                right: "2.13vw",
              }}
            >
              <Button
                style={{
                  margin: 0,
                  padding: 0,
                  minWidth: 0,
                  minHeight: 0,
                  textTransform: "none",
                }}
              >
                <Typography
                  style={{
                    fontWeight: 400,
                    fontSize: "2.21vh",
                    textAlign: "center",
                  }}
                >
                  Add
                </Typography>
              </Button>
            </Box>
          </Box>
          <DialogContent className={classes.Avatar}>
            <div
              style={{
                marginLeft: 24,
                marginRight: 24,
                backgroundColor: "black",
                marginTop: 24,
                height: "25.44vh",
                borderRadius: "12px",
              }}
            >
              <img
                src="/Img/Avast/[48].svg"
                style={{
                  marginLeft: 16,
                  marginTop: "2.03vh",
                  width: "6.1vh",
                  height: "6.1vh",
                }}
              />
              <Typography
                style={{
                  margin: 0,
                  padding: 0,
                  marginLeft: 16,
                  marginTop: "8.14vh",
                  fontSize: "3.05vh",
                  color: "white",
                }}
              >
                Abast
              </Typography>
              <Typography
                style={{
                  margin: 0,
                  padding: 0,
                  marginLeft: 16,
                  marginTop: "0.5vh",
                  fontSize: "1.78vh",
                  color: "white",
                }}
              >
                Standard Membership • $12.99
              </Typography>
            </div>
            <List style={{ padding: 24 }}>
              <ListItem
                button
                className={classes.List}
                style={{ marginBottom: "1vh", borderRadius: "12px" }}
              >
                <Typography
                  style={{ margin: 0, padding: 0, fontSize: "2.21vh" }}
                >
                  Name
                </Typography>
                <ListItemSecondaryAction
                  style={{ fontWeight: 400, color: "#666666" }}
                >
                  Netflix
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem
                button
                className={classes.List}
                style={{ marginBottom: "1vh", borderRadius: "12px" }}
              >
                <Typography
                  style={{ margin: 0, padding: 0, fontSize: "2.21vh" }}
                >
                  Price
                </Typography>
                <ListItemSecondaryAction
                  style={{ fontWeight: 400, color: "#666666" }}
                >
                  $ 12.99
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem
                button
                className={classes.List}
                style={{ marginBottom: "1vh", borderRadius: "12px" }}
              >
                <Typography
                  style={{ margin: 0, padding: 0, fontSize: "2.21vh" }}
                >
                  Cycle
                </Typography>
                <ListItemSecondaryAction
                  style={{ fontWeight: 400, color: "#666666" }}
                >
                  Monthly
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem
                button
                className={classes.List}
                style={{ marginBottom: "1vh", borderRadius: "12px" }}
              >
                <Typography
                  style={{ margin: 0, padding: 0, fontSize: "2.21vh" }}
                >
                  First Bill
                </Typography>
                <ListItemSecondaryAction
                  style={{ fontWeight: 400, color: "#666666" }}
                >
                  December 23, 2020
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem
                button
                className={classes.List}
                style={{ marginBottom: "1vh", borderRadius: "12px" }}
              >
                <Typography
                  style={{ margin: 0, padding: 0, fontSize: "2.21vh" }}
                >
                  Remind me
                </Typography>
                <ListItemSecondaryAction
                  style={{ fontWeight: 400, color: "#666666" }}
                >
                  <IOSSwitch
                    className={classes.Switchstyle}
                    checked={state.checkedA}
                    onChange={handleChangeSwitch}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
