import React from "react";
import Details from "../../../components/organisms/admin/customers/Details";
import Orders from "../../../components/organisms/admin/customers/Orders";
import Copyright from "../../../components/molecules/Copyright";
import { useFetch } from "../../../utils/hook";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

//TODO: ajouter navigation.
//TODO: j'aime pas la maniere que je choisi le minHeight du container -> 100vh - navBarHeight

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    minHeight: "90vh",
  },
  content: {
    margin: theme.spacing(2),
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
}));

function customerInfo(props) {
  const classes = useStyles();
  const history = useHistory();
  const [orderData, loading] = useFetch(
    `http://localhost:8080/customers/${props.match.params.id}`,
    false
  );

  const handleClick = (id) => {
    history.push(`/administration/orders/${id}`);
  };

  return (
    <div className={classes.container}>
      {!loading ? (
        <div className={classes.content}>
          <Details value={orderData[0]} />
          <Orders orderData={orderData} handleClick={handleClick} />
        </div>
      ) : (
        <LinearProgress />
      )}
      <div className={classes.footer}>
        <Copyright />
      </div>
    </div>
  );
}

export default customerInfo;
