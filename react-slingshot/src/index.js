import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

// React Tap Event plugin for onTouchTap to listen for touch / tap / clickevents
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './assets/css/normalize.css';
import './assets/css/style.css';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

// const restrict = () => {
//   if (!window.localStorage.getItem('token')) {
//     browserHistory.push('/login');
//   }
// };

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={SignUp} />
    <Route path="/signin" component={SignIn} />
  </Router>
  , document.getElementById('app')
);
