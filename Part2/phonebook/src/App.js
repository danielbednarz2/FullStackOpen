import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState ([
    { name: 'Arto Hellas', id: 1 }
  ])
  const [ newName, setNewName ] = useState('')

  const handleAddNumber = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }
    const handleNameInput = (e) => setNewName(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          <button onClick={handleAddNumber} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.id}>
          {person.name}
        </p>
        )}
    </div>
  );
}

export default App;
