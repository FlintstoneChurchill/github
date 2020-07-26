import {GET_USER_SUCCESS} from "../actionTypes";

const initialState = {
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {...state, user: action.user};
  }
  return state;
};

export default reducer;