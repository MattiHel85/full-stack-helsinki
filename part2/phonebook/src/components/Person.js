import React from 'react';
import personService from '../services/persons'

const Person = ({person, onDelete, setNotification, setNotificationStyle}) => {

    const removePerson = () => {
        personService
          .remove(person.id)
          .then(() => {
            const redNotificationStyle = {
                color: 'red',
                background: '#F8F8FF',
                fontSize: 20,
                borderStyle: 'solid',
                borderRadius: 15,
                padding: 10,
                marginBottom: 5
              }
            setNotificationStyle(redNotificationStyle)
            setNotification(`${person.name} deleted`)
            setTimeout(() => {
                setNotification(null)
            }, 3500)
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