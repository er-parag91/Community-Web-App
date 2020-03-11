import axios from 'axios';
import * as actionTypes from './actionTypes';
import {
  coreEndPoint,
} from '../../path/dev';
import {
  startLoading,
  stopLoading,
  userMessage,
  dismissUserMessage,
  get404Page,
} from './general';
import { addedToCart } from './customerProducts';

export const authSuccess = (email, firstName, lastName, cartQuantity, token) => ({
  type: actionTypes.AUTH_SUCCESS,
  email,
  firstName,
  lastName,
  cartQuantity,
  token,
});

export const myCartLoaded = (cartItems) => ({
  type: actionTypes.MY_CART_LOADED,
  cartItems,
});

export const myProfileLoaded = (data) => {
  console.log(data);
  return {
    type: actionTypes.MY_PROFILE_LOADED,
    data,
  };
};

export const loggedOut = (history) => {
  history.push('/');
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
};

export const auth = (email, password) => (dispatch) => {
  dispatch(dismissUserMessage());
  dispatch(startLoading());
  const authData = {
    email,
    password,
  };

  axios.post(`${coreEndPoint}/users/login`, authData)
    .then((response) => {
      const user = response.data.userObject;
      localStorage.setItem('email', user.email);
      localStorage.setItem('token', user.token);
      dispatch(stopLoading());
      dispatch(authSuccess(
        user.email,
        user.firstName,
        user.lastName,
        user.cartQuantity,
        user.token,
      ));
      dispatch(userMessage('Successfully Logged in!', 'success'));
    })
    .catch((error) => {
      dispatch(stopLoading());
      dispatch(userMessage(error.response ? error.response.data : 'Something went wrong on our end. Please try again!', 'error'));
    });
};

export const forgotPassword = (email) => (dispatch) => {
  dispatch(dismissUserMessage());
  dispatch(startLoading());

  axios.post(`${coreEndPoint}/users/forgotPassword`, {
    email,
  })
    .then(() => {
      dispatch(stopLoading());
      dispatch(userMessage('Password reset email sent!', 'success'));
    })
    .catch((error) => {
      dispatch(stopLoading());
      dispatch(userMessage(error.response.data || '', 'error'));
    });
};

export const signUpUser = (signUpData) => (dispatch) => {
  dispatch(dismissUserMessage());
  dispatch(startLoading());
  axios.post(`${coreEndPoint}/users`, signUpData)
    .then((response) => {
      const user = response.data.userObject;
      localStorage.setItem('email', user.email);
      localStorage.setItem('token', user.token);
      dispatch(authSuccess(
        user.email,
        user.firstName,
        user.lastName,
        user.cartQuantity,
        user.token,
      ));
      dispatch(stopLoading());
      dispatch(userMessage('Welcome! You have signed up successfully!', 'success'));
    })
    .catch((error) => {
      dispatch(stopLoading());
      dispatch(userMessage(error.response ? error.response.data : 'Something went wrong!', 'error'));
    });
};

export const logoutUser = (user, history) => (dispatch) => {
  dispatch(dismissUserMessage());
  dispatch(startLoading());
  axios.post(`${coreEndPoint}/users/logout`, null, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then(() => {
      localStorage.removeItem('email');
      localStorage.removeItem('token');
      dispatch(loggedOut(history));
      dispatch(stopLoading());
      dispatch(userMessage('You are now logged out successfully! Come back soon!', 'success'));
    })
    .catch((error) => {
      dispatch(loggedOut(history));
      dispatch(stopLoading());
      dispatch(userMessage(error.response ? error.response.data : 'Something went wrong!', 'error'));
    });
};


export const getMyCart = (user, history) => (dispatch) => {
  dispatch(startLoading());
  axios.get(`${coreEndPoint}/users/me/myCart`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => {
      dispatch(stopLoading());
      dispatch(myCartLoaded(response.data));
      dispatch(userMessage('Your Cart is here', 'success'));
    })
    .catch((error) => {
      dispatch(stopLoading());
      if (error.response && error.response.status === 404) {
        dispatch(get404Page('/auth/dashboard', history, 'Your Products resouce does not exist or you are not authorized'));
      } else {
        dispatch(userMessage(error.response ? error.response.data : 'Something went wrong!', 'error'));
      }
    });
};

export const onCartItemDelete = (cartItemId, user, history) => (dispatch) => {
  dispatch(startLoading());
  axios.delete(`${coreEndPoint}/users/me/myCart/delete/${cartItemId}`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => {
      dispatch(stopLoading());
      dispatch(addedToCart(response.data.cartQuantity ? response.data.cartQuantity : 0));
      dispatch(myCartLoaded(response.data.items));
      dispatch(userMessage('You have deleted cart item.', 'success'));
    })
    .catch((error) => {
      dispatch(stopLoading());
      if (error.response && error.response.status === 404) {
        dispatch(get404Page('/auth/dashboard', history, 'You are not authorized'));
      } else {
        dispatch(userMessage(error.response ? error.response.data : 'Something went wrong!', 'error'));
      }
    });
};

export const onGetMyProfile = (user, history) => (dispatch) => {
  dispatch(startLoading());
  axios.get(`${coreEndPoint}/users/me/myProfile`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => {
      dispatch(stopLoading());
      dispatch(myProfileLoaded(response.data));
      dispatch(userMessage('You have deleted cart item.', 'success'));
    })
    .catch((error) => {
      dispatch(stopLoading());
      if (error.response && error.response.status === 404) {
        dispatch(get404Page('/auth/dashboard', history, 'You are not authorized'));
      } else {
        dispatch(userMessage(error.response ? error.response.data : 'Something went wrong!', 'error'));
      }
    });
};
