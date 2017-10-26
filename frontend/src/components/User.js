import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Col, Checkbox, Image } from 'react-bootstrap'
import './User.css'

class User extends Component {

  constructor(){

    super();

    this.state = {
     usersData:[]
    }

  }
  componentDidMount(){

    axios.get("http://localhost:8080/api/user")
    .then((data) => {
      this.setState({
        usersData: data.data
      })
      console.log(data.data)
    })
    .catch((error)=>{
      console.log(error)
    })

  }




  render() {
 let show = this.state.usersData.map(({name, profilePic}, index)=>{
    return  <div class="container" key={index}>
    <Col sm={6}>
     <Image className="profilePic" src={profilePic} circle />
     </Col>
      <Col sm={6}>
      <h1>Hello, {name}</h1>
      </Col>
</div>

  })

  return (
  <div>
    {show}

     
    
    
  </div>


  );
}
}

export default User;