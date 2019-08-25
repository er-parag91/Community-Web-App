import React from 'react';
import './NavigationItem.scss';
import PropTypes from 'prop-types';

const NavigationItem = (props) => {
  const {
    exact, link, clicked, children, isTop,
  } = props;
  const scrollClass = {
    color: 'var(--color-Primary-dark)',
  };
  return (
    <li className="NavigationItem">
      <a
        style={isTop ? {} : scrollClass}
        exact={exact}
        href={link}
        activeClassName="active"
        onClick={clicked}
      >
        {children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  exact: PropTypes.bool,
  link: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  children: PropTypes.shape().isRequired,
  isTop: PropTypes.bool,
};

NavigationItem.defaultProps = {
  exact: false,
  isTop: false,
};

export default NavigationItem;
