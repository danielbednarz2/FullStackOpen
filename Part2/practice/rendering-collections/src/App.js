import Note from './components/Note'
import { useState } from 'react'

const App = ({ notes }) => {
  const [note, setNote] = useState(notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

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
