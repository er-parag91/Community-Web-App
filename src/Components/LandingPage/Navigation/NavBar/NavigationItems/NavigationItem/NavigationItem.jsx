/* eslint-disable no-sequences */
import React from 'react';
import './NavigationItem.scss';
import PropTypes from 'prop-types';

const NavigationItem = (props) => {
  const {
    link, children, isTop, linkClicked, isActive,
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
  isActive: PropTypes.bool.isRequired,
};

NavigationItem.defaultProps = {
  isTop: false,
  linkClicked: () => {},
};

export default NavigationItem;
