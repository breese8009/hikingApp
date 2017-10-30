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
import SimpleMap from './GoogleApi';
import CreateLocation from './CreateLocation';
import CreateUser from './CreateUser';
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
{this.state.name}
{this.state.location}
{this.state.profilePic}
  <CreateLocation/>
  <div className="profileHeader">
<Image className="profileHeaderPic" src="https://www.w3schools.com/w3css/img_forest.jpg" responsive />

</div>

<div style={{width: '100%', height: '400px'}} className="map"><SimpleMap/></div>
 


<h1>Hiking Locations</h1>



  <Grid className="locationsInfo">
    <Row>
      <Col xs={6} md={4}>
        <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
    </Row>
  </Grid>

  
 </div>

  );
}
}

export default User;