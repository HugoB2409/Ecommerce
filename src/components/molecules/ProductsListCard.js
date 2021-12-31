import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
  paper: {
    padding: 10,
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    maxWidth: 128,
    maxHeight: 128,
    margin: 10,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: 128,
    maxHeight: 128,
  },
}));

const ListProductsCard = (props) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item className={classes.image}>
            <img
              className={classes.img}
              alt="complex"
              src={`${props.body.ProductThumbnail}`}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={0}>
              <Grid item xs>
                <Typography gutterBottom variant="body1">
                  {`${props.body.ProductName}`}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Derniere modification: {`${props.body.ProductUpdateDate}`}
                </Typography>
                <Typography variant="body2" gutterBottom color="textSecondary">
                  Stock: {`${props.body.ProductStock}`}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {`${props.body.ProductId}`}
                </Typography>
              </Grid>
              <Grid item>
                <Link
                  to={`/administration/products/editproduct/${props.body.ProductId}`}
                  className={classes.link}
                >
                  <Button size="small" color="primary">
                    <EditIcon />
                  </Button>
                </Link>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => setIsOpen(true)}
                >
                  <DeleteIcon />
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                ${`${props.body.ProductPrice}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Dialog open={isOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Êtes-vous sûr de vouloir supprimer ce produit
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Nom du produit: {`${props.body.ProductName}`}
            <br />
            ID: {`${props.body.ProductId}`}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setIsOpen(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              props.delete(props.body.ProductId);
              setIsOpen(false);
            }}
            color="secondary"
          >
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ListProductsCard;
