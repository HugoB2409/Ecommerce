import React, { useEffect, useState, useRef } from "react";
import NavBar from "../../components/organisms/shop/NavBar";
import { Title } from "../../components/atoms/Labels";
import ShippingInfo from "../../components/organisms/shop/checkout/ShippingInfo";
import PaymentInfo from "../../components/organisms/shop/checkout/PaymentInfo";
import ExpansionPanel from "../../components/organisms/shop/checkout/ExpansionPanel";
import Drawer from "../../components/organisms/shop/checkout/Drawer";
import Copyright from "../../components/molecules/Copyright";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Divider } from "@material-ui/core";
import { useStoreState } from "easy-peasy";
import {
  useForm,
  FormContext,
} from "react-hook-form/dist/react-hook-form.ie11";
import { useHistory } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//TODO: Refactor
//TODO: UI pourriat etre ameliorer

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    minHeight: "100vh",
  },
  content: {
    paddingBottom: "2.5rem",
  },
  form: {
    display: "flex",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  footer: {
    position: "absolute",
    bottom: 0,
    [theme.breakpoints.up("md")]: {
      display: "block",
      width: "calc(100% - 55ch)",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
      width: "calc(100% - 70ch)",
    },
    width: "100%",
  },
}));

const promise = loadStripe("pk_test_CrB3VoC8uEClI4D0PST1ToyB00w10TxNLa");

const Checkout = () => {
  const classes = useStyles();
  const products = useStoreState((state) => state.cart.products);
  const history = useHistory();
  const methods = useForm();
  const childRef = useRef();
  const [clientSecret, setClientSecret] = useState("");
  let productsIds = products.map((product) => product.ProductId);
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("http://localhost:8080/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: productsIds }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const onSubmit = (data) => {
    childRef.current.handleSubmit();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    data.date = yyyy + "/" + mm + "/" + dd;

    data.productsIds = productsIds;

    axios({
      url: "http://localhost:8080/newOrder",
      method: "POST",
      data: data,
    }).then((res) => {
      console.log(res);
      history.push("/success");
    });
  };

  return (
    <div className={classes.container}>
      <NavBar minimal />
      <div className={classes.content}>
        <FormContext {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <ExpansionPanel />
            <div className={classes.form}>
              <CssBaseline />
              <Container>
                <Title>Checkout</Title>
                <Divider className={classes.divider} />
                <ShippingInfo />
                <Divider className={classes.divider} />
                <Elements stripe={promise}>
                  <PaymentInfo ref={childRef} clientSecret={clientSecret} />
                </Elements>
              </Container>
              <Drawer />
            </div>
          </form>
        </FormContext>
      </div>
      <div className={classes.footer}>
        <Copyright />
      </div>
    </div>
  );
};

export default Checkout;
