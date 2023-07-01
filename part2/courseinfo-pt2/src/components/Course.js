import React from 'react';
import Header from './Header'
import Content from './Content';

function Course( {course} ) {
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <div key={course.id}>
            <Header course={course}/>
            <Content course={course}/>
            <p>There is a total of {totalExercises} exercises</p>
        </ div>
    );
}

export default Course;