import React from 'react';
import './NavigationItems.scss';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem/NavigationItem';
import OutlinedButton from '../../../../../UI/OutlinedButton/OutlinedButton';

const NavigationItems = (props) => {
  const { isAuthenticated, isTop } = props;
  const signInButtonHandler = () => {
    console.log('button clicked');
  };

  const signOutButtonHandler = () => {
    console.log('button clicked');
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
        <NavigationItem link="#home" isTop={isTop}>
      Home
        </NavigationItem>
        <NavigationItem exact link="#services" isTop={isTop}>
      Services
        </NavigationItem>
        <NavigationItem exact link="#testimonials" isTop={isTop}>
      Testimonials
        </NavigationItem>
        <NavigationItem exact link="#contact" isTop={isTop}>
      Contact us
        </NavigationItem>
      </div>
      {isAuthenticated
        ? (
          <OutlinedButton OutlinedButtonClicked={signOutButtonHandler} link="/logout" text="Sign Out" />
        )
        : (
          <OutlinedButton OutlinedButtonClicked={signInButtonHandler} link="/Auth" text="Sign In" />
        )}
    </ul>
  );
};

NavigationItems.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isTop: PropTypes.bool,
};

NavigationItems.defaultProps = {
  isTop: false,
};
export default NavigationItems;
