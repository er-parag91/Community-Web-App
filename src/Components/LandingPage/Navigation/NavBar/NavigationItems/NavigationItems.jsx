import React from 'react';
import './NavigationItems.scss';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
  const { clicked, isAuthenticated } = props;
  return (
    <ul className="NavigationItems">
      <div className="manuItems">
        <NavigationItem clicked={clicked} link="#home">
      Home
        </NavigationItem>
        <NavigationItem clicked={clicked} exact link="#services">
      Services
        </NavigationItem>
        <NavigationItem clicked={clicked} exact link="#testimonials">
      Testimonials
        </NavigationItem>
        <NavigationItem clicked={clicked} exact link="#contact">
      Contact us
        </NavigationItem>
        {isAuthenticated
          ? (
            <NavigationItem clicked={clicked} link="/auth/dashboard">
          Dashboard
            </NavigationItem>
          )
          : null}
      </div>

      {isAuthenticated
        ? (
          <NavigationItem clicked={clicked} link="/logout">
          Sign Out
          </NavigationItem>
        )
        : (
          <NavigationItem clicked={clicked} link="/Auth">
          Sign In
          </NavigationItem>
        )}
    </ul>
  );
};

NavigationItems.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default NavigationItems;
