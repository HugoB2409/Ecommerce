import React from "react";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawerFooter: {
    position: "fixed",
    bottom: 0,
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
  button: {
    textDecoration: "none",
    color: "white",
  },
  checkoutButton: {
    display: "block",
    margin: theme.spacing(3, "auto"),
    width: "90%",
  },
  price: {
    marginLeft: theme.spacing(2),
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.drawerFooter}>
      <Divider />
      <h2 className={classes.price}>Total: ${props.total}.00</h2>
      <Link to="/Checkout" className={classes.button}>
        <Button
          color="primary"
          variant="contained"
          className={classes.checkoutButton}
        >
          Checkout
        </Button>
      </Link>
    </div>
  );
};

export default Footer;
