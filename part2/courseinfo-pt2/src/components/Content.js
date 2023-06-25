import React from 'react'
import Part from './Part'

function Content( {course} ) {
  return (
    <>
      {
        course.parts.map((part) => (
          <Part part={part.name} exercises={part.exercises}/>
        ))
      }
    </>
  )
}

export default Content