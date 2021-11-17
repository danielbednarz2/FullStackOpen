import Note from './components/Note'
import Notification from './components/Error'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import noteService from './services/notes'

const App = () => {
  const [note, setNote] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')

 useEffect(() => {
   noteService
    .getAll()
    .then(initialNotes => {
      setNote(initialNotes)
   })
 }, [])



  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNote(note.concat(returnedNote))
        setNewNote('')
      }
      ) 
  }

  const handleValueChange = (e) => setNewNote(e.target.value)

  const notesToShow = showAll ? note : note.filter(note => note.important)

  const toggleImportanceOf = (id) =>{
    const url = `http://localhost:3001/notes/${id}`
    const notes = note.find(n => n.id === id)
    const changedNote = {...notes, important: !notes.important}

    noteService
      .update(url, changedNote)
      .then(returnedNote => {
        setNote(note.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `Note '${notes.content}' was already removed from server `
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNote(note.filter(n => n.id !== id))
      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleValueChange}/>
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  );
}

export default App;
