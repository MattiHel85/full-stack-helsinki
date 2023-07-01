import {useState} from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('');


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
      <h2>
        Phonebook
      </h2>
      <div>
        Search phonebook: <input type="text" value={filter} onChange={handleFilterChange} />
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type='submit'>
            add
          </button>
        </div>
      </form>
      <h2>
        Numbers
      </h2>
      <div>
        {
          filteredPersons ? filteredPersons.map(person => (<p key={person.id}>{person.name}: {person.number}</p>)):
          persons.map((person) => <p key={person.id}>{person.name}: {person.number}</p>)
        }
      </div>
    </>
  );
}

export default App;