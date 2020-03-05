import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import SideNavBar from './SideNavBar/SideNavBar';
import './SideNavBar/SideNavBar.scss';
import './Dashboard.scss';
import Header from '../../Components/Header/Header';
import DashboardRoutes from './DashboardRoutes/DashboardRoutes';

const Dashboard = (props) => {
  const { history } = props;
  return (
    <div className="Dashboard">
      {
        history.location.pathname === '/auth/dashboard'
        && <Redirect to="/auth/dashboard/shopping/featured" />
      }
      <Helmet>
        <title>Hindustan - Dashboard</title>
      </Helmet>
      <SideNavBar history={history} />
      <div className="Dashboard__Body">
        <Header />
        <DashboardRoutes />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Dashboard;
