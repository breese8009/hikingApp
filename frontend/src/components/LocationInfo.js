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

  constructor(){
    super();
   this.state = {
    search: ""
   }

   this.updateSearch = this.updateSearch.bind(this)
  }


 updateSearch(event){
    console.log(event.target.value)
    this.setState({
      search: event.target.value.substr(0,20)
    })
  
  }



  render() {
    let filteredLocations = this.props.locations.filter((location)=>{
      return location.city.indexOf(this.state.search) !== -1
    });
console.log(filteredLocations)
    let showLocations= filteredLocations.map((location)=>{
        return (

          <Locations
          location={location}
          user_id={this.props.user_id}
          />
          
          )
    })
  return (
<div>
      <div>
  <input onChange={event => this.updateSearch(event)} value={this.state.search} type="search"/>
  <button>search</button>
</div>
{showLocations}
</div>

  );
}
}

export default LocationInfo;






