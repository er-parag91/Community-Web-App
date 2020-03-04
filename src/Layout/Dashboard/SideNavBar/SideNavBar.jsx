import React from 'react';
import PropTypes from 'prop-types';
import SideNavigationItems from './SideNavigationItems/SideNavigationItems';

const SideNavBar = (props) => {
  const { history } = props;
  return (
    <div className="SideNavBar">
      <SideNavigationItems history={history} rootPath="/auth/dashboard" />
    </div>
  );
};

SideNavBar.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default SideNavBar;
