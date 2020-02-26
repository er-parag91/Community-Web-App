import React from 'react';
import './Spinner.scss';

const logo = require('../../assets/images/logo_spinner.png');

const Spinner = () => {
  document.addEventListener('scroll', (e) => {
    e.preventDefault();
  });
  return (
    <div className="Spinner">
      <div className="lds-ring">
        <img src={logo} alt="logo spinner" />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;
