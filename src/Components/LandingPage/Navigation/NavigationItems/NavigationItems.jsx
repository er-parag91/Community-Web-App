import React from 'react';
import './NavigationItems.scss';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
  const { clicked, isAuthenticated } = props;
  return (
    <ul className="NavigationItems">
      <NavigationItem clicked={clicked} link="/prices">
      Prices
      </NavigationItem>
      <NavigationItem clicked={clicked} exact link="/">
      Burger Builder
      </NavigationItem>
      {isAuthenticated
        ? (
          <NavigationItem clicked={clicked} link="/orders">
          Your orders
          </NavigationItem>
        )
        : null}
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
