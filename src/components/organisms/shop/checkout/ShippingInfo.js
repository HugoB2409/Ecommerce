import React from "react";
import { Title } from "../../../atoms/Labels";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form/dist/react-hook-form.ie11";

//TODO: Validation des champs

const ShippingInfo = () => {
  const textFieldAttribute = {
    fullWidth: true,
    margin: "normal",
    variant: "filled",
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Title>Shipping info</Title>
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          as={<TextField />}
          {...textFieldAttribute}
          id="firstName"
          name="firstName"
          label="First name"
          autoComplete="given-name"
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          as={<TextField />}
          {...textFieldAttribute}
          id="lastName"
          name="lastName"
          label="Last name"
          autoComplete="family-name"
          required
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          as={<TextField />}
          {...textFieldAttribute}
          id="email"
          name="email"
          label="Email"
          autoComplete="email"
          required
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          as={<TextField />}
          {...textFieldAttribute}
          id="address1"
          name="address1"
          label="Address line 1"
          autoComplete="street-address"
          required
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          as={<TextField />}
          {...textFieldAttribute}
          id="address2"
          name="address2"
          label="Address line 2"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          as={<TextField />}
          {...textFieldAttribute}
          id="city"
          name="city"
          label="City"
          autoComplete="address-level2"
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          as={<TextField />}
          {...textFieldAttribute}
          id="state"
          name="state"
          label="State/Province/Region"
          autoComplete="address-level1"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          as={<TextField />}
          {...textFieldAttribute}
          id="zip"
          name="zip"
          label="Zip / Postal code"
          autoComplete="postal-code"
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          as={<TextField />}
          {...textFieldAttribute}
          id="country"
          name="country"
          label="Country"
          autoComplete="country"
          required
        />
      </Grid>
    </Grid>
  );
};

export default ShippingInfo;
