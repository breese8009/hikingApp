import React, { Component } from 'react';
import { ResponsiveEmbed, Button, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Col, Checkbox, Image, Thumbnail, Grid, Row } from 'react-bootstrap'



class Locations extends Component {
  render(){
    console.log("location props", this.props)
    return(
<div>

<Grid className="locationsInfo">
    <Row>

      <Col xs={5} md={5}>
        <Thumbnail src={this.props.photo} alt="242x200">
          <h3>{this.props.location.city}</h3>
          <p>Description</p>
          <p>
           
          </p>
        </Thumbnail>
      </Col>


     
    </Row>
  </Grid>
 </div>
 )
}
}
export default Locations