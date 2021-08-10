/* eslint-disable no-underscore-dangle */
import * as actioTypes from '../Actions/actionTypes';

const initialState = {
  productsByCategory: [],
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actioTypes.GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productsByCategory: action.products,
      };
    case actioTypes.PRODUCT_LIKED: {
      const newProductByCategory = state.productsByCategory.map((product) => {
        if (product._id === action.productId) {
          return {
            ...product,
            like: product.like + 1,
          };
        }
        return product;
      });
      return {
        ...state,
        productsByCategory: newProductByCategory,
      };
    }
    default:
      return state;
  }
};

export default customerReducer;
