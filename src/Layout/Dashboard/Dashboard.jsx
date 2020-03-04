import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideNavBar from './SideNavBar/SideNavBar';
import './SideNavBar/SideNavBar.scss';
import './Dashboard.scss';

const Dashboard = (props) => {
  const { history } = props;
  return (
    <div>
      {
        history.location.pathname === '/auth/dashboard'
        && <Redirect to="/auth/dashboard/featured" />
      }
      <header>
        <span>Hindustan</span>
      </header>
      <SideNavBar />
      <NavLink to="/" history={history}>Home</NavLink>
    </div>
  );
};

Dashboard.propTypes = {
  history: PropTypes.shape.isRequired,
};

export default Dashboard;
