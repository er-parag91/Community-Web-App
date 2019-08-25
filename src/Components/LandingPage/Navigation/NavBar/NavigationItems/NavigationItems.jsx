import React from 'react';
import './NavigationItems.scss';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
  const { clicked, isAuthenticated, isTop } = props;
  console.log(isTop);
  return (
    <ul className="NavigationItems">
      <div className="manuItems">
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
        {isAuthenticated
          ? (
            <NavigationItem clicked={clicked} link="/auth/dashboard" isTop={isTop}>
          Dashboard
            </NavigationItem>
          )
          : null}
      </div>
      {isAuthenticated
        ? (
          <NavigationItem isTop clicked={clicked} link="/logout">
          Sign Out
          </NavigationItem>
        )
        : (
          <NavigationItem isTop clicked={clicked} link="/Auth">
          Sign In
          </NavigationItem>
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
