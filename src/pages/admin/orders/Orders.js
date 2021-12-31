import React from "react";
import { Title } from "../../../components/atoms/Labels";
import SearchBar from "../../../components/organisms/admin/customers/SearchBar";
import Table from "../../../components/organisms/admin/orders/Table1";
import Copyright from "../../../components/molecules/Copyright";
import { useFetch } from "../../../utils/hook";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

//TODO: Faire le pop-up du button filter
//TODO: Ajouter la date dans le tableau

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    minHeight: "91vh",
  },
  content: {
    paddingBottom: "1rem",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
}));

const Orders = () => {
  const classes = useStyles();
  const [orders, loading] = useFetch(`http://localhost:8080/orders`, false);

  return (
    <div className={classes.container}>
      {!loading ? (
        <div className={classes.content}>
          <Title>Orders</Title>
          <SearchBar />
          <Table orders={orders} />
        </div>
      ) : (
        <LinearProgress />
      )}
      <div className={classes.footer}>
        <Copyright />
      </div>
    </div>
  );
};

export default Orders;
