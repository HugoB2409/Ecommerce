import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  customerInfo: {
    marginTop: theme.spacing(3),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const CustomerInfo = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" gutterBottom className={classes.customerInfo}>
        Customer info
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="h6" gutterBottom>
        Name: {props.orderData.FirstName + " " + props.orderData.LastName}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Country: {props.orderData.Country}
      </Typography>
      <Typography variant="h6" gutterBottom>
        State: {props.orderData.State}
      </Typography>
      <Typography variant="h6" gutterBottom>
        City: {props.orderData.City}
      </Typography>
      <Button
        color="primary"
        variant="contained"
        onClick={(event) =>
          props.handleClick(
            props.orderData.FirstName + props.orderData.LastName
          )
        }
      >
        See full customer info
      </Button>
    </div>
  );
};

export default CustomerInfo;
