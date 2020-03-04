import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import SideNavigationItem from './SideNavigationItem/SideNavigationItem';
import './SideNavigationItems.scss';
import Profile from './Profile/Profile';
import SideNavBarManu from '../../../../Data/SideNavBar';

const SideNavigationItems = (props) => {
  const { rootPath } = props;
  return (
    <div className="SideNavigationItems">
      <Profile />
      <Divider />
      <div>
        <p className="SideNavigationItems__Manu">Shopping</p>
        {SideNavBarManu.ShoppingMenu.map((manuItem) => <SideNavigationItem key={manuItem.value} Link={`${rootPath}/${manuItem.value}`}>{manuItem.label}</SideNavigationItem>)}
      </div>
      <div>
        <p className="SideNavigationItems__Manu">Selling</p>
        {SideNavBarManu.SellingManu.map((manuItem) => <SideNavigationItem key={manuItem.value} Link={`${rootPath}/${manuItem.value}`}>{manuItem.label}</SideNavigationItem>)}
      </div>
    </div>
  );
};

SideNavigationItems.propTypes = {
  rootPath: PropTypes.string.isRequired,
};

export default SideNavigationItems;
