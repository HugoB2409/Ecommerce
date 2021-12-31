import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//TODO: Utiliser un undraw a la place de l'image

const useStyles = makeStyles((theme) => ({
  emptyCartImg: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    marginTop: "40%",
  },
  emptyCartText: {
    marginTop: theme.spacing(2),
  },
}));

const EmptyCart = () => {
  const classes = useStyles();

  return (
    <div>
      <img
        src={require("../../../../image/empty_cart.png")}
        className={classes.emptyCartImg}
        alt=" Cart is empty"
      />
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        className={classes.emptyCartText}
      >
        Your cart is empty.
      </Typography>
    </div>
  );
};

export default EmptyCart;
