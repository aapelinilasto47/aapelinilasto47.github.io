import React from "react";

function NavBlock({ navItem, onClick, lang, onkoAktiivinen }) {
  // Haetaan teksti kielen mukaan, ja käytetään navItem.label varana jos title puuttuu
  const titleText = navItem.title?.[lang] || navItem.label;

  return (
    <div
      onClick={onClick}
      className={`nav-block ${onkoAktiivinen ? "active" : ""}`}
      style={{
        color: navItem.color1,
        borderColor: navItem.color2,
      }}
    >
      <h2>{titleText}</h2>
    </div>
  );
}

export default NavBlock;
