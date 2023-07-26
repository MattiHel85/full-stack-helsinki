import {useState, useEffect} from 'react'
import Search from './components/Search'
import AddPerson from './components/AddPerson'
import Person from './components/Person'
import Header from './components/Header'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification ] = useState('')
  const [notificationStyle, setNotificationStyle] = useState({
    color: 'black',
    background: '#F8F8FF',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 15,
    padding: 10,
    marginBottom: 5,
  })

  useEffect(() => {
    personService
      .getAll()
      .then(res => {
        setPersons(res.data)
      })

    // Pre personService code 

    // axios.get('http://localhost:3001/persons')
    // .then(res => {
    // const persons = res.data
    // console.log(persons)
    // setPersons(persons)
    // })
  }, [])

  

  const addPerson = (e) => {
    e.preventDefault()

    const nameExists = persons.some((person) => person.name.toLowerCase() === newName.toLowerCase());

    if (nameExists) {
      window.confirm(`${newName} is already added to the phonebook. Would you like to replace the current saved number?`);

      const existingPerson = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());
      if (existingPerson) {
        const updatedPerson = {
          ...existingPerson,
          number: newNumber
        };

        personService
          .update(existingPerson.id, updatedPerson)
          .then((res) => {
            // Update the state with the updated person data
            setPersons(persons.map((person) => person.id === existingPerson.id ? res.data : person));
            const purpleNotificationStyle = {
              color: '#9932CC',
              background: '#F8F8FF',
              fontSize: 20,
              borderStyle: 'solid',
              borderRadius: 15,
              padding: 10,
              marginBottom: 5
            }
            setNotificationStyle(purpleNotificationStyle)
            setNotification(`${existingPerson.name} updated`)
            setNewName('');
            setNewNumber('');
            setTimeout(() => {
              setNotification(null)
            }, 3500)
          })
          .catch((error) => {
            // Handle error if the update fails
            console.log(error)
          });
      }

    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      };

      personService
        .create(newPerson)
        .then((res) => {
          setPersons([...persons, res.data])
        })

      // Pre personService code

      // axios.post('http://localhost:3001/persons', newPerson).then((res) => {
      //   setPersons([...persons, res.data]); // Update the state with the new person from the server
      // });
        const greenNotificationStyle = {
          color: 'green',
          background: '#F8F8FF',
          fontSize: 20,
          borderStyle: 'solid',
          borderRadius: 15,
          padding: 10,
          marginBottom: 5
        }
        setNotificationStyle(greenNotificationStyle)
        setNotification(`${newPerson.name} added`)
        setNewName('');
        setNewNumber('');
        setTimeout(() => {
        setNotification(null)
      }, 3500)
    }
  }
  
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeletePerson = (id) => {
    setPersons(persons.filter(person => person.id !== id));
    // setNotification(`${person.name} deleted`)
    // setTimeout(() => {
    //   setNotification(null)
    // }, 3500)
  };

  
  return (
    <>
      <Header header={'Phonebook'}/>
      { 
        notification ? 
          <Notification message={notification} style={notificationStyle}/> 
          : null 
      }
      <Search filter={filter} onFilterChange={handleFilterChange}/>
      <AddPerson 
        addPerson={addPerson} 
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <Header header={'Numbers'}/>
      <div>
        {
          filteredPersons ? filteredPersons.map( person => 
            (
              <Person 
                key={person.id} 
                person={person} 
                onDelete={handleDeletePerson} 
                setNotification={setNotification} 
                setNotificationStyle={setNotificationStyle}
              />)):
          persons.map( (person) => 
            <Person 
              key={person.id} 
              person={person} 
              onDelete={handleDeletePerson} 
              setNotification={setNotification} 
              setNotificationStyle={setNotificationStyle}
              />
            )
        }
      </div>
    </>
  );
}

export default App;