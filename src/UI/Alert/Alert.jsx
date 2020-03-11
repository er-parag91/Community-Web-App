/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';
import './Alert.scss';

const AlertBox = (props) => {
  const { onCloseAlert } = props;
  return <Alert onClose={() => onCloseAlert()} className="MuiAlert-root" variant="filled" {...props} />;
};

AlertBox.propTypes = {
  onCloseAlert: PropTypes.func.isRequired,
};

export default AlertBox;
