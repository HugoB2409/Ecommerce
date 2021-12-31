import React from "react";
import { Title } from "../../../components/atoms/Labels";
import Table from "../../../components/organisms/admin/customers/Table";
import { useFetch } from "../../../utils/hook";
import Copyright from "../../../components/molecules/Copyright";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "../../../components/organisms/admin/customers/SearchBar";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  container: {
    position: "relative",
    minHeight: "91vh",
  },
  content: {
    paddingBottom: "1rem",
  },
}));

const Customers = () => {
  const classes = useStyles();
  const [orders, loading] = useFetch(`http://localhost:8080/customers`, false);

  return (
    <div className={classes.container}>
      {!loading ? (
        <div className={classes.content}>
          <Title>Customers</Title>
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

export default Customers;
