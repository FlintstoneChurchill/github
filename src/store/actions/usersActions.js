import axios from "../../axios-config";
import {
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