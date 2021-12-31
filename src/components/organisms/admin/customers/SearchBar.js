import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.2),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.3),
    },
    marginRight: theme.spacing(1),
    display: "block",
    flexGrow: 1,
    float: "left",
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
    },
    width: "30ch",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
  },
  icon: {
    float: "right",
    marginBottom: theme.spacing(2),
  },
  research: {
    margin: theme.spacing(2),
  },
}));

const SearchBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.research}>
      <div className={classes.searchBar}>
        <IconButton className={classes.searchIcon}>
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <IconButton className={classes.icon}>
        <FilterListIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
