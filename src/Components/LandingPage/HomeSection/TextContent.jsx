/* eslint-disable max-len */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './TextContent.scss';
import PropTypes from 'prop-types';
import InputAndButton from '../../../UI/InputAndButton/InputAndButton';

const textContent = [
  {
    title1: 'One stop',
    title2: 'For best collections',
    text: 'We sell best goods designed by hand picked vendors, feel yourself home and discover products for a life well lived. Do not miss to check us out! ',
  },
  {
    title1: 'Know about',
    title2: 'Upcoming event',
    text: 'We gather information about events happening around you and share here, so you can find all kind of events information at one place!',
  },
  {
    title1: 'Give identity',
    title2: 'To your business',
    text: 'Want to be on top of everything, Want to let people know about your business/service, simply post it here without any fees and spread the words!',
  },
  {
    title1: 'Want to',
    title2: 'Be online seller',
    text: 'Use our online e-commerce platform to start selling at no upfront cost. Your next big success is waiting to happen. We make selling online as easy as shopping online!',
  },
  {
    title1: 'Need freelancer',
    title2: 'For IT work',
    text: 'We can build and maintain Websites, Mobile Applications, Online Invitations, etc.!',
  },
];

class TextContent extends Component {
  state = {
    isMouseFocused: false,
  };

  componentWillReceiveProps(nextProps) {
    const { isMouseFocused } = this.state;
    const { currentIndex } = this.props;
    if (!isMouseFocused) {
      if (nextProps.currentIndex !== currentIndex && nextProps.currentIndex !== 0) {
        this.myEl.className = 'animate';
      }
      if (nextProps.currentIndex === 0) {
        this.myEl.className = 'animateBack';
      }
      this.carouselTimer();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.carouselTimer);
  }

  carouselTimer = () => {
    setTimeout(() => {
      if (this.myEl) {
        this.myEl.className = '';
      }
    }, 1000);
  };

  onSignUpClicked = (e) => {
    const { loggingIn, signUpEmail, history } = this.props;
    e.preventDefault();
    const data = new FormData(e.target);
    loggingIn();
    signUpEmail(data.get('email'));
    history.push('/auth');
  };

  stopAnimation = () => {
    this.setState({ isMouseFocused: true });
  }

  startAnimation = () => {
    this.setState({ isMouseFocused: false });
  }

  render() {
    const { currentIndex } = this.props;
    return (
      <div ref={(ref) => { this.myEl = ref; }}>
        <h1 className="header-primary">{textContent[currentIndex].title1}</h1>
        <h1 className="header-primary">{textContent[currentIndex].title2}</h1>
        <p>{textContent[currentIndex].text}</p>
        <InputAndButton text="Sign-up Free!" placeholder="Email Address" InputAndButtonSubmit={this.onSignUpClicked} mouseEntered={this.stopAnimation} mouseLeft={this.startAnimation} />
      </div>
    );
  }
}

TextContent.propTypes = {
  loggingIn: PropTypes.func.isRequired,
  signUpEmail: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  currentIndex: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatchEvent) => ({
  loggingIn: () => dispatchEvent({ type: 'IS_LOGGIN_IN' }),
  signUpEmail: (value) => dispatchEvent({ type: 'SIGNUP_EMAIL', value }),
});

export default connect(null, mapDispatchToProps)(withRouter(TextContent));
