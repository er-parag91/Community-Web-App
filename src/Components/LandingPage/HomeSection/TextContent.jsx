/* eslint-disable max-len */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './TextContent.scss';
import PropTypes from 'prop-types';
import InputAndButton from '../../../UI/InputAndButton/InputAndButton';

const textContent = [
  {
    title1: 'We Do',
    title2: 'things right',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took  book.',
  },
  {
    title1: 'We organize',
    title2: 'Events party',
    text: 'The printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took  book.',
  },
  {
    title1: 'Lorem Ipsum',
    title2: 'might right',
    text: 'Typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took  book.',
  },
  {
    title1: 'Do We',
    title2: 'things right',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took  book.',
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
      setTimeout(() => {
        this.myEl.className = '';
      }, 1000);
    }
  }

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
        <h1>{textContent[currentIndex].title1}</h1>
        <h1>{textContent[currentIndex].title2}</h1>
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
