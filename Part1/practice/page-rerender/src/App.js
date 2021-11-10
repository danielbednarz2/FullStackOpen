import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => setCounter(counter + 1)
  
  return (
    <div>
      <Display counter={counter} />
      <Display counter={counter*2} />
      <Display counter={counter*3} />
      <Display counter={counter*counter} />
      <Button onClick={handleClick} text='plus' />
      <Button onClick={() => setCounter(0)} text='reset' />
    </div>
  );
}

export default App;
