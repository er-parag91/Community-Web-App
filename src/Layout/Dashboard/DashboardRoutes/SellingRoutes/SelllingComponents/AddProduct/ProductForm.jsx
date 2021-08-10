import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import HTMLTitle from '../../../../../../UI/HTMLTitle/HTMLTitle';
import InputField from '../../../../../../UI/Input/TextField';
import Button from '../../../../../../UI/Button/Button';
import ShoppingManu from '../../../../../../Data/SideNavBar';

const ProductForm = (props) => {
  const {
    requestedRoute,
    statusSection,
    productSubmitHandler,
    onProductDataChange,
    productData,
    editing,
    onProductDelete,
  } = props;
  return (
    <div className="AddProduct">
      <HTMLTitle title={requestedRoute} />
      <h1 className="Title">{requestedRoute}</h1>
      {statusSection}
      <form className="Form" onSubmit={productSubmitHandler}>
        <div className="Form__Input">
          <Grid item lg={9} xs={12}>
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
          <Grid item lg={9} xs={12}>
            <InputField
              label="Product Description"
              placeholder="Product Description"
              id="productDescription"
              required
              multiline
              value={productData.productDescription}
              changeHandler={(key, target) => onProductDataChange(key, target.value)}
            />
          </Grid>
        </div>
        <div className="Form__Input">
          <Grid item lg={9} xs={12}>
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
          <Grid item lg={9} xs={12}>
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
          <Grid item lg={2} xs={8}>
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
          <Grid item lg={2} xs={8}>
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
          <Grid item lg={3} xs={8}>
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
          <Grid item lg={3} xs={8}>
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
          <Grid item lg={9} xs={12}>
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
          <Grid item lg={9} xs={9}>
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
          <Grid item lg={6} xs={10}>
            <InputField
              label="Product Image"
              id="productImage"
              type="file"
              helperText={editing && 'While editing product, you could leave image empty to have existing image for this product.'}
              InputLabelProps={{ shrink: true }}
              value={productData.productImage}
              changeHandler={(key, target) => onProductDataChange(key, target.value)}
            />
          </Grid>
        </div>
        <div className="Form__Button">
          <Grid item lg={4} sm={10}>
            <Button color="purple" text={editing ? 'Update' : 'Submit'} size="regular" buttonType="submit" />
            {editing
                && <Button buttonClicked={() => onProductDelete()} color="red" text="Delete" size="regular" buttonType="button" />}
          </Grid>
        </div>
      </form>
    </div>
  );
};

ProductForm.propTypes = {
  requestedRoute: PropTypes.string.isRequired,
  statusSection: PropTypes.shape().isRequired,
  productSubmitHandler: PropTypes.func.isRequired,
  onProductDataChange: PropTypes.func.isRequired,
  productData: PropTypes.shape().isRequired,
  editing: PropTypes.bool,
  onProductDelete: PropTypes.func,
};

ProductForm.defaultProps = {
  editing: false,
  onProductDelete: () => {},
};

export default ProductForm;
