import React from 'react';
import person from './Person/Person';


const ValidationComponent = ( props ) => {

let valid = null;

if(props.input.length <=5)
valid = <p>Short </p>
else
valid = <p>Long</p>

	return (
    <div>{props.input}
				{valid}
		</div>
	)
};


export default ValidationComponent;

