import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//TODO: UI

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(4),
  },
  link: {
    textDecoration: "none",
  },
}));

const LogOut = () => {
  const classes = useStyles();

  const logOut = () => {
    localStorage.removeItem("tokens");
  };

  return (
    <React.Fragment>
      <Container>
        <Link to="/login" className={classes.link}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={logOut}
          >
            Log Out
          </Button>
        </Link>
      </Container>
    </React.Fragment>
  );
};

export default LogOut;
