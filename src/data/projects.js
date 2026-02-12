class Project {
  constructor(title, technologies, description, link) {
    this.title = title
    this.technologies = technologies
    this.description = description
    this.link = link
  }
}


export const projects = [
  new Project(
    'Django Backend',
    'Django, REST API, PostgreSQL, Postman, Python',
    'A backend project using Django framework to create RESTful APIs with PostgreSQL database integration.',
    'https://github.com/aapelinilasto47/djangoprojekti'
  ),

  new Project(
    'Discord Bot',
    'Python, Discord.py, APIs',
    'A Discord bot that interacts with users, fetches data from various APIs, and provides useful functionalities within Discord servers.',
    'https://github.com/aapelinilasto47/dcbotti-2.0'
  ),

  new Project(
    'Currency Converter Web App',
    'HTML, CSS, JavaScript, Vue.js, Rest APIs, Bootstrap',
    'A web application that allows users to convert currencies using real-time exchange rates fetched from external APIs.',
    'https://github.com/aapelinilasto47/javascript-project-3'
  ),

  new Project(
    'Personal Portfolio Website',
    'HTML, CSS, JavaScript, React.js, Bootstrap',
    'A personal portfolio website showcasing projects, skills, and experiences, built with React.js for a dynamic user experience.',
    ''
  ),

  new Project(
    'MenuManager Rest API',
    'Node.js, Express.js, MongoDB, REST API',
    'A RESTful API for managing restaurant menus, allowing CRUD operations on menu items and categories using Node.js and MongoDB.',
    'https://github.com/aapelinilasto47/MenuManager'
  )
]