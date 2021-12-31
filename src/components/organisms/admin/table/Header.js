import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

const Header = (props) => {
  return (
    <TableHead>
      <TableRow>
        {props.cells.map((value, index) => (
          <TableCell key={index}>{value}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Header;
