import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  TextField,
  Button,
  Container,
  FormHelperText,
  Typography
} from "@material-ui/core";
import styles from "./Login.module.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    alert("Logged in");
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.body}>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <Typography variant="h4" component="h2" className={styles.heading}>
              Login
            </Typography>
            <FormGroup>
              <FormControl>
                <TextField
                  className={styles.margin}
                  type="email"
                  onChange={e => this.handleChange(e)}
                  required
                  variant="outlined"
                  label="Email"
                  id="email"
                  value={email}
                />
              </FormControl>
              <FormControl>
                <TextField
                  type="password"
                  onChange={e => this.handleChange(e)}
                  required
                  variant="outlined"
                  label="password"
                  id="password"
                  value={password}
                />

                <Link to="/login">
                  <FormHelperText className={styles.margin}>
                    Forgot Password?
                  </FormHelperText>
                </Link>
              </FormControl>
            </FormGroup>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Login;
