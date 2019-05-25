import React, { Component } from 'react'

export default class ValidationComponent extends Component {
    
    
    render() {
        
        
        
        
        return (
            <div>
                <h1>{this.props.textL}</h1>
               
            { this.props.validState? 
                <h2>Validation: Long Enough </h2>
                :  <h2>Validation: Too short </h2>
            }
            </div>
        )
    }
}
