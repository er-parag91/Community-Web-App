/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../../../../Store/Actions/index';
import HTMLTitle from '../../../../../../UI/HTMLTitle/HTMLTitle';
import '../../SellingRoutes.scss';
import InputField from '../../../../../../UI/Input/TextField';
import Button from '../../../../../../UI/Button/Button';
import ShoppingManu from '../../../../../../Data/SideNavBar';
import './addProducts.scss';

class AddProduct extends Component {
  componentWillMount() {
    const {
      match, user, history, onProductRequest, onNewProductAddStart,
    } = this.props;
    if (match.params.productId) {
      onProductRequest(user, history, match.params.productId);
    } else {
      onNewProductAddStart();
    }
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
      <div className="AddProduct">
        <HTMLTitle title={requestedRoute} />
        <h1 className="Title">Add Product</h1>
        {statusSection}
        <form className="Form" onSubmit={this.productSubmitHandler}>
          <div className="Form__Input">
            <Grid lg={9} xs={12}>
              <InputField
                label="Product Name"
                placeholder="Product Name"
                id="productName"
                required
                value={productData.productName}
                changeHandler={(key, target) => onProductDataChange(key, target.value)}
              />
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={9} xs={12}>
              <InputField
                label="Product Description"
                placeholder="Product Description"
                id="productDescription"
                required
                multiline
                resize
                value={productData.productDescription}
                changeHandler={(key, target) => onProductDataChange(key, target.value)}
              />
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={9} xs={12}>
              <InputField
                label="Product Sizes (optional)"
                placeholder="Write all sizes in ascending order and seperated by comma"
                id="productSizes"
                helperText="i.e. SM,MD,LG,XL or 31,32,33,44 etc."
                value={productData.productSizes}
                changeHandler={(key, target) => onProductDataChange(key, target.value)}
              />
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={9} xs={12}>
              <InputField
                label="Product Colors (optional)"
                placeholder="Write all colors seperated by comma"
                id="productColors"
                helperText="i.e. RED,PURPLE,GREEN etc."
                value={productData.productColors}
                changeHandler={(key, target) => onProductDataChange(key, target.value)}
              />
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={2} xs={8}>
              <InputField
                label="Price in US dollars"
                placeholder="$ Price"
                id="productPrice"
                required
                type="number"
                inputProps={{ step: 0.01, min: 0 }}
                value={productData.productPrice}
                changeHandler={(key, target) => onProductDataChange(key, target.value)}
              />
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={2} xs={8}>
              <InputField
                label="Discounted Price (optional)"
                placeholder="$ Discounted Price"
                id="productDiscountedPrice"
                type="number"
                inputProps={{ step: 0.01, min: 0 }}
                value={productData.productDiscountedPrice}
                changeHandler={(key, target) => onProductDataChange(key, target.value)}
              />
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={3} xs={8}>
              <InputField
                label="Product Category"
                id="productCategory"
                select
                required
                SelectProps={{
                  native: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={productData.productCategory}
                changeHandler={(key, target) => onProductDataChange(key, target.value)}
              >
                <option value="">Select</option>
                {ShoppingManu.ShoppingMenu.map((category) => (
                  <option key={category.label} value={category.value}>{category.label}</option>
                ))}
              </InputField>
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={3} xs={8}>
              <InputField
                label="In stock?"
                helperText="Is This Product in stock?"
                id="productStock"
                select
                required
                SelectProps={{
                  native: true,
                }}
                value={productData.productStock}
                changeHandler={(key, target) => onProductDataChange(key, target.value)}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </InputField>
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={9} xs={12}>
              <InputField
                label="Product Warnings for Customer"
                placeholder="Write Warnings seperated by comma"
                id="productWarnings"
                type="text"
                value={productData.productWarnings}
                changeHandler={(key, target) => onProductDataChange(key, target.value)}
              />
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={9} xs={9}>
              <InputField
                label="Will customer buy this frequently?"
                id="productBuyingFrequency"
                select
                required
                SelectProps={{
                  native: true,
                }}
                helperText="Select Yes if you want us to recommend this product frequently to customer who already bought"
                value={productData.productBuyingFrequency}
                changeHandler={(key, target) => onProductDataChange(key, target.value)}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </InputField>
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={6} xs={10}>
              <InputField
                label="Product Image"
                id="productImage"
                type="file"
                helperText={products.productStatus.productId && 'While editing product, you could leave image empty to have existing image for this product.'}
                InputLabelProps={{ shrink: true }}
                value={productData.productImage}
                changeHandler={(key, target) => onProductDataChange(key, target.files[0])}
              />
            </Grid>
          </div>
          <div className="Form__Button">
            <Grid lg={4} sm={10}>
              <Button color="purple" text={products.productStatus.productId ? 'Update' : 'Submit'} size="regular" buttonType="submit" />
              {products.productStatus.productId
                && <Button buttonClicked={() => onProductDelete(products.productStatus.productId, user, history)} color="red" text="Delete" size="regular" buttonType="button" />}
            </Grid>
          </div>
        </form>
      </div>
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
  onProductRequest: (user, history, productId) => dispatch(
    actions.getRequestedProduct(user, history, productId),
  ),
  onProductDataChange: (key, value) => dispatch(actions.onProductDataChange(key, value)),
  onProductDelete: (productId, user, history) => dispatch(
    actions.onProductDelete(productId, user, history),
  ),
});

AddProduct.propTypes = {
  requestedRoute: PropTypes.string.isRequired,
  onProductRequest: PropTypes.func,
  onAddProduct: PropTypes.func,
  onNewProductAddStart: PropTypes.func,
  user: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  products: PropTypes.shape(),
  onProductDataChange: PropTypes.func,
  onProductDelete: PropTypes.func,
};

AddProduct.defaultProps = {
  onAddProduct: () => {},
  onNewProductAddStart: () => {},
  onProductRequest: () => {},
  products: {},
  onProductDataChange: () => {},
  onProductDelete: () => {},
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddProduct));
