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
    console.log("What do we have?", this.props)
    let showLocations= this.props.locations.map((location)=>{
        return (
          <Locations
          location={location}
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






