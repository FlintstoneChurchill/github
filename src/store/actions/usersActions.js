import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS
} from "../actionTypes";

const getUserRequest = () => {
  return {type: GET_USER_REQUEST};
};
const getUserSuccess = (user) => {
  return {type: GET_USER_SUCCESS, user};
};
const getUserFailure = error => {
  return {type: GET_USER_FAILURE, error};
};