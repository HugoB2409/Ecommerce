import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form/dist/react-hook-form.ie11";

const EditDescription = (props) => {
  const [values] = useState({ numberformat: "" });
  const textFieldAttribute = {
    fullWidth: true,
    margin: "normal",
    variant: "filled",
    defaultValue: "",
  };

  return (
    <React.Fragment>
      <Controller
        as={<TextField />}
        {...textFieldAttribute}
        name="ProductName"
        label="Nom du produit"
        required
        defaultValue={`${props.body.ProductName}`}
      />
      <Controller
        as={<TextField />}
        {...textFieldAttribute}
        name="ProductShortDescription"
        label="Description courte du produit"
        required
        multiline
        rows="2"
        defaultValue={`${props.body.ProductShortDescription}`}
      />
      <Controller
        as={<TextField />}
        {...textFieldAttribute}
        name="ProductLongDescription"
        label="Description courte du produit"
        required
        multiline
        rows="4"
        defaultValue={`${props.body.ProductDescription}`}
      />
      <Controller
        as={<TextField />}
        {...textFieldAttribute}
        value={values.numberformat}
        name="ProductPrice"
        label="Prix"
        required
        type="number"
        defaultValue={`${props.body.ProductPrice}`}
      />

      <Controller
        as={<TextField />}
        {...textFieldAttribute}
        name="ProductStock"
        label="Nombre en stock"
        type="number"
        defaultValue={`${props.body.ProductStock}`}
      />

      <Controller
        as={<TextField />}
        {...textFieldAttribute}
        name="ProductWeight"
        label="Poid(kg)"
        type="number"
        defaultValue={`${props.body.ProductWeight}`}
      />

      <Controller
        as={<TextField />}
        {...textFieldAttribute}
        name="ProductDimension"
        label="Dimension(longueur x largeur x hauteur)"
        defaultValue={`${props.body.ProductDimension}`}
      />
    </React.Fragment>
  );
};

export default EditDescription;
