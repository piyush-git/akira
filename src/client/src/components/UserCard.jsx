import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

import styles from "./UserCard.module.css";

const UserCard = props => {
  const {
    data: { id, username, title, joiningDate, picture }
  } = props;
  return (
    <Link to={`/dashboard/users/${id}`}>
      <Card className={styles.card}>
        <div className={styles.details}>
          <CardContent className={styles.content}>
            <Typography component="h5" variant="h5">
              {username}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {title}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {joiningDate}
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={styles.cover} image={picture} title={username} />
      </Card>
    </Link>
  );
};

UserCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    joiningDate: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }).isRequired
};

export default UserCard;
