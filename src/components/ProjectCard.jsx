function ProjectCard({ project, lang = "fi" }) {
  // Haetaan tekstit turvallisesti: jos se on olio, valitaan lang, muuten käytetään sellaisenaan
  const title =
    typeof project?.title === "object" ? project.title[lang] : project?.title;
  const description =
    typeof project?.description === "object"
      ? project.description[lang]
      : project?.description;

  return (
    <div className="project-card">
      <h2>{title}</h2>
      <span className="tag">{project?.technologies}</span>
      <p>{description}</p>
      {project?.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {lang === "fi"
            ? "Linkki GitHub-repositorioosi"
            : "Link to GitHub Repository"}
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
