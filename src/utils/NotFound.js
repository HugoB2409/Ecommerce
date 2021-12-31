import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  let location = useLocation();
  return (
    <React.Fragment>
      <h3>No match for {location.pathname}</h3>
    </React.Fragment>
  );
};

export default NotFound;
