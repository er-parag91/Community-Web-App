import React from 'react';
import './NavBar.scss';
import PropTypes from 'prop-types';
import NavigationItems from './NavigationItems/NavigationItems';
import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle';


const NavBar = (props) => {
  const { isAuth, drawerToggleClicked } = props;
  return (
    <header className="NavBar">
      <div className="Logo">
        <span>Hindustan</span>
      </div>
      <DrawerToggle clicked={drawerToggleClicked} />
      <nav className="DeskTopOnly">
        <NavigationItems isAuthenticated={isAuth} />
      </nav>
    </header>
  );
};

NavBar.propTypes = {
  isAuth: PropTypes.bool,
  drawerToggleClicked: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  isAuth: false,
};

export default NavBar;
