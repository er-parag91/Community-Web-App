import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideNavBar from './SideNavBar/SideNavBar';
import './SideNavBar/SideNavBar.scss';
import './Dashboard.scss';
import Header from '../../Components/Header/Header';
import DashboardRoutes from './DashboardRoutes/DashboardRoutes';
import HTMLTitle from '../../UI/HTMLTitle/HTMLTitle';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Footer from '../../Components/Footer/footer';


class Dashboard extends Component {
  state = {
    isSideNavBarOpen: true,
  }

  componentDidMount() {
    const { isSideNavBarOpen } = this.state;
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1180 && isSideNavBarOpen) {
        this.setState({ isSideNavBarOpen: true });
      }
      if (window.innerWidth < 1180 && isSideNavBarOpen) {
        this.setState({ isSideNavBarOpen: false });
      }
    });
  }

  render() {
    const { history, user } = this.props;
    const { isSideNavBarOpen } = this.state;
    let dashboardBodyClasses = ['Dashboard__Body', 'No__Slide-Dashboard'];
    if (isSideNavBarOpen) {
      dashboardBodyClasses = ['Dashboard__Body', 'Slide-Dashboard'];
    }
    return (
      <div className="Dashboard">
        {
          history.location.pathname === '/auth/dashboard'
          && <Redirect to="/auth/dashboard/shopping/featured" />
        }
        <HTMLTitle title="Dashboard" />
        <Backdrop
          show={isSideNavBarOpen}
          clicked={() => this.setState({ isSideNavBarOpen: false })}
          notShowOn1180
        />
        <SideNavBar
          history={history}
          isSideNavBarOpen={isSideNavBarOpen}
          closeSideNavBar={() => this.setState({ isSideNavBarOpen: false })}
        />
        <div className={dashboardBodyClasses.join(' ')}>
          <Header
            history={history}
            isSideNavBarOpen={isSideNavBarOpen}
            openSideNavBar={() => this.setState({ isSideNavBarOpen: true })}
            cartQuantity={user.cartQuantity}
          />
          <div className="main">
            <DashboardRoutes />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Dashboard.propTypes = {
  history: PropTypes.shape().isRequired,
  user: PropTypes.shape().isRequired,
};

export default withRouter(connect(mapStateToProps)(Dashboard));
