/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import * as actionTypes from './actionTypes';
import { coreEndPoint } from '../../path/dev';
import {
  startLoading, stopLoading, userMessage, get404Page, dismissUserMessage,
} from './general';

export const onNewProductAddStart = () => ({
  type: actionTypes.ON_NEW_PRODUCT_ADD_START,
});

export const onProductDataChange = (key, value) => ({
  type: actionTypes.ADD_PRODUCT_INPUT_CHANGE,
  key,
  value,
});

export const productsLoaded = (products) => ({
  type: actionTypes.PRODUCTS_LOADED,
  products,
});

export const requestedProductLoaded = (product, productStatus) => ({
  type: actionTypes.REQUESTED_PRODUCT_LOADED,
  product,
  productStatus,
});

export const addProduct = (productData, user, history, productStatus) => (dispatch) => {
  dispatch(dismissUserMessage());
  dispatch(startLoading());
  const endPoint = productStatus.productId ? `${coreEndPoint}/users/addProduct/${productStatus.productId}` : `${coreEndPoint}/users/addProduct`;
  axios.post(endPoint, productData, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => {
      dispatch(onNewProductAddStart());
      dispatch(stopLoading());
      history.push('/auth/dashboard/selling/yourProducts');
      dispatch(userMessage(response.data ? response.data : 'Product has been submitted for approval before start selling. Thanks!'));
    })
    .catch((error) => {
      dispatch(stopLoading());
      if (error.response && error.response.status === 404) {
        dispatch(get404Page('/auth/dashboard', history, 'Add Product resouce does not exist or you are not authorized'));
      } else {
        dispatch(userMessage(error.response ? error.response.data : 'Something went wrong!', 'error'));
      }
    });
};

export const getMyProducts = (user, history) => (dispatch) => {
  dispatch(dismissUserMessage());
  dispatch(startLoading());
  axios.get(`${coreEndPoint}/users/getMyProducts`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => {
      dispatch(productsLoaded(response.data));
      dispatch(stopLoading());
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

export const getRequestedProduct = (user, history, productId) => (dispatch) => {
  dispatch(dismissUserMessage());
  dispatch(startLoading());

  axios.get(`${coreEndPoint}/users/getRequestedProduct/${productId}`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => {
      const productStatus = {
        productId: response.data._id,
        adminApproved: response.data.adminApproved,
        adminApprovalStatus: response.data.adminApprovalStatus,
      };
      delete response.data._id;
      delete response.data.adminApproved;
      delete response.data.adminApprovalStatus;
      dispatch(requestedProductLoaded(response.data, productStatus));
      dispatch(userMessage('Product has been loaded!'));
      dispatch(stopLoading());
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

export const onProductDelete = (productId, user, history) => (dispatch) => {
  dispatch(dismissUserMessage());
  dispatch(startLoading());
  axios.delete(`${coreEndPoint}/users/deleteMyProduct/${productId}`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((response) => {
      history.push('/auth/dashboard/selling/yourProducts');
      dispatch(userMessage(response.data ? response.data : 'Product has been deleted!'));
      dispatch(stopLoading());
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        dispatch(get404Page('/auth/dashboard', history, 'Your Products resouce does not exist or you are not authorized'));
      } else {
        dispatch(userMessage(error.response ? error.response.data : 'Something went wrong!', 'error'));
      }
    });
};