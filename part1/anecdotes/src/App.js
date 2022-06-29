import { useState } from 'react'

const Button = ({text, clickAction}) => {
  return(<button onClick={clickAction}>{text}</button>)
}

const VoteDisplay = ({points, index}) => {
  return(<>has {points[index]} votes<br /></>)
}

const AnecdoteDisplay = ({anecdotes, index}) => {
  return(<>{anecdotes[index]}<br/></>)
}

const MostVotes = ({anecdotes, points}) => {
  const maxPoints = Math.max(...points)
  const highestVotedIndex = points.indexOf(maxPoints)
  if(maxPoints === 0) return(<div>No votes cast</div>)

  return(<div>
    <AnecdoteDisplay anecdotes={anecdotes} index={highestVotedIndex}/>
    <VoteDisplay points={points} index={highestVotedIndex} />
  </div>)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  const updatePoints = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <AnecdoteDisplay anecdotes={anecdotes} index={selected}/>
      <VoteDisplay points={points} index={selected} />
      <Button text={"Vote"} clickAction={updatePoints}/>
      <Button text={"Next Anecdote"} clickAction={() => {setSelected(Math.floor(Math.random() * (anecdotes.length - 1)))}}/>

      <h1>Anecdote with the most votes</h1>
      <MostVotes anecdotes={anecdotes} points={points}/>
    </div>
  )
}

export default App