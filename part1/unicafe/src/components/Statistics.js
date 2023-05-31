import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = (props) => {

    const total = props.good + props.neutral + props.bad
    
    const avg = total - props.neutral - (props.bad * 2)
    
    return (
      <>
        {
          total ? 
          <>
            <StatisticLine name={'good'} value={props.good}/>
            <StatisticLine name={'neutral'} value={props.neutral}/>
            <StatisticLine name={'bad'} value={props.bad}/>
            <StatisticLine name={'all'} value={total}/>
            <StatisticLine name={'average'} value={avg / total}/>
            <StatisticLine name={'positive'} value={props.good / total * 100}/>
            {/* <p>good: {props.good}</p> */}
            {/* <p>neutral: {props.neutral}</p>
            <p>bad: {props.bad}</p>
            <p>all: {total}</p>
            <p>average: {avg / total}</p>
            <p>positive: {props.good / total * 100}%</p>   */}
          </> : 
          <p>
            No feedback given
          </p>
        }      
      </>
      
    )
  }

export default Statistics