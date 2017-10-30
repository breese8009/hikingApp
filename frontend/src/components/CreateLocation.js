  //   componentDidMount(){

  //   axios.post(`http://localhost:8080/api/user/${params.users_id}/location`)
  //   .then((data) => {
  //    console.log(data)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })

  // }



import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {FieldGroup, Button, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Col, Checkbox, Carousel, Modal, Popover, Tooltip } from 'react-bootstrap'


class CreateLocation extends Component {

  constructor(){

    super();


   this.state = {
    city: "",
	near_address: "",
	description: "",
	photo: "",
	long: "",
	lat: ""

    }

    // this.onFormSubmit = this.onFormSubmit.bind(this)

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
    url: 'http://localhost:8080/api/user/:${params.user_id}/location',
    data:{
      city: this.state.city,
      near_address: this.state.near_address,
      description: this.state.description,
      photo: this.state.photo,
      long: this.state.long,
      lat: this.state.lat
    }
   })

   .then((data)=>{
   	console.log(data)
   })
   .catch((error)=>{
   	console.log("did not work", error)
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
          Add location
        </Button>
 <Form onSubmit={event => this.onFormSubmit(event)}>
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

          
            

     <FormGroup 
 controlId="formValidationError1"
 >
      <ControlLabel>city</ControlLabel>
      <FormControl 
      type="text" 
      onChange={event => this.onInputChange(event, 'city')}
      />
    </FormGroup>



    <FormGroup>
      <ControlLabel>near address</ControlLabel>
      <FormControl 
      type="address" 
      onChange={event => this.onInputChange(event, 'near_address')}
      />
    </FormGroup>

    <FormGroup>
      <ControlLabel>photo</ControlLabel>
      <FormControl 
      type="text" 
      onChange={event => this.onInputChange(event, 'photo')}
      />
    </FormGroup>

       <FormGroup>
      <ControlLabel>Long</ControlLabel>
      <FormControl 
      type="text" 
      onChange={event => this.onInputChange(event, 'long')}
      />
    </FormGroup>

       <FormGroup>
      <ControlLabel>Lat</ControlLabel>
      <FormControl 
      type="text" 
      onChange={event => this.onInputChange(event, 'lat')}
      />
    </FormGroup>


     <FormGroup>
      <ControlLabel>description</ControlLabel>
      <FormControl 
      type="text" 
      onChange={event => this.onInputChange(event, 'description')}
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
          
        </Modal>
  </Form>
      </span>
       
      </span>



       
         
     
    ); 
}
}

export default CreateLocation;

