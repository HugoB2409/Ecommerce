import React from "react";
import MuiExpansionPanel from "@material-ui/core/Accordion";
import Summary from "../../../molecules/shop/checkout/expansionPanel/Summary";
import Details from "../../../molecules/shop/checkout/expansionPanel/Details";
import { makeStyles } from "@material-ui/core/styles";
import { useStoreState } from "easy-peasy";

//TODO: UI/UX

const useStyles = makeStyles((theme) => ({
  panel: {
    position: "sticky",
    top: 56,
    zIndex: 1000,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      top: 64,
    },
  },
}));

const ExpansionPanel = () => {
  const classes = useStyles();
  const products = useStoreState((state) => state.cart.products);
  var total = products.reduce((sum, product) => {
    return sum + parseFloat(product.ProductPrice);
  }, 0);
  return (
    <MuiExpansionPanel className={classes.panel}>
      <Summary cartSize={products.length} total={total} />
      <Details products={products} />
    </MuiExpansionPanel>
  );
};

export default ExpansionPanel;
