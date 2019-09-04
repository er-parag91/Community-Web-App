/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './HomeSection.scss';
import PropTypes from 'prop-types';
import InputAndButton from '../../../UI/InputAndButton/InputAndButton';

const homeOne = require('../../../assets/main-1.jpg');
const homeTwo = require('../../../assets/main-2.jpg');
const homeThree = require('../../../assets/main-3.jpg');
const homeFour = require('../../../assets/main-4.jpg');


class HomeSection extends Component {
  state = {
    images: [
      homeOne,
      homeTwo,
      homeThree,
      homeFour,
    ],
    currentIndex: 0,
    translateValue: 0,
  };

  onSignUpClicked = (e) => {
    const { loggingIn, signUpEmail, history } = this.props;
    e.preventDefault();
    const data = new FormData(e.target);
    loggingIn();
    signUpEmail(data.get('email'));
    history.push('/auth');
  };

  goToPrevSlide = () => {
    const { currentIndex } = this.state;
    if (currentIndex === 0) { return; }

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  }

  goToNextSlide = () => {
    const { currentIndex, images } = this.state;
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (currentIndex === images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }

    // This will not run if we met the if condition above
    return this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth()),
    }));
  }

  slideWidth = () => document.querySelector('.slide').clientWidth

  render() {
    const { images, translateValue } = this.state;
    return (
      <div className="Home">
        <div className="Home__Content">
          <div className="Home__Content--text">
            <h1>We Do</h1>
            <h1>things right</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took  book.</p>
            <InputAndButton text="Sign-up Free!" placeholder="Email Address" InputAndButtonSubmit={this.onSignUpClicked} />
          </div>
          <div className="slider Home__Content--picture">

            <div
              className="slider-wrapper"
              style={{
                transform: `translateX(${translateValue}px)`,
                transition: 'transform ease-out 0.45s',
              }}
            >
              {
              images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
            </div>

            <LeftArrow
              goToPrevSlide={this.goToPrevSlide}
            />

            <RightArrow
              goToNextSlide={this.goToNextSlide}
            />
          </div>
        </div>
      </div>
    );
  }
}

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

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
  };
  return <div className="slide" style={styles} />;
};


const LeftArrow = (props) => (
  <div className="backArrow arrow" onClick={props.goToPrevSlide}>
    <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
  </div>
);


const RightArrow = (props) => (
  <div className="nextArrow arrow" onClick={props.goToNextSlide}>
    <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
  </div>
);
