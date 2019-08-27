import React from 'react';
import './NavigationItems.scss';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem/NavigationItem';
import OutlinedButton from '../../../../../UI/OutlinedButton/OutlinedButton';

const NavigationItems = (props) => {
  const { clicked, isAuthenticated, isTop } = props;
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
            <NavigationItem clicked={clicked} link="/auth/dashboard" isTop={isTop}>
          Dashboard
            </NavigationItem>
          )
          : null}
        <NavigationItem clicked={clicked} link="#home" isTop={isTop}>
      Home
        </NavigationItem>
        <NavigationItem clicked={clicked} exact link="#services" isTop={isTop}>
      Services
        </NavigationItem>
        <NavigationItem clicked={clicked} exact link="#testimonials" isTop={isTop}>
      Testimonials
        </NavigationItem>
        <NavigationItem clicked={clicked} exact link="#contact" isTop={isTop}>
      Contact us
        </NavigationItem>
      </div>
      {isAuthenticated
        ? (
          <OutlinedButton OutlinedButtonClicked={signOutButtonHandler} link="/logout" text="Sign out" />
        )
        : (
          <OutlinedButton OutlinedButtonClicked={signInButtonHandler} link="/Auth" text="sign in" />
        )}
    </ul>
  );
};

NavigationItems.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
  isTop: PropTypes.bool,
};

NavigationItems.defaultProps = {
  isTop: false,
};
export default NavigationItems;
