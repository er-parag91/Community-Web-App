import React from 'react';
import './NavigationItem.scss';
import PropTypes from 'prop-types';

const NavigationItem = (props) => {
  const {
    link, children, isTop, linkClicked,
  } = props;
  const scrollClass = {
    color: 'var(--color-Primary-dark)',
  };
  return (
    <li className="NavigationItem">
      <a
        style={isTop ? {} : scrollClass}
        href={link}
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
};

NavigationItem.defaultProps = {
  isTop: false,
  linkClicked: () => {},
};

export default NavigationItem;
