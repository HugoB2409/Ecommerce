import React, { useState } from "react";
import { SearchIcon } from "../../../atoms/icons";
import { SearchBarTextField } from "../../../atoms/TextFields";
import axios from "axios";
import Result from "./Result";
import { fade, makeStyles } from "@material-ui/core/styles";

//TODO: deplacer toute la logique des requests dans un autre fichier

const useStyles = makeStyles((theme) => ({
  searchBar: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.2),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.3),
    },
    marginRight: theme.spacing(1),
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "block",
    },
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  let cancelToken;
  const [data, setData] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearchResults = async (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.length === 0) {
      setIsVisible(false);
    } else {
      setIsLoading(true);
      setIsVisible(true);
      if (typeof cancelToken !== typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.");
      }

      cancelToken = axios.CancelToken.source();

      try {
        axios
          .get(`http://localhost:8080/search/${searchTerm}`, {
            cancelToken: cancelToken.token,
          })
          .then((res) => {
            setData(res.data);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={classes.searchBar}>
      <SearchIcon />
      <SearchBarTextField onInput={fetchSearchResults} />
      {isVisible && <Result isLoading={isLoading} data={data} />}
    </div>
  );
};

export default SearchBar;
