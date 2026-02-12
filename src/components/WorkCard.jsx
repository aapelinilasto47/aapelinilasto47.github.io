function WorkCard({ work }) {
  return (
    <div className="work-card">
      <h2>{work.position}</h2>
      <span className="tag"><b>{work.company}</b></span>
      <br />
      <p>{work.description}</p>
        <p><em>{work.duration}</em></p>
        
    </div>
  )
}

export default WorkCard