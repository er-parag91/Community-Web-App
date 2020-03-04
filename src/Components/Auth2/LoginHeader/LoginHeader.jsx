import React from 'react';
import PropTypes from 'prop-types';
import OutlinedButton from '../../../UI/InputAndButton/OutlinedButton/OutlinedButton';
import './LoginHeader.scss';

const LoginHeader = (props) => {
  const SignInModeToggle = () => {
    props.onSignInModeToggle();
  };
  const { isSigningIn } = props;
  return (
    <div className="LoginHeader">
      <span>Hindustan</span>
      <OutlinedButton text={isSigningIn ? 'Sign Up' : 'Log in'} OutlinedButtonClicked={SignInModeToggle} />
    </div>
  );
};

LoginHeader.propTypes = {
  isSigningIn: PropTypes.bool.isRequired,
  onSignInModeToggle: PropTypes.func.isRequired,
};

export default LoginHeader;
