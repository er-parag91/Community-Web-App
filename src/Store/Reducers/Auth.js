import * as actionTypes from '../Actions/actionTypes';

const initialState = {
  token: null,
  email: null,
  firstName: null,
  lastName: null,
  isLoggedIn: true,
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        token: null,
        email: null,
        firstName: null,
        lastName: null,
        isLoggedIn: false,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        email: action.email,
        firstName: action.firstName,
        lastName: action.lastName,
        token: action.token,
        isLoggedIn: true,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        email: null,
        firstName: null,
        lastName: null,
        token: null,
        isLoggedIn: false,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        email: null,
        firstName: null,
        lastName: null,
        token: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
