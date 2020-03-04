/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Profile.scss';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '../../../../../UI/Button/Button';
import Avatar from '../../../../../assets/SVGs/profile.svg';

const Profile = (props) => {
  const { image, history, onLogout } = props;
  return (
    <div className="Profile">
      <div className="Avatar">
        <img alt="Avatar" src={image} />
      </div>
      <Button text="Profile" />
      <div className="Profile__actions">
        <Tooltip title="Back to Home" arrow>
          <i className="fa fa-home" onClick={() => history.push('/')} />
        </Tooltip>
        <Tooltip title="Logout" arrow>
          <i className="fa fa-sign-out" onClick={onLogout} />
        </Tooltip>
      </div>
    </div>
  );
};

Profile.propTypes = {
  image: PropTypes.string,
  history: PropTypes.shape().isRequired,
  onLogout: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  image: Avatar,
};

export default Profile;
