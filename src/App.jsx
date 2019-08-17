import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth';

const App = () => {
  // eslint-disable-next-line no-constant-condition
  if ('2' === 2) {
    return (
      <div>
        <Route component={Auth} />
      </div>
    );
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Auth} />
      </Switch>
    </div>
  );
};


export default App;
