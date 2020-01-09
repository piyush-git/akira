import React, { Component } from "react";
import {
  FormGroup,
  InputLabel,
  TextField,
  Button,
  Container,
  Select,
  Typography,
  MenuItem,
  FormControl
} from "@material-ui/core";
import styles from "./Invite.module.css";

class Invite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inviteEmail: "",
      titles: [],
      title: "",
      newRole: "",
      reportingTo: [],
      report: ""
    };
  }

  componentDidMount() {
    this.setState({
      titles: ["CEO", "CTO", "COO"],
      reportingTo: ["CEO", "CTO", "COO"]
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const {
      title,
      titles,
      inviteEmail,
      newRole,
      reportingTo,
      report
    } = this.state;

    console.log(this.state);

    return (
      <div className={styles.body}>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <Typography variant="h4" component="h2" className={styles.heading}>
              Invite
            </Typography>
            <FormGroup>
              <FormControl>
                <TextField
                  className={styles.textField}
                  label="Email"
                  variant="outlined"
                  required
                  value={inviteEmail}
                  type="email"
                  name="inviteEmail"
                  onChange={e => this.handleChange(e)}
                />
              </FormControl>

              <FormControl variant="outlined">
                <InputLabel htmlFor="title">Select Title</InputLabel>
                <Select
                  required
                  className={styles.textField}
                  value={title}
                  name="title"
                  onChange={e => this.handleChange(e)}
                >
                  {titles.map(elm => (
                    <MenuItem key={elm} value={elm}>
                      {elm}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <TextField
                  required
                  className={styles.textField}
                  label="Give New Role"
                  variant="outlined"
                  type="text"
                  name="newRole"
                  value={newRole}
                  onChange={e => this.handleChange(e)}
                />
              </FormControl>

              <FormControl variant="outlined">
                <InputLabel htmlFor="reportingTo">Reporting to</InputLabel>
                <Select
                  required
                  className={styles.textField}
                  value={report}
                  name="report"
                  onChange={e => this.handleChange(e)}
                >
                  {reportingTo.map(elm => (
                    <MenuItem key={elm} value={elm}>
                      {elm}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button variant="contained" color="secondary" type="submit">
                Invite
              </Button>
            </FormGroup>
          </form>
        </Container>
      </div>
    );
  }
}

export default Invite;
