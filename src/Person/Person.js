import React from 'react';
import classes from './Person.css';



const person = ( props ) => {

	const rnd = Math.random();
	if(rnd > 0.7){
		throw new Error ('Something went wrong');
	}

	console.log(rnd)

console.log(props.children)
	return (
		<div className={classes.Person} >
					<p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
					<p className={classes.pepe}>{props.children}</p>
					<input type="text" onChange={props.change} value = {props.name}/>
		</div>
	)
};


export default person;