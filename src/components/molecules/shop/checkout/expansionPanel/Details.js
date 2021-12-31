import React from "react";
import CartCard from "../../cartDrawer/Card";
import ExpansionPanelDetails from "@material-ui/core/AccordionDetails";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Details = (props) => {
  const classes = useStyles();

  return (
    <ExpansionPanelDetails className={classes.card}>
      <List>
        {props.products.map((product) => (
          <ListItem key={product.ProductId}>
            <CartCard body={product} />
          </ListItem>
        ))}
      </List>
    </ExpansionPanelDetails>
  );
};

export default Details;
