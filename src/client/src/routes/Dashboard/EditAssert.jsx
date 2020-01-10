import React, { Component } from "react";
import {
  FormControl,
  FormGroup,
  TextField,
  InputLabel,
  Button,
  Container,
  Typography,
  Select,
  MenuItem
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import styles from "./EditAssert.module.css";

class EditAssert extends Component {
  constructor() {
    super();
    this.state = {
      assertID: "",
      assertPicture: "",
      assertName: "",
      assertPurchaseDate: new Date(Date.now()),
      assertCost: "",
      assertBrand: "",
      editedAssertCategory: "",
      assertCategory: ["Electronics", "stationary"]
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDateChange = () => {};

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const {
      assertID,
      assertPicture,
      assertName,
      assertPurchaseDate,
      assertCost,
      assertBrand,
      editedAssertCategory,
      assertCategory
    } = this.state;

    return (
      <div className={styles.body}>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <Typography variant="h4" component="h2" className={styles.heading}>
              Edit Assert
            </Typography>
            <FormGroup>
              <FormControl>
                <img
                  className={styles.assertPicture}
                  src={assertPicture}
                  alt=""
                />
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textFields}
                  label="Assert Name"
                  variant="outlined"
                  name="assertName"
                  onChange={e => this.handleChange(e)}
                  value={assertName}
                />
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textFields}
                  label="Assert ID"
                  variant="outlined"
                  name="assertID"
                  onChange={e => this.handleChange(e)}
                  value={assertID}
                />
              </FormControl>
              <FormControl variant="outlined">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    className={styles.textFields}
                    margin="normal"
                    label="Date of Purchase"
                    format="dd/MM/yyyy"
                    value={assertPurchaseDate}
                    onChange={this.handleDateChange}
                    fullWidth
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textFields}
                  label="Assert Cost"
                  variant="outlined"
                  name="assertCost"
                  onChange={e => this.handleChange(e)}
                  value={assertCost}
                />
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel htmlFor="editedAssertCategory">
                  Select Title
                </InputLabel>
                <Select
                  className={styles.textFields}
                  value={editedAssertCategory}
                  id="editedAssertCategory"
                  name="editedAssertCategory"
                  onChange={e => this.handleChange(e)}
                >
                  {assertCategory.map(elm => (
                    <MenuItem key={elm} value={elm}>
                      {elm}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textFields}
                  label="Assert Brand"
                  variant="outlined"
                  name="assertBrand"
                  onChange={e => this.handleChange(e)}
                  value={assertBrand}
                />
              </FormControl>
            </FormGroup>
            <Button type="submit">Edit</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default EditAssert;
