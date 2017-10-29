import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { ResponsiveEmbed, Button, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Col, Checkbox, Image, Thumbnail, Grid, Row } from 'react-bootstrap'
import './User.css'
import SimpleMap from './GoogleApi';

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

      // <h1 className="nameDisplay">Hello, {name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()}</h1>


  render() {
 let show = this.state.usersData.map(({name, profilePic}, index)=>{
    return <div className="container" key={index}>
    <Col sm={6}>
     <Image className="profilePic" src={profilePic} circle />
     </Col>
      <Col sm={6}>

      </Col>
    </div>

  })

  return (
  <div>
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


  <Button bsStyle="primary" bsSize="large" active>Add spot</Button>
 </div>

  );
}
}

export default User;