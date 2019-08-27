/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Backdrop.scss';
import PropTypes from 'prop-types';

const Backdrop = (props) => {
  const { show, clicked } = props;
  return (show
    ? <div className="Backdrop" onClick={clicked} />
    : null);
};

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};
export default Backdrop;
