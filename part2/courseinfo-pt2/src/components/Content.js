import React from 'react'
import Part from './Part'

function Content(props) {
  return (
    <>
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
      <Part part={props.course.parts[3].name} exercises={props.course.parts[3].exercises} />
    </>
  )
}

export default Content