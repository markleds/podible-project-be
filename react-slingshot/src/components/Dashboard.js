import React, { Component } from 'react';
import { browserHistory } from 'react-router';
// import axios from 'axios';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

// import Endpoint from "../constants/endpoint";



class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  handleLogout(event) {
    event.preventDefault();
    window.localStorage.removeItem('token');
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar title="Listen Up!"
        iconElementRight={<FlatButton label="Log Out" onClick={this.handleLogout.bind(this)}/>}
        />
      </MuiThemeProvider>
      <div className="playlist-container">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Card>
            <CardHeader
              title="The Steve Miller Band"
              subtitle="Subtitle"
              avatar="images/jsa-128.jpg"
            />
            <CardText>
            {/*<audio controls="controls">
              Your browser does not support the <code>audio</code> element.
              <source src={require('../assets/audio/01-Swingtown.ogg')} type="audio/mp3"/>
            </audio>*/}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>
        </MuiThemeProvider>
      </div>

      </div>
    );
  }
}

export default Dashboard;
