import React from "react";
import Typography from "@material-ui/core/Typography";

//TODO: Ajouter de l'info/permettre de personaliser cette endroit lorsqu'on cree un produit.
//TODO: Il devrait avoir plus de marginBottom sur mobile que sur desktop

const ProductSpecificInfo = (props) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Typography gutterBottom variant="h5">
        Specific information
      </Typography>
      <Typography color="textSecondary" variant="h6">
        Poid : {props.apiResponse.ProductWeight} kg
      </Typography>
      <Typography color="textSecondary" variant="h6">
        Dimension : {props.apiResponse.ProductDimension}
      </Typography>
    </div>
  );
};

export default ProductSpecificInfo;
