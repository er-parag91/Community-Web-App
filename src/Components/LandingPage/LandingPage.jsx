import React, { Component } from 'react';
import NavBar from './Navigation/NavBar/NavBar';
import SideDrawer from './SideDrawer/SideDrawer';

class LandingPage extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerOpenHandler = () => {
    this.setState((prevState) => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  render() {
    const { showSideDrawer } = this.state;
    return (
      <div>
        <NavBar drawerToggleClicked={this.sideDrawerOpenHandler} />
        <SideDrawer
          open={showSideDrawer}
          drawerToggleClicked={this.sideDrawerOpenHandler}
          closed={this.sideDrawerClosedHandler}
        />
      </div>
    );
  }
}

export default LandingPage;
