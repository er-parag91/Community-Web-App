/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React from 'react';
import { PropTypes } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import InputField from '../../UI/Input/TextField';
import ForgotPassword from './ForgotPassword';


const Login = (props) => {
  // Login text fields change fires this handler
  const onChangeHandler = (key, target) => {
    props.onLoginTextChange(key, target.value);
  };
  // remember me checkbox handler
  const checkBoxHandler = () => {
    props.onRememberMeClick();
  };

  // Handles login form submission
  const handleSubmit = (e) => {
    props.onLoginFormSubmit(e);
  };

  // forgotpassword click handler - passes the props from chile to parent
  const forgotPasswordClick = () => {
    props.onForgotPasswordClicked();
  };

  const forgotPasswordSubmit = (e) => {
    props.forgotPasswordSubmitHandler(e);
  };
  const {
    loginData, isForgotPassword, resetPasswordEmail, onResetEmailInput,
  } = props;
  const {
    currentEmail, currentPassword, rememberMe,
  } = loginData;
  return (
    <div className="login__right--signin">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
          className="login__right--signup-form"
        >
          <span className="heading-tertiary" style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>Welcome back!</span>
          <InputField
            type="email"
            required
            value={currentEmail}
            id="currentEmail"
            label="E-Mail Address"
            placeholder="e.g. john@smith.com"
            changeHandler={onChangeHandler}
          />
          <InputField
            type="password"
            required
            inputProps={{
              minLength: 8,
            }}
            value={currentPassword}
            id="currentPassword"
            label="Password"
            placeholder="e.g. Password123"
            changeHandler={onChangeHandler}
          />
          <Grid
            xs={12}
            sm={12}
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <div style={{ marginTop: '1rem' }}>
              <label htmlFor="rememberMe">
                <input
                  type="checkbox"
                  onChange={checkBoxHandler}
                  checked={!!rememberMe}
                  id="rememberMe"
                />
                <span className="checkbox__mock"><i className="fa fa-check checkbox__mock--icon" aria-hidden="true" /></span>
                <p className="rememberMe">
                Remember Me
                </p>
              </label>
            </div>
            <div>
              <span className="rememberMe" onClick={forgotPasswordClick}>
                Forgot Password ?
              </span>
            </div>
          </Grid>
          <button type="submit" className="btn">
            <span className="btn__text">Login</span>
          </button>
        </Grid>
        <ForgotPassword
          resetPasswordEmail={resetPasswordEmail}
          isForgotPassword={isForgotPassword}
          onForgotPasswordToggle={forgotPasswordClick}
          onForgotPasswordSubmit={forgotPasswordSubmit}
          onResetEmailInput={onResetEmailInput}
        />
      </form>
    </div>
  );
};

Login.propTypes = {
  loginData: PropTypes.shape(),
  onLoginTextChange: PropTypes.func.isRequired,
  onRememberMeClick: PropTypes.func.isRequired,
  onForgotPasswordClicked: PropTypes.func.isRequired,
  isForgotPassword: PropTypes.bool.isRequired,
  onLoginFormSubmit: PropTypes.func.isRequired,
  forgotPasswordSubmitHandler: PropTypes.func.isRequired,
  resetPasswordEmail: PropTypes.string.isRequired,
  onResetEmailInput: PropTypes.func.isRequired,
};

Login.defaultProps = {
  loginData: {},
};

export default Login;
