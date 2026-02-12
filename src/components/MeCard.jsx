import omaKuva from '../assets/mäpieni.jpg';

function MeCard() {
  return (
    <div className="me-card">
      <img src={omaKuva} alt="Aapeli Nilasto" style={{ width: '80%', height: 'auto', borderRadius: '5px', marginTop: '1rem' }} />
      <h2>Aapeli Nilasto</h2>
        <p>Full Stack Developer specializing in React, Django and databases. Passionate about building efficient and scalable web applications.</p>
        
    </div>
  );
}

export default MeCard;