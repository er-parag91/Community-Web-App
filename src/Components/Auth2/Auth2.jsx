import React from 'react';
import { ReactComponent as SVGs } from '../../assets/SVGs/SVG.svg';
import Login from '../Auth/Login';
import './Auth2.scss';
import '../Auth/Auth.scss';
import '../../UI/Header.scss';

const IMG = require('../../assets/images/purple.jpg');

const Auth2 = () => (
  <div className="Auth">
    <img className="Auth__Image" src={IMG} alt="" />
    <div className="Auth__Container">
      <SVGs className="Auth__Container--SVG" />
      <Login className="Auth__Container--Login" />
    </div>
  </div>
);

export default Auth2;
