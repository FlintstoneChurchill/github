import {FIND_USERS_SUCCESS, GET_USER_SUCCESS} from "../actionTypes";

const initialState = {
  user: null,
  foundUsers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {...state, user: action.user};
    case FIND_USERS_SUCCESS:
      return {...state, foundUsers: action.users};
    default:
      return state;
  }
};

export default reducer;