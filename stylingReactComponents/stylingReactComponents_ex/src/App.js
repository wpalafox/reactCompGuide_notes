import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
  };

  let persons = null;

  if (this.state.showPersons) {
    persons = (
      <div >
        {this.state.persons.map((person, index) => {
          return <Person
          click={() => this.deletePersonHandler(index)} 
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)} />
        })}
            

        </div> 

    );


    style.backgroundColor = 'red';
 

  }

  const classes = [];
  if (this.state.persons.length <= 2 ) {
    classes.push('red'); // classes = ['red']
  }
  if (this.state.persons.length <= 1){
    classes.push('bold'); // classes = ['red', 'bold']
  }

    return (
   
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        
      
      </div>
  
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App; //higher order component 
