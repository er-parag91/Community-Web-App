/* eslint-disable react/no-unused-prop-types */
/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './HomeSection.scss';
import PropTypes from 'prop-types';
import InputAndButton from '../../../UI/InputAndButton/InputAndButton';

const homeOne = require('../../../assets/main-1.jpg');

const HomeSection = (props) => {
  const onSignUpClicked = (e) => {
    const { loggingIn, signUpEmail, history } = props;
    e.preventDefault();
    const data = new FormData(e.target);
    loggingIn();
    signUpEmail(data.get('email'));
    history.push('/auth');
  };

  return (
    <div className="Home">
      <div className="Home__Content">
        <div className="Home__Content--text">
          <h1>We Do</h1>
          <h1>things right</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took  book.</p>
          <InputAndButton text="Sign-up Free!" placeholder="Email Address" InputAndButtonSubmit={onSignUpClicked} />
        </div>
        <img className="Home__Content--picture" src={homeOne} alt="" />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatchEvent) => ({
  loggingIn: () => dispatchEvent({ type: 'IS_LOGGIN_IN' }),
  signUpEmail: (value) => dispatchEvent({ type: 'SIGNUP_EMAIL', value }),
});

HomeSection.propTypes = {
  loggingIn: PropTypes.func.isRequired,
  signUpEmail: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(null, mapDispatchToProps)(withRouter(HomeSection));
