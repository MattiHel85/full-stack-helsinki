import {useState, useEffect} from 'react'
import axios from 'axios'
import Search from './components/Search'
import AddPerson from './components/AddPerson'
import Person from './components/Person'
import Header from './components/Header'

const App = () => {
  
  
  const [persons, setPersons] = useState([])

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
      axios.post('http://localhost:3001/persons', newPerson).then((res) => {
        setPersons([...persons, res.data]); // Update the state with the new person from the server
      });
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