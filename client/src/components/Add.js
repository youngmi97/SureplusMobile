// import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import InputLabel from "@material-ui/core/InputLabel";

import Button from "@material-ui/core/Button";
import {
  fade,
  makeStyles,
  withStyles,
  useTheme,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import React from "react";
import { ButtonBase, Typography, Avatar, Box, Drawer } from "@material-ui/core";
//Sort
import FormControl from "@material-ui/core/FormControl";

import InputBase from "@material-ui/core/InputBase";
import { Select } from "@material-ui/core";
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MenuItem from "@material-ui/core/MenuItem";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import "../App.css";

const drawerWidth = "100vw";
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
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
    marginRight: 2,
    height: "4.69vh",
    width: "100%",
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
    padding: theme.spacing(0, 1),
    height: "4.69vh",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.grey.main,
  },
  input: {
    color: "#7610EB",
    textAlign: "right",
  },
  inputRoot: {
    alignItems: "center",
    justifyItems: "center",
    height: "100%",
    width: "100%",
    borderRadius: 18,
  },
  inputInput: {
    padding: 0,
    fontSize: 16,
    backgroundColor: "#C8C7CC",
    color: "black",
    height: "4.69vh",
    opacity: 0.5,
    borderRadius: 18,
    fontWeight: 300,

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,

    width: "100%",
    "&:hover": {
      // backgroundColor: fade(theme.palette.common.white, 0.25),
      // border: `1px solid ${theme.palette.primary.main}`,
    },
    "&:focus": {
      width: "20ch",
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
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
            style={{
              margin: 0,
              padding: 0,
              height: "2.6vh",
              paddingTop: "2.35vh",
              paddingBottom: "2.35vh",
              backgroundColor: "white",
            }}
          >
            <Box
              p={1}
              style={{
                position: "relative",
                margin: 0,
                padding: 0,
                left: "2.13vw",
              }}
            >
              <div
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
                position: "relative",
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
          <Box
            display="flex"
            p={1}
            style={{
              margin: 0,
              padding: 0,
              height: "6.25vh",
              backgroundColor: "white",
            }}
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchRoundedIcon />
              </div>
              <InputBase
                placeholder="Search subscriptions"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Box>
          <DialogContent className={classes.Avatar}>
            <div>
              <List style={{ padding: 24, paddingBottom: "14.3vh" }}>
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
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
              anchor="bottom"
            >
              <div
                style={{
                  paddingRight: 16,
                  paddingLeft: 16,
                  height: "14.3vh",
                }}
              >
                <Button
                  style={{
                    margin: 0,
                    marginTop: 16,
                    padding: 0,
                    height: "5.99vh",
                    borderRadius: "24px",
                    background:
                      "linear-gradient(90deg, #8610EB 0%, #430985 100%)",
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
                    Create Custom Subscription
                  </Typography>
                </Button>
              </div>
            </Drawer>
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
            style={{
              margin: 0,
              padding: 0,
              height: "2.6vh",
              paddingTop: "2.35vh",
              paddingBottom: "2.35vh",
              backgroundColor: "white",
            }}
          >
            <Box
              p={1}
              style={{
                position: "relative",
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
                  src="Icons[32]/Type=Back.svg"
                  style={{ width: "3.12vh", height: "3.12vh" }}
                />
              </IconButton>
            </Box>
            <Box p={1} flexGrow={1} style={{ margin: 0, padding: 0 }}>
              <Typography
                style={{
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
                position: "relative",
                margin: 0,
                padding: 0,
                right: "2.13vw",
              }}
            >
              <IconButton
                aria-label="close"
                onClick={() => {
                  props.handleClose();
                  handleClose1();
                }}
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
          <DialogContent
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
            <div
              style={{
                position: "relative",
                backgroundColor: "black",
                marginTop: 24,
                height: "158px",
                width: "257px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.6)",
              }}
            >
              <img
                src="/g5747.svg"
                style={{
                  position: "absolute",

                  left: 150,
                  top: -38,
                  marginTop: "2.03vh",
                  width: "121px",
                  height: "221px",
                }}
              />
              <Typography
                style={{
                  margin: 0,
                  padding: 0,
                  marginLeft: 20,
                  marginTop: "85px",
                  fontSize: "24px",
                  color: "white",
                }}
              >
                Abast
              </Typography>
              <Typography
                style={{
                  margin: 0,
                  padding: 0,
                  marginLeft: 20,
                  marginTop: "1px",
                  fontSize: "14px",
                  color: "white",
                }}
              >
                $12.99 • 2 weeks
              </Typography>
            </div>
            <List
              style={{ padding: 24, width: "100%", paddingBottom: "14.3vh" }}
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
                    fontSize: "2.21vh",
                    color: "#8A8A8F",
                  }}
                >
                  Name
                </Typography>
                <ListItemSecondaryAction
                  style={{ fontWeight: 400, color: "#000000" }}
                >
                  <InputBase
                    placeholder="Netflix"
                    inputProps={{
                      style: { textAlign: "right" },
                    }}
                    style={{
                      margin: 0,
                      padding: 0,
                      Width: 0,
                    }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem
                button={false}
                className={classes.List}
                style={{ marginBottom: "1vh", borderRadius: "12px" }}
              >
                <Typography
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: "2.21vh",
                    color: "#8A8A8F",
                  }}
                >
                  Price
                </Typography>
                <ListItemSecondaryAction
                  style={{
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  <InputBase
                    placeholder="$12.99"
                    inputProps={{
                      style: { textAlign: "right" },
                    }}
                    style={{
                      margin: 0,
                      padding: 0,
                      Width: 0,
                    }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem
                button={false}
                className={classes.List}
                style={{ marginBottom: "1vh", borderRadius: "12px" }}
              >
                <Typography
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: "2.21vh",
                    color: "#8A8A8F",
                  }}
                >
                  Cycle
                </Typography>
                <ListItemSecondaryAction
                  style={{ fontWeight: 400, color: "#000000" }}
                >
                  <Grid container spacing={1} alignItems="center">
                    <Grid item>
                      <div style={{ color: "#7610EB" }}>
                        <EventRoundedIcon />
                      </div>
                    </Grid>
                    <Grid item>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          value={selectedDate}
                          onChange={handleDateChange}
                          fullWidth
                          InputProps={{
                            className: classes.input,
                            disableUnderline: "true",
                          }}
                          style={{ width: 105 }}
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                  </Grid>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem
                className={classes.List}
                style={{ marginBottom: "1vh", borderRadius: "12px" }}
              >
                <Typography
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: "2.21vh",
                    color: "#8A8A8F",
                  }}
                >
                  Remind me
                </Typography>
                <ListItemSecondaryAction
                  style={{ fontWeight: 400, color: "#000000" }}
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
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
              anchor="bottom"
            >
              <div
                style={{
                  paddingRight: 16,
                  paddingLeft: 16,
                  height: "14.3vh",
                }}
              >
                <Button
                  style={{
                    margin: 0,
                    marginTop: 16,
                    padding: 0,
                    height: "5.99vh",
                    borderRadius: "24px",
                    background:
                      "linear-gradient(90deg, #8610EB 0%, #430985 100%)",
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
                    Add Subscription
                  </Typography>
                </Button>
              </div>
            </Drawer>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
