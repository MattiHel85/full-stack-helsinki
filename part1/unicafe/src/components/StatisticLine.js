import React from 'react'

function StatisticLine(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.value}{props.name === 'positive' ? '%' : ''}</td>
    </tr>
    // <p> {props.value}{props.name === 'positive' ? '%' : ''}</p>
  )
}

export default StatisticLine