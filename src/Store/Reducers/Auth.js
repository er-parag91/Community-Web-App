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
      };
    default:
      return state;
  }
};

export default authReducer;
