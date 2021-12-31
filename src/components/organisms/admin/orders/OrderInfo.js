import React from "react";
import Table from "./Table";
import Typography from "@material-ui/core/Typography";
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

const OrderInfo = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" gutterBottom className={classes.customerInfo}>
        Order info
      </Typography>
      <Divider className={classes.divider} />

      <Table orderData={props.orderData} />
    </div>
  );
};

export default OrderInfo;
