
import React, { Component } from 'react';
import axios from 'axios';
import { ResponsiveEmbed, Button, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Col, Checkbox, Image, Thumbnail, Grid, Row } from 'react-bootstrap'

class Locations extends Component {

  constructor(props){
    super();

    this.state ={
      clicked: false,
      city: props.location.city,
      near_address: props.location.near_address,
      description: props.location.description,
      photo: props.location.photo

    }
        this.handleChangeInput = this.handleChangeInput.bind(this)
  }


deleteLocation(locationId){
let user_id = this.props.user_id
axios.delete(`http://localhost:8080/api/user/${user_id}/location/${locationId}`)
window.location = `http://localhost:3000/user/${user_id}`;
}




editLocation(){
console.log(this.props)
   this.setState({
      clicked: true
    })
}


handleSaveClick(locationId){
    let user_id = this.props.user_id
    console.log(locationId)
    console.log(user_id)
  axios.put(`http://localhost:8080/api/user/${user_id}/location/${locationId}`, this.state)
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })

this.setState({
  clicked: false
})
console.log(this.props)

 
}

handleChangeInput(event, field){
  this.setState({
      [field]: event.target.value
  })
  
}


  render(){
    let className = this.state.clicked ? 'editInputOn' : 'editInputOff';

    return(
<div> 

<Grid className="locationsInfo">
    <Row>
      <Col xs={5} md={5}>
        <Thumbnail src={this.state.photo} alt="242x200">
        <input className={className} type="text" value={this.state.photo} onChange={event => this.handleChangeInput(event, 'photo')}/>
          <h3>{this.state.city}</h3>
        <input className={className} type="text" value={this.state.city} onChange={event => this.handleChangeInput(event, 'city')}/>
          <p>{this.state.description}</p>
          <input className={className} type="text" value={this.state.description} onChange={event => this.handleChangeInput(event, 'description')}/>
          <p>
          Difficulty level:
            </p>
            <p>
           {this.state.near_address}
        
        </p>
          <div>
          <input className={className} type="text" value={this.state.near_address} onChange={event => this.handleChangeInput(event, 'near_address')}/>
          </div>
           <Button
        bsStyle="info"
        className={className}
        onClick={locationId => this.handleSaveClick(this.props.location._id)}
        >Save</Button>
       
         <Button
        bsStyle="danger"
        onClick={locationId => this.deleteLocation(this.props.location._id)}
        >
        Delete
        </Button>
        <Button
        bsStyle="info"
        onClick={locationId => this.editLocation()}
        >Edit</Button>
        </Thumbnail>

      </Col>


     
    </Row>
    
  </Grid>

 </div>
 )
}
}
export default Locations
