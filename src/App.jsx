/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Auth from './Components/Auth/Auth';
import Dashboard from './Layout/Dashboard/Dashboard';
import LandingPage from './Components/LandingPage/LandingPage';
import Auth2 from './Components/Auth2/Auth2';

class App extends Component {
  render() {
    const { auth } = this.props;
    const { isLoggedIn } = auth;
    if (!isLoggedIn) {
      return (
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/auth" component={Auth2} />
          </Switch>
        </div>
      );
    }
    return (
      <div>
        <Switch>
          <Route exact path="/auth/dashboard" component={Dashboard} />
          <Route component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.user,
});

App.propTypes = {
  auth: PropTypes.shape().isRequired,
};
export default withRouter(connect(mapStateToProps)(App));
