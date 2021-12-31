import React from "react";
import { NavBarTitle } from "../../atoms/Labels";
import SearchBar from "../../molecules/shop/navBar/SearchBar";
import MobileSearchBar from "../../molecules/shop/navBar/MobileSearchBar";
import CartDrawer from "./CartDrawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CartToggle from "../../molecules/shop/navBar/CartToggle";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import { useStoreState } from "easy-peasy";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  smallLogo: {
    flexGrow: 1,
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const cartSize = useStoreState((state) => state.cart.products.length);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <AppBar position="sticky">
      <CssBaseline />
      <Toolbar>
        <div className={classes.logo}>
          <NavBarTitle className={classes.logo}>
            <img src={require("../../../image/logo1.png")} alt="logo" />
          </NavBarTitle>
        </div>
        <div className={classes.smallLogo}>
          <NavBarTitle className={classes.logo}>
            <img
              src={require("../../../image/smalllogo.png")}
              alt="logo"
              width={65}
              height={65}
            />
          </NavBarTitle>
        </div>
        {!props.minimal && (
          <React.Fragment>
            <SearchBar />
            <MobileSearchBar />
            <CartToggle toggleDrawer={toggleDrawer} cartSize={cartSize} />
            <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
              <CartDrawer toggleDrawer={toggleDrawer} />
            </Drawer>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
