import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const randomNumber = () => {
      let min = Math.ceil(0);
      let max = Math.floor(anecdotes.length - 1);
      setSelected(Math.floor(Math.random() * (max - min + 1) + min))
  }

  const voteClick = () => {
    const votes = [...points]
    votes[selected] +=1
    return (
      setPoints(votes)
    )
  }

  return (
    <div>
      {anecdotes[selected]}
      <br />
      <p>There are {points[selected]} votes</p>
      <Button onClick={randomNumber} text='next anecdote'/>
      <Button onClick={voteClick} text='vote'/>
    </div>
  );
}

export default App;
