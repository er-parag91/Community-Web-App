/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import './Cart.scss';

const Cart = (props) => {
  const { cartItem, onCartItemDelete } = props;
  const { productId } = cartItem;
  return (
    <div className="Cart">
      <div className="Cart__Quantity">
        {`${cartItem.quantity} * $${productId.productDiscountedPrice ? productId.productDiscountedPrice : productId.productPrice}`}
      </div>
      <div className="Cart__Info">
        <p className="Cart__Info-Name">{productId.productName}</p>
        <p className="Cart__Info-Price">
          {productId.productDiscountedPrice
            ? `$${(productId.productDiscountedPrice * cartItem.quantity).toFixed(2)}` : `$${(productId.productPrice * cartItem.quantity).toFixed(2)}`}
        </p>
      </div>
      <div className="Cart__Delete">
        <i className="fa fa-trash-o" aria-hidden="true" onClick={() => onCartItemDelete(cartItem._id)} />
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItem: PropTypes.shape().isRequired,
  onCartItemDelete: PropTypes.func.isRequired,
};

export default Cart;
