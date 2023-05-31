import React from 'react'

function StatisticLine(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.value}{props.name === 'positive' ? '%' : ''}</td>
    </tr>
  )
}

export default StatisticLine