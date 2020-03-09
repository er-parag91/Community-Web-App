import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../../Store/Actions';
import SideNavigationItem from './SideNavigationItem/SideNavigationItem';
import './SideNavigationItems.scss';
import Profile from './Profile/Profile';
import SideNavBarManu from '../../../../Data/SideNavBar';

// eslint-disable-next-line react/prefer-stateless-function
class SideNavigationItems extends Component {
  render() {
    const {
      rootPath, history, user, onLogout, sideNavClicked,
    } = this.props;
    return (
      <div className="SideNavigationItems">
        <Profile history={history} user={user} onLogout={() => onLogout(user, history)} />
        <Divider />
        <div>
          <p className="SideNavigationItems__Manu">Shopping</p>
          {SideNavBarManu.ShoppingMenu.map((manuItem) => <SideNavigationItem sideNavClicked={sideNavClicked} key={manuItem.value} Link={`${rootPath}/shopping/${manuItem.value}`}>{manuItem.label}</SideNavigationItem>)}
        </div>
        <div>
          <p className="SideNavigationItems__Manu">Selling</p>
          {SideNavBarManu.SellingManu.map((manuItem) => <SideNavigationItem sideNavClicked={sideNavClicked} key={manuItem.value} Link={`${rootPath}/selling/${manuItem.value}`}>{manuItem.label}</SideNavigationItem>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: (user, history) => dispatch(actions.logoutUser(user, history)),
});

SideNavigationItems.propTypes = {
  rootPath: PropTypes.string.isRequired,
  history: PropTypes.shape().isRequired,
  user: PropTypes.shape().isRequired,
  onLogout: PropTypes.func.isRequired,
  sideNavClicked: PropTypes.func,
};

SideNavigationItems.defaultProps = {
  sideNavClicked: () => {},
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNavigationItems));
