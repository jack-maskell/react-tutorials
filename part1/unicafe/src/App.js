import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return(<button onClick={handleClick}>{text}</button>)
}

const Statistics = ({good, bad, neutral}) => {
  const total = good + bad + neutral;

  if(total){
    return(
      <div>
        {`Bad ${bad} `}<br />
        {`Neutral ${neutral} `}<br />
        {`Good ${good} `}<br />
        {`All ${total}`}<br />
        {`Average ${(good - bad) / total}`}<br />
        {`Positive ${(good / total) * 100}%`}
      </div>
    )
  }

  return(<div>{'No feedback given'}</div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={() => setBad(bad + 1)} text={'Bad'} />
        <Button handleClick={() => setNeutral(neutral + 1)} text={'Neutral'} />
        <Button handleClick={() => setGood(good + 1)} text={'Good'} />
      </div>
      
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App