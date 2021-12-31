import React from "react";
import { Dashboard, Product, Order, Customer, Setting, Logout } from "./Links";
import Divider from "@material-ui/core/Divider";
import MuiDrawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  Title: {
    textDecoration: "none",
    color: "white",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
}));

const drawer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {Dashboard}
        {Product}
        {Order}
        {Customer}
      </List>
      <Divider />
      {Setting}
      {Logout}
    </React.Fragment>
  );
};

const Drawer = (props) => {
  const classes = useStyles();
  const { container } = props;
  const theme = useTheme();

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden mdUp implementation="css">
        <MuiDrawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer()}
        </MuiDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <MuiDrawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer()}
        </MuiDrawer>
      </Hidden>
    </nav>
  );
};

export default Drawer;
