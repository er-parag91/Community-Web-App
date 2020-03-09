/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.scss';
import {
  Switch, Route, withRouter, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import * as actions from './Store/Actions';
import Auth from './Components/Auth/Auth';
import Dashboard from './Layout/Dashboard/Dashboard';
import LandingPage from './Components/LandingPage/LandingPage';
import Alert from './UI/Alert/Alert';
import Spinner from './UI/Spinner/Spinner';

class App extends Component {
  render() {
    const {
      auth, generalState, onCloseAlert, history,
    } = this.props;
    const { isLoggedIn } = auth;
    const { alert, loading, concurrentLoadingCount } = generalState;
    if (!isLoggedIn) {
      return (
        <div>
          {alert.message && (
          <Snackbar open autoHideDuration={12000} onClose={onCloseAlert}>
            <Alert
              onCloseAlert={onCloseAlert}
              AlertTitle={alert.severity}
              severity={alert.severity}
            >
              {alert.message}
            </Alert>
          </Snackbar>
          )}
          {(loading || concurrentLoadingCount > 0) && <Spinner backgroundOpacity="0.85" />}
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      );
    }
    return (
      <div>
        {alert.message && (
          <Snackbar open autoHideDuration={12000} onClose={onCloseAlert}>
            <Alert
              onCloseAlert={onCloseAlert}
              AlertTitle={alert.severity}
              severity={alert.severity}
            >
              {alert.message}
            </Alert>
          </Snackbar>
        )}
        {(loading || concurrentLoadingCount > 0) && <Spinner backgroundOpacity="0.85" />}
        {
          history.location.pathname === '/auth'
          && <Redirect exact from="/auth" to="/auth/dashboard" />
        }
        <Switch>
          <Route path="/" exact render={() => <LandingPage isLoggedIn={isLoggedIn} />} />
          <Route path="/auth/dashboard" component={Dashboard} />
          <Route component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.user,
  generalState: state.generalState,
});

const mapDispatchToProps = (dispatch) => ({
  onCloseAlert: () => dispatch(actions.dismissErrorMessage()),
});

App.propTypes = {
  generalState: PropTypes.shape().isRequired,
  auth: PropTypes.shape().isRequired,
  onCloseAlert: PropTypes.func,
  history: PropTypes.shape().isRequired,
};

App.defaultProps = {
  onCloseAlert: () => {},
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
