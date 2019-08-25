/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './DrawerToggle.scss';
import PropTypes from 'prop-types';

const DrawerToggle = (props) => {
  const { clicked } = props;
  return (
    <div
      style={{ float: 'right' }}
      onClick={clicked}
      className="DrawerToggle"
    >
      <div />
      <div />
      <div />
    </div>
  );
};

DrawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default DrawerToggle;
