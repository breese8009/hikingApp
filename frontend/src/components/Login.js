 import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Login.css'
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Col, Checkbox, Carousel, Modal } from 'react-bootstrap'


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
    this.setState({
      usersData: event.target.value
    })
  }

  onFormSubmit(event){
    event.preventDefault()
   console.log(this.state)
   
  }


  getInitialState() {
    return { show: false };
  }




  render() {
    let close = () => this.setState({ show: false });
  return (
    <div class="container">

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

  <Form onSubmit={event => this.onFormSubmit(event)}>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" onChange={event => this.onInputChange(event)}/>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" onChange={event => this.onInputChange(event)}/>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>

      <Col smOffset={2} sm={10}>
       <p>Not a memeber? Click create</p>
        <Button type="submit">
          Sign in
        </Button>

          <Button
         
          onClick={() => this.setState({ show: true })}
        >
          Create 
        </Button>
      </Col>
    </FormGroup>
  </Form>

  </div>




  <div className="modal-container" style={{ height: 200 }}>
      

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form onSubmit={event => this.onFormSubmit(event)}>
    <FormGroup controlId="formHorizontalEmail">
      <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
       Name
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Name" onChange={event => this.onInputChange(event)}/>
      </Col>
    </FormGroup>

      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" onChange={event => this.onInputChange(event)}/>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" onChange={event => this.onInputChange(event)}/>
      </Col>
    </FormGroup>

 <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
       Location
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Location" onChange={event => this.onInputChange(event)}/>
      </Col>
    </FormGroup>


     <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
        Picture
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Picture URL" onChange={event => this.onInputChange(event)}/>
      </Col>
    </FormGroup>




   

    <FormGroup>

      <Col smOffset={2} sm={10}>

      </Col>
    </FormGroup>
  </Form>
           
          </Modal.Body>
          <Modal.Footer>
          <Button type="submit">
          Create account
        </Button>

            <Button onClick={close}>Close</Button>

          </Modal.Footer>
        </Modal>
      </div>


  </div>

  );
}
}

export default Login;






