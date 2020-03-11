/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';
import './Alert.scss';

const AlertBox = (props) => {
  const { onClose } = props;
  return <Alert onClose={onClose} className="MuiAlert-root" variant="filled" {...props} />;
};

AlertBox.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AlertBox;
