import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  const SpinnerContainer = document.getElementsByClassName('.Spinner');
  document.addEventListener('scroll', (e) => {
    e.preventDefault();
  });
  console.log(SpinnerContainer);
  return (
    <div className="Spinner">
      <div className="lds-hourglass" />
    </div>
  );
};

export default Spinner;
