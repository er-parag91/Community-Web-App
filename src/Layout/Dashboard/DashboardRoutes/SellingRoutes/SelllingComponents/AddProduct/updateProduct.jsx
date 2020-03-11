import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../../../../Store/Actions/index';
import './addProducts.scss';
import ProductForm from './ProductForm';

class UpdateProduct extends Component {
  componentWillMount() {
    const {
      match, user, history, onProductRequest,
    } = this.props;
    onProductRequest(user, history, match.params.productId);
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
      requestedRoute, products, onProductDataChange, user, onProductDelete, history,
    } = this.props;
    const productData = products.product;
    let adminStatus = 'Still pending';
    let adminStatusClassName = 'Admin__Info--warning';
    let statusSection = <div />;
    if (products.productStatus.adminApproved) {
      if (products.productStatus.adminApproved === 'true') {
        adminStatus = 'Approved';
        adminStatusClassName = 'Admin__Info--success';
      } else if (products.productStatus.adminApprovalStatus) {
        adminStatus = 'This Product is Rejected by admin.';
        adminStatusClassName = 'Admin__Info--danger';
      }
      statusSection = (
        <p className="Admin__Info">
            Admin Approval Status:
          <span className={adminStatusClassName}>
            {adminStatus}
          </span>
          {products.productStatus.adminApprovalStatus && (
          <span className="Admin__Info--message">
            Admin Message:
            {`  ${products.productStatus.adminApprovalStatus}`}
          </span>
          )}
        </p>
      );
    }
    return (
      <ProductForm
        requestedRoute={requestedRoute}
        onProductDataChange={onProductDataChange}
        productSubmitHandler={this.productSubmitHandler}
        productData={productData}
        editing
        onProductDelete={() => onProductDelete(products.productStatus.productId, user, history)}
        statusSection={statusSection}
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
  onProductRequest: (user, history, productId) => dispatch(
    actions.getRequestedProduct(user, history, productId),
  ),
  onProductDataChange: (key, value) => dispatch(actions.onProductDataChange(key, value)),
  onProductDelete: (productId, user, history) => dispatch(
    actions.onProductDelete(productId, user, history),
  ),
});

UpdateProduct.propTypes = {
  requestedRoute: PropTypes.string.isRequired,
  onProductRequest: PropTypes.func,
  onAddProduct: PropTypes.func,
  user: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  products: PropTypes.shape(),
  onProductDataChange: PropTypes.func,
  onProductDelete: PropTypes.func,
};

UpdateProduct.defaultProps = {
  onAddProduct: () => {},
  onProductRequest: () => {},
  products: {},
  onProductDataChange: () => {},
  onProductDelete: () => {},
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateProduct));
