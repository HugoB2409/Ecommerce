import React from "react";
import { Title, SubTitle } from "../../../atoms/Labels";
import { Divider } from "@material-ui/core";

//TODO: Ameliorer UI
//TODO: Permettre de modifier les infos

const Details = (props) => {
  return (
    <React.Fragment>
      <Title>Customer Details</Title>
      <Divider />
      <SubTitle>
        Name: {props.value.FirstName + " " + props.value.LastName}
      </SubTitle>
      <SubTitle>Country: {props.value.Country}</SubTitle>
      <SubTitle>State: {props.value.State}</SubTitle>
      <SubTitle>City: {props.value.City}</SubTitle>
      <SubTitle>Address: {props.value.Address1}</SubTitle>
      <SubTitle>Zip: {props.value.Zip}</SubTitle>
    </React.Fragment>
  );
};

export default Details;
