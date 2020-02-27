import axios from 'axios';
import * as actionTypes from './actionTypes';
import { coreEndPoint } from '../../path/dev';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSuccess = (email, name, token) => ({
  type: actionTypes.AUTH_SUCCESS,
  email,
  name,
  token,
});

export const authFail = (error) => ({
  type: actionTypes.AUTH_FAIL,
  error,
});

export const auth = (email, password) => (dispatch) => {
  dispatch(authStart());

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
    })
    .catch((error) => {
      dispatch(authFail(error.response.data));
    });
};
