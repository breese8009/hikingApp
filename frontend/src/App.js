import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        
       
        <User/>
      </div>
    );
  }
}

export default App;
