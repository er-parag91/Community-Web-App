/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as actionTypes from './actionTypes';
import { coreEndPoint } from '../../path/dev';
import {
  startLoading, stopLoading, userMessage, get404Page, dismissUserMessage,
} from './general';

export const productsByCategoryLoaded = (products) => ({
  type: actionTypes.GET_PRODUCTS_BY_CATEGORY,
  products,
});

export const productLikeSuccess = (productId) => ({
  type: actionTypes.PRODUCT_LIKE_SUCCESS,
  productId,
});

export const addedToCart = (cartQuantity) => ({
  type: actionTypes.ADDED_TO_CART,
  cartQuantity,
});

export const productLiked = (productId) => ({
  type: actionTypes.PRODUCT_LIKED,
  productId,
});

export const getProductsByCategory = (user, route, history) => (dispatch) => {
  dispatch(dismissUserMessage());
  dispatch(startLoading());
  axios.get(`${coreEndPoint}/customer/customerProducts/${route.value}`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => {
      dispatch(productsByCategoryLoaded(response.data));
      dispatch(stopLoading());
    })
    .catch((error) => {
      dispatch(stopLoading());
      if (error.response && error.response.status === 404) {
        dispatch(get404Page('/auth/dashboard', history, 'Requested resource does not exist or You are not authenticated to access it.'));
      } else {
        dispatch(userMessage(error.response ? error.response.data : 'Something went wrong!', 'error'));
      }
    });
};

export const likeProduct = (productId, user) => (dispatch) => {
  dispatch(dismissUserMessage());
  axios.post(`${coreEndPoint}/customer/customerProducts/customerLikedProduct/${productId}`, null, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  }).then(() => {
    dispatch(userMessage('Like registered!'));
    dispatch(productLiked(productId));
  })
    .catch((err) => {
      dispatch(userMessage(err.response.data ? err.response.data : 'Can not process like request', 'error'));
    });
};

export const onAddToCart = (productId, user, history) => (dispatch) => {
  dispatch(dismissUserMessage());
  dispatch(startLoading());
  if (!user.token) {
    dispatch(get404Page('/auth/dashboard', history, 'Requested resource does not exist or You are not authenticated to access it.'));
  }
  axios.post(`${coreEndPoint}/customer/customerProducts/addToCart/${productId}`, null, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => {
      dispatch(stopLoading());
      dispatch(addedToCart(response.data.cartQuantity ? response.data.cartQuantity : 0));
      dispatch(userMessage(response.data.message ? response.data.message : 'Added to Cart'));
    })
    .catch((error) => {
      dispatch(stopLoading());
      if (error.response && error.response.status === 404) {
        dispatch(get404Page('/auth/dashboard', history, 'Requested resource does not exist or You are not authenticated to access it.'));
      } else {
        dispatch(userMessage(error.response ? error.response.data : 'Something went wrong!', 'error'));
      }
    });
};
