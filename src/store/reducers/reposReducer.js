import {GET_REPOSITORIES_SUCCESS} from "../actionTypes";

const initialState = {
  allRepos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOSITORIES_SUCCESS:
      return {...state, allRepos: action.repos};
    default:
      return state;
  }
};

export default reducer;