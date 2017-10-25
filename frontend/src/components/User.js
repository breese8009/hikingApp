import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



class User extends Component {

  constructor(){

    super();

    this.state = {
     usersData:[]
    }

  }
  componentDidMount(){

    axios.get("http://localhost:8080/api/user")
    .then((data) => {
      this.setState({
        usersData: data.data
      })
      console.log(data.data)
    })
    .catch((error)=>{
      console.log(error)
    })

  }



  render() {
 let show = this.state.usersData.map(({name}, index)=>{
    return  <div class="container" key={index}>
      <h1>{name}</h1>
</div>

  })

  return (
  <div>
 {show}
  </div>


  );
}
}

export default User;