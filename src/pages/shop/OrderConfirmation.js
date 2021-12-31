import React from "react";
import NavBar from "../../components/organisms/shop/NavBar";
import Copyright from "../../components/molecules/Copyright";
import { Title } from "../../components/atoms/Labels";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

//TODO: UI

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    minHeight: "100vh",
  },
  content: {
    marginTop: theme.spacing(3),
    paddingBottom: "2.5rem",
  },
  confirmation: {
    margin: theme.spacing(2),
  },
  link: {
    display: "flex",
    justifyContent: "flex-end",
    textDecoration: "none",
  },
  button: {
    marginTop: theme.spacing(3),
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
}));

const OrderConfirmation = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <NavBar minimal />
      <div className={classes.content}>
        <Container>
          <Title>Thank you for your order.</Title>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.confirmation}
          >
            Your order number is <b>#2001539</b>. We have emailed your order
            confirmation, and will send you an update when your order has
            shipped.
          </Typography>
          <Link to="/" className={classes.link}>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
            >
              Back to shop
            </Button>
          </Link>
        </Container>
      </div>
      <div className={classes.footer}>
        <Copyright />
      </div>
    </div>
  );
};

export default OrderConfirmation;
