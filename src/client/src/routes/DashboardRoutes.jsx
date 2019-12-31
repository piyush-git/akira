import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ListUsers from "./Dashboard/ListUsers";
import UserDetails from "./Dashboard/UserDetails";

const DashboardRoutes = props => {
  const { isAuth } = props;
  return isAuth ? (
    <>
      <Route exact path="/dashboard/users" render={() => <ListUsers />} />
      <Route
        path="/dashboard/users/:id"
        render={renderProps => <UserDetails renderProps={renderProps} />}
      />
    </>
  ) : (
    <Redirect to="/login" />
  );
};

DashboardRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(DashboardRoutes);
