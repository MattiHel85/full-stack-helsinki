import React from 'react';

function Course( {course} ) {
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <>
            <h2>{course.name}</h2>
            <p>{course.parts[0].name}: {course.parts[0].exercises}</p>
            <p>{course.parts[1].name}: {course.parts[1].exercises}</p>
            <p>{course.parts[2].name}: {course.parts[2].exercises}</p>
            <p>{course.parts[3].name}: {course.parts[3].exercises}</p>
            <p>There is a total of {totalExercises} exercises</p>
        </>
    );
}

export default Course;