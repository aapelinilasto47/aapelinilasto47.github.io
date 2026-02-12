import React, {useState} from 'react'
import './App.css'

import ProjectCard from './components/ProjectCard.jsx'
import Jumbotron from './components/jumbotron.jsx'
import MeCard from './components/MeCard.jsx'
import NavBlock from './components/navBlock.jsx'
import WorkCard from './components/WorkCard.jsx'
import naamaKuva from './assets/apenaama.png'
import CV from './assets/apecv2.pdf'
import StudyCard from './components/StudyCard.jsx'
import ContactCard from './components/contactCard.jsx'

import { courses } from './data/courses.js'
import { workExperience } from './data/work.js'
import { projects } from './data/projects.js'
import { navItems } from './data/navitems.js'


function App() {

  const [activeNav, setActiveNav] = React.useState('default');
  const [secret, setSecret] = useState(false);

  const secretFunction = () => {
    setSecret(true);
  }
  

  return (
    <div className="App">
      {secret === false && (
        <>
        <img src={naamaKuva} alt="Secret Image" style={{ position: 'fixed', top: '1rem', right: '1rem', width: '20px', height: 'auto', cursor: 'pointer' }} onClick={secretFunction} />
        <a href={CV} download style={{ position: 'fixed', top: '1rem', left: '1rem', backgroundColor: '#1a1a1a', color: '#a8a8a8', padding: '0.5rem 1rem', borderRadius: '5px', textDecoration: 'none' }}><i class="bi bi-file-earmark-person-fill"></i></a>
        <Jumbotron />
        <div className="navigation-menu" style={{ marginBottom: '2rem' }}>
        {navItems.map((navItem, index) => (
          <NavBlock key={index} navItem={navItem} onClick={() => setActiveNav(navItem.targetState)}
          onkoAktiivinen={activeNav === navItem.targetState} />
        ))}
        </div>
        <div className="content-section">
          {activeNav !== 'projects' && activeNav !== 'work' && activeNav !== 'contact' && activeNav !== 'about' && activeNav !== 'courses' && (
            <div className="home-section">
              <h2>Click on the navigation items above to explore my portfolio!</h2>
              <p>Here you can find information about me, my projects, work experience, and how to contact me. Feel free to explore and reach out if you have any questions or opportunities!</p>
            </div>
          )}
          {activeNav === 'projects' && (
            <div className="projects-list">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
          {activeNav === 'work' && (
            <div className="work-section">
              {workExperience.map((work, index) => (
                <WorkCard key={index} work={work} />
              ))}
            </div>
          )}

          {activeNav === 'contact' && (
            <>
            <div className="me-section">
              <MeCard />
            </div>
            
            <div className="contact-section">
              <ContactCard />
            </div>
            </>
          )}
          {activeNav === 'courses' && (
            <div className="studies-section">
              {courses.map((course, index) => (
                <StudyCard key={index} course={course} />
              ))}
            </div>
            
          )}
        </div>
        </>
      )}
      {secret === true && (
        <div className="secret-revealed" style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '10px', color: '#ffffff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <p style={{ fontSize: '1.5rem' }}>Congratulations! You've found the secret content!</p>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
            <h3 style={{ cursor: 'pointer', color: 'rgb(18, 171, 210)' }}>Click here</h3>
          </a>
        </div>
      )}
    </div>
  )
}

export default App
