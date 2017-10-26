import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
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
         <Route path="/profile" component={User} />
          </div>
       </Router>
        
      </div>
    );
  }
}

export default App;

