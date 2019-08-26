/* eslint-disable max-len */
import React from 'react';
import './HomeSection.scss';

const homeOne = require('../../../assets/main-1.jpg');

const HomeSection = () => (
  <div className="Home">
    <div className="Home__Content">
      <div className="Home__Content--text">
        <h1>We Do</h1>
        <h1>things right</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took  book.</p>
      </div>
      <img className="Home__Content--picture" src={homeOne} alt="" />
    </div>
  </div>
);

export default HomeSection;
