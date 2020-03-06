import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundery from './ErrorBoundery/ErrorBoundery'



class App extends Component {
	state = {
			persons: [
				{id:'ddw', name: 'Max', age: 28},
				{id:'dsa', name: 'Manu', age: 29},
				{id:'adf', name: 'Stephanie', age: 26},
			],

			otherSate: 'Some other value',
			showPersons: false,
			inputText: [],
	}


	nameChangeHandler = (event, id) =>{ 
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id ;
		})

			const person = {
					...this.state.persons[personIndex]	
			};

			person.name = event.target.value;

			const persons = [...this.state.persons];
			persons[personIndex] = person;

			this.setState( {persons: persons })
		}

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex,1);
		this.setState({persons : persons})
	}

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow})
	}


	render() {

	

		let persons = null;
		let btnClass =[classes.Button];

		if(this.state.showPersons){
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <ErrorBoundery key= {person.id}>						
						<Person 
						click={this.deletePersonHandler.bind(this, index)}
						name={person.name} 
						age={person.age} 
						change={(event)=>this.nameChangeHandler(event, person.id)}>FUCK!!!!!!!!!!!</Person>
						</ErrorBoundery>		
					})}						
				</div>
			);

				btnClass.push(classes.Red)
		}

		const assignedClasses = [];
		
		if(this.state.persons.length<=2){
			assignedClasses.push(classes.red);
		}
		if(this.state.persons.length<=1){
			assignedClasses.push(classes.bold);
		}

			return (
						<div className={classes.App}>
								<h1>Hi, I'm a React App</h1>
								<p className={assignedClasses.join(' ')}>This is really working !!!</p>
								<button className={btnClass.join(' ')} onClick={this.togglePersonHandler}>Toggle Persons!!!</button>
								{/* <button style={style} onClick={this.togglePersonHandler}>Person Toggler</button> */}
								{persons}
						</div>
			);
			// React.createElement('div',{className:"App"},React.createElement('h1', null,'Does it work now??')) 
	}
}

export default App;
