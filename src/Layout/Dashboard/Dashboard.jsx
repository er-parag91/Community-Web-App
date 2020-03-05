import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideNavBar from './SideNavBar/SideNavBar';
import './SideNavBar/SideNavBar.scss';
import './Dashboard.scss';
import Header from '../../Components/Header/Header';
import DashboardRoutes from './DashboardRoutes/DashboardRoutes';
import HTMLTitle from '../../UI/HTMLTitle/HTMLTitle';

const Dashboard = (props) => {
  const { history } = props;
  return (
    <div className="Dashboard">
      {
        history.location.pathname === '/auth/dashboard'
        && <Redirect to="/auth/dashboard/shopping/featured" />
      }
      <HTMLTitle title="Dashboard" />
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
