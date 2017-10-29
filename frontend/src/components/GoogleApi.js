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
  axios.get('http://localhost:8080/api/user')
  .then((response)=>{
    console.log(response.data)
    this.setState({
      locations: response.data
    })
    console.log(this.state.locations)
    
  })
  .catch((error)=>{
    console.log(error)
  })
}

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={<h1>'hello'</h1>}
        />
      
    
       
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;


