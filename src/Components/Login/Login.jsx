import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Login.scss';
import '../../Typography-UI/Header.scss';
import SignUp from './SignUp';

const Logo = require('../../assets/logo__big.png');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {},
      signUp: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        state: 'AK',
        agree: false,
      },
      width: null,
      loggingIn: false,
    };
  }


  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  loginTypeHandler = () => {
    this.setState((prevState) => ({
      loggingIn: !prevState.loggingIn,
    }));
  }

  textChangedHandler = (key, value) => {
    console.log(key, value);
    this.setState((prevState) => {
      const { signUp } = prevState;
      signUp[key] = value;
      return { SignUp };
    });
  }

  checkboxChangedHandler = () => {
    this.setState((prevState) => {
      const { signUp } = prevState;
      signUp.agree = !signUp.agree;
      return { SignUp };
    });
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }


  render() {
    console.log(this.state);
    const { width, loggingIn, signUp } = this.state;
    return (
      <Grid item container className="login">
        {width > 601 && (
        <Grid item xs={1} sm={4} md={8} lg={8}>
          <div className="login__left">
            <div className="login__left--image" />
          </div>
        </Grid>
        )}
        <Grid item xs={12} sm={8} md={4} lg={4}>
          <Grid
            className="login__right"
            container
            direction="column"
            justify="space-around"
            alignItems="center"
          >
            <div className="login__right--logo">
              <img className="Logo" src={Logo} alt="Logo" />
            </div>

            {loggingIn && (
            <div className="login__right--signin">
              <span>Login</span>
            </div>
            )}

            {!loggingIn
            && (
            <SignUp
              userData={signUp}
              onTextChange={this.textChangedHandler}
              onCheckboxChange={this.checkboxChangedHandler}
            />
            )}

            <div>
              <span role="button" tabIndex={0} className="heading-tertiary span__click" onClick={this.loginTypeHandler} onKeyDown={this.loginTypeHandler}>
                {loggingIn ? 'New User? Tap to Sign Up' : 'Registered User? Tap to Log in'}
              </span>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Login;
