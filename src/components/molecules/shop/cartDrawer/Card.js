import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import { makeStyles } from "@material-ui/core/styles";

//TODO: Trop gros pour une molecule
//TODO: Clean le code
//TODO: Utiliser le component Card a la place

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  productImage: {
    display: "block",
    margin: theme.spacing(3, 1),
    maxWidth: 128,
    maxHeight: 128,
  },
  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      textDecoration: "underline",
      color: theme.palette.primary.light,
    },
  },
  info: {
    display: "flex",
    alignItems: "center",
  },
  priceTypography: {
    flexGrow: 1,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const Card = (props) => {
  const classes = useStyles();
  const removeProduct = useStoreActions((action) => action.cart.removeProduct);

  const handleClick = () => {
    removeProduct(props.body.ProductId);
  };

  return (
    <Paper elevation={4} className={classes.container}>
      <Grid container>
        <Grid item>
          <img
            className={classes.productImage}
            alt="product"
            src={`${props.body.ProductThumbnail}`}
          />
        </Grid>

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item>
              <Link
                to={`/productInfo/${props.body.ProductId}`}
                className={classes.link}
              >
                <Typography gutterBottom variant="subtitle1">
                  {`${props.body.ProductName}`}
                </Typography>
              </Link>
            </Grid>
            <Grid item className={classes.info}>
              <Typography className={classes.priceTypography}>
                ${`${props.body.ProductPrice}`}
              </Typography>
              <Button size="small" color="secondary" onClick={handleClick}>
                <RemoveShoppingCartIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Card;
