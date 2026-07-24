import { useState } from "react";

function StudyCard({ course, lang = "fi" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Jos kurssia ei ole määritelty, ei kaadeta sovellusta
  if (!course) return null;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Turvallinen kielen valinta
  const title =
    typeof course?.title === "object"
      ? course.title?.[lang] || course.title?.["fi"]
      : course?.title;

  const description =
    typeof course?.description === "object"
      ? course.description?.[lang] || course.description?.["fi"]
      : course?.description;

  return (
    <div className="study-card">
      <h3>{title}</h3>
      <button onClick={toggleExpand} className="expand-button">
        {isExpanded
          ? lang === "fi"
            ? "Piilota tiedot"
            : "Hide Details"
          : lang === "fi"
            ? "Näytä tiedot"
            : "Show Details"}
      </button>

      {isExpanded && (
        <div className="study-details">
          <p>
            <b>{lang === "fi" ? "Arvosana:" : "Grade:"}</b> {course.grade}
          </p>
          <p>
            <b>{lang === "fi" ? "Opintopisteet:" : "Study Points:"}</b>{" "}
            {course.studyPoints}
          </p>
          <p>
            <b>{lang === "fi" ? "Kuvaus:" : "Description:"}</b> {description}
          </p>
          <p>
            <b>{lang === "fi" ? "Vuosi:" : "Year:"}</b> {course.year}
          </p>
          <p>
            <b>{lang === "fi" ? "Paikka:" : "Place:"}</b> {course.place}
          </p>
        </div>
      )}
    </div>
  );
}

export default StudyCard;
