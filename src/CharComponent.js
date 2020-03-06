import React from 'react';


const CharComponent = (props) => {
const style = {

 display: 'inline',
 padding: '16px',
 textAlign: 'center',
 margin: '16px',
 border: '1px solid black'

}
  return(
     <div onClick={props.click} style={style}> {props.char}</div>
  );
}


export default CharComponent;

