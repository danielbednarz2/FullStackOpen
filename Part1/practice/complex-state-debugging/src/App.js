import { useState } from 'react'

const History = ({ allClicks }) => allClicks.length === 0 ? 
    <div>the app is used by pressing the buttons</div> :
    <div>button press history: {allClicks.join(' ')}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0, allClicks: []})

  const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1, allClicks: clicks.allClicks.concat('L')})
  const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1, allClicks: clicks.allClicks.concat('R')})
  
  return (
    <div>
      {clicks.left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {clicks.right}
      <History allClicks={clicks.allClicks} />
    </div>
  );
}

export default App;
