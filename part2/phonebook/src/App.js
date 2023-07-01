import {useState} from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas'
    }
  ])

  const [newName, setNewName] = useState('')

  const addPerson = (e) => {
    e.preventDefault()

    const nameExists = persons.some((person) => person.name.toLowerCase() === newName.toLowerCase());

    if (nameExists) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const newPerson = {
        name: newName,
      };
      setPersons([...persons, newPerson]);
      setNewName('');
    }
  }
  
  const handlePersonChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>
        Phonebook
      </h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
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
          persons.map((person, i) => <p key={i}>{person.name}</p>)
        }
      </div>
      <div>
        debug: {newName}
      </div>
    </div>
  );
}

export default App;