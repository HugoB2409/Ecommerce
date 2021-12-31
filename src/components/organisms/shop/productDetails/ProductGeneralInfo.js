import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Carousel } from "react-responsive-carousel";
import { useStoreActions, useStoreState } from "easy-peasy";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//TODO: Decomposer en molecules
//TODO: le spacing dans la grid peut ajouter un scroll bar horizontal sur mobile

const ProductGeneralInfo = (props) => {
  const addProduct = useStoreActions((action) => action.cart.addProduct);
  const [disabled, setDisabled] = useState(false);
  const products = useStoreState((state) => state.cart.products);

  const resultat = products.find(
    (produit) => produit.ProductId === parseInt(props.apiResponse.ProductId, 10)
  );

  if (resultat !== undefined && disabled === false) {
    setDisabled(true);
  }

  const onClickHandler = () => {
    addProduct(props.apiResponse);
    setDisabled(true);
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Carousel dynamicHeight>
            {props.apiResponse.images.map((image) => {
              return <img key={image} src={image} alt="produit" />;
            })}
          </Carousel>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="body1"
                align="justify"
                color="textPrimary"
                paragraph
              >
                {props.apiResponse.ProductDescription}
              </Typography>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={6}>
                <Typography
                  //className={classes.priceTypography}
                  gutterBottom
                  variant="h5"
                >
                  {props.apiResponse.ProductPrice} $
                </Typography>
              </Grid>
              <Grid item align="right" xs={12} sm={6}>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={onClickHandler}
                  disabled={disabled}
                >
                  Add to cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductGeneralInfo;
