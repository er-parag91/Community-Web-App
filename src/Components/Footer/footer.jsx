import React from 'react';
import './Footer.scss';

const Footer = () => (
  <div className="Footer">
    <div className="Footer__Column">
      <h3>Hindustan</h3>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin
        professor at Hampden-Sydney College in Virginia,
      </p>
    </div>
    <div className="Footer__Column">
      <h3>Column 1</h3>
      <p>Link 1</p>
      <p>Link 2</p>
      <p>Link 3</p>
    </div>
    <div className="Footer__Column">
      <h3>Column 2</h3>
      <p>Link 4</p>
      <p>Link 5</p>
      <p>Link 6</p>
    </div>
    <div className="Footer__Column">
      <h3>Column 3</h3>
      <p>Link 7</p>
      <p>Link 8</p>
      <p>Link 9</p>
    </div>
  </div>
);

export default Footer;
