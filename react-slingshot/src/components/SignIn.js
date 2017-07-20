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

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  handleClickSignUp() {
    browserHistory.push('/');
  }
  handleTouchTapSignUp() {
    browserHistory.push('/');
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <AppBar title="Listen Up!" iconElementRight={<FlatButton label="Sign Up" onTouchTap={this.handleTouchTapSignUp} onClick={this.handleClickSignUp}/>}/>
      </MuiThemeProvider>
    );
  }
}

export default SignIn;
