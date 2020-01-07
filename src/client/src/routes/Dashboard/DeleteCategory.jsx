import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button
} from "@material-ui/core";
import styles from "./DeleteCategory.module.css";

const availableCategories = [
  {
    id: 1,
    name: "One"
  },
  {
    id: 2,
    name: "Two"
  }
];

class DeleteCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ""
    };
  }

  render() {
    const { category } = this.state;
    return (
      <Container>
        <Typography variant="h4" component="h2" className={styles.heading}>
          Delete Category
        </Typography>
        <TextField
          id="outlined-select-currency"
          select
          label="Category"
          value={category || ""}
          name="category"
          onChange={evt => this.handleChange(evt)}
          variant="outlined"
          required
          fullWidth
          className={styles.inputField}
        >
          <MenuItem key="default" value="">
            Select...
          </MenuItem>
          {availableCategories.map(option => (
            <MenuItem key={option.name} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={styles.submit}
        >
          Submit
        </Button>
      </Container>
    );
  }
}

export default connect()(DeleteCategory);
