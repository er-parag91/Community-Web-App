import React, { Component } from 'react';
import jump from 'jump.js';
import sal from 'sal.js';
import PropTypes from 'prop-types';
import NavBar from './Navigation/NavBar/NavBar';
import SideDrawer from './SideDrawer/SideDrawer';
import './LandingPage.scss';
import HomeSection from './HomeSection/HomeSection';
import ServiceSection from './ServiceSection/ServiceSection';
import TestimonialSection from './TestimonialSection/TestimonialSection';
import ContactSection from './ContactSection/ContactSection';
import Spinner from '../../UI/Spinner/Spinner';
import './sal.css';

class LandingPage extends Component {
  state = {
    showSideDrawer: false,
    isTop: true,
    loadingLandingPage: true,
  }

  componentDidMount() {
    setTimeout(() => {
      sal();
      document.addEventListener('scroll', () => {
        const currentScroll = window.scrollY < 50;
        this.setState({ isTop: currentScroll });
      });
      this.setState({ loadingLandingPage: false, isTop: window.pageYOffset < 50 });
    }, 1000);
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerOpenHandler = () => {
    this.setState((prevState) => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  jumpToHandler = (className) => {
    jump(className);
  };


  render() {
    const { showSideDrawer, isTop, loadingLandingPage } = this.state;
    const { isLoggedIn, history } = this.props;
    console.log(isLoggedIn);
    return (
      <div>
        { loadingLandingPage && <Spinner />}
        <NavBar
          navLinkClicked={this.jumpToHandler}
          isTop={isTop}
          drawerToggleClicked={this.sideDrawerOpenHandler}
          isAuth={isLoggedIn}
          history={history}
        />
        <SideDrawer
          navLinkClicked={this.jumpToHandler}
          isAuth
          open={showSideDrawer}
          drawerToggleClicked={this.sideDrawerOpenHandler}
          closed={this.sideDrawerClosedHandler}
        />
        <section
          id="home"
          className="section section__home"
        >
          <HomeSection />
        </section>
        <section id="services" className="section section__services">
          <ServiceSection />
        </section>
        <section id="testimonials" className="section section__testimonial">
          <TestimonialSection />
        </section>
        <section id="contact" className="section section__contact">
          <ContactSection />
        </section>
      </div>
    );
  }
}

LandingPage.propTypes = {
  isLoggedIn: PropTypes.bool,
  history: PropTypes.shape.isRequired,
};

LandingPage.defaultProps = {
  isLoggedIn: false,
};

export default LandingPage;
