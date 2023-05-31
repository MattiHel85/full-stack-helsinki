import React from 'react'

function StatisticLine(props) {
  return (
    <p>{props.name} {props.value}{props.name === 'positive' ? '%' : ''}</p>
  )
}

export default StatisticLine