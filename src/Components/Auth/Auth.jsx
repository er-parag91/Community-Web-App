/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Auth.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../UI/Header.scss';
import Modal from 'react-responsive-modal';
import SignUp from './SignUp';
import BusinessDescription from './Fixtures/businessDescription';
import SignUpTermsAndCondition from './Fixtures/SignUpTermsAndCondition';
import Login from './Login';

const Logo = require('../../assets/images/logo__big.png');

class Auth extends Component {
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
  width: null,
  isLoggingIn: this.props.generalState.isLoggingIn,
  open: false,
  dialog: false,
  isForgotPassword: false,
};

// on component mount, adds event handler for window dimensions chanage
componentDidMount() {
  this.updateDimensions();
  window.addEventListener('resize', this.updateDimensions.bind(this));
}

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
      return { SignUp };
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

  // changes a width in state to current width, gets fired on resizing window
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }


  render() {
    const {
      width, isLoggingIn, signUp, login, open, dialog, isForgotPassword,
    } = this.state;
    console.log(this.state);
    return (
      <Grid item container className="login">
        <Modal open={open} onClose={this.onMoreInfoModalToggle} center>
          <BusinessDescription />
        </Modal>
        {width > 601 && (
        <Grid item xs={1} sm={6} md={7} lg={8}>
          <div className="login__left">
            <div className="login__left--image" />
            <i
              onClick={this.onMoreInfoModalToggle}
              className="fa fa-info-circle login__left--moreInfo"
              aria-hidden="true"
            />
          </div>
        </Grid>
        )}
        <Grid item xs={12} sm={6} md={5} lg={4}>
          <Grid
            className="login__right"
            container
            direction="column"
            justify="space-around"
            alignItems="center"
          >
            <div className="login__right--logo">
              <img className="Logo" src={Logo} alt="Logo" />
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

            {!isLoggingIn
            && (
            <div>
              <SignUp
                userData={signUp}
                onHandleSubmit={this.signUpSubmitHandler}
                onTextChange={this.textChangedHandler}
                onCheckboxChange={this.checkboxChangedHandler}
                onTermsAndConditionClicked={this.toggleTermsAndConditionModal}
              />
              <SignUpTermsAndCondition
                open={dialog}
                handleClose={this.toggleTermsAndConditionModal}
                onAgreeClick={this.agreedHandler}
              />
            </div>
            )}
            <div>
              <span role="button" tabIndex={0} className="heading-tertiary login-signup__toggle" onClick={this.loginTypeHandler} onKeyDown={this.loginTypeHandler}>
                {isLoggingIn ? 'New User? Tap to Sign Up' : 'Registered User? Tap to Log in'}
              </span>
            </div>
          </Grid>
          <i
            onClick={this.onMoreInfoModalToggle}
            className="fa fa-info-circle login__right--moreInfo"
            aria-hidden="true"
          />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  generalState: state.generalState,
});

Auth.propTypes = {
  generalState: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(Auth);
