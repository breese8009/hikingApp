  import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {FieldGroup, Button, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Col, Checkbox, Carousel, Modal, Popover, Tooltip } from 'react-bootstrap'


class CreateUser extends Component {

  constructor(){

    super();


   this.state = {
     name: '',
     email: '',
     password: '',
     location: '',
     profilePic:''

    }

    this.onFormSubmit = this.onFormSubmit.bind(this)

  }

  getInitialState() {
    return { show: false };
  }


   onInputChange(event, field){
    
        this.setState({
           [field]: event.target.value,
        }, () => {
          console.log(this.state);
        })
  }



  onFormSubmit(event){
    event.preventDefault()
   console.log(this.state.name)

   axios({
    method: 'post',
    url: 'http://localhost:8080/api/user',
    data:{
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      location: this.state.location,
      profilePic: this.state.profilePic

    }
   })


   
  }


  render() {
    let close = () => this.setState({ show: false });
  return (
     <span>
     
        <span className="modal-container" style={{ height: 200 }}>
        <Button
          bsStyle="info"
          bsSize="small"
          onClick={() => this.setState({ show: true })}
        >
          Create 
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
        <Form onSubmit={event => this.onFormSubmit(event)}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Register New Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          
            
 <FormGroup 
 controlId="formValidationError1"
 >
      <ControlLabel>Name</ControlLabel>
      <FormControl 
      type="text" 
      onChange={event => this.onInputChange(event, 'name')}
      />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Email</ControlLabel>
      <FormControl 
      type="email" 
      onChange={event => this.onInputChange(event, 'email')}
      />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Password</ControlLabel>
      <FormControl 
      type="password" 
      onChange={event => this.onInputChange(event, 'password')}
      />
    </FormGroup>

       <FormGroup>
      <ControlLabel>Location</ControlLabel>
      <FormControl 
      type="text" 
      onChange={event => this.onInputChange(event, 'location')}
      />
    </FormGroup>

       <FormGroup>
      <ControlLabel>Profile picture</ControlLabel>
      <FormControl 
      type="text" 
      onChange={event => this.onInputChange(event, 'profilePic')}
      />
    </FormGroup>
          </Modal.Body>
          <Modal.Footer>
          <Button 
          type="submit"
          onClick={() => this.setState({ show: false })}
          >
      Submit
    </Button>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
            </Form>
        </Modal>

      </span>
       
      </span>
    ); 
}
}

export default CreateUser;

