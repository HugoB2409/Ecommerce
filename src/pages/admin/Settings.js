import React from "react";
import { Title } from "../../components/atoms/Labels";
import { makeStyles } from "@material-ui/core/styles";

//TODO: Ajouter Setting (theme du site, langue, etc)

const useStyles = makeStyles((theme) => ({
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
  },
}));

const Settings = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Settings (Coming soon)</Title>
      <img
        alt="Clock"
        src={require("../../image/underConstruction.svg")}
        className={classes.img}
      />
    </React.Fragment>
  );
};

export default Settings;
