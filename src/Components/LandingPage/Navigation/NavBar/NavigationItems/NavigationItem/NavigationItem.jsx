/* eslint-disable no-sequences */
import React from 'react';
import './NavigationItem.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
  const {
    link, children, isTop, linkClicked, isActive, isAnchor,
  } = props;

  let styles;
  if (!isActive && !isTop) {
    styles = {
      color: 'var(--color-Primary-dark)',
    };
  }

  if (isActive && !isTop) {
    styles = {
      color: 'var(--color-Primary-dark)',
      borderBottom: '2px solid var(--color-primary)',
    };
  }
  if (isAnchor) {
    return (
      <li className="NavigationItem">
        <NavLink
          style={styles}
          to={link}
          className={isActive ? 'active anchor' : 'anchor'}
        >
          {children}
        </NavLink>
      </li>
    );
  }
  return (
    <li className="NavigationItem">
      <a
        style={styles}
        href={link}
        className={isActive ? 'active' : ''}
        onClick={linkClicked}
      >
        {children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  isTop: PropTypes.bool,
  linkClicked: PropTypes.func,
  isActive: PropTypes.bool,
  isAnchor: PropTypes.bool,
};

NavigationItem.defaultProps = {
  isTop: false,
  isActive: false,
  linkClicked: () => {},
  isAnchor: false,
};

export default NavigationItem;
