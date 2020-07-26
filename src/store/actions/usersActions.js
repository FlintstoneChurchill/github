import axios from "../../axios-config";
import {
  FIND_USERS_SUCCESS,
  GET_USER_SUCCESS
} from "../actionTypes";

const getUserSuccess = (user) => {
  return {type: GET_USER_SUCCESS, user};
};

export const getUser = username => {
  return dispatch => {
    axios.get(`/users/${username}`)
      .then(response => {
        dispatch(getUserSuccess(response.data));
      });
  };
};

const findUsersSuccess = (users) => {
  return {type: FIND_USERS_SUCCESS, users};
};
export const findUsers = query => {
  return dispatch => {
    if (query.length) {
      axios.get(`search/users?q=${query}`).then(response => {
        dispatch(findUsersSuccess(response.data));
      });
    }
  };
};