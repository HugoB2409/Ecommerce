import React from "react";
import NavBar from "../../components/organisms/shop/NavBar";
import { ProductTitle } from "../../components/atoms/Labels";
import ProductSpecificInfo from "../../components/organisms/shop/productDetails/ProductSpecificInfo";
import ProductGeneralInfo from "../../components/organisms/shop/productDetails/ProductGeneralInfo";
import Copyright from "../../components/molecules/Copyright";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Container, Divider } from "@material-ui/core";
import { useFetch } from "../../utils/hook";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    minHeight: "100vh",
  },
  content: {
    paddingBottom: "1rem",
  },
  divider: {
    margin: theme.spacing(4, 0),
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
}));

const ProductPage = (props) => {
  const classes = useStyles();
  const [apiResponse, loading] = useFetch(
    `http://localhost:8080/product/${props.match.params.id}`
  );

  return (
    <div className={classes.container}>
      <NavBar />
      <div className={classes.content}>
        {!loading ? (
          <Container>
            <ProductTitle>{apiResponse.ProductName}</ProductTitle>
            <Divider className={classes.divider} />
            <ProductGeneralInfo apiResponse={apiResponse} />
            <Divider className={classes.divider} />
            <ProductSpecificInfo apiResponse={apiResponse} />
          </Container>
        ) : (
          <LinearProgress />
        )}
      </div>
      <div className={classes.footer}>
        <Copyright />
      </div>
    </div>
  );
};

export default ProductPage;
