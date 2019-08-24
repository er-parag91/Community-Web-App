import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.scss';
import PropTypes from 'prop-types';

const NavigationItem = (props) => {
  const {
    exact, link, clicked, children,
  } = props;
  return (
    <li className="navigationItem">
      <NavLink
        exact={exact}
        to={link}
        activeClassName="active"
        onClick={clicked}
      >
        {children}
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  exact: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  children: PropTypes.shape().isRequired,
};
export default NavigationItem;
