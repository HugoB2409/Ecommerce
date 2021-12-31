import React from "react";
import Card from "./Card";
import MuiList from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const List = (props) => {
  return (
    <MuiList>
      {props.products.map((product) => (
        <ListItem key={product.ProductId}>
          <Card body={product} />
        </ListItem>
      ))}
    </MuiList>
  );
};

export default List;
