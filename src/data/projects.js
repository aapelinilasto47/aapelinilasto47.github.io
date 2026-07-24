class Project {
  constructor(title, technologies, description, link) {
    this.title = title;
    this.technologies = technologies;
    this.description = description;
    this.link = link;
  }
}

export const projects = [
  new Project(
    "Tournament Prediction Web App",
    "Typescript, React.js, Tailwind CSS, Next.js API Routes, Next.js Server Actions, MongoDB Atlas, Google OAuth 2.0, Playwright, Github Actions, Vercel",
    {
      en: "A web application that allows users to predict the outcomes of tournaments, with user authentication, data storage in MongoDB Atlas, and automated fixture updates using Playwright.",
      fi: "Web-sovellus, joka sallii käyttäjien ennustaa turnausten lopputuloksia, mahdollistaa käyttäjäautentikoinnin, tiedon tallennuksen MongoDB Atlas -tietokantaan ja automaattiset kisatulosten päivitykset Playwrightin avulla.",
    },
    "https://github.com/aapelinilasto47/mm-veikkaus",
  ),

  new Project(
    "Django Backend",
    "Django, REST API, PostgreSQL, Postman, Python",
    {
      en: "A backend project using Django framework to create RESTful APIs with PostgreSQL database integration.",
      fi: "Backend-projekti, jossa käytin Djangoa luodakseni RESTful-APIn PostgreSQL-tietokannan kanssa.",
    },
    "https://github.com/aapelinilasto47/djangoprojekti",
  ),

  new Project(
    "Discord Bot",
    "Python, Discord.py, APIs",
    {
      en: "A Discord bot that interacts with users, fetches data from various APIs, and provides useful functionalities within Discord servers.",
      fi: "Discord-botti, joka keskustelee ja vuorovaikuttaa käyttäjien kanssa, noutaa tietoja eri API:sta ja tarjoaa muita hyödyllisiä ja hauskoja toimintoja Discord-palveluissa.",
    },
    "https://github.com/aapelinilasto47/dcbotti-2.0",
  ),

  new Project(
    "Currency Converter Web App",
    "HTML, CSS, JavaScript, Vue.js, Rest APIs, Bootstrap",
    {
      en: "A web application that allows users to convert currencies using real-time exchange rates fetched from external APIs.",
      fi: "Web-sovellus, joka sallii käyttäjien muuntaa valuuttoja käyttämällä reaaliaikaisia vaihtokursseja, jotka haetaan ulkoisista API:sta.",
    },
    "https://github.com/aapelinilasto47/javascript-project-3",
  ),

  new Project(
    "Personal Portfolio Website",
    "HTML, CSS, JavaScript, React.js, Bootstrap",
    {
      en: "A personal portfolio website showcasing projects, skills, and experiences, built with React.js for a dynamic user experience.",
      fi: "Henkilökohtainen portfolio-verkkosivu, joka esittelee projekteja, taitoja ja kokemuksia, rakennettu React.js:llä dynaamisen käyttäjäkokemuksen tarjoamiseksi.",
    },
    "https://github.com/aapelinilasto47/aapelinilasto47.github.io",
  ),

  new Project(
    "MenuManager Rest API",
    "Node.js, Express.js, MongoDB, REST API",
    {
      en: "A RESTful API for managing restaurant menus, allowing CRUD operations on menu items and categories using Node.js and MongoDB.",
      fi: "RESTful-rajapinta ravintoloiden valikoimien hallintaan, joka mahdollistaa CRUD-toiminnot valikoimissa ja kategorioissa käyttämällä Node.js:ää ja MongoDB:tä.",
    },
    "https://github.com/aapelinilasto47/MenuManager",
  ),
];
