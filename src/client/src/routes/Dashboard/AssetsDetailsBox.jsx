import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, Box } from "@material-ui/core";
import styles from "./AssetsDetailsBox.module.css";

const AssetsDetailsBox = props => {
  const { label, value } = props;
  return (
    <Container>
      <Box className={styles.label}>
        <Typography>{label}</Typography>
        <Typography>{value}</Typography>
      </Box>
    </Container>
  );
};

AssetsDetailsBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default AssetsDetailsBox;
