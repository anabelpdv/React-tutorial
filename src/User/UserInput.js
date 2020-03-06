import React from 'react'
import './User.css'

const UserInput = (props) => {
 return(
   <div className="Input">
     <input onChange={props.userChange}  value={props.name} type="text"/>
   </div>
 );
}


export default UserInput;