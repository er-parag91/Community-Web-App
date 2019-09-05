import React from 'react';
import PropTypes from 'prop-types';
import './InputAndButton.scss';

const InputAndButton = (props) => {
  const {
    placeholder, text, value, InputAndButtonSubmit, mouseEntered, mouseLeft,
  } = props;
  return (
    <form className="InputAndButton" onSubmit={InputAndButtonSubmit} onMouseEnter={mouseEntered} onMouseLeave={mouseLeft}>
      <input name="email" placeholder={placeholder} value={value} type="email" required />
      <button type="submit">{text}</button>
    </form>
  );
};

InputAndButton.propTypes = {
  placeholder: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  InputAndButtonSubmit: PropTypes.func.isRequired,
  mouseEntered: PropTypes.func,
  mouseLeft: PropTypes.func,
};

InputAndButton.defaultProps = {
  mouseEntered: () => {},
  mouseLeft: () => {},
};

export default InputAndButton;
