import React from 'react';
import './Spinner.scss';

const Spinner = () => (
  <div style={{ width: '100vw', height: '100vh', backgroundColor: 'var(--color-Grey-light-3)' }}>
    <div className="lds-hourglass" />
  </div>
);

export default Spinner;
