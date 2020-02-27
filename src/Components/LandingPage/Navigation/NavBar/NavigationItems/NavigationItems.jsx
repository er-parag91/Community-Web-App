import React from 'react';
import './NavigationItems.scss';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem/NavigationItem';
import OutlinedButton from '../../../../../UI/OutlinedButton/OutlinedButton';

const NavigationItems = (props) => {
  const {
    isAuthenticated, isTop, closeSideDrawer, onNavLinkClick, history,
  } = props;
  const signInButtonHandler = () => {
    history.push('/auth');
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
            <NavigationItem link="/auth/dashboard" isAnchor isTop={isTop}>
          Dashboard
            </NavigationItem>
          )
          : null}
        <NavigationItem link="#home" isActive={document.location.hash === '#home' || document.location.hash === ''} linkClicked={() => onAnchorClick('.section__home')} isTop={isTop}>
      Home
        </NavigationItem>
        <NavigationItem exact link="#services" isActive={document.location.hash === '#services'} linkClicked={() => onAnchorClick('.section__services')} isTop={isTop}>
      Services
        </NavigationItem>
        <NavigationItem exact link="#testimonials" isActive={document.location.hash === '#testimonials'} linkClicked={() => onAnchorClick('.section__testimonial')} isTop={isTop}>
      Testimonials
        </NavigationItem>
        <NavigationItem exact link="#contact" isActive={document.location.hash === '#contact'} linkClicked={() => onAnchorClick('.section__contact')} isTop={isTop}>
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
  history: PropTypes.shape(),
};

NavigationItems.defaultProps = {
  isTop: false,
  closeSideDrawer: () => {},
  history: {},
};
export default NavigationItems;
