import React from "react";
import Header from "../table/Header";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Footer from "../../admin/table/Footer";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import MuiTable from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles2 = makeStyles((theme) => ({
  table: {
    minWidth: 300,
  },
  TableContainer: {},
  title: {
    display: "block",
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  searchBar: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.2),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.3),
    },
    marginRight: theme.spacing(1),
    display: "block",
    flexGrow: 1,
    float: "left",
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
    },
    width: "30ch",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
  },
  icon: {
    float: "right",
    marginBottom: theme.spacing(2),
  },
  research: {
    margin: theme.spacing(2),
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  container: {
    position: "relative",
    minHeight: "91vh",
  },
  test: {
    paddingBottom: "1rem",
  },
}));

const Table = (props) => {
  const classes = useStyles2();
  const history = useHistory();
  const tableHeader = ["Order id", "Name", "Number of item(s)"];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const rows = props.orders.sort((a, b) => (a.orderId < b.orderId ? -1 : 1));
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (id) => {
    history.push(`/administration/orders/${id}`);
  };

  return (
    <Box m={2}>
      <TableContainer component={Paper} className={classes.TableContainer}>
        <MuiTable
          className={classes.table}
          aria-label="custom pagination table"
        >
          <Header cells={tableHeader} />
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => (
              <TableRow
                key={index}
                hover={true}
                onClick={() => handleClick(row.OrderId)}
              >
                <TableCell component="th" scope="row">
                  {row.OrderId}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.FirstName + " " + row.LastName}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.count}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <Footer
            rows={rows}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </MuiTable>
      </TableContainer>
    </Box>
  );
};

export default Table;
