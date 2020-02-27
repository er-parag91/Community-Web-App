import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import OutlinedButton from '../../../UI/OutlinedButton/OutlinedButton';
import './LoginHeader.scss';

const LoginHeader = (props) => {
  const SignInModeToggle = () => {
    props.onSignInModeToggle();
  };
  const { isSigningIn } = props;
  return (
    <div className="LoginHeader">
      <NavLink className="logo" to="/">Hindustan</NavLink>
      <OutlinedButton text={isSigningIn ? 'Sign Up' : 'Log in'} OutlinedButtonClicked={SignInModeToggle} />
    </div>
  );
};

LoginHeader.propTypes = {
  isSigningIn: PropTypes.bool.isRequired,
  onSignInModeToggle: PropTypes.func.isRequired,
};

export default LoginHeader;
