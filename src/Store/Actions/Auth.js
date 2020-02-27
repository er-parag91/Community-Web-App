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
      localStorage.setItem('name', response.data.user.name);
      localStorage.setItem('token', response.data.token);
      dispatch(authSuccess(response.data.user.email, response.data.user.name, response.data.token));
      dispatch(userMessage('Successfully Logged in!', 'success'));
      dispatch(stopLoading());
    })
    .catch((error) => {
      dispatch(stopLoading());
      dispatch(userMessage(error.response.data, 'error'));
    });
};
