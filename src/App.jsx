/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.scss';
import {
  Switch, Route, withRouter, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Auth from './Components/Auth/Auth';
import Dashboard from './Layout/Dashboard/Dashboard';
import LandingPage from './Components/LandingPage/LandingPage';
// import Auth2 from './Components/Auth2/Auth2';

class App extends Component {
  render() {
    const { auth } = this.props;
    const { isLoggedIn } = auth;
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      return (
        <div>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </div>
      );
    }
    return (
      <div>
        <Redirect exact from="/auth" to="/auth/dashboard" />
        <Switch>
          <Route path="/auth/dashboard" component={Dashboard} />
          <Route path="/" render={() => <LandingPage isLoggedIn={isLoggedIn} />} />
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
