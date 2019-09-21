import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    value, id, changeHandler, shouldDisable, isRequired, type,
  } = props;
  return (
    <input
      value={value}
      id={id}
      onChange={(e) => changeHandler(id, e.target)}
      disabled={shouldDisable}
      required={isRequired}
      type={type}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  changeHandler: PropTypes.func,
  shouldDisable: PropTypes.bool,
  isRequired: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  changeHandler: () => {},
  shouldDisable: false,
  isRequired: false,
};

export default Input;
