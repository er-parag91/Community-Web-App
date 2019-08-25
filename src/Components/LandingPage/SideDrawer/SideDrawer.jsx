import React from 'react';
import PropTypes from 'prop-types';
import NavigationItems from '../Navigation/NavBar/NavigationItems/NavigationItems';
import './SideDrawer.scss';
import Backdrop from '../../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  let attachedClass = ['SideDrawer', 'Close'];
  const { open, closed, isAuth } = props;
  if (open) {
    attachedClass = ['SideDrawer', 'Open'];
  }
  return (
    <div>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClass.join(' ')}>
        <div className="SideDrawer__Logo">
          <span>Hindustan</span>
        </div>
        <NavigationItems
          isAuthenticated={isAuth}
          clicked={closed}
        />
      </div>
    </div>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool,
  closed: PropTypes.func.isRequired,
};

SideDrawer.defaultProps = {
  isAuth: false,
};

export default SideDrawer;
