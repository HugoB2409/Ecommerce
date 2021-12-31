import React from "react";
import ProductCard from "../../../molecules/ProductCard";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  typography: {
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
  grid: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const ProductsList = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {props.apiResponse.length !== 0 ? (
        <Grid container spacing={4} className={classes.grid}>
          {Object.keys(props.apiResponse).map((key) => (
            <Grid item xs={12} sm={6} lg={4} key={key}>
              <ProductCard body={props.apiResponse[key]} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h3" className={classes.typography}>
          No product for sale{" "}
          <span role="img" aria-label="sad emoji">
            😢
          </span>
          . Come back later.
        </Typography>
      )}
    </React.Fragment>
  );
};

export default ProductsList;
