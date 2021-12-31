import React from "react";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  orderSummary: {
    margin: 11,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" className={classes.orderSummary} noWrap>
        Order summary
      </Typography>
      <Divider />
    </div>
  );
};

export default Header;
