import React from "react";
import GeneralInfo from "../../../components/organisms/admin/orders/GeneralInfo";
import OrderInfo from "../../../components/organisms/admin/orders/OrderInfo";
import CustomerInfo from "../../../components/organisms/admin/orders/CustomerInfo";
import Copyright from "../../../components/molecules/Copyright";
import Typography from "@material-ui/core/Typography";
import { useFetch } from "../../../utils/hook";
import LinearProgress from "@material-ui/core/LinearProgress";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

//TODO: Changer typo de certain titre
//TODO: Ajouter colonne sur la table des produits(prix, etc)
//TODO: Ajouter la date de la commande a quelque part.
//TODO: ajouter le copyright

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    minHeight: "90vh",
  },
  content: {
    margin: theme.spacing(0, 2),
    paddingBottom: "1rem",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
}));

const orderInfo = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [orderData, loading] = useFetch(
    `http://localhost:8080/order/${props.match.params.id}`,
    false
  );

  const handleClick = (id) => {
    history.push(`/administration/customers/${id}`);
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div>
      {!loading ? (
        <div className={classes.container}>
          <div className={classes.content}>
            <IconButton onClick={handleBack}>
              <ArrowBackIcon />
              <Typography variant="button">orders</Typography>
            </IconButton>

            <GeneralInfo orderData={orderData} />
            <OrderInfo orderData={orderData} />
            <CustomerInfo orderData={orderData} handleClick={handleClick} />
          </div>
          <div className={classes.footer}>
            <Copyright />
          </div>
        </div>
      ) : (
        <LinearProgress />
      )}
    </div>
  );
};

export default orderInfo;
