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

    const handlePersonChange = () => {
      const updateNumber = persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase())
      
      if (window.confirm('Are you sure?')) {
        personServices
          .update(newPerson, updateNumber.id)
        personServices
          .getAll()
          .then(book => setPersons(book))
      } else {
          return
      }
    }

    const handleAddPerson = () => {
      personServices
        .create(newPerson)
        .then(person => setPersons(persons.concat(person)))
    }
    
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    persons.some(person => person.name.toLowerCase() === newPerson.name.toLowerCase())
    ? handlePersonChange()
    : handleAddPerson()

    setNewName('') 
    setNewNumber('')
  }

  const deleteEntry = (id) => {
    if (window.confirm('Are you sure?')) {
      personServices
        .deletePerson(id)
      personServices
        .getAll()
        .then(book => setPersons(book))
    } else {
        return
    }
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
      {filteredPersons.map(person => 
      <Phonebook key={person.id} name={person.name} number={person.number} deleteEntry={() => deleteEntry(person.id)} />
      )}
    </div>
  );
}

export default App;
