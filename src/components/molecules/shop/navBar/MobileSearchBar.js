import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mobileSearch: {
    color: "white",
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
  },
}));

const MobileSearchBar = () => {
  const classes = useStyles();
  return (
    <IconButton className={classes.mobileSearch}>
      <SearchIcon />
    </IconButton>
  );
};

export default MobileSearchBar;
