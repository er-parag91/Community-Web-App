const initialState = {
  signUpEmail: '',
  isLoggingIn: true,
};


const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOGGIN_IN':
      return {
        ...state,
        isLoggingIn: false,
      };
    case 'SIGNUP_EMAIL':
      return {
        ...state,
        signUpEmail: action.value,
      };
    default:
      return state;
  }
};

export default generalReducer;
