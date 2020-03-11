import * as actionTypes from '../Actions/actionTypes';

const initialState = {
  token: '',
  email: '',
  firstName: '',
  lastName: '',
  cartQuantity: 0,
  myCart: [],
  isLoggedIn: false,
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
        cartQuantity: action.cartQuantity,
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
    case actionTypes.ADDED_TO_CART:
      return {
        ...state,
        cartQuantity: action.cartQuantity,
      };
    case actionTypes.MY_CART_LOADED:
      return {
        ...state,
        myCart: action.cartItems,
      };
    default:
      return state;
  }
};

export default authReducer;
