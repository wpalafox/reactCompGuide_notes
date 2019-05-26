import React from 'react'

export default function ValidationComponent(props) {
   let validationMessage = 'Text long enough';

   if(props.textL <= 5) {
       validationMessage = 'Text too short';
   }
    
    
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}
