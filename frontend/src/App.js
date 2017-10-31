import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import CreateLocation from './components/CreateLocation'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render() {

    return (
      <div className="App">
           <Router>
          <div>
         <Route path="/home" component={Login} />
         <Route path="/user/:user_id" component={User} />
         <Route path="/user/:user_id/location"/>
          </div>
       </Router>
      </div>
    );
  }
}

export default App;

