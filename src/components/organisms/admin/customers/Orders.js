import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import { Title } from "../../../atoms/Labels";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";

//TODO: ajouter colonne au tableau (nb item par order, date, prix, etc)

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 300,
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Orders = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Title>Order made by this customer</Title>
      <Divider className={classes.divider} />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell align="right">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.orderData.map((row) => (
              <TableRow
                key={row.OrderId}
                hover={true}
                onClick={() => props.handleClick(row.OrderId)}
              >
                <TableCell component="th" scope="row">
                  {row.OrderId}
                </TableCell>
                <TableCell style={{ width: "50%" }} align="right">
                  {row.FirstName + " " + row.LastName}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
