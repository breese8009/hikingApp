import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Thumbnail, Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 0
  };

  constructor(){
    super();

  }

 


  render() {
console.log(this.props)
let showMap = this.props.locations.map(({lat, long, photo}, index)=>{
  console.log(lat, long);
  if (isNaN(parseInt(lat)) || isNaN(parseInt(long))) {
    return "";
  } else {
    return (<AnyReactComponent
            lng={parseFloat(long)}
            lat={parseFloat(lat)}
            text={<img className="mapImg" src={photo}/>}
          />)
    }
  })

    
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


