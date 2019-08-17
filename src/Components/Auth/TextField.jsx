/* eslint-disable react/jsx-props-no-spreading */
import TextField from '@material-ui/core/TextField';
import React from 'react';
import PropTypes from 'prop-types';


const InputField = (props) => {
  const {
    value, id, label, autoComplete, placeholder, changeHandler,
  } = props;
  return (
    <TextField
      {...props}
      value={value}
      id={id}
      label={label}
      autoComplete={autoComplete}
      placeholder={placeholder}
      required
      fullWidth
      variant="filled"
      className="Form-Input"
      onChange={(e) => changeHandler(id, e.target)}
    />
  );
};

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};


export default InputField;
