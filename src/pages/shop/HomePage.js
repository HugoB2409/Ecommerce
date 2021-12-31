import React from "react";
import NavBar from "../../components/organisms/shop/NavBar";
import ProductsList from "../../components/organisms/shop/homePage/ProductsList";
import Copyright from "../../components/molecules/Copyright";
import { useFetch } from "../../utils/hook";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  container: {
    position: "relative",
    minHeight: "100vh - 64px",
  },
  content: {
    paddingBottom: "2.5rem",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

const Shop = () => {
  const classes = useStyles();
  const [apiResponse, loading] = useFetch(`http://localhost:8080/productImage`);

  return (
    <div className={classes.container}>
      <NavBar />
      <div className={classes.content}>
        {!loading ? (
          <Container>
            <ProductsList apiResponse={apiResponse} />
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

export default Shop;
