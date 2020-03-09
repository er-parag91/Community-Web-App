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
    default:
      return state;
  }
};

export default customerReducer;
