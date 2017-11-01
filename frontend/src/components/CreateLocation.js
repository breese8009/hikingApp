import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {FieldGroup, Button, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Col, Checkbox, Carousel, Modal, Popover, Tooltip, Thumbnail, Grid, Row  } from 'react-bootstrap'
import CreateUser from './CreateUser';
import LocationInfo from './LocationInfo';

class CreateLocation extends Component {

  constructor(props){

    super(props);

   this.state = {
 locations: []
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
    let path = this.props.user_id
console.log(this.props)
   axios({
    method: 'post',
    url: `http://localhost:8080/api/user/${path}/location`,
    data:{
      city: this.state.city,
      near_address: this.state.near_address,
      description: this.state.description,
      photo: this.state.photo,
      long: this.state.long,
      lat: this.state.lat
    }

   })  

  }

  getGeoLocation(){
    let lat="";
    let long="";
       if ("geolocation" in navigator) {
     navigator.geolocation.getCurrentPosition( function(position) {
       lat = String(position.coords.latitude)
       long = String(position.coords.longitude)
      
     });
      
   }else{
    console.log("no geolocation in browser")
   }
   console.log(lat)
  }




  render() {
    let close = () => this.setState({ show: false });
    console.log(this.state)
  return (

     <div>
      
        <span className="modal-container" style={{ height: 200 }}>
        <Button
          className="btn"
          bsStyle="info"
          bsSize="large"
          onClick={() => this.setState({ show: true })}
        >
          Add location
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
                   <Form 
 onSubmit={this.onFormSubmit}
 > 
          <Modal.Body>

          
  

     <FormGroup 
 controlId="formValidationError1"
 >
      <ControlLabel>City</ControlLabel>
      <FormControl 
      type="text" 
      onChange={event => this.onInputChange(event, 'city')}
      />
    </FormGroup>



    <FormGroup>
      <ControlLabel>Difficulity level (1-10)</ControlLabel>
      <FormControl 
      type="address" 
      onChange={event => this.onInputChange(event, 'near_address')}
      />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Photo</ControlLabel>
      <FormControl 
      type="text" 
      onChange={event => this.onInputChange(event, 'photo')}
      />
    </FormGroup>

       <FormGroup>
      <ControlLabel>Longitude</ControlLabel>
      <FormControl 
      type="text" 
      onChange={event => this.onInputChange(event, 'long')}
      />
    </FormGroup>

       <FormGroup>
      <ControlLabel>Latitude</ControlLabel>
      <FormControl 
      type="text" 
      onChange={event => this.onInputChange(event, 'lat')}
      />
    </FormGroup>


     <FormGroup>
      <ControlLabel>Description</ControlLabel>
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
            <Button
            bsStyle="info"
            onClick={this.getGeoLocation()}
            >Current location</Button>
          </Modal.Footer>
           </Form>
        </Modal>
  
      </span>


    
      </div>



       
         
     
    ); 
}
}

export default CreateLocation;

