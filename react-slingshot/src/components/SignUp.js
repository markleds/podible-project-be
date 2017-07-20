import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// import MyAwesomeReactComponent from './MyAwesomeReactComponent';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  handleClickSignIn() {
    browserHistory.push('/signin');
  }
  handleTouchTapSignIn() {
    browserHistory.push('/signin');
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <AppBar title="Listen Up!" iconElementRight={<FlatButton onTouchTap={this.handleTouchTapSignIn} onClick={this.handleClickSignIn} label="Sign In" />}/>
      </MuiThemeProvider>
    );
  }
}

export default SignUp;
