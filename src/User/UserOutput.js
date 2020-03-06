import React from 'react'

const UserOutput = (props) => {
 return(
   <div>
     <p>This is one parragraph for {props.name}</p>
     <p>This is the other</p>
   </div>
 );
}

export default UserOutput;