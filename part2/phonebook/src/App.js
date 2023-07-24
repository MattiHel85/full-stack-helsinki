import {useState, useEffect} from 'react'
import axios from 'axios'
import Search from './components/Search'
import AddPerson from './components/AddPerson'
import Person from './components/Person'
import Header from './components/Header'

const App = () => {
  
  
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(res => {
    const persons = res.data
    console.log(persons)
    setPersons(persons)
    })
  }, [])

  

  const addPerson = (e) => {
    e.preventDefault()

    const nameExists = persons.some((person) => person.name.toLowerCase() === newName.toLowerCase());

    if (nameExists) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      };
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewNumber('');
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

  return (
    <>
      <Header header={'Phonebook'}/>
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
          filteredPersons ? filteredPersons.map(person => (<Person person={person} />)):
          persons.map((person) => <Person person={person} />)
        }
      </div>
    </>
  );
}

export default App;