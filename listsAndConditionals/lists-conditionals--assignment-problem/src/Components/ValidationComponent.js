import React, { Component } from 'react'

export default class ValidationComponent extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.textL}</h1>
                {/*This part will require conditional rendering :)*/}
                
                <p>Text Length: </p>

            </div>
        )
    }
}
