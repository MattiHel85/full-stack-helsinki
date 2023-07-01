import React from 'react';

const AddPerson = ({addPerson, newName, newNumber, handleNameChange, handleNumberChange}) => {
    return (
        <form onSubmit={addPerson}>
            <div>
              name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
              number: <input value={newNumber} onChange={handleNumberChange}/>
            </div>
            <div>
              <button type='submit'>
                Add
              </button>
            </div>
        </form>
    );
}

export default AddPerson;