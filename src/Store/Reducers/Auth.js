import * as actionTypes from '../Actions/actionTypes';

const initialState = {
  token: null,
  email: null,
  name: null,
  isLoggedIn: false,
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        token: null,
        email: null,
        name: null,
        isLoggedIn: false,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        email: action.email,
        name: action.name,
        token: action.token,
        isLoggedIn: true,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        email: null,
        name: null,
        token: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
