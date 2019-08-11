import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {},
      signUp: {},
      width: null,
    };
  }


  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    console.log(this.state);
    console.log(window.innerWidth);
    const { width } = this.state;
    return (
      <Grid container>
        {width > 601 && (
        <Grid item xs={1} sm={2} md={4} lg={6}>
          <div className="login__left">
            <div className="login__left--image" />
          </div>
        </Grid>
        )}
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <div>xs=12 sm=6</div>
        </Grid>
      </Grid>
    );
  }
}

export default Login;
