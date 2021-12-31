import React from "react";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

//TODO: utliser l'atome Title pour le titre

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    margin: theme.spacing(0.4),
  },
  title: {
    display: "block",
    margin: theme.spacing(1),
    flexGrow: 1,
  },
  closeIcon: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(0, 2),
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.drawerHeader}>
      <Typography variant="h4" className={classes.title} noWrap>
        Cart
      </Typography>
      <IconButton
        onClick={props.toggleDrawer(false)}
        className={classes.closeIcon}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default Header;
