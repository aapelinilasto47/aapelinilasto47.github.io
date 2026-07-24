import React from "react";

export default function WorkCard({ work, lang = "fi" }) {
  // Jos work-proppia ei ole annettu, älä renderöi mitään (estää kaatumisen)
  if (!work) return null;

  const position =
    typeof work.position === "object" ? work.position?.[lang] : work.position;
  const description =
    typeof work.description === "object"
      ? work.description?.[lang]
      : work.description;

  return (
    <div className="work-card">
      <h3>{position}</h3>

      <p className="company-info">
        <strong>{work.company}</strong> | {work.duration}
      </p>

      <p className="description">{description}</p>
    </div>
  );
}
