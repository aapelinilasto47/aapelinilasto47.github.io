import React from "react";

function Jumbotron({ lang = "fi" }) {
  return (
    <div className="jumbotron">
      <h1>
        {lang === "fi"
          ? "Tervetuloa portfoliooni!"
          : "Welcome to My Portfolio!"}
      </h1>
      <p>
        {lang === "fi"
          ? "Tutustu projekteihini ja osaamiseeni ohjelmistokehityksen parissa."
          : "Discover my projects and skills in software development."}
      </p>
    </div>
  );
}

export default Jumbotron;
