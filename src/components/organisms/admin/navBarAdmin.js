import React from "react";
import Drawer from "../../../components/organisms/admin/drawer/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import ListProducts from "../../../pages/admin/products/Products";
import DashBoard from "../../../pages/admin/DashBoard";
import Orders from "../../../pages/admin/orders/Orders";
import Customers from "../../../pages/admin/customers/Customers";
import Settings from "../../../pages/admin/Settings";
import LogOut from "../../../pages/admin/LogOut";
import AddProduct from "../../../pages/admin/products/NewProduct";
import EditProduct from "../../../pages/admin/products/EditProduct";
import OrderInfo from "../../../pages/admin/orders/OrderDetails";
import CustomerInfo from "../../../pages/admin/customers/CustomerDetails";

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

const NoMatch = () => {
  let location = useLocation();

  return (
    <React.Fragment>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </React.Fragment>
  );
};

const ResponsiveDrawer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap>
            <Link to="/administration" className={classes.Title}>
              Administration
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        props={props}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/administration" exact component={DashBoard} />
          <Route path="/administration/dashboard" exact component={DashBoard} />
          <Route
            path="/administration/products"
            exact
            component={ListProducts}
          />
          <Route path="/administration/orders" exact component={Orders} />
          <Route path="/administration/customers" exact component={Customers} />
          <Route path="/administration/settings" exact component={Settings} />
          <Route path="/administration/logout" exact component={LogOut} />
          <Route
            path="/administration/products/newproduct"
            component={AddProduct}
          />
          <Route
            path="/administration/products/editproduct/:id"
            component={EditProduct}
          />
          <Route path="/administration/orders/:id" component={OrderInfo} />
          <Route
            path="/administration/customers/:id"
            component={CustomerInfo}
          />
          <Route path="*" component={NoMatch} />
        </Switch>
      </main>
    </div>
  );
};

export default ResponsiveDrawer;
