 import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Login.css'
import {Carousel, Form, FormControl, Button} from 'react-bootstrap'
import CreateUser from './CreateUser'




class Login extends Component {

  constructor(){

    super();

    this.state = {
     usersData:[]
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)

  }


  onInputChange(event){
    console.log(event.target.value)
    // this.setState({
    //   usersData: event.target.value
    // })
  }

  onFormSubmit(event){
    event.preventDefault()
   console.log(this.state)
   
  }





  render() {
    
  return (
    
<div className="login-page">

 <Carousel className="carousel">
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://www.w3schools.com/css/trolltunga.jpg" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://www.w3schools.com/css/trolltunga.jpg" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://www.w3schools.com/css/trolltunga.jpg" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>



  <div class="create-form">
<h1>Login</h1>

<Form>

<FormControl
onChange={event => this.onInputChange(event)}
className="loginInput"
placeholder="email"
type="email"
>
</FormControl>

<FormControl
onChange={event => this.onInputChange(event)}
className="loginInput"
placeholder="password"
type="password"
>
</FormControl>


</Form>
<Button 
className="loginBtn"
type="submit"
bsStyle="primary"
bsSize="large"
>Login</Button>
<p>Don't have an account? Create one here</p>
  </div>
  </div>

  );
}
}

export default Login;






