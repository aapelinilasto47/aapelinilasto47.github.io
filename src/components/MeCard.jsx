import omaKuva from "../assets/mäpieni.jpg";

function MeCard({ lang = "fi" }) {
  return (
    <div className="me-card">
      <img
        src={omaKuva}
        alt="Aapeli Nilasto"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "5px",
          marginTop: "1rem",
        }}
      />
      <h2>Aapeli Nilasto</h2>
      <p>
        {lang === "fi"
          ? "Full Stack -kehittäjä, joka on erikoistunut TypeScriptiin, Pythoniin ja laadunvarmistukseen (QA). Intohimona tehokkaiden, turvallisten ja skaalautuvien verkkosovelluste rakentaminen."
          : "Full Stack Developer specializing in TypeScript, Python, and QA. Passionate about building efficient, safe, and scalable web applications."}
      </p>
    </div>
  );
}

export default MeCard;
