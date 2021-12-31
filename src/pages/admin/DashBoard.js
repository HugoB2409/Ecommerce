import React from "react";
import { Title } from "../../components/atoms/Labels";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "../../components/organisms/admin/dashboard/card";

const useStyles = makeStyles((theme) => ({
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
  },
  card: {
    height: 100,
  },
}));

const DashBoard = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Dashboard (Coming soon)</Title>
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <Card title="Ventes du jour" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card title="Revenue du jour" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card title="Nombre de commandes" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DashBoard;
