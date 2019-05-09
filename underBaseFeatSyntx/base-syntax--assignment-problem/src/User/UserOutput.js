import React, { Component } from 'react'



export default class UserOutput extends Component {
  render() {


      console.log(this.props)
    return (
      <div className="User"> 
        <h1>Username: {this.props.username} </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Sit amet tellus cras adipiscing enim eu turpis. Tincidunt ornare massa eget egestas purus viverra accumsan in. Semper risus 
          in hendrerit gravida rutrum quisque non tellus. Cum sociis natoque penatibus et. Nisi lacus sed viverra tellus in hac habitasse 
          platea. Massa ultricies mi quis hendrerit dolor magna. Euismod in pellentesque massa placerat. Purus in massa tempor nec feugiat 
          nisl pretium. Risus ultricies tristique nulla aliquet enim tortor at auctor.</p>
      </div>
    )
  }
}


