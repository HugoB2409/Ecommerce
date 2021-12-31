import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";
import HelpIcon from "@material-ui/icons/Help";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: "20px",
  },
  button: {
    margin: "30px",
  },
  icon: {
    marginLeft: "10px",
  },
}));

const SetTags = () => {
  const classes = useStyles();
  const [categorie, setCategorie] = useState("");

  const handleCategorieChange = (event) => {
    setCategorie(event.target.value);
  };

  return (
    <React.Fragment>
      <h2>
        Tags de recherche
        <Tooltip
          className={classes.icon}
          title="Mots en lien ou synonyme a votre produit qui lorsque rechercher afficheront ce produit"
        >
          <HelpIcon />
        </Tooltip>
      </h2>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tags</InputLabel>
      </FormControl>
      <Button color="primary" variant="contained" className={classes.button}>
        Ajouter un ou plusieurs tag de recherche
      </Button>

      <Divider variant="middle" />

      <h2>
        Categorie
        <Tooltip
          className={classes.icon}
          title="Permet de regrouper les produit de meme catgorie ensemble"
        >
          <HelpIcon />
        </Tooltip>
      </h2>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categorie}
          onChange={handleCategorieChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button color="primary" variant="contained" className={classes.button}>
        Ajouter une categorie
      </Button>
    </React.Fragment>
  );
};

export default SetTags;
