import Note from './components/Note'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [note, setNote] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

 useEffect(() => {
   axios
   .get('http://localhost:3001/notes')
   .then(res => {
     setNote(res.data)
   })
 }, [])


  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      id: note.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }

    setNote(note.concat(noteObject))
    setNewNote('')
  }

  const handleValueChange = (e) => setNewNote(e.target.value)

  const notesToShow = showAll ? note : note.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleValueChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
