import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';


class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf2', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    //Now we have a new array with the objects from the old array 
    //But not the array itself.
    persons.splice(personIndex, 1); 
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //modifies the name
    person.name = event.target.value;

    //creates a copy array 
    const persons = [...this.state.persons];
    //modifies the person in the selected input field
    persons[personIndex] = person;
    
    this.setState( {persons: persons} ); 
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }



  render () {
  
  let persons = null;
  let btnClass = '';

  if (this.state.showPersons) {
    persons = (
      <div >
        <Persons 
        persons={this.state.persons} 
        click={this.deletePersonHandler} 
        changed={this.nameChangedHandler} />
        
       
          
          </div> 

    );

    btnClass = classes.Red


 

  }

  const assignedClasses = [];
  if (this.state.persons.length <= 2 ) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (this.state.persons.length <= 1){
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

    return (
   
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
          className={btnClass}
          
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        
      
      </div>
  
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App; //higher order component 
