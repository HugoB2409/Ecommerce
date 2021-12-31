import React, { useState } from "react";
import { Title } from "../../../components/atoms/Labels";
import Products from "../../../components/organisms/admin/products/products";
import SearcBar from "../../../components/organisms/admin/products/SearchBar";
import Copyright from "../../../components/molecules/Copyright";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useFetch } from "../../../utils/hook";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  container: {
    position: "relative",
    minHeight: "91vh",
  },
  content: {
    paddingBottom: "1rem",
  },
  button: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const ListProducts = () => {
  const classes = useStyles();
  const history = useHistory();
  const [searchfield, setSearchfield] = useState("");
  const [apiResponse, loading] = useFetch(`http://localhost:8080/images`, true);

  const newProduct = () => {
    history.push(`/administration/products/newproduct`);
  };

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredProduct = apiResponse.filter((product) => {
    return product.ProductName.toLowerCase().includes(
      searchfield.toLowerCase()
    );
  });

  const deleteProduct = (id) => {
    axios.post(`http://localhost:8080/delete/product/${id}`).then((res) => {
      console.log(res);
      window.location.reload(); // <- PAS BON/BEAU
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {!loading ? (
          <React.Fragment>
            <Title>Vos produits en vente</Title>
            <Button
              variant="contained"
              color="secondary"
              onClick={newProduct}
              className={classes.button}
            >
              Create a new product
            </Button>
            <SearcBar onSearchChange={onSearchChange} />
            <Products
              filteredProduct={filteredProduct}
              delete={deleteProduct}
            />
          </React.Fragment>
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

export default ListProducts;
