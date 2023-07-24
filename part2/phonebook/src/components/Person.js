import React from 'react';
import personService from '../services/persons'

const Person = ({person, onDelete}) => {

    const removePerson = () => {
        personService
          .remove(person.id)
          .then(() => {
            console.log(`${person.name} deleted`)
            onDelete(person.id);
          })
          .catch((err) => {
            console.log(err)
          })
      }

    return (
        <>
            <p key={person.id}>{person.name}: {person.number}</p>
            <button onClick={removePerson}>Delete</button>
        </>
    );
}

export default Person;