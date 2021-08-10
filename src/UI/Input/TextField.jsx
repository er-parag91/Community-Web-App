/* eslint-disable react/jsx-props-no-spreading */
import TextField from '@material-ui/core/TextField';
import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const InputField = (props) => {
  const {
    value,
    id,
    label,
    autoComplete,
    placeholder,
    required,
    multiline,
    rows,
    changeHandler,
    ...rest
  } = props;
  return (
    <TextField
      {...rest}
      value={value}
      id={id}
      label={label}
      autoComplete={autoComplete}
      placeholder={placeholder}
      required={required}
      fullWidth
      multiline={multiline}
      rows={rows}
      rowsMax={Infinity}
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
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  changeHandler: PropTypes.func,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

InputField.defaultProps = {
  autoComplete: '',
  placeholder: '',
  required: false,
  multiline: false,
  rows: 10,
  changeHandler: () => {},
};


export default InputField;
