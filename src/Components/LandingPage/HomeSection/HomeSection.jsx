/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { Component } from 'react';
import './HomeSection.scss';
import Sample from './sample';

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

  componentDidMount() {
    setInterval(() => {
      this.goToNextSlide();
    }, 5000);
  }

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
    // eslint-disable-next-line no-unused-vars
    const {
      images, translateValue, currentIndex,
    } = this.state;
    return (
      <div className="Home">
        <div className="Home__Content">
          <div className="Home__Content--text">
            <Sample currentIndex={currentIndex} />
          </div>
          <div className="slider Home__Content--picture">
            <div
              className="slider-wrapper"
              style={{
                transform: `translateX(${translateValue}px)`,
                transition: 'transform ease-out 1000ms',
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

export default HomeSection;

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
    <i className="fa fa-arrow-left" aria-hidden="true" />
  </div>
);


const RightArrow = (props) => (
  <div className="nextArrow arrow" onClick={props.goToNextSlide}>
    <i className="fa fa-arrow-right" aria-hidden="true" />
  </div>
);
