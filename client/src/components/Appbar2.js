import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Box, Tabs, Tab } from "@material-ui/core";
import "../App.css";

const StyledTabs = withStyles({
  root: {
    minHeight: "auto",
    padding: 0,
    margin: 0,
  },
  indicator: {
    display: "flex",
    padding: 0,
    justifyContent: "center",
    backgroundColor: "transparent",
    bottom: 0,
    "& > span": {
      width: "90%",
      backgroundColor: "black",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    minHeight: "auto",
    minWidth: "auto",
    textTransform: "none",
    color: "#000000",
    fontWeight: 500,
    fontSize: "2.08vh",
    margin: 0,
    padding: 2,
    opacity: 0.2,
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

export default function Appbar2(props) {
  const [value, setValue] = React.useState(0);
  const open = props.open;
  const setOpen = props.setOpen;

  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        p={1}
        alignItems="center"
        style={{ margin: 0, padding: 0, height: "5.72vh" }}
      >
        <Box
          p={1}
          flexGrow={1}
          style={{ margin: 0, padding: 0, marginLeft: "2.13vw" }}
        >
          <Button
            onClick={setOpen}
            style={{
              padding: 0,
              margin: 0,
              minHeight: 0,
              minWidth: 0,
              borderRadius: "100%",
            }}
          >
            <img
              alt="name"
              src="MyProfile.png"
              style={{ width: "4.16vh", height: "4.16vh" }}
            ></img>
          </Button>
        </Box>
        <Box
          p={1}
          style={{
            margin: 0,
            padding: 0,
            marginRight: "2.13vw",
          }}
        >
          <Button
            style={{
              padding: 0,
              margin: 0,
              minHeight: 0,
              minWidth: 0,
              borderRadius: "100%",
            }}
          >
            <img
              alt="name"
              src="search.svg"
              style={{ width: "4.16vh", height: "4.16vh" }}
            ></img>
          </Button>
        </Box>
        <Box
          p={1}
          style={{
            margin: 0,
            padding: 0,
            marginRight: "2.13vw",
          }}
        >
          <Button
            style={{
              padding: 0,
              margin: 0,
              minHeight: 0,
              minWidth: 0,
              borderRadius: "100%",
            }}
          >
            <img
              alt="name"
              src="Icons.svg"
              style={{ width: "4.16vh", height: "4.16vh" }}
            ></img>
          </Button>
        </Box>
      </Box>
    </div>
  );
}
