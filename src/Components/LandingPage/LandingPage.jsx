import React from 'react';
import NavBar from './Navigation/NavBar/NavBar';

const LandingPage = (props) => {
  console.log(props);
  return (
    <NavBar isAuth />
  );
};

export default LandingPage;
