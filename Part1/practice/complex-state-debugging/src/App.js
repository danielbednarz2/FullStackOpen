import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
    allClicks: []
  })

  const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1, allClicks: clicks.allClicks.concat('L')})
  const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1, allClicks: clicks.allClicks.concat('R')})
  

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <p>{clicks.allClicks.join(' ')}</p>
    </div>
  );
}

export default App;
