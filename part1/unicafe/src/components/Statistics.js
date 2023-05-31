import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = (props) => {

    const total = props.good + props.neutral + props.bad
    
    const avg = total - props.neutral - (props.bad * 2)
    
    return (
      <>
        {
          total ? 
          <table>
            <tbody>
              <StatisticLine name={'good'} value={props.good}/>
              <StatisticLine name={'neutral'} value={props.neutral}/>
              <StatisticLine name={'bad'} value={props.bad}/>
              <StatisticLine name={'all'} value={total}/>
              <StatisticLine name={'average'} value={avg / total}/>
              <StatisticLine name={'positive'} value={props.good / total * 100}/>  
            </tbody>         
          </table>
          : 
          <p>
            No feedback given
          </p>
        }      
      </>
      
    )
  }

export default Statistics