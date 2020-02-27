import axios from 'axios';
import * as actionTypes from './actionTypes';
import { coreEndPoint } from '../../path/dev';
import { startLoading, stopLoading, userMessage } from './general';

export const authSuccess = (email, name, token) => ({
  type: actionTypes.AUTH_SUCCESS,
  email,
  name,
  token,
});

export const auth = (email, password) => (dispatch) => {
  dispatch(startLoading());
  const authData = {
    email,
    password,
  };

  axios.post(`${coreEndPoint}/users/login`, authData)
    .then((response) => {
      localStorage.setItem('email', response.data.user.email);
      localStorage.setItem('firstName', response.data.user.firstName);
      localStorage.setItem('token', response.data.token);
      dispatch(authSuccess(
        response.data.user.email, response.data.user.firstName, response.data.token,
      ));
      dispatch(userMessage('Successfully Logged in!', 'success'));
      dispatch(stopLoading());
    })
    .catch((error) => {
      dispatch(stopLoading());
      dispatch(userMessage(error.response.data, 'error'));
    });
};

export const forgotPassword = (email) => (dispatch) => {
  dispatch(startLoading());

  axios.post(`${coreEndPoint}/users/forgotPassword`, { email })
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
  dispatch(startLoading());
  axios.post(`${coreEndPoint}/users`, signUpData)
    .then((response) => {
      localStorage.setItem('email', response.data.user.email);
      localStorage.setItem('firstName', response.data.user.firstName);
      localStorage.setItem('token', response.data.token);
      dispatch(authSuccess(
        response.data.user.email, response.data.user.firstName, response.data.token,
      ));
      dispatch(stopLoading());
      dispatch(userMessage('Welcome! You have signed up successfully!', 'success'));
    })
    .catch((error) => {
      console.log(error.response.data);
      dispatch(stopLoading());
      dispatch(userMessage(error.response.data || '', 'error'));
    });
};
