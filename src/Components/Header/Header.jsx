/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';

const Header = (props) => {
  const {
    isSideNavBarOpen, openSideNavBar, cartQuantity, history,
  } = props;
  return (
    <div className="Header">
      <div className="Header__Texts">
        {!isSideNavBarOpen
        && (
        <div className="HamBurger" role="button" onClick={openSideNavBar}>
          <div />
          <div />
          <div />
        </div>
        )}
        <span className="Logo">Hindustan</span>
        <div className="Header__User-Container">
          <div>
            <IconButton aria-label="notifications">
              <Badge badgeContent={0} color="secondary" showZero max={10}>
                <Tooltip title="Notifications" arrow>
                  <i className="fa fa-bell Header__Icon" />
                </Tooltip>
              </Badge>
            </IconButton>
          </div>
          <div>
            <IconButton aria-label="cart" onClick={() => history.push('/auth/dashboard/user/myCart')}>
              <Badge badgeContent={cartQuantity} color="secondary" showZero max={99}>
                <Tooltip title="Your Cart" arrow>
                  <i className="fa fa-shopping-cart Header__Icon" />
                </Tooltip>
              </Badge>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  isSideNavBarOpen: PropTypes.bool.isRequired,
  openSideNavBar: PropTypes.func.isRequired,
  cartQuantity: PropTypes.number,
  history: PropTypes.shape().isRequired,
};

Header.defaultProps = {
  cartQuantity: 0,
};

export default Header;
