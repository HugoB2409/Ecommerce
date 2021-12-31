import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "white",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40ch",
      "&:focus": {
        width: "60ch",
      },
    },
  },
}));

export const SearchBarTextField = (props) => {
  const classes = useStyles();

  return (
    <InputBase
      onChange={props.onInput}
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ "aria-label": "search" }}
    />
  );
};
