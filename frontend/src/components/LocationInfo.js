import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { ResponsiveEmbed, Button, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Col, Checkbox, Image, Thumbnail, Grid, Row } from 'react-bootstrap'


class LocationInfo extends Component {


  render() {

  return (
  <div>

<Grid className="locationsInfo">
    <Row>

      <Col xs={5} md={5}>
        <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
          <h3>descript</h3>
          <p>Description</p>
          <p>
           
          </p>
        </Thumbnail>
      </Col>


     
    </Row>
  </Grid>
 </div>

  );
}
}

export default LocationInfo;






