import React from "react";
import Header from "../../../molecules/shop/checkout/drawer/Header";
import List from "../../../molecules/shop/checkout/drawer/List";
import Footer from "../../../molecules/shop/checkout/drawer/Footer";
import MuiDrawer from "@material-ui/core/Drawer";
import { useStoreState } from "easy-peasy";
import { makeStyles } from "@material-ui/core/styles";

//TODO: Mettre un SVG de undraw lorsque panier est vide
//TODO: UI

const useStyles = makeStyles((theme) => ({
  drawer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      width: "55ch",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
      width: "70ch",
    },
  },
  drawerPaper: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      width: "55ch",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
      width: "70ch",
    },
  },
}));

const Drawer = () => {
  const classes = useStyles();
  const products = useStoreState((state) => state.cart.products);
  var total = products.reduce((sum, product) => {
    return sum + parseFloat(product.ProductPrice);
  }, 0);
  return (
    <MuiDrawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="right"
    >
      <Header />
      <List products={products} />
      <Footer total={total} />
    </MuiDrawer>
  );
};

export default Drawer;
