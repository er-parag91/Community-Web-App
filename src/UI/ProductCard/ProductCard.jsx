/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './ProductCard.scss';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

const ProductCard = (props) => {
  const { product, onProductClicked, allowDelete } = props;
  let adminStatus = 'Pending';
  let adminStatusClassName = 'Admin__approval--warning';
  let statusSection = <div />;
  if (product.adminApproved) {
    if (product.adminApproved === 'true') {
      adminStatus = 'Approved';
      adminStatusClassName = 'Admin__approval--success';
    } else if (product.adminApprovalStatus) {
      adminStatus = 'Rejected';
      adminStatusClassName = 'Admin__approval--danger';
    }
    statusSection = (
      <p className="Admin__approval">
        <span className="Admin__approval--text">Admin approval status:</span>
        <span
          className={adminStatusClassName}
          onClick={() => onProductClicked(product._id)}
        >
          {adminStatus}
        </span>
      </p>
    );
  }
  return (
    <div className="card">
      <div className="card__image">
        <img src={product.productImage} alt={product.productName} />
      </div>
      <div className="card__body">
        <p className="card__body__seller">By Parag Patel</p>
        <div className="card__body--container">
          <h1 className="card__body--container--title" onClick={() => onProductClicked(product._id)}>{product.productName}</h1>
        </div>
        {product.productDiscountedPrice ? (
          <p className="card__body--price">
            $
            <span className="card__body--price-unChecked">
              {product.productDiscountedPrice.toFixed(2)}
            </span>
            <span className="card__body--price-checked">
            $
              {product.productPrice.toFixed(2)}
            </span>
          </p>
        )
          : (
            <p className="card__body--price">
            $
              <span className="card__body--price-unChecked">
                {product.productPrice.toFixed(2)}
              </span>
            </p>
          )}
        {statusSection}
      </div>
      <div className="card__footer">
        {!allowDelete && <button type="button">Add to Cart</button>}
        {allowDelete && <button onClick={() => onProductClicked(product._id)} type="button">Actions</button>}
        <span>
          {!allowDelete && <i className="fa fa-heart" onClick={() => {}} />}
          {allowDelete
          && (
          <Tooltip disableFocusListener title="Not Allowed" arrow>
            <i className="fa fa-heart" />
          </Tooltip>
          )}
          0 likes
        </span>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape().isRequired,
  onProductClicked: PropTypes.func.isRequired,
  allowDelete: PropTypes.bool,
};

ProductCard.defaultProps = {
  allowDelete: false,
};

export default ProductCard;
