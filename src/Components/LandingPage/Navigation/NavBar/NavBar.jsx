import React from 'react';
import './NavBar.scss';
import PropTypes from 'prop-types';
import NavigationItems from './NavigationItems/NavigationItems';
import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle';


const NavBar = (props) => {
  const {
    isAuth, drawerToggleClicked, isTop, navLinkClicked,
  } = props;
  const style = isTop ? ['NavBar'].join(' ') : ['NavBar', 'notTop'].join(' ');
  return (
    <header className={style}>
      <div className="NavBar__Logo">
        <span>Hindustan</span>
      </div>
      <DrawerToggle isTop={isTop} clicked={drawerToggleClicked} />
      <nav className="DeskTopOnly">
        <NavigationItems
          isTop={isTop}
          isAuthenticated={isAuth}
          onNavLinkClick={navLinkClicked}
        />
      </nav>
    </header>
  );
};

NavBar.propTypes = {
  isAuth: PropTypes.bool,
  drawerToggleClicked: PropTypes.func.isRequired,
  isTop: PropTypes.bool.isRequired,
  navLinkClicked: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  isAuth: true,
};

export default NavBar;
