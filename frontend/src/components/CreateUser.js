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
     usersData:[]
    }

  }

  getInitialState() {
    return { show: false };
  }


  render() {
    let close = () => this.setState({ show: false });
  return (
     <span>
        <span className="modal-container" style={{ height: 200 }}>
        <Button
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
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Register New Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
 <FormGroup controlId="formValidationError1">
      <ControlLabel>Name</ControlLabel>
      <FormControl type="text" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Email</ControlLabel>
      <FormControl type="email" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Password</ControlLabel>
      <FormControl type="password" />
    </FormGroup>

       <FormGroup>
      <ControlLabel>Location</ControlLabel>
      <FormControl type="text" />
    </FormGroup>

       <FormGroup>
      <ControlLabel>Profile picture</ControlLabel>
      <FormControl type="text" />
    </FormGroup>

  </form>
          </Modal.Body>
          <Modal.Footer>
          <Button type="submit">
      Submit
    </Button>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
      </span>
    ); 
}
}

export default CreateUser;

