import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../../../../Store/Actions/index';
import './addProducts.scss';
import ProductForm from './ProductForm';

class AddProduct extends Component {
  componentWillMount() {
    const { onNewProductAddStart } = this.props;
    onNewProductAddStart();
  }

  productSubmitHandler= (e) => {
    e.preventDefault();
    const {
      onAddProduct, user, history, products,
    } = this.props;
    onAddProduct(products.product, user, history, products.productStatus);
  }

  render() {
    const {
      requestedRoute, products, onProductDataChange,
    } = this.props;
    const productData = products.product;

    return (
      <ProductForm
        requestedRoute={requestedRoute}
        onProductDataChange={onProductDataChange}
        productSubmitHandler={this.productSubmitHandler}
        productData={productData}
        statusSection={<div />}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  onAddProduct: (productData, user, history, productStatus) => dispatch(
    actions.addProduct(productData, user, history, productStatus),
  ),
  onNewProductAddStart: () => dispatch(actions.onNewProductAddStart()),
  onProductDataChange: (key, value) => dispatch(actions.onProductDataChange(key, value)),
});

AddProduct.propTypes = {
  requestedRoute: PropTypes.string.isRequired,
  onAddProduct: PropTypes.func,
  user: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  products: PropTypes.shape(),
  onProductDataChange: PropTypes.func,
  onNewProductAddStart: PropTypes.func,
};

AddProduct.defaultProps = {
  onAddProduct: () => {},
  products: {},
  onProductDataChange: () => {},
  onNewProductAddStart: () => {},
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddProduct));
