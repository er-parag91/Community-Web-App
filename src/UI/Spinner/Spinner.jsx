import React from 'react';
import './Spinner.scss';
import PropTypes from 'prop-types';

const logo = require('../../assets/images/logo_spinner.png');

const Spinner = (props) => {
  document.addEventListener('scroll', (e) => {
    e.preventDefault();
  });
  const { backgroundOpacity } = props;
  return (
    <div className="Spinner" style={{ opacity: backgroundOpacity }}>
      <div className="lds-ring">
        <img src={logo} alt="logo spinner" />
        <p>Loading...</p>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  backgroundOpacity: PropTypes.string,
};

Spinner.defaultProps = {
  backgroundOpacity: 1,
};

export default Spinner;
