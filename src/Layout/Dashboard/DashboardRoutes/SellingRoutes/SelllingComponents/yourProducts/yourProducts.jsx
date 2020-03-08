/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import HTMLTitle from '../../../../../../UI/HTMLTitle/HTMLTitle';
import * as actions from '../../../../../../Store/Actions/index';
import './yourProducts.scss';
import ProductCard from '../../../../../../UI/ProductCard/ProductCard';

class YourProducts extends Component {
  componentWillMount() {
    const { user, onProductsRequest, history } = this.props;
    onProductsRequest(user, history);
  }

  render() {
    const { products, history } = this.props;
    if (!products.products || products.products.length === 0) {
      return (
        <div>
          <HTMLTitle title="Your Products" />
          <h1>No Products Fount yet!</h1>
        </div>
      );
    }
    return (
      <div className="container">
        <HTMLTitle title="Your Products" />
        {products.products.map((product) => <ProductCard allowDelete key={product._id} product={product} onProductClicked={(productId) => history.push(`/auth/dashboard/selling/addProduct/${productId}`)} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  onProductsRequest: (user, history) => dispatch(actions.getMyProducts(user, history)),
});

YourProducts.propTypes = {
  onProductsRequest: PropTypes.func,
  user: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  products: PropTypes.shape(),
};

YourProducts.defaultProps = {
  onProductsRequest: () => {},
  products: [],
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(YourProducts));
