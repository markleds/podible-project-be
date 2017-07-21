import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

// React Tap Event plugin for onTouchTap to listen for touch / tap / clickevents
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './assets/css/normalize.css';
import './assets/css/style.css';

import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';

const restrict = () => {
  if (!window.localStorage.getItem('token')) {
    browserHistory.push('/login');
  }
};

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={SignIn} />
    <Route path="/dashboard" component={Dashboard} onEnter={restrict}/>
  </Router>
  , document.getElementById('app')
);
