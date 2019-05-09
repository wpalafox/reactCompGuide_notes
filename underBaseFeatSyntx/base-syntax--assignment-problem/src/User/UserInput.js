import React from 'react'

export default function UserInput(props) {
   const style = {
     border: '2px solid red'

   }
    return (
    
    <div className="inputWrapper">
         <input type="text" 
         style={style}
         onChange={props.changed} 
         value={props.username} />
    </div>
  )
}


