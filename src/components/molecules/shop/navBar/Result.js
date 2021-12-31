import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: theme.shape.borderRadius,
    position: "fixed",
    display: "none",
    width: "32.3ch",
    height: 300,
    [theme.breakpoints.up("xs")]: { display: "block" },
    [theme.breakpoints.up("md")]: { width: "76ch" },
    backgroundColor: "black",
  },
}));

const Result = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {!props.isLoading ? (
        <div>
          {props.data ? (
            <div>
              <div>Ceci sont les resultats</div>
              <br />
              {props.data.map((value, index) => (
                <div key={index}>
                  <div>{value.ProductName}</div>
                  <br />
                </div>
              ))}
            </div>
          ) : (
            <div>Aucun resultat</div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Result;
