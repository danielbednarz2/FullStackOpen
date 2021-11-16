import { useState, useEffect } from 'react'
import Search from './components/Search'
import AddPerson from './components/AddPerson'
import Phonebook from './components/Phonebook'
import personServices from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState ([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchValue, setSearchValue ] = useState('')

  useEffect(() => {
    personServices
    .getAll()
    .then(book => setPersons(book))
  }, [])

  let filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchValue.toLowerCase()) || person.number.includes(searchValue))

  const handleAddNumber = (e) => {
    e.preventDefault()
    
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    personServices
      .create(newPerson)
      .then(person => {
        let hasVal = false;
        for (let key in persons) {persons[key].name.toLowerCase() === newPerson.name.toLocaleLowerCase() ? hasVal = true : hasVal = false}
        !hasVal ? setPersons(persons.concat(person)) : alert(`${newName} is already added to phonebook`)
      }
         )

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
