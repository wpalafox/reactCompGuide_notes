import React from 'react';
import Person from './Person/Person';

import React from 'react'

export default function Persons(props) {
    return (
    
    const persons = (props) => props.persons.map( (person, index) =>
        return <Person
        click={() => this.clicked(index)} 
        name={person.name} 
        age={person.age}
        key={person.id}
        changed={(event) => this.changed(event, person.id)} />
    
    }); 
    )
}





    