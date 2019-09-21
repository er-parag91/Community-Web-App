import React from 'react';
import './NavigationItems.scss';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem/NavigationItem';
import OutlinedButton from '../../../../../UI/OutlinedButton/OutlinedButton';

const NavigationItems = (props) => {
  const {
    isAuthenticated, isTop, closeSideDrawer, onNavLinkClick,
  } = props;
  const signInButtonHandler = () => {
    console.log('button clicked');
  };

  const signOutButtonHandler = () => {
    console.log('button clicked');
  };

  const onAnchorClick = (className) => {
    closeSideDrawer();
    onNavLinkClick(className);
  };

  return (
    <ul className="NavigationItems">
      <div className="manuItems">
        {isAuthenticated
          ? (
            <NavigationItem link="/auth/dashboard" isTop={isTop}>
          Dashboard
            </NavigationItem>
          )
          : null}
        <NavigationItem link="#home" linkClicked={() => onAnchorClick('.section__home')} isTop={isTop}>
      Home
        </NavigationItem>
        <NavigationItem exact link="#services" linkClicked={() => onAnchorClick('.section__services')} isTop={isTop}>
      Services
        </NavigationItem>
        <NavigationItem exact link="#testimonials" linkClicked={() => onAnchorClick('.section__testimonial')} isTop={isTop}>
      Testimonials
        </NavigationItem>
        <NavigationItem exact link="#contact" linkClicked={() => onAnchorClick('.section__contact')} isTop={isTop}>
      Contact us
        </NavigationItem>
      </div>
      {isAuthenticated
        ? (
          <OutlinedButton OutlinedButtonClicked={signOutButtonHandler} linkClicked={closeSideDrawer} link="/logout" text="Sign Out" />
        )
        : (
          <OutlinedButton OutlinedButtonClicked={signInButtonHandler} linkClicked={closeSideDrawer} link="/Auth" text="Sign In" />
        )}
    </ul>
  );
};

NavigationItems.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isTop: PropTypes.bool,
  closeSideDrawer: PropTypes.func,
  onNavLinkClick: PropTypes.func.isRequired,
};

NavigationItems.defaultProps = {
  isTop: false,
  closeSideDrawer: () => {},
};
export default NavigationItems;
