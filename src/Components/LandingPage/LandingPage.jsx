import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = (props) => {
  console.log(props);
  return (
    <div>
      <NavLink to="/auth">Go to Login Page</NavLink>
    </div>
  );
};

export default LandingPage;
