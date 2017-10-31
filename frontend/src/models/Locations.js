import axios from 'axios'

class LocationModel {

  static locationData(path) {
  let request = axios.get(`http://localhost:8080/api${path}/location`)
  return request
}

}
export default LocationModel