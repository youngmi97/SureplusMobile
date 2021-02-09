import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = "75vw";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    maxHeight: "100vh",
    overflow: "hidden",
  },
  drawerPaper: {
    width: drawerWidth,
    maxHeight: "100vh",
    overflow: "hidden",
  },
}));

export default useStyles;
