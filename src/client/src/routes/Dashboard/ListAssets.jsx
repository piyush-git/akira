import React from "react";
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  ButtonGroup,
  Button
} from "@material-ui/core";

import styles from "./ListAssets.module.css";
// import axios from "../../utils/axiosInterceptor";

const dummyData = [
  {
    code: "123456",
    serial: "XYZ",
    assignedTo: "Amit"
  },
  {
    code: "123457",
    serial: "XYZ2",
    assignedTo: "Mihir"
  },
  {
    code: "123454",
    serial: "XYZ3",
    assignedTo: "Rahul"
  },
  {
    code: "123455",
    serial: "XYZ4",
    assignedTo: "KK"
  },
  {
    code: "123452",
    serial: "XYZ5",
    assignedTo: "Ashish"
  },
  {
    code: "123459",
    serial: "XYZ6",
    assignedTo: "Manish"
  }
];

class ListAssets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <Container>
        <Typography variant="h4" component="h2" className={styles.heading}>
          All Assets
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className={styles.tableHeading}>
                <TableCell align="center" component="th" scope="row">
                  Inventory Code
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  Serial Number
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  Assigned To
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyData.map(el => (
                <TableRow>
                  <TableCell align="center" component="th" scope="row">
                    {el.code}
                  </TableCell>
                  <TableCell align="center">{el.serial}</TableCell>
                  <TableCell align="center">{el.assignedTo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ButtonGroup
          variant="contained"
          size="large"
          color="dark"
          aria-label="contained large primary button group"
          fullWidth
        >
          <Button fullWidth>Filter</Button>
          <Button fullWidth>Sort</Button>
        </ButtonGroup>
      </Container>
    );
  }
}

export default ListAssets;
