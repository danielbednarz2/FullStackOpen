
const Phonebook = ({ name, number, deleteEntry, personKey }) => {
    return (
            <p>
                {name} {number}
                <button onClick={deleteEntry}>delete</button>
            </p>
    )
}

export default Phonebook