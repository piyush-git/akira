import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dashboard from "./Dashboard/Dashboard";
import ListAssets from "./Dashboard/ListAssets";
import ViewAsset from "./Dashboard/ViewAsset";
import ReturnAsset from "./Dashboard/ReturnAsset";
import DeleteAsset from "./Dashboard/DeleteAsset";
import AddCategory from "./Dashboard/AddCategory";

const DashboardRoutes = props => {
  const { isAuth } = props;
  return isAuth ? (
    <>
      <Route path="/dashboard" exact render={() => <Dashboard />} />
      <Route path="/dashboard/assets" exact render={() => <ListAssets />} />
      <Route path="/dashboard/assets/:id" exact render={() => <ViewAsset />} />
      <Route
        path="/dashboard/assets/return/:id"
        render={() => <ReturnAsset />}
      />
      <Route
        path="/dashboard/assets/delete/:id"
        render={() => <DeleteAsset />}
      />
      <Route path="/dashboard/categories/add" render={() => <AddCategory />} />
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
