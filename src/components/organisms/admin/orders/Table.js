import React from "react";
import MuiTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 300,
  },
}));

const Table = (props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <MuiTable className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Product ID</TableCell>
            <TableCell align="right">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.orderData.productid.map((row) => (
            <TableRow key={row.ID} hover={true}>
              <TableCell component="th" scope="row">
                {row.ID}
              </TableCell>
              <TableCell style={{ width: "50%" }} align="right">
                {row.Name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
