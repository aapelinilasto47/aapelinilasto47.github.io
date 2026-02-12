function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <span className="tag">{project.technologies}</span>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Link to Github Repository
      </a>
    </div>
  )
}

export default ProjectCard