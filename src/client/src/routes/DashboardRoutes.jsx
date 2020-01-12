import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ListUsers from "./Dashboard/ListUsers";
import UserDetails from "./Dashboard/UserDetails";
import AddNewAsset from "./Dashboard/AddNewAsset";
import AssignAsset from "./Dashboard/AssignAsset";
import GenerateReport from "./Dashboard/GenerateReport";
import DeleteCategory from "./Dashboard/DeleteCategory";
import DisposeAsset from "./Dashboard/DisposeAsset";

import AddCategory from "./Dashboard/AddCategory";

const DashboardRoutes = props => {
  const { isAuth } = props;
  return isAuth ? (
    <>
      <Route exact path="/dashboard/users" render={() => <ListUsers />} />
      <Route
        exact
        path="/dashboard/users/:id"
        render={renderProps => <UserDetails renderProps={renderProps} />}
      />
      <Route
        exact
        path="/dashboard/assets/assign/:id"
        render={renderProps => <AssignAsset renderProps={renderProps} />}
      />
      <Route
        exact
        path="/dashboard/assets/dispose"
        render={renderProps => <DisposeAsset renderProps={renderProps} />}
      />
      <Route
        exact
        path="/dashboard/assets/add_asset"
        render={() => <AddNewAsset />}
      />
      <Route
        exact
        path="/dashboard/generate_report"
        render={() => <GenerateReport />}
      />
      <Route
        exact
        path="/dashboard/categories/delete"
        render={() => <DeleteCategory />}
      />
      <Route
        exact
        path="/dashboard/categories/add"
        render={() => <AddCategory />}
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
