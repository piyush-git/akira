import React from "react";
import { connect } from "react-redux";
import { Container, Typography, Button } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import styles from "./GenerateReport.module.css";

class GenerateReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Typography variant="h4" component="h2" className={styles.heading}>
          Generate Report
        </Typography>
        <form noValidate>
          <MuiPickersUtilsProvider
            utils={DateFnsUtils}
            className={styles.inputField}
          >
            <KeyboardDatePicker
              margin="normal"
              label="From"
              format="dd/MM/yyyy"
              // value={assignDate}
              onChange={this.handleDateChange}
              fullWidth
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider
            utils={DateFnsUtils}
            className={styles.inputField}
          >
            <KeyboardDatePicker
              margin="normal"
              label="To"
              format="dd/MM/yyyy"
              // value={expectedReturnDate}
              onChange={this.handleDateChange}
              fullWidth
            />
          </MuiPickersUtilsProvider>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={styles.submit}
          >
            Submit
          </Button>
        </form>
      </Container>
    );
  }
}

export default connect()(GenerateReport);
