import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    padding: "1px 10px",
    display: "flex",
    alignItems: "center",
    width: 270,
    margin: 20,
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.searchBar}>
      <InputBase
        onChange={props.onSearchChange}
        placeholder="Rechercher un produit"
        inputProps={{ "aria-label": "Rechercher un produit" }}
      />
      <IconButton aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
