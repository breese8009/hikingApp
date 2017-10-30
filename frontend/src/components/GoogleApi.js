import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Thumbnail } from 'react-bootstrap'
import axios from 'axios';

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

  axios.get('http://localhost:8080/api/location')
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
let show = this.state.locations.map(({lat, long}, index)=>{
    return <div className="container" key={index}>
   
  <AnyReactComponent
            lat={{lat}}
            lng={{long}}
            text={<h1>hello</h1>}
          />
      
    </div>

  })[this.state.locations.length-1]

    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >

      {show}
 
 

      
      
    
       
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;


