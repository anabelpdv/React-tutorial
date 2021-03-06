import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'



class App extends Component {

	constructor(props){
		super(props);
		console.log('[App.js] constructor')

		this.state = {
			persons: [
				{id:'ddw', name: 'Max', age: 28},
				{id:'dsa', name: 'Manu', age: 29},
				{id:'adf', name: 'Stephanie', age: 26},
			],
	
			otherSate: 'Some other value',
			showPersons: false,
			inputText: [],
		}
	}

	static getDerivedStateFromProps(props,state){
		console.log('[App.js] getDerivedStateFromProps', props)
		return state;
	}

	componentDidMount(){
		console.log('[App.js] componentDidMount')
	}

	shouldComponentUpdate(){
		console.log('[App.js] shouldComponentUpdate')
		return true;
	}

	componentDidUpdate(){
		console.log('[App.js] componentDidUpdate')
	}

	// componentWillMount(){
	// 	console.log('[App.js] componentWillMount')
	// }

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
		console.log('[App.js] render')
		let persons = null;

		if(this.state.showPersons){
			persons = (
						<Persons
							persons={this.state.persons} 
							clicked={this.deletePersonHandler}
							changed={this.nameChangeHandler}
						/>			
			);
		}

			return (
						<div className={classes.App}>
								<Cockpit 
									title={this.props.appTitle}
									showPersons={this.state.showPersons} 
									persons={this.state.persons}
									click={this.togglePersonHandler}
									/>
								{persons}
						</div>
			);
			
	}
}

export default App;
