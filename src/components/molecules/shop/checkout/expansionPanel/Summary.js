import React from "react";
import ExpansionPanelSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    flexBasis: "33.33%",
  },
  button: {
    width: "90%",
    margin: theme.spacing(3, "auto"),
    display: "block",
  },
}));

const Summary = (props) => {
  const classes = useStyles();

  return (
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography className={classes.heading}>Order summary</Typography>
      <Typography className={classes.secondaryHeading}>
        Number of items : {props.cartSize}
      </Typography>
      <Typography className={classes.secondaryHeading}>
        Total : ${props.total}
      </Typography>
      <FormControlLabel
        onClick={(event) => event.stopPropagation()}
        onFocus={(event) => event.stopPropagation()}
        control={
          <Button
            className={classes.button}
            color="secondary"
            variant="contained"
            type="submit"
          >
            Buy
          </Button>
        }
      />
    </ExpansionPanelSummary>
  );
};

export default Summary;
