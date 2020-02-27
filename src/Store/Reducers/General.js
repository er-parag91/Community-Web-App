import * as actionTypes from '../Actions/actionTypes';

const initialState = {
  signUpEmail: '',
  isLoggingIn: true,
  alert: {
    message: null,
    severity: '',
  },
  loading: false,
};


const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IS_LOGGIN_IN:
      return {
        ...state,
        isLoggingIn: false,
      };
    case actionTypes.SIGNUP_EMAIL:
      return {
        ...state,
        signUpEmail: action.value,
      };
    case actionTypes.START_LOADING:
      return {
        ...state,
        alert: {
          message: null,
          severity: '',
        },
        loading: true,
      };
    case actionTypes.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.USER_MESSAGE:
      return {
        ...state,
        loading: false,
        alert: {
          message: action.message,
          severity: action.severity,
        },
      };
    case actionTypes.DISMISS_USER_MESSAGE:
      return {
        ...state,
        alert: {
          message: null,
          severity: '',
        },
      };
    default:
      return state;
  }
};

export default generalReducer;
