import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} name={'good'} />
      <Button handleClick={handleNeutral} name={'neutral'} />
      <Button handleClick={handleBad} name={'bad'} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App