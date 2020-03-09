/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as actionTypes from './actionTypes';
import { coreEndPoint } from '../../path/dev';
import {
  startLoading, stopLoading, userMessage, get404Page,
} from './general';

export const productsByCategoryLoaded = (products) => ({
  type: actionTypes.GET_PRODUCTS_BY_CATEGORY,
  products,
});


export const getProductsByCategory = (user, route, history) => (dispatch) => {
  dispatch(startLoading());
  axios.get(`${coreEndPoint}/customer/customerProducts/${route.value}`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => {
      console.log(response);
      dispatch(productsByCategoryLoaded(response.data));
      dispatch(stopLoading());
    })
    .catch((error) => {
      dispatch(stopLoading());
      if (error.response && error.response.status === 404) {
        dispatch(get404Page('/auth/dashboard', history, 'Requested resource does not exist or You are not authenticated to access it.'));
      } else {
        console.log(error);
        dispatch(userMessage(error.response ? error.response.data : 'Something went wrong!', 'error'));
      }
    });
};
