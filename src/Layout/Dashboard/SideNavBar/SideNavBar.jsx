import React from 'react';
import SideNavigationItems from './SideNavigationItems/SideNavigationItems';

const SideNavBar = (props) => {
  console.log(props);
  return (
    <div className="SideNavBar">
      <SideNavigationItems rootPath="/auth/dashboard" />
    </div>
  );
};

export default SideNavBar;
