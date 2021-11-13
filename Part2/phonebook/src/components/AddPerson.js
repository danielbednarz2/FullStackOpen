
const AddPerson = ({ newName, newNumber, handleNameInput, handleNumberInput, handleAddNumber }) => {
    
    return (
        <form>
        <div>name: <input value={newName} onChange={handleNameInput} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberInput} /></div>
        <div><button onClick={handleAddNumber} type="submit">add</button></div>
      </form>
    )
}

export default AddPerson;