/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Backdrop.scss';
import PropTypes from 'prop-types';

const Backdrop = (props) => {
  const { show, clicked, notShowOn1180 } = props;
  let classes = ['Backdrop'];
  if (notShowOn1180) {
    classes = ['Backdrop', 'notShowOn1180'];
  }
  return (show
    ? <div className={classes.join(' ')} onClick={clicked} />
    : null);
};

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
  notShowOn1180: PropTypes.bool,
};

Backdrop.defaultProps = {
  notShowOn1180: false,
};
export default Backdrop;
