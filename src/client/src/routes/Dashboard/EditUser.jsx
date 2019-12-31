import React, { Component } from "react";
import {
  FormControl,
  FormGroup,
  TextField,
  Button,
  Container,
  Typography
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import styles from "./EditUser.module.css";

class EditUser extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: new Date(Date.now()),
      profilePicture:
        "https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg",
      phoneNumber: "",
      address: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDateChange = () => {
    // this.setState({ dateOfBirth: e})
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const {
      firstName,
      lastName,
      password,
      confirmPassword,
      profilePicture,
      phoneNumber,
      address,
      dateOfBirth
    } = this.state;

    return (
      <div className={styles.body}>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <Typography variant="h4" component="h2" className={styles.heading}>
              Edit User
            </Typography>
            <FormGroup>
              <FormControl>
                <img
                  className={styles.profilePicture}
                  src={profilePicture}
                  alt=""
                />
                <input
                  accept="image/*"
                  className={styles.uploadPicture}
                  id="profilePicture"
                  name="profilePicture"
                  multiple
                  type="file"
                />
                <Button
                  className={styles.uploadButton}
                  variant="contained"
                  color="secondary"
                  component="span"
                >
                  Edit Profile Picture
                </Button>
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textFields}
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  onChange={e => this.handleChange(e)}
                  value={firstName}
                />
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textFields}
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  onChange={e => this.handleChange(e)}
                  value={lastName}
                />
              </FormControl>
              <FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    label="Date of Birth"
                    format="dd/MM/yyyy"
                    value={dateOfBirth}
                    onChange={this.handleDateChange}
                    fullWidth
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textFields}
                  label="Phone Number"
                  variant="outlined"
                  name="phoneNumber"
                  onChange={e => this.handleChange(e)}
                  value={phoneNumber}
                />
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textFields}
                  label="Address"
                  variant="outlined"
                  name="address"
                  onChange={e => this.handleChange(e)}
                  value={address}
                />
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textFields}
                  label="Password"
                  variant="outlined"
                  name="password"
                  onChange={e => this.handleChange(e)}
                  value={password}
                  type="password"
                />
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textFields}
                  label="Confirm Password"
                  variant="outlined"
                  name="confirmPassword"
                  onChange={e => this.handleChange(e)}
                  value={confirmPassword}
                  type="password"
                />
              </FormControl>
              <Button variant="contained" color="secondary" type="submit">
                Update Profile
              </Button>
            </FormGroup>
          </form>
        </Container>
      </div>
    );
  }
}

export default EditUser;
