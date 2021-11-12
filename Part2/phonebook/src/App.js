import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState ([
    { name: 'Arto Hellas', id: 1, number: 1234567890 }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  
  let hasVal = false;

  const handleAddNumber = (e) => {
    e.preventDefault()
    
    const newPerson = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    }

    for (let key in persons) {persons[key].name === newPerson.name ? hasVal = true : hasVal = false}
      
    !hasVal ? setPersons(persons.concat(newPerson)) : alert(`${newName} is already added to phonebook`)

    setNewName('') 
    setNewNumber('')
  }
  
  const handleNameInput = (e) => setNewName(e.target.value)
  const handleNumberInput = (e) => setNewNumber(e.target.value)


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>name: <input value={newName} onChange={handleNameInput} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberInput} /></div>
        <div><button onClick={handleAddNumber} type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.id}>
          {person.name} {person.number}
        </p>
        )}
    </div>
  );
}

export default App;
