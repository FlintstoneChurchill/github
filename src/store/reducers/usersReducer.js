import {GET_USER_REQUEST} from "../actionTypes";

const initialState = {
  user: null,
  userError: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {...state}
  }
  return state;
};

export default reducer;