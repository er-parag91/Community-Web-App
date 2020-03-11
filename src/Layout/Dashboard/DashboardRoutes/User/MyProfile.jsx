/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../../Store/Actions/index';
import HTMLTitle from '../../../../UI/HTMLTitle/HTMLTitle';

class MyProfile extends Component {
  UNSAFE_componentWillMount() {
    const {
      user, history, onGetMyProfile,
    } = this.props;
    onGetMyProfile(user, history);
  }

  render() {
    const { user } = this.props;
    if (!user.myCart || !user.myCart.length) {
      return (
        <div>
          <HTMLTitle title="My Profile" />
          <h1 className="Title">My Profile</h1>
        </div>
      );
    }
    return (
      <div>
        <div>
          <HTMLTitle title="My Cart" />
          <h1 className="Title">My Profile</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  onGetMyProfile: (user, history) => dispatch(actions.onGetMyProfile(user, history)),
});

MyProfile.propTypes = {
  user: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  onGetMyProfile: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyProfile));
