/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './Auth2.scss';
import '../../UI/Header.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './Login';

const SVG = require('../../assets/SVGs/SVG.svg');

class Auth2 extends Component {
  state = {
    login: {
      currentEmail: '',
      currentPassword: '',
      rememberMe: false,
    },
    signUp: {
      firstName: '',
      lastName: '',
      email: this.props.generalState.signUpEmail,
      password: '',
      confirmPassword: '',
      phone: '',
      state: 'AK',
      agree: false,
    },
    isLoggingIn: this.props.generalState.isLoggingIn,
    open: false,
    dialog: false,
    isForgotPassword: false,
  };

    // toggle between sign and login mode
    loginTypeHandler = () => {
      this.setState((prevState) => ({
        isLoggingIn: !prevState.isLoggingIn,
      }));
    }

    //
    // // Login
    // // login text change handler
    //
    loginTextChangeHandler = (key, value) => {
      console.log(key, value);
      this.setState((prevState) => {
        const { login } = prevState;
        login[key] = value;
        return { login };
      });
    }

    // checkbox on login page, for rememer me checkbox check handler
    rememberMeClicked = () => {
      this.setState((prevState) => {
        const { login } = prevState;
        login.rememberMe = !login.rememberMe;
        return { login };
      });
    }

    // Forgot password dialog handler - toggle the dialog
    forgotPasswordHandler = () => {
      this.setState((prevState) => ({
        isForgotPassword: !prevState.isForgotPassword,
      }));
    };

    // Log in form submit handler
    logInFormSubmitHandler = (e) => {
      e.preventDefault();
      console.log(e);
    };

    // forgot password submit handler
    onForgotPasswordSubmit = (e) => {
      e.preventDefault();
      console.log(e);
    }

    //
    // // sign up inputs change handler and changes the state value accordingly
    //
    textChangedHandler = (key, value) => {
      this.setState((prevState) => {
        const { signUp } = prevState;
        signUp[key] = value;
        return { signUp };
      });
    }

    // checkbox on sign-up page, for terms and conditions agree/not-agree handler
    checkboxChangedHandler = () => {
      this.setState((prevState) => {
        const { signUp } = prevState;
        signUp.agree = !signUp.agree;
        return { signUp };
      });
    }

    // more info icon click opens up modal
    onMoreInfoModalToggle = () => {
      this.setState((prevState) => ({
        open: !prevState.open,
      }));
    };

    // terms and condition modal toggler
    toggleTermsAndConditionModal = () => {
      this.setState((prevState) => ({
        dialog: !prevState.dialog,
      }));
    };

    // checkbox checked/not-checked changes the state value
    agreedHandler = () => {
      this.setState((prevState) => {
        const { signUp } = prevState;
        let { dialog } = prevState;
        signUp.agree = true;
        dialog = false;
        return { signUp, dialog };
      });
    }

    // Sign up form submit handler
    signUpSubmitHandler = (e) => {
      e.preventDefault();
      console.log(e);
    }

    render() {
      const {
        isLoggingIn, signUp, login, open, dialog, isForgotPassword,
      } = this.state;
      return (
        <div className="Auth">
          <div className="Auth__Container">
            <div className="Auth__Container--SVG">
              <img src={SVG} alt="" />
            </div>
            {isLoggingIn && (
              <Login
                loginData={login}
                onLoginFormSubmit={this.logInFormSubmitHandler}
                onLoginTextChange={this.loginTextChangeHandler}
                onRememberMeClick={this.rememberMeClicked}
                isForgotPassword={isForgotPassword}
                onForgotPasswordClicked={this.forgotPasswordHandler}
                forgotPasswordSubmitHandler={this.onForgotPasswordSubmit}
              />
            )}
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
  generalState: state.generalState,
});

Auth2.propTypes = {
  generalState: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(Auth2);
