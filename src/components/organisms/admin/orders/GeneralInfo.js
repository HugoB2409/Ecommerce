import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  actions: {
    float: "right",
  },
  actions2: {
    float: "left",
  },
  button: {
    marginRight: theme.spacing(2),
  },
  dot: {
    height: "20px",
    width: "20px",
    backgroundColor: "green",
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const GeneralInfo = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        General info
      </Typography>
      <Divider className={classes.divider} />
      <div className={classes.actions2}>
        <Typography variant="h5" gutterBottom>
          #{props.orderData.OrderId}
          <span className={classes.dot}></span>
        </Typography>

        <Typography variant="h5" gutterBottom>
          #1358746
        </Typography>
      </div>
      <div className={classes.actions}>
        <div>
          <Button
            color="secondary"
            variant="contained"
            className={classes.button}
          >
            Refund
          </Button>
          <Button color="primary" variant="contained">
            Print shipping label
          </Button>
        </div>
        <Typography variant="h5" align="right">
          Total: 54.00$
        </Typography>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default GeneralInfo;
