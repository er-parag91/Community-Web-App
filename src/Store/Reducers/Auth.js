const initialState = {
  token: null,
  email: null,
  name: null,
  error: null,
  loading: false,
  isLoggedIn: false,
};


const authReducer = (state = initialState) => state;

export default authReducer;
