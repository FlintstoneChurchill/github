import axios from "../../axios-config";
import {GET_REPOSITORIES_SUCCESS} from "../actionTypes";

const getRepositoriesSuccess = (repos) => {
  return {type: GET_REPOSITORIES_SUCCESS, repos};
};
export const getRepositories = username => {
  return dispatch => {
    axios.get(`/users/${username}/repos`).then(response => {
      dispatch(getRepositoriesSuccess(response.data));
    });
  };
};