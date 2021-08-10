/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  const {
    color, text, size, buttonType, buttonClicked,
  } = props;
  let className = 'WhiteButton';
  if (color === 'red') {
    className = 'RedButton';
  } else if (color === 'purple') {
    className = 'PurpleButton';
  }
  return (
    <div
      className={className}
      style={size === 'regular' ? { width: '50%' } : { width: '100%' }}
    >
      <button onClick={buttonClicked} type={buttonType}>{text}</button>
    </div>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['white', 'purple', 'red']),
  text: PropTypes.string,
  size: PropTypes.oneOf(['regular', 'large']),
  buttonType: PropTypes.string,
  buttonClicked: PropTypes.func,
};

Button.defaultProps = {
  color: 'white',
  text: 'Click here',
  size: 'regular',
  buttonType: 'button',
  buttonClicked: () => {},
};

export default Button;
