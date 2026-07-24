function ContactCard({ lang = "fi" }) {
  return (
    <>
      <h2>{lang === "fi" ? "Ota yhteyttä" : "Contact Me"}</h2>
      <p>
        {lang === "fi"
          ? "Tutustu sosiaalisen median profiileihini ja ota rohkeasti yhteyttä!"
          : "Check out my social media profiles and feel free to reach out!"}
      </p>
      <p>
        {lang === "fi"
          ? "Voit myös ladata ansioluetteloni (CV) vasemman yläkulman linkistä."
          : "You can also download my CV from the link in the top left corner."}
      </p>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="https://www.linkedin.com/in/aapeli-nilasto-004bba34a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin" style={{ fontSize: "3.5rem" }}></i>
        </a>
        <span style={{ width: "2rem" }}></span>
        <a
          href="https://github.com/aapelinilasto47"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github" style={{ fontSize: "3.5rem" }}></i>
        </a>
      </div>
    </>
  );
}

export default ContactCard;
