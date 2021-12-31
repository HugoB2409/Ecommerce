import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MUISearchIcon from "@material-ui/icons/Search";
import { ShoppingCart } from "@material-ui/icons";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  shoppingCartIcon: {
    color: fade(theme.palette.common.white, 1),
    "&:hover": {
      color: fade(theme.palette.common.white, 0.8),
    },
  },
}));

export const SearchIcon = (props) => {
  const classes = useStyles();

  return (
    <IconButton className={classes.searchIcon}>
      <MUISearchIcon />
    </IconButton>
  );
};

export const CartIcon = (props) => {
  const classes = useStyles();

  return (
    <Badge
      badgeContent={props.cartSize}
      color="secondary"
      className={classes.shoppingCartIcon}
    >
      <ShoppingCart />
    </Badge>
  );
};
