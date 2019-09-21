/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { Component } from 'react';
import './HomeSection.scss';
import PropTypes from 'prop-types';
import TextContent from './TextContent';

const homeOne = require('../../../assets/images/main-1.jpg');
const homeTwo = require('../../../assets/images/main-2.jpg');
const homeThree = require('../../../assets/images/main-3.jpg');
const homeFour = require('../../../assets/images/main-4.jpg');


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

  // auto slide show for images
  componentDidMount() {
    setInterval(() => {
      this.goToNextSlide();
    }, 5000);
  }

  // slide to prev image
  goToPrevSlide = () => {
    const { currentIndex } = this.state;
    // Exiting the method early if we are at the start of the images array.
    if (currentIndex === 0) { return; }

    // This will not run if we met the if condition above
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  }

  // slide to next image
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

  // takes image width from the DOM and this width is useful
  // to slide the component by specific pixel
  slideWidth = () => document.querySelector('.slide').clientWidth

  render() {
    const {
      images, translateValue, currentIndex,
    } = this.state;
    return (
      <div className="Home">
        <div className="Home__Content">
          <div
            className="Home__Content--text"
            data-sal-duration="1200"
            data-sal="slide-up"
            data-sal-easing="ease-out-bounce"
          >
            <TextContent currentIndex={currentIndex} />
          </div>
          <div
            className="Home__Content--picture"
            data-sal-duration="1200"
            data-sal="slide-up"
            data-sal-easing="ease-out-bounce"
          >
            <div className="slider">
              <div
                className="slider-wrapper"
                style={{
                  transform: `translateX(${translateValue}px)`,
                  transition: 'transform ease-out 1000ms',
                }}
              >
                {
              images.map((image) => (
                <Slide key={image} image={image} />
              ))
            }
              </div>
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

export default HomeSection;

// Image slider helper functional component
const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    borderTopLeftRadius: '50%',

  };
  return <div className="slide" style={styles} />;
};

Slide.propTypes = {
  image: PropTypes.string.isRequired,
};

const LeftArrow = (props) => {
  const { goToPrevSlide } = props;
  return (
    <div className="backArrow arrow" role="button" onClick={goToPrevSlide}>
      <i className="fa fa-arrow-left" aria-hidden="true" />
    </div>
  );
};
LeftArrow.propTypes = {
  goToPrevSlide: PropTypes.func.isRequired,
};

const RightArrow = (props) => {
  const { goToNextSlide } = props;
  return (
    <div className="nextArrow arrow" role="button" onClick={goToNextSlide}>
      <i className="fa fa-arrow-right" aria-hidden="true" />
    </div>
  );
};

RightArrow.propTypes = {
  goToNextSlide: PropTypes.func.isRequired,
};
