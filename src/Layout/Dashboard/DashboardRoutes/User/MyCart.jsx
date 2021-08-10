/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../../Store/Actions/index';
import HTMLTitle from '../../../../UI/HTMLTitle/HTMLTitle';
import Cart from '../../../../UI/Cart/Cart';

class MyCart extends Component {
  componentWillMount() {
    const {
      user, onGetMyCart, history,
    } = this.props;
    onGetMyCart(user, history);
  }

  render() {
    const { user, onCartItemDelete, history } = this.props;
    if (!user.myCart || !user.myCart.length) {
      return (
        <div>
          <HTMLTitle title="My Cart" />
          <h1 className="Title">My Shopping Cart</h1>
          <h3 className="No__Products">Your cart is empty (:</h3>
        </div>
      );
    }
    return (
      <div>
        <div>
          <HTMLTitle title="My Cart" />
          <h1 className="Title">My Shopping Cart</h1>
        </div>
        {user.myCart.map((item) => (
          <Cart
            key={item._id}
            cartItem={item}
            onCartItemDelete={(cartItemId) => onCartItemDelete(cartItemId, user, history)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  onGetMyCart: (user, history) => dispatch(actions.getMyCart(user, history)),
  onCartItemDelete: (cartItemId, user, history) => dispatch(
    actions.onCartItemDelete(cartItemId, user, history),
  ),
});

MyCart.propTypes = {
  user: PropTypes.shape().isRequired,
  onGetMyCart: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  onCartItemDelete: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyCart));
