import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Login.scss';
import '../../Typography-UI/Header.scss';
import Modal from 'react-responsive-modal';
import SignUp from './SignUp';
import BusinessDescription from './businessDescription';
import SignUpTermsAndCondition from './SignUpTermsAndCondition';

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
      open: false,
      termsAndConditionModal: false,
      dialog: false,
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

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  termsAndConditionModal = () => {
    this.setState({ dialog: true });
  };

  handleClose = () => {
    this.setState({ dialog: false });
  }

  agreedHandler = () => {
    this.setState((prevState) => {
      const { signUp } = prevState;
      let { dialog } = prevState;
      signUp.agree = true;
      dialog = false;
      return { SignUp, dialog };
    });
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }


  render() {
    console.log(this.state);
    const {
      width, loggingIn, signUp, open, dialog,
    } = this.state;
    return (
      <Grid item container className="login">
        <Modal open={open} onClose={this.onCloseModal} center>
          <BusinessDescription />
        </Modal>
        {width > 601 && (
        <Grid item xs={1} sm={4} md={6} lg={8}>
          <div className="login__left">
            <div className="login__left--image" />
            <i
              onClick={this.onOpenModal}
              className="fa fa-info-circle login__left--moreInfo"
              aria-hidden="true"
            />
          </div>
        </Grid>
        )}
        <Grid item xs={12} sm={8} md={6} lg={4}>
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
            <div>
              <SignUp
                userData={signUp}
                onTextChange={this.textChangedHandler}
                onCheckboxChange={this.checkboxChangedHandler}
                onTermsAndConditionClicked={this.termsAndConditionModal}
              />
              <SignUpTermsAndCondition
                open={dialog}
                handleClose={this.handleClose}
                onAgreeClick={this.agreedHandler}
              />
            </div>
            )}
            <div>
              <span role="button" tabIndex={0} className="heading-tertiary login-signup__toggle" onClick={this.loginTypeHandler} onKeyDown={this.loginTypeHandler}>
                {loggingIn ? 'New User? Tap to Sign Up' : 'Registered User? Tap to Log in'}
              </span>
            </div>
          </Grid>
          <i
            onClick={this.onOpenModal}
            className="fa fa-info-circle login__right--moreInfo"
            aria-hidden="true"
          />
        </Grid>
      </Grid>
    );
  }
}

export default Login;
