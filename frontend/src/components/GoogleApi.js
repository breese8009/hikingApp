import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Thumbnail, Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import LocationModel from '../models/Locations'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 0
  };

  constructor(){
    super();

    this.state = {
      locations:[]
    }

  }

componentDidMount(){
let path = this.props.user_id
  axios.get(`http://localhost:8080/api${path}/location`)
  .then((response)=>{
    console.log(response.data)
    this.setState({
      locations: response.data
    })
    console.log(this.state.locations.lat)
    
  })
  .catch((error)=>{
    console.log(error)
  })
}

  render() {

let showMap = this.state.locations.map(({lat, long, photo}, index)=>{
  console.log(lat, long);
  if (isNaN(parseInt(lat)) || isNaN(parseInt(long))) {
    return;
  } else {
    return (<AnyReactComponent
            lat={parseInt(lat)}
            lng={parseInt(long)}
            text={<h1>{photo}</h1>}
          />)
    }
  })
 console.log(showMap)
    
    return (
  
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >

      {showMap}

      
 

      </GoogleMapReact>


    );
  }
}

export default SimpleMap;


