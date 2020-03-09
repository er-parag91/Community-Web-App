import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SideNavigationItem.scss';

const SideNavigationItem = (props) => {
  const {
    Link, children, sideNavClicked,
  } = props;
  return (
    <li className="SideNavigationItem">
      <NavLink to={Link} onClick={window.innerWidth < 1180 ? sideNavClicked : null}>
        {children}
      </NavLink>
    </li>
  );
};

SideNavigationItem.propTypes = {
  Link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  sideNavClicked: PropTypes.func,
};

SideNavigationItem.defaultProps = {
  sideNavClicked: () => {},
};

export default SideNavigationItem;
