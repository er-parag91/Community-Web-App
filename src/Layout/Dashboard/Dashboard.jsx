import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <h1>
      you are now logged in
    </h1>
    <NavLink to="/">Home</NavLink>
  </div>
);

export default Dashboard;
