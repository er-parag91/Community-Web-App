/* eslint-disable no-unused-vars */
import React from 'react';
import { PropTypes } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import InputField from './TextField';


const Login = (props) => {
  // Login text fields change fires this handler
  const changeHandler = (key, target) => {
    props.onLoginTextChange(key, target.value);
  };
  // remember me checkbox handler
  const checkBoxHandler = () => {
    props.onRememberMeClick();
  };
  const { loginData } = props;
  const {
    currentEmail, currentPassword, rememberMe, onForgotPasswordClick,
  } = loginData;
  return (
    <div className="login__right--signin">
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        className="login__right--signup-form"
      >
        <span className="heading-secondary">Sign-in</span>
        <InputField
          value={currentEmail}
          id="currentEmail"
          label="E-Mail Address"
          placeholder="e.g. john@smith.com"
          autoComplete="email"
          changeHandler={changeHandler}
        />
        <InputField
          value={currentPassword}
          id="currentPassword"
          label="Password"
          placeholder="e.g. Password123"
          autoComplete="current-password"
          changeHandler={changeHandler}
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
            <p className="rememberMe">
                Forgot Password ?
            </p>
          </div>
        </Grid>
        <button type="submit" className="btn">
          <span className="btn__text">Login</span>
        </button>
      </Grid>
    </div>
  );
};

Login.propTypes = {
  loginData: PropTypes.shape(),
  onLoginTextChange: PropTypes.func.isRequired,
  onRememberMeClick: PropTypes.func.isRequired,
  onForgotPasswordClick: PropTypes.func.isRequired,
};

Login.defaultProps = {
  loginData: {},
};

export default Login;
