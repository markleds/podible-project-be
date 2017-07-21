import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';

// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';

// import Endpoint from "../constants/endpoint";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      account: false
    };
  }

  // Log In user & set token
  handleSubmitLogIn(event) {
    event.preventDefault();
    axios
    .post(`https://podible-project-api.herokuapp.com/users/login`, {
      user:this.state
    })
    .then((response) => {
      const data = response.data;

      window.localStorage.setItem('token', data.token);
      browserHistory.push('/dashboard');
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // Create new user's account
  handleSubmitNewUser(event) {
    event.preventDefault();
    console.log(this.state);
    axios
    .post(`https://podible-project-api.herokuapp.com/users`, {
      user:this.state
    })
    .then(() => {
      this.setState({
        account:true
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  //   console.log(this.state);
  // }

  // Update state with user's form etry
  handleChangeFirstName(event) {
    this.setState({
      "first_name": event.target.value
    });
    console.log(this.state);
  }
  handleChangeLastName(event) {
    this.setState({
      "last_name": event.target.value
    });
    console.log(this.state);
  }
  handleChangeEmail(event) {
    this.setState({
      "email": event.target.value
    });
    console.log(this.state);
  }
  handleChangePassword(event) {
    this.setState({
      "password": event.target.value
    });
    console.log(this.state);
  }

  // switch between Sign Up and Log In Forms
  handleTouchTapNeedAccount() {
    this.setState({
      account:false
    });
    console.log(this.state);
    this.renderLogInSingUp();
  }
  handleClickNeedAccount() {
    this.setState({
      account:false
    });
    console.log(this.state);
    this.renderLogInSingUp();
  }
  handleTouchTapHaveAccount() {
    this.setState({
      account:true
    });
    console.log(this.state);
    this.renderLogInSingUp();
  }
  handleClickHaveAccount() {
    this.setState({
      account:true
    });
    console.log(this.state);
    this.renderLogInSingUp();
  }  // switch between Sign Up and Log In Forms
/*onTouchTap={this.handleSubmitNewUser.bind(this)}*/
// onTouchTap={this.handleSubmitLogIn.bind(this)}
// render Sign Up form or Log In form
  renderLogInSingUp() {
    if (!this.state.account){
      return (
        <form onSubmit={this.handleSubmitNewUser.bind(this)}>
          <div>
          <TextField fullWidth={true} floatingLabelText="FIRST NAME" onChange={this.handleChangeFirstName.bind(this)}/>
          <TextField fullWidth={true} floatingLabelText="LAST NAME" onChange={this.handleChangeLastName.bind(this)}/>
          <TextField fullWidth={true} floatingLabelText="EMAIL" onChange={this.handleChangeEmail.bind(this)}/>
          <TextField fullWidth={true} floatingLabelText="PASSWORD" onChange={this.handleChangePassword.bind(this)}/>
          </div>
          <RaisedButton  onClick={this.handleSubmitNewUser.bind(this)} label="Sign Up" primary={true} />
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmitLogIn.bind(this)}>
          <div>
          <TextField fullWidth={true} floatingLabelText="EMAIL" onChange={this.handleChangeEmail.bind(this)}/>
          <TextField fullWidth={true} floatingLabelText="PASSWORD" onChange={this.handleChangePassword.bind(this)}/>
          </div>
          <RaisedButton onClick={this.handleSubmitLogIn.bind(this)} label="Log In" primary={true} />
        </form>
      );
    }
  }

  render() {
    return (
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar title="Listen Up!" />
      </MuiThemeProvider>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div className="signup-container">
        <Card>
        <CardTitle title="Welcome to Listen Up!" subtitle="Create your account or log in." />
        <CardText>
              {this.renderLogInSingUp()}

        </CardText>
        <CardActions>
        <FlatButton label="Sign Up" onTouchTap={this.handleTouchTapNeedAccount.bind(this)} onClick={this.handleClickNeedAccount.bind(this)}/>
        <FlatButton label="Log In" onTouchTap={this.handleTouchTapHaveAccount.bind(this)} onClick={this.handleClickHaveAccount.bind(this)} />
        </CardActions>
        </Card>
        </div>
      </MuiThemeProvider>

      </div>
    );
  }
}

export default SignUp;
