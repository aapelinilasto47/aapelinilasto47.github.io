import { useState } from 'react'

function StudyCard({ course }) {

    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

  return (
    <div className="study-card">
      <h3>{course.title}</h3>
        <button onClick={toggleExpand} className="expand-button">
          {isExpanded ? 'Hide Details' : 'Show Details'}
        </button>
        {isExpanded && (
          <div className="study-details">
            <p><b>Grade:</b> {course.grade}</p>
            <p><b>Study Points:</b> {course.studyPoints}</p>
            <p><b>Description:</b> {course.description}</p>
            <p><b>Year:</b> {course.year}</p>
            <p><b>Place:</b> {course.place}</p>
          </div>
        )}
    </div>
  )
}

export default StudyCard;