import React, { Component } from 'react';
import axios from 'axios';
import { ResponsiveEmbed, Button, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Col, Checkbox, Image, Thumbnail, Grid, Row } from 'react-bootstrap'



class Locations extends Component {

  constructor(){
    super();
  
  }


deleteLocation(locationId){
let user_id = this.props.user_id
console.log(this.props)
axios.delete(`http://localhost:8080/api/user/${user_id}/location/${locationId}`)
  
}

  render(){
    console.log("location props", this.props)


    return(
<div>

<Grid className="locationsInfo">
    <Row>

      <Col xs={5} md={5}>
        <Thumbnail src={this.props.location.photo} alt="242x200">
          <h3>{this.props.location.city}</h3>
          <p>{this.props.location.description}</p>
          <p>
          Difficulty level:
            </p>
            <p>
           {this.props.location.near_address}
        </p>
         <Button
        bsStyle="danger"
        onClick={locationId => this.deleteLocation(this.props.location._id)}
        >
        Delete
        </Button>
        </Thumbnail>

      </Col>


     
    </Row>
  </Grid>
 </div>
 )
}
}
export default Locations