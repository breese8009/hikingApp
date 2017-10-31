import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { ResponsiveEmbed, Button, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Col, Checkbox, Image, Thumbnail, Grid, Row } from 'react-bootstrap'
import './User.css'
import CreateLocation from './CreateLocation';
import CreateUser from './CreateUser';
import SimpleMap from './GoogleApi';
import LocationInfo from './LocationInfo';

class User extends Component {

  constructor(){

    super();

    this.state = {
  name: "",
  email: "",
  location: "",
  profilePic: ""
    }

  }

  componentDidMount(){
    let path = this.props.location.pathname
    console.log(path)
    axios.get(`http://localhost:8080/api${path}`)
    .then((data) => {
      this.setState({
          name: data.data.name,
          email: data.data.email,
          location: data.data.location,
          profilePic: data.data.profilePic
      })
      console.log(this.state)
    })
    .catch((error)=>{
      console.log(error)
    })

  }

  render() {


  return (
<div>

 
<div className="profileHeader">
  <img className="profilePic" src={this.state.profilePic} />
  <h1 className="profileName">Hello,{this.state.name}</h1>
  <h1 className="profileName">{this.state.location}</h1>
</div>
<Col sm={12}>
  <CreateLocation/>
  <h1>Hiking Locations</h1>

</Col>

<Col sm={7}>
  <div style={{width: '100%', height: '400px'}} className="map"><SimpleMap user_id={this.props.location.pathname}/></div>
</Col>

  <Col sm={5}>

    <LocationInfo locations={this.state.locations}/>
  </Col>


 
 
  
 </div>

  );
}
}

export default User;