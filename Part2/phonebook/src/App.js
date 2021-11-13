import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState ([
    { name: 'Arto Hellas', number: '1234567890', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchValue, setSearchValue ] = useState('')

  let filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchValue.toLowerCase()) || person.number.includes(searchValue))

  const handleAddNumber = (e) => {
    e.preventDefault()
    
    const newPerson = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    }

    let hasVal = false;
    for (let key in persons) {persons[key].name === newPerson.name ? hasVal = true : hasVal = false}
    !hasVal ? setPersons(persons.concat(newPerson)) : alert(`${newName} is already added to phonebook`)

    setNewName('') 
    setNewNumber('')
  }
  
  const handleNameInput = (e) => setNewName(e.target.value)
  const handleNumberInput = (e) => setNewNumber(e.target.value)
  const handleSearchValue = (e) => setSearchValue(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <input value={searchValue} onChange={handleSearchValue} />
      <h2>Add New Number</h2>
      <form>
        <div>name: <input value={newName} onChange={handleNameInput} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberInput} /></div>
        <div><button onClick={handleAddNumber} type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person => 
        <p key={person.id}>
          {person.name} {person.number}
        </p>
        )}
    </div>
  );
}

export default App;
