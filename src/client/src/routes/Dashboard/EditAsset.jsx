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
import styles from "./EditAsset.module.css";

class EditAsset extends Component {
  constructor() {
    super();
    this.state = {
      assetID: "",
      assetPicture: "",
      assetName: "",
      assetPurchaseDate: new Date(Date.now()),
      assetCost: "",
      assetBrand: "",
      editedAssetCategory: "",
      assetCategory: ["Electronics", "stationary"]
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
      assetID,
      assetPicture,
      assetName,
      assetPurchaseDate,
      assetCost,
      assetBrand,
      editedAssetCategory,
      assetCategory
    } = this.state;

    return (
      <div className={styles.body}>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <Typography variant="h4" component="h2" className={styles.heading}>
              Edit Asset
            </Typography>
            <FormGroup>
              <FormControl>
                <img
                  className={styles.assetPicture}
                  src={assetPicture}
                  alt=""
                />
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textFields}
                  label="Asset Name"
                  variant="outlined"
                  name="assetName"
                  onChange={e => this.handleChange(e)}
                  value={assetName}
                />
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textFields}
                  label="Asset ID"
                  variant="outlined"
                  name="assetID"
                  onChange={e => this.handleChange(e)}
                  value={assetID}
                />
              </FormControl>
              <FormControl variant="outlined">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    className={styles.textFields}
                    margin="normal"
                    label="Date of Purchase"
                    format="dd/MM/yyyy"
                    value={assetPurchaseDate}
                    onChange={this.handleDateChange}
                    fullWidth
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textFields}
                  label="Asset Cost"
                  variant="outlined"
                  name="assetCost"
                  onChange={e => this.handleChange(e)}
                  value={assetCost}
                />
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel htmlFor="editedAssetCategory">
                  Select Title
                </InputLabel>
                <Select
                  className={styles.textFields}
                  value={editedAssetCategory}
                  id="editedAssetCategory"
                  name="editedAssetCategory"
                  onChange={e => this.handleChange(e)}
                >
                  {assetCategory.map(elm => (
                    <MenuItem key={elm} value={elm}>
                      {elm}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <TextField
                  className={styles.textFields}
                  label="Asset Brand"
                  variant="outlined"
                  name="assetBrand"
                  onChange={e => this.handleChange(e)}
                  value={assetBrand}
                />
              </FormControl>
            </FormGroup>
            <Button variant="contained" color="primary" type="submit">
              Edit
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default EditAsset;
