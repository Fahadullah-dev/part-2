import React from 'react'

const Course = ({courses}) => {
  
  
    return(
      <div>
        <h1>Web development curriculum</h1>
        
        {courses.map((course, courseIndex) => (
            <div key={courseIndex}>
            <h2>{course.name}</h2>
            {course.parts.map((part, partIndex) => (
                <p key={partIndex}>
                {part.name} {part.exercises}
                </p>
            ))}
            <p><b>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b></p>
            </div>
        ))}
      </div>
    )
  }

  export default Course;