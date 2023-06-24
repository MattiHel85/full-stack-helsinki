import React from 'react';
// import Content from './components/Content';
// import Header from './components/Header';
// import Total from './components/Total';
import Course from './components/Course';

function App() {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 1,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  
  }
  
  return (
    <>
      {/* <Header course={course} />
      <Content course={course}/>
      <Total course={course}/> */}
      <Course course={course}/>
    </>
  );
}

export default App;
