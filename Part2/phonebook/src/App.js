import { useState } from 'react'
import Search from './components/Search'
import AddPerson from './components/AddPerson'
import Phonebook from './components/Phonebook'

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
      <Search searchValue={searchValue} handleSearchValue={handleSearchValue} />
      <h2>Add New Number</h2>
      <AddPerson newName={newName} newNumber={newNumber} handleNameInput={handleNameInput} handleNumberInput={handleNumberInput} handleAddNumber={handleAddNumber} />
      <h2>Numbers</h2>
      <Phonebook filteredPersons={filteredPersons} />
    </div>
  );
}

export default App;
