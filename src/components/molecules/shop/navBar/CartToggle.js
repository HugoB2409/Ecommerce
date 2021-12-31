import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { CartIcon } from "../../../atoms/icons";

const CartToggle = (props) => {
  return (
    <IconButton onClick={props.toggleDrawer(true)}>
      <CartIcon cartSize={props.cartSize} />
    </IconButton>
  );
};

export default CartToggle;
