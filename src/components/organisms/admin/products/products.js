import React from "react";
import ListProductsCard from "../../../molecules/ProductsListCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  noProduct: {
    textAlign: "center",
    margin: 50,
  },
}));

const products = (props) => {
  const classes = useStyles();

  return (
    <div>
      {props.filteredProduct.length !== 0 ? (
        <Grid container>
          {Object.keys(props.filteredProduct).map((key) => (
            <Grid item xs={12} lg={6} xl={4} key={key}>
              <ListProductsCard
                body={props.filteredProduct[key]}
                delete={props.delete}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div className={classes.noProduct}>
          Vous n'avez aucun produit enregistré.
          <br />
          Clicker sur 'ajouter un produit' pour enregistrer votre premier
          produit.
        </div>
      )}
    </div>
  );
};

export default products;
