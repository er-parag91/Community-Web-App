import * as actionTypes from '../Actions/actionTypes';

const initialState = {
  token: null,
  email: null,
  name: null,
  error: null,
  loading: false,
  isLoggedIn: false,
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
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
        loading: false,
        error: null,
        token: action.token,
        isLoggedIn: true,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        email: null,
        name: null,
        loading: false,
        token: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
