import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import HTMLTitle from '../../../../../../UI/HTMLTitle/HTMLTitle';
import '../../SellingRoutes.scss';
import InputField from '../../../../../../UI/Input/TextField';
import Button from '../../../../../../UI/Button/Button';
import ShoppingManu from '../../../../../../Data/SideNavBar';

class AddProduct extends Component {
  state = {
    productData: {
      productName: '',
      productDescription: '',
      productSizes: '',
      productPrice: '',
      productDiscountedPrice: '',
      productCategory: '',
      productStock: 'Yes',
      productWarnings: '',
      productBuyingFrequency: 'No',
      productImage: '',
    },
  }

  onProductDataChange = (key, target) => {
    console.log(key, target.value);
    this.setState((prevState) => {
      const { productData } = prevState;
      productData[key] = target.value;
      return { productData };
    });
  }

  productSubmitHandler= (e) => {
    e.preventDefault();
  }

  render() {
    console.log(this.state);
    const { productData } = this.state;
    const { requestedRoute } = this.props;
    return (
      <div className="AddProduct">
        <HTMLTitle title={requestedRoute} />
        <h1 className="Title">Add Product</h1>
        <form className="Form" onSubmit={this.productSubmitHandler}>
          <div className="Form__Input">
            <Grid lg={9} xs={12}>
              <InputField
                label="Product Name"
                placeholder="Product Name"
                id="productName"
                required
                value={productData.productName}
                changeHandler={this.onProductDataChange}
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
                changeHandler={this.onProductDataChange}
              />
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={9} xs={12}>
              <InputField
                label="Product Sizes (optional)"
                placeholder="Write all sizes seperated by comma"
                id="productSizes"
                value={productData.productSizes}
                changeHandler={this.onProductDataChange}
              />
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={2} xs={6}>
              <InputField
                label="Price in US dollars"
                placeholder="$ Price"
                id="productPrice"
                required
                type="number"
                value={productData.productPrice}
                changeHandler={this.onProductDataChange}
              />
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={2} xs={6}>
              <InputField
                label="Discounted Price (optional)"
                placeholder="$ Discounted Price"
                id="productDiscountedPrice"
                type="number"
                value={productData.productDiscountedPrice}
                changeHandler={this.onProductDataChange}
              />
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={3} xs={6}>
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
                changeHandler={this.onProductDataChange}
              >
                <option value="">Select</option>
                {ShoppingManu.ShoppingMenu.map((category) => (
                  <option key={category.label} value={category.label}>{category.label}</option>
                ))}
              </InputField>
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={3} xs={6}>
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
                changeHandler={this.onProductDataChange}
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
                changeHandler={this.onProductDataChange}
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
                changeHandler={this.onProductDataChange}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </InputField>
            </Grid>
          </div>
          <div className="Form__Input">
            <Grid lg={6} xs={9}>
              <InputField
                label="Product Image"
                id="productImage"
                required
                type="file"
                InputLabelProps={{ shrink: true }}
                value={productData.productImage}
                changeHandler={this.onProductDataChange}
              />
            </Grid>
          </div>
          <div className="Form__Button">
            <Grid lg={3} sm={9}>
              <Button color="purple" text="Submit" size="large" buttonType="submit" />
            </Grid>
          </div>
        </form>
      </div>
    );
  }
}

AddProduct.propTypes = {
  requestedRoute: PropTypes.string.isRequired,
};

export default AddProduct;
