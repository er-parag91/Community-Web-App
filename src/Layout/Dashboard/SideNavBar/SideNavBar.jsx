import React from 'react';
import PropTypes from 'prop-types';
import SideNavigationItems from './SideNavigationItems/SideNavigationItems';

const SideNavBar = (props) => {
  const { history, isSideNavBarOpen, closeSideNavBar } = props;
  let classes = ['SideNavBar', 'SideNavBar__Close'];
  if (isSideNavBarOpen) {
    classes = ['SideNavBar', 'SideNavBar__Open'];
  }
  return (
    <div className={classes.join(' ')}>
      <i className="fa fa-times Close_Icon" aria-hidden="true" onClick={closeSideNavBar} />
      <SideNavigationItems history={history} rootPath="/auth/dashboard" sideNavClicked={closeSideNavBar} />
    </div>
  );
};

SideNavBar.propTypes = {
  history: PropTypes.shape().isRequired,
  isSideNavBarOpen: PropTypes.bool.isRequired,
  closeSideNavBar: PropTypes.func.isRequired,
};

export default SideNavBar;
