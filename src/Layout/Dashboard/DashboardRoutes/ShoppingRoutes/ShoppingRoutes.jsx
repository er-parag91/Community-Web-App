/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import HTMLTitle from '../../../../UI/HTMLTitle/HTMLTitle';
import * as actions from '../../../../Store/Actions/index';
import '../SellingRoutes/SelllingComponents/yourProducts/yourProducts.scss';
import ProductCard from '../../../../UI/ProductCard/ProductCard';

class ShoppingRoutes extends Component {
  UNSAFE_componentWillMount() {
    const {
      user, onGetProductsByCategory, history, requestedRoute,
    } = this.props;
    onGetProductsByCategory(user, requestedRoute, history);
  }

  render() {
    const { customer, requestedRoute } = this.props;
    if (!customer.productsByCategory || customer.productsByCategory.length === 0) {
      return (
        <div>
          <HTMLTitle title={requestedRoute.label} />
          <h1 className="Title">{requestedRoute.label}</h1>
          <h3 className="No__Products">We could not find any products for this category! (:</h3>
        </div>
      );
    }
    return (
      <div>
        <h1 className="Title">{requestedRoute.label}</h1>
        <div className="container">
          <HTMLTitle title="Your Products" />
          {
            customer.productsByCategory.map(
              (product) => <ProductCard product={product} onProductClicked={() => {}} />,
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  customer: state.customer,
});

const mapDispatchToProps = (dispatch) => ({
  onGetProductsByCategory: (user, route, history) => dispatch(
    actions.getProductsByCategory(user, route, history),
  ),
});

ShoppingRoutes.propTypes = {
  onGetProductsByCategory: PropTypes.func,
  user: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  customer: PropTypes.shape(),
  requestedRoute: PropTypes.shape().isRequired,
};

ShoppingRoutes.defaultProps = {
  onGetProductsByCategory: () => {},
  customer: {},
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingRoutes));
