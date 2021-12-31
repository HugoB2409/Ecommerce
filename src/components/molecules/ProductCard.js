import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  card: {
    height: 450,
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    height: "100%",
    padding: 10,
  },
  thumbnail: {
    position: "absolute",
    maxWidth: 440,
    top: theme.spacing(2),
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  content: {
    position: "absolute",
    top: 200,
    [theme.breakpoints.up("sm")]: {
      top: 220,
    },
  },
  priceTypography: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    fontFamily: "Roboto Mono, monospace",
    fontWeight: theme.typography.fontWeightBold,
  },
  divider: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  title: {
    fontFamily: "Source Code Pro, monospace",
  },
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/productInfo/${id}`);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={() => handleClick(props.body.ProductId)}
        className={classes.button}
      >
        <CardMedia
          component="img"
          maxheight={300}
          className={classes.thumbnail}
          image={`${props.body.ProductThumbnail}`}
          title="Product thumbnail"
        />
        <Divider className={classes.divider} />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h6" className={classes.title}>
            {`${props.body.ProductName}`}
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary">
            {`${props.body.ProductShortDescription}`}
          </Typography>
        </CardContent>
        <Typography align="right" className={classes.priceTypography}>
          {`${props.body.ProductPrice} $`}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
