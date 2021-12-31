import React, {
  useState,
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import { Title } from "../../../atoms/Labels";
import Grid from "@material-ui/core/Grid";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { makeStyles } from "@material-ui/core/styles";

//TODO: Clean le code
//TODO: UI CardElement
//TODO: faire que dans billing details il ait de l'info sur le client au lieu de hugo

const useStyles = makeStyles((theme) => ({
  paymentTextField: {
    padding: 20,
    borderBottom: "1px solid",
    marginBottom: theme.spacing(2),
  },
}));

const PaymentInfo = forwardRef((props, ref) => {
  const classes = useStyles();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useImperativeHandle(ref, () => ({
    async handleSubmit(ev) {
      //ev.preventDefault();
      setProcessing(true);
      const payload = await stripe.confirmCardPayment(props.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "hugo",
          },
        },
      });
      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
      }
    },
  }));

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <Grid container spacing={4} className={classes.content}>
      <Grid item xs={12}>
        <Title>Payment info</Title>
      </Grid>
      <Grid item xs={12}>
        <CardElement
          className={classes.paymentTextField}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
});

export default PaymentInfo;
