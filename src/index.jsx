import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import authReducer from './Store/Reducers/Auth';
import generalReducer from './Store/Reducers/General';


const rootReducer = combineReducers({
  user: authReducer,
  generalState: generalReducer,
});
const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
const app = (
  <HashRouter basename="/">
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </HashRouter>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
