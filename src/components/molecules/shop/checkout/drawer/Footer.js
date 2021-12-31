import React from "react";
import Button from "@material-ui/core/Button";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//TODO: ajouter une section avec total, taxe estime, etc.

const useStyles = makeStyles((theme) => ({
  button: {
    width: "90%",
    margin: theme.spacing(3, "auto"),
    display: "block",
  },
  sticky: {
    position: "fixed",
    width: "100vw",
    [theme.breakpoints.up("md")]: {
      width: "55ch",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70ch",
    },
    bottom: 0,
    background: theme.palette.background.paper,
  },
  price: {
    marginLeft: theme.spacing(2),
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.sticky}>
      <Divider />
      <h2 className={classes.price}>Total: ${props.total}.00</h2>
      <Button
        className={classes.button}
        fullWidth
        color="secondary"
        variant="contained"
        type="submit"
      >
        Buy
      </Button>
    </div>
  );
};

export default Footer;
