import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';

const App = () => {
  // eslint-disable-next-line no-constant-condition
  if ('2' === 2) {
    return (
      <div>
        <Route component={Login} />
      </div>
    );
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
};


export default App;
