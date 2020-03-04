import React from 'react';

import './Profile.scss';
import PropTypes from 'prop-types';
import Button from '../../../../../UI/Button/Button';
import Avatar from '../../../../../assets/SVGs/profile.svg';

const Profile = (props) => {
  const { image } = props;
  return (
    <div className="Profile">
      <div className="Avatar">
        <img alt="Avatar" src={image} />
      </div>
      <Button text="Profile" />
    </div>
  );
};

Profile.propTypes = {
  image: PropTypes.string,
};

Profile.defaultProps = {
  image: Avatar,
};

export default Profile;
