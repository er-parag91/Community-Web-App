/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  const {
    color, text, size, buttonType,
  } = props;
  return (
    <div
      className={color === 'white' ? 'WhiteButton' : 'PurpleButton'}
      style={size === 'regular' ? { width: '50%' } : { width: '100%' }}
    >
      <button type={buttonType}>{text}</button>
    </div>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['white', 'purple']),
  text: PropTypes.string,
  size: PropTypes.oneOf(['regular', 'large']),
  buttonType: PropTypes.string,
};

Button.defaultProps = {
  color: 'white',
  text: 'Click here',
  size: 'regular',
  buttonType: 'button',
};

export default Button;
