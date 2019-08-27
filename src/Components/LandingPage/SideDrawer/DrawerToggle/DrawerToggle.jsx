/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './DrawerToggle.scss';
import PropTypes from 'prop-types';

const DrawerToggle = (props) => {
  const { clicked, isTop } = props;
  return (
    <div
      onClick={clicked}
      className="DrawerToggle"
    >
      <div style={isTop ? {} : { backgroundColor: 'var(--color-Primary-dark)' }} />
      <div style={isTop ? {} : { backgroundColor: 'var(--color-Primary-dark)' }} />
      <div style={isTop ? {} : { backgroundColor: 'var(--color-Primary-dark)' }} />
    </div>
  );
};

DrawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired,
  isTop: PropTypes.bool.isRequired,
};

export default DrawerToggle;
