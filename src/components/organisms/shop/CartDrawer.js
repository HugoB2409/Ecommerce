import React from "react";
import Header from "../../molecules/shop/cartDrawer/Header";
import EmptyCart from "../../molecules/shop/cartDrawer/EmptyCart";
import List from "../../molecules/shop/cartDrawer/List";
import Footer from "../../molecules/shop/cartDrawer/Footer";
import Divider from "@material-ui/core/Divider";
import { useStoreState } from "easy-peasy";
import { makeStyles } from "@material-ui/core/styles";

//TODO: Mettre un SVG de undraw lorsuqe panier est vide
//TODO: ajouter une section avec total, taxe estime, etc.

const useStyles = makeStyles((theme) => ({
  drawerBreakpoints: {
    width: "100vw",
    [theme.breakpoints.up("sm")]: {
      width: "55ch",
    },
    [theme.breakpoints.up("md")]: {
      width: "65ch",
    },
    [theme.breakpoints.up("lg")]: {
      width: "75ch",
    },
  },
}));

const cartDrawer = (props) => {
  const classes = useStyles();
  const products = useStoreState((state) => state.cart.products);

  var total = products.reduce((sum, product) => {
    return sum + parseFloat(product.ProductPrice);
  }, 0);

  return (
    <div
      className={classes.drawerBreakpoints}
      onKeyDown={props.toggleDrawer(false)}
    >
      <Header toggleDrawer={props.toggleDrawer} />
      <Divider />
      {products.length === 0 ? (
        <EmptyCart />
      ) : (
        <React.Fragment>
          <List products={products} />
          <Footer total={total} />
        </React.Fragment>
      )}
    </div>
  );
};

export default cartDrawer;
