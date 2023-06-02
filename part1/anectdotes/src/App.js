import { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0)); 

  const randomiseAnectdote = () => {
    const randomNum = Math.floor(Math.random() * (anecdotes.length))
    console.log(randomNum)
    setSelected(randomNum)
  }

  const voteForAnectdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    console.log(copy)
    setVotes(copy)
  }

  const mostVotes = Math.max(...votes)

  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} {votes[selected] < 1 || votes[selected] > 1 ? 'votes' : 'vote'}</p>
      <button onClick={voteForAnectdote}>vote</button>
      <button onClick={randomiseAnectdote}>Next anectdote</button>

      { mostVotes < 1 ? '' :  
        <>
          <h2>Anecdote with the most votes</h2>
          <p>{anecdotes[votes.indexOf(mostVotes)]}</p>
          <p>has {votes[votes.indexOf(mostVotes)]} {votes[votes.indexOf(mostVotes)] < 1 || votes[votes.indexOf(mostVotes)] > 1 ? 'votes' : 'vote'}</p>
        </>
      }
    </>
  )
}

export default App