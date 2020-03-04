import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SideNavigationItem.scss';

const SideNavigationItem = (props) => {
  const { Link, children } = props;
  return (
    <li className="SideNavigationItem">
      <NavLink to={Link}>
        {children}
      </NavLink>
    </li>
  );
};

SideNavigationItem.propTypes = {
  Link: PropTypes.string.isRequired,
  children: PropTypes.shape.isRequired,
};

export default SideNavigationItem;
