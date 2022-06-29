import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return(<button onClick={handleClick}>{text}</button>)
}

const Statistics = ({good, bad, neutral}) => {
  const total = good + bad + neutral;

  if(total){
    return(
      <table>
        <tbody>
        <StatisticLine text={'Bad'} value={bad} />
        <StatisticLine text={'Neutral'} value={neutral} />
        <StatisticLine text={'Good'} value={good} />
        <StatisticLine text={'All'} value={total} />
        <StatisticLine text={'Average'} value={(good - bad) / total} />
        <StatisticLine text={'Positive'} value={(good / total) * 100} endText={'%'}/>
        </tbody>
      </table>
    )
  }

  return(<div>{'No feedback given'}<br /></div>)
}

const StatisticLine = ({text, value, endText}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}{endText || ''}</td>
    </tr>
  );
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