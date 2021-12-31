import React from "react";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  title: {
    display: "block",
  },
  navBarTitle: {
    color: fade(theme.palette.common.white, 1),
    "&:hover": {
      color: fade(theme.palette.common.white, 0.8),
    },
  },
  cartDrawerTitle: {
    display: "block",
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  productTitle: {
    display: "block",
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },
}));

export const Title = (props) => {
  const classes = useStyles();

  return (
    <Typography variant="h4" align="left" className={classes.title}>
      {props.children}
    </Typography>
  );
};

export const NavBarTitle = (props) => {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.link}>
      <Typography variant="h4" align="left" className={classes.navBarTitle}>
        {props.children}
      </Typography>
    </Link>
  );
};

export const CartDrawerTitle = (props) => {
  const classes = useStyles();

  return (
    <Typography variant="h4" className={classes.cartDrawerTitle} noWrap>
      {props.children}
    </Typography>
  );
};

export const ProductTitle = (props) => {
  const classes = useStyles();

  return (
    <Typography variant="h4" align="left" className={classes.productTitle}>
      {props.children}
    </Typography>
  );
};

export const SubTitle = (props) => {
  return (
    <Typography variant="h6" gutterBottom>
      {props.children}
    </Typography>
  );
};
