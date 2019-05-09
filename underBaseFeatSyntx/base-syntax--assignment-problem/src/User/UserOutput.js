import React, { Component } from 'react'
import './User.css';


export default class UserOutput extends Component {
  render() {


      console.log(this.props)
    return (
      <div className="User"> 
        <h1>Username: {this.props.username} </h1>
        <p>Random text.</p>
      </div>
    )
  }
}


