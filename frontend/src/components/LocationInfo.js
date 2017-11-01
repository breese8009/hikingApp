import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { ResponsiveEmbed, Button, FormGroup, FormControl, ControlLabel, HelpBlock, Form, Col, Checkbox, Image, Thumbnail, Grid, Row } from 'react-bootstrap'
import Locations from './Locations'

class LocationInfo extends Component {




  render() {
    console.log("What do we have?", this.props.user_id)
    let showLocations= this.props.locations.map((location)=>{
        return (
          <Locations
          location={location}
          user_id={this.props.user_id}
          />
          )
    })
  return (
<div>
{showLocations}
</div>

  );
}
}

export default LocationInfo;






