import React from 'react'

function Button(props) {
  return (
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

export default Button