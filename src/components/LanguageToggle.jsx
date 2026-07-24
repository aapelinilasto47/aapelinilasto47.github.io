import React from "react";

export default function LanguageToggle({ lang, setLang }) {
  return (
    <div className="lang-toggle-container">
      <button
        onClick={() => setLang("fi")}
        className={`lang-btn ${lang === "fi" ? "active" : ""}`}
      >
        FI
      </button>
      <span className="lang-divider">|</span>
      <button
        onClick={() => setLang("en")}
        className={`lang-btn ${lang === "en" ? "active" : ""}`}
      >
        EN
      </button>
    </div>
  );
}
