import React from 'react';
import './Header.scss';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';

const Header = () => (
  <div className="Header">
    <div className="Header__Texts">
      <span className="Logo">Hindustan</span>
      <div className="Header__User-Container">
        <div>
          <IconButton aria-label="cart">
            <Badge badgeContent={0} color="secondary" showZero max={10}>
              <Tooltip title="Notifications" arrow>
                <i className="fa fa-bell Header__Icon" />
              </Tooltip>
            </Badge>
          </IconButton>
        </div>
        <div>
          <IconButton aria-label="cart">
            <Badge badgeContent={0} color="secondary" showZero max={10}>
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

export default Header;
