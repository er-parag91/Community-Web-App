import * as actionTypes from '../Actions/actionTypes';

const initialState = {
  products: [],
  productStatus: {
    productId: '',
    adminApproved: '',
    adminApprovalStatus: '',
  },
  product: {
    productId: '',
    productName: '',
    productDescription: '',
    productSizes: '',
    productColors: '',
    productPrice: '',
    productDiscountedPrice: '',
    productCategory: '',
    productStock: 'Yes',
    productWarnings: '',
    productBuyingFrequency: 'No',
    productImage: '',
  },
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_NEW_PRODUCT_ADD_START:
      return {
        ...state,
        productStatus: {
          productId: '',
          adminApproved: '',
          adminApprovalStatus: '',
        },
        product: {
          productName: '',
          productDescription: '',
          productSizes: '',
          productColors: '',
          productPrice: '',
          productDiscountedPrice: '',
          productCategory: '',
          productStock: 'Yes',
          productWarnings: '',
          productBuyingFrequency: 'No',
          productImage: '',
        },
      };
    case actionTypes.PRODUCTS_LOADED:
      return {
        ...state,
        products: action.products,
      };
    case actionTypes.REQUESTED_PRODUCT_LOADED:
      return {
        ...state,
        product: action.product,
        productStatus: action.productStatus,
      };
    case actionTypes.ADD_PRODUCT_INPUT_CHANGE:
      return {
        ...state,
        product: {
          ...state.product,
          [action.key]: action.value,
        },
      };
    default:
      return state;
  }
};

export default productsReducer;
