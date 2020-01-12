import {
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL
} from "./actionTypes";

import axios from "../../utils/axiosInterceptor";

const addCategoryRequest = () => ({
  type: ADD_CATEGORY_REQUEST
});

const addCategorySuccess = () => ({
  type: ADD_CATEGORY_SUCCESS
});

const addCategoryFail = () => ({
  type: ADD_CATEGORY_FAIL
});

const addCategory = payload => {
  return dispatch => {
    dispatch(addCategoryRequest());
    return axios
      .post("/categories", payload)
      .then(() => dispatch(addCategorySuccess()))
      .catch(() => dispatch(addCategoryFail()));
  };
};

export default addCategory;
