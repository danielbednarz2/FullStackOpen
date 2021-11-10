import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Feedback = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text='good'/>
      <Button onClick={handleNeutral} text='neutral'/>
      <Button onClick={handleBad} text='bad'/>
    </div>
  )
}

const Stats = ({ voteValue, text }) => <tr><td>{text}</td><td>{voteValue}</td></tr>

const Statistics = ({ goodValue, neutralValue, badValue }) => {
  const allStats = goodValue + neutralValue + badValue
  const averageStats = Math.round(((allStats / 3) * .1 + Number.EPSILON) * 10) / 10
  const positiveStats = Math.round(((goodValue / allStats) * 100 + Number.EPSILON) * 10) / 10 + ' %'

  if (goodValue || neutralValue || badValue > 0) {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Stats voteValue={goodValue} text='good'/>
            <Stats voteValue={neutralValue} text='neutral'/>
            <Stats voteValue={badValue} text='bad'/>
            <Stats voteValue={allStats} text='all'/>
            <Stats voteValue={averageStats} text='average'/>
            <Stats voteValue={positiveStats} text='positive'/>
          </tbody>
        </table>
      </>
    )
  }
  return (
    <>
    <h1>statistics</h1>
    <p>There is no feedback</p>
    </>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleGoodClick = () => setClicks({good: clicks.good + 1, neutral: clicks.neutral, bad: clicks.bad })
  const handleNeutralClick = () => setClicks({good: clicks.good, neutral: clicks.neutral +1, bad: clicks.bad })
  const handleBadClick = () => setClicks({good: clicks.good, neutral: clicks.neutral, bad: clicks.bad + 1 })
  
  return (
    <div>
      <Feedback handleGood={handleGoodClick} handleNeutral={handleNeutralClick} handleBad={handleBadClick} />
      <Statistics goodValue={clicks.good} neutralValue={clicks.neutral} badValue={clicks.bad}/>
    </div>
  );
  }

export default App;
