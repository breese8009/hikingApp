import React, {Component} from 'react'
import LocationsModel from '../models/Locations'
import GoogleApi from '../components/GoogleApi'

class LocationsContainer extends Component {
 constructor(){
   super()

   this.state = {
     locations: []
   }

 }

 componentDidMount(){
   this.fetchData()
 }

  fetchData(){
    let path = this.props.user_id
   LocationsModel.LocationData(path).then( (res) => {
     // this.setState ({
     //  locations: res
     // })
     console.log(res)
   })
 }


 render(){
   return (
     <div>
      
     </div>
   )
 }
}

export default LocationsContainer