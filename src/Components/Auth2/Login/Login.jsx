/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ForgotPassword from '../../Auth/ForgotPassword';
import '../../../UI/Button.scss';
import './Login.scss';
import '../../../UI/Header.scss';

const Avatar = require('../../../assets/SVGs/Avatar.svg');

class Login extends Component {
  componentDidMount() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
      input.addEventListener('focus', function focusFunc() {
        const parent = this.parentNode.parentNode;
        parent.classList.add('focus');
      });

      input.addEventListener('blur', function blurFunc() {
        const parent = this.parentNode.parentNode;
        if (this.value === '') {
          parent.classList.remove('focus');
        }
      });
    });
  }

  // Login text fields change fires this handler
onChangeHandler = (key, target) => {
  this.props.onLoginTextChange(key, target.value);
};

// remember me checkbox handler
checkBoxHandler = () => {
  this.props.onRememberMeClick();
};

// Handles login form submission
handleSubmit = (e) => {
  this.props.onLoginFormSubmit(e);
};

// forgotpassword click handler - passes the this.props from chile to parent
forgotPasswordClick = () => {
  this.props.onForgotPasswordClicked();
};

forgotPasswordSubmit = (e) => {
  this.props.forgotPasswordSubmitHandler(e);
};

render() {
  const { loginData, isForgotPassword } = this.props;
  const {
    currentEmail, currentPassword, rememberMe, onForgotPasswordClick,
  } = loginData;
  return (
    <form className="Login" onSubmit={this.handleSubmit}>
      <img className="Login__Avatar" src={Avatar} alt="" />
      <h2 className="heading-secondary" style={{ marginBottom: '3rem' }}>Welcome</h2>
      <div className="Login__Input One">
        <div className="Login__Input--Icon">
          <i className="fa fa-user" />
        </div>
        <div className="Login__Input--Input">
          <h5>Email Address</h5>
          <input type="text" />
        </div>
      </div>
      <div className="Login__Input Two">
        <div className="Login__Input--Icon">
          <i className="fa fa-lock" />
        </div>
        <div className="Login__Input--Input">
          <h5>Password</h5>
          <input type="password" />
        </div>
      </div>
      <a href="#" type="button">Forgot Password?</a>
      <input type="submit" className="Login__Button" value="Login" />
    </form>
  );
}
}

Login.propTypes = {
  loginData: PropTypes.shape(),
  onLoginTextChange: PropTypes.func.isRequired,
  onRememberMeClick: PropTypes.func.isRequired,
  onForgotPasswordClicked: PropTypes.func.isRequired,
  isForgotPassword: PropTypes.bool.isRequired,
  onLoginFormSubmit: PropTypes.func.isRequired,
  forgotPasswordSubmitHandler: PropTypes.func.isRequired,
};

Login.defaultProps = {
  loginData: {},
};

export default Login;
