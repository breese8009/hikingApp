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
import Navbar from './Navbar'



class Login extends Component {

  constructor(){

    super();

    this.state = {
      email: "",
      password: ""
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)

  }


  onInputChange(event, field){
    console.log(event.target.value)
    this.setState({
     [field]: event.target.value
     
    })
    console.log(this.state)
  }


  onFormSubmit(event){
    event.preventDefault()
   axios.post('http://localhost:8080/api/login')
   .then((response)=>{
    console.log(response)
   })
   .catch((error)=>{
    // window.location = "http://localhost:3000/user/59f8dc7234aea5033a6169d5"
   })
  }





  render() {
    
  return (
    
<div className="login-page">

 <Navbar/>

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

<Form onSubmit={event => this.onFormSubmit(event)}>

<FormControl
onChange={event => this.onInputChange(event, "email")}
className="loginInput"
placeholder="email"
type="email"
>
</FormControl>

<FormControl
onChange={event => this.onInputChange(event, "password")}
className="loginInput"
placeholder="password"
type="password"
>
</FormControl>



<Button 
className="loginBtn"
type="submit"
bsStyle="primary"
bsSize="large"
>Login</Button>
</Form>
<p>Don't have an account?<CreateUser/></p>
  </div>
  </div>

  );
}
}

export default Login;






