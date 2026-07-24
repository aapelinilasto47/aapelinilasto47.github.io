class Course {
  constructor(title, grade, studyPoints, description, year, place) {
    this.title = title;
    this.grade = grade;
    this.studyPoints = studyPoints;
    this.description = description;
    this.year = year;
    this.place = place;
  }
}
let courses = [
  new Course(
    {
      en: "Web Application Development with JavaScript",
      fi: "Web-sovellusten kehittäminen JavaScriptillä",
    },
    "4",
    "5 ECTS",
    {
      en: "A course that focuses on web application development using JavaScript, covering front-end frameworks, back-end development, and database integration. The course includes practical projects to build real-world web applications.",
      fi: "Kurssi, joka keskittyy web-sovellusten kehittämiseen JavaScriptillä, käsittelee front-end-kehitystä, back-end-kehitystä ja tietokannan integraatiota. Kurssilla on käytännön projekteja web-sovellusten rakentamiseen.",
    },
    2025,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Web Development",
      fi: "Web-kehitys",
    },
    "5",
    "5 ECTS",
    {
      en: "A comprehensive course covering the fundamentals of web development, including HTML, CSS, JavaScript, and Bootstrap. The course provided hands-on experience in building responsive and interactive web applications.",
      fi: "Kattava kurssi, joka käsittelee web-kehityksen perusteita, mukaan lukien HTML, CSS, JavaScript ja Bootstrap. Kurssilla sain käytännön kokemusta reaktiivisten ja interaktiivisten web-sovellusten rakentamisesta.",
    },
    2024,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Basics of Python Programming",
      fi: "Python-ohjelmoinnin perusteet",
    },
    "5",
    "5 ECTS",
    {
      en: "An introductory course to Python programming language, covering basic syntax, data structures, and programming concepts. The course included practical exercises and projects to reinforce learning.",
      fi: "Johdantokurssi Python-kieleen, joka käsittelee perussyntaksia, tietorakenteita ja ohjelmointikäsitteitä. Kurssilla oli käytännön harjoituksia ja projekteja oppimisen vahvistamiseksi.",
    },
    2024,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Databases",
      fi: "Tietokannat",
    },
    "5",
    "5 ECTS",
    {
      en: "A course focused on database design, management, and querying using SQL. The course covered relational databases, normalization, and practical applications of database systems.",
      fi: "Kurssi, joka keskittyi tietokannan suunnitteluun, hallintaan ja kyselyihin SQL:llä. Kurssilla käsiteltiin relaatiotietokantoja, normalisointia ja tietokantasysteemien käytännön sovelluksia.",
    },
    2024,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Devops Fundamentals",
      fi: "DevOpsin perusteet",
    },
    "Pass",
    "3 ECTS",
    {
      en: "An introductory course to DevOps principles and practices, including continuous integration, continuous deployment, and infrastructure as code.",
      fi: "Johdantokurssi DevOps-periaatteisiin ja käytäntöihin, mukaan lukien jatkuva integrointi, jatkuva käyttöönotto ja infrastruktuuri koodina.",
    },
    2024,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "ICT Work Environment",
      fi: "ICT-työympäristö",
    },
    "4",
    "5 ECTS",
    {
      en: "A course that explores the dynamics of ICT work environments, including team collaboration, project management, and communication skills essential for success in the technology industry.",
      fi: "Kurssi, joka tarkastelee ICT-työympäristöjen dynamiikkaa, mukaan lukien tiimityö, projektinhallinta ja viestintätaidot, jotka ovat keskeisiä menestymisen edellytyksiä teknologia-alalla.",
    },
    2024,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Service Design",
      fi: "Palvelumuotoilu",
    },
    "5",
    "5 ECTS",
    {
      en: "A course that delves into the principles and methodologies of service design, focusing on creating user-centered services that meet customer needs and enhance user experience.",
      fi: "Kurssi, joka syventää palvelumuotoilun periaatteisiin ja menetelmiin, keskittyen käyttäjäkeskeisiin palveluihin, jotka täyttävät asiakaskäyttäjien tarpeet ja parantavat käyttökokemusta.",
    },
    2025,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Data Networks and Security",
      fi: "Tietoverkot ja tietoturva",
    },
    "5",
    "5 ECTS",
    {
      en: "A course that covers the fundamentals of data networks, network protocols, and cybersecurity principles. The course includes practical exercises on securing networks and protecting data.",
      fi: "Kurssi, joka käsittelee tietoverkkojen perusteita, verkkoprotokollia ja tietoturvallisuuden periaatteita. Kurssilla on käytännön harjoituksia verkkojen suojaamiseen ja tietojen suojeluun.",
    },
    2024,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Project Management",
      fi: "Projektinhallinta",
    },
    "5",
    "5 ECTS",
    {
      en: "A course that provides an overview of project management methodologies, tools, and techniques. The course covers project planning, execution, monitoring, and closure, with a focus on delivering successful projects.",
      fi: "Kurssi, joka tarjoaa yleiskuvan projektinhallinnan menetelmistä, työkaluista ja teknikoiden. Kurssilla käsitellään projektisuunnittelua, toteutusta, seurantaa ja sulkemista, keskittyen menestyvien projektien toimittamiseen.",
    },
    2024,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Modelling a Digital Service",
      fi: "Digitaalisen palvelun mallintaminen",
    },
    "4",
    "5 ECTS",
    {
      en: "A course that explores the process of modeling digital services, including service blueprinting, user journey mapping, and prototyping. The course emphasizes the importance of user-centered design in creating effective digital services.",
      fi: "Kurssi, joka tarkastelee digitaalisten palveluiden mallintamista, mukaan lukien palvelun suunnittelu, käyttäjämatkan karttaus ja prototyypitys. Kurssilla korostetaan käyttäjäkeskeisen suunnittelun tärkeyttä tehokkaiden digitaalisten palveluiden luomisessa.",
    },
    2025,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Leadership and leading teams",
      fi: "Johtaminen ja johtajuus",
    },
    "5",
    "5 ECTS",
    {
      en: "A course that focuses on leadership principles and practices, including team management, motivation, and communication skills essential for leading successful teams in the technology industry.",
      fi: "Kurssi, joka keskittyy johtamisen periaatteisiin ja käytäntöihin, mukaan lukien tiimien hallinta, motivaatio ja viestintätaidot, jotka ovat välttämättömiä menestyvien tiimien johtamiseen teknologia-alalla.",
    },
    2025,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Fundamentals of Software Testing",
      fi: "Ohjelmistotestauksen perusteet",
    },
    "5",
    "5 ECTS",
    {
      en: "A course that covers the fundamentals of software testing, including testing methodologies, test case design, and test automation. The course emphasizes the importance of quality assurance in software development.",
      fi: "Kurssi, joka käsittelee ohjelmistotestauksen perusteita, mukaan lukien testausmenetelmät, testikäsikirjoitus ja testausautomaatio. Kurssilla korostetaan laadunvarmistuksen tärkeyttä ohjelmistokehityksessä.",
    },
    2025,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Designing a Digital Service to a Customer",
      fi: "Digitaalisen palvelun suunnittelu asiakkaalle",
    },
    "5",
    "5 ECTS",
    {
      en: "A course that focuses on designing digital services tailored to customer needs, incorporating user feedback, usability testing, and iterative design processes to create effective and user-friendly digital solutions.",
      fi: "Kurssi, joka keskittyy digitaalisten palveluiden suunnitteluun asiakkaalle, mukaan lukien käyttäjäpalaute, käytettävyystestaus ja iteratiiviset suunnitteluprosessit luodakseen tehokkaita ja käyttäjäystävällisiä digitaalisia ratkaisuja.",
    },
    2025,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Professional Communication in English",
      fi: "Ammatillinen viestintä englanniksi",
    },
    "5",
    "5 ECTS",
    {
      en: "A course that enhances professional communication skills in English, covering business writing, presentation skills, and effective communication strategies for the technology industry.",
      fi: "Kurssi, joka parantaa ammatillisia viestintätaitoja englanniksi, käsittelemällä liiketoimintaa, kirjoitustaitoa, esitysosaamista ja tehokkaita viestintästrategioita teknologia-alalla.",
    },
    2024,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Fundamentals of Marketing",
      fi: "Markkinoinnin perusteet",
    },
    "4",
    "10 ECTS",
    {
      en: "A course that introduces the fundamentals of marketing, including market research, consumer behavior, and marketing strategies. The course provides insights into how to effectively promote products and services in the digital age.",
      fi: "Kurssi, joka tutustuttaa markkinoinnin perusteisiin, mukaan lukien markkinointitutkimus, kuluttajakäyttäytyminen ja markkinointistrategiat. Kurssi tarjoaa näkemyksiä siitä, miten tuotteita ja palveluita voidaan tehokkaasti edistää digitaalisessa ympäristössä.",
    },
    2024,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Digital Marketing and Sales",
      fi: "Digitaalinen markkinointi ja myynti",
    },
    "4",
    "10 ECTS",
    {
      en: "A course that explores digital marketing strategies and sales techniques, including social media marketing, search engine optimization, and e-commerce. The course provides practical skills for promoting products and services online.",
      fi: "Kurssi, joka tarkastelee digitaalista markkinointia ja myyntitekniikoita, mukaan lukien sosiaalisen median markkinointi, hakukoneoptimointi ja e-commerce. Kurssi tarjoaa käytännöllisiä taitoja tuotteiden ja palveluiden edistämiseen verkkopalveluissa.",
    },
    2025,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Corporate Social Responsibility",
      fi: "Yrityksen sosiaalinen vastuu",
    },
    "4",
    "5 ECTS",
    {
      en: "A course that examines the principles and practices of corporate social responsibility (CSR), including ethical business practices, sustainability, and social impact. The course emphasizes the importance of CSR in the technology industry.",
      fi: "Kurssi, joka tarkastelee yrityksen sosiaalista vastuuta (CSR), mukaan lukien eettiset liiketoimintatavat, kestävä kehitys ja sosiaalinen vaikutus. Kurssi korostaa CSR:n tärkeyttä teknologia-alalla.",
    },
    2025,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Business Intelligence",
      fi: "Liiketoimintaosaaminen",
    },
    "3",
    "5 ECTS",
    {
      en: "A course that covers the principles and practices of business intelligence, including data analysis, data visualization, and decision-making based on data insights. The course emphasizes the importance of data-driven decision-making in the technology industry.",
      fi: "Kurssi, joka käsittelee liiketoimintaosaamisen periaatteita ja käytäntöjä, mukaan lukien tietoanalyysi, tietojen visualisointi ja päätöksenteko tieto-ihmettien perusteella. Kurssi korostaa tietopohjaisten päätösten tärkeyttä teknologia-alalla.",
    },
    2024,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Data-Driven Decision Making",
      fi: "Tietopohjainen päätöksenteko",
    },
    "4",
    "5 ECTS",
    {
      en: "A course that focuses on making informed decisions based on data analysis, including statistical methods, data visualization, and interpreting data insights to drive business strategies and outcomes.",
      fi: "Kurssi, joka keskittyy tietoanalyysin perusteella tehtävään informoiden päätösten tekoon, mukaan lukien tilastolliset menetelmät, tietojen visualisointi ja tieto-ihmettien tulkkaus liiketoimintastrategioiden ja tulosten ohjaamiseksi.",
    },
    2025,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Swedish for BBA Students",
      fi: "Ruotsin kieli liiketoiminnan opiskelijoille",
    },
    "3",
    "5 ECTS",
    {
      en: "A course that provides basic Swedish language skills for business administration students, covering essential vocabulary, grammar, and conversational skills to facilitate communication in Swedish-speaking business environments.",
      fi: "Kurssi, joka tarjoaa perusruotsin kielen taitoja liiketoiminnan opiskelijoille, käsittelemällä välttämättömiä sanoja, kielioppia ja keskustelutaitoja helpottaakseen viestintää ruotsinkielisissä liiketoimintaympäristöissä.",
    },
    2024,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Elements of AI",
      fi: "Tekoälyn perusteet",
    },
    "Pass",
    "2 ECTS",
    {
      en: "An introductory course to the elements of artificial intelligence, covering basic concepts, applications, and ethical considerations of AI technology.",
      fi: "Johdantokurssi tekoälyn perusteisiin, käsittelemällä peruskäsitteitä, sovelluksia ja tekoälyn eettisiä kysymyksiä.",
    },
    2025,
    "University of Helsinki",
  ),
  new Course(
    {
      en: "Basics of C++ Programming",
      fi: "C++-ohjelmoinnin perusteet",
    },
    "Pass",
    "3 ECTS",
    {
      en: "An introductory course to C++ programming language, covering basic syntax, data structures, and programming concepts. The course included practical exercises and projects to reinforce learning.",
      fi: "Johdantokurssi C++-ohjelmointikielestä, käsittelemällä perus syntaksia, tietorakenteita ja ohjelmointikäsitteitä. Kurssissa oli käytössä käytännön harjoituksia ja projekteja oppimisen vahvistamiseksi.",
    },
    2025,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Introduction to Linux Operating System",
      fi: "Linux-käyttöjärjestelmän johdanto",
    },
    "3",
    "5 ECTS",
    {
      en: "A course that introduces the Linux operating system, covering basic commands, file management, and system administration tasks. The course provides hands-on experience with Linux environments.",
      fi: "Kurssi, joka esittelee Linux-käyttöjärjestelmän, käsittelee perus komentoja, tiedostojen hallintaa ja järjestelmän ylläpitoa. Kurssi tarjoaa käytännön kokemusta Linux-ympäristöissä.",
    },
    2025,
    "Laurea University of Applied Sciences",
  ),
  new Course(
    {
      en: "Object-Oriented Programming with Python",
      fi: "Oliopohjainen ohjelmointi Python-kielellä",
    },
    "4",
    "5 ECTS",
    {
      en: "A course that focuses on object-oriented programming principles using Python, including classes, inheritance, and polymorphism. The course includes practical exercises and projects to reinforce learning.",
      fi: "Kurssi, joka keskittyy oliopohjaiseen ohjelmointiin Python-kielellä, käsittelemällä luokkia, perimää ja monimuotoisuutta. Kurssissa on mukana käytännön harjoituksia ja projekteja oppimisen vahvistamiseksi.",
    },
    2026,
    "Laurea University of Applied Sciences",
  ),

  new Course(
    {
      en: "Software Design Process",
      fi: "Ohjelmistojen suunnitteluprosessi",
    },
    "5",
    "5 ECTS",
    {
      en: "A course that explores the software design process, including requirements analysis, architectural design, and design patterns. The course emphasizes the importance of effective software design in creating maintainable and scalable applications.",
      fi: "Kurssi, joka tutkii ohjelmistojen suunnitteluprosessia, mukaan lukien vaatimusten analyysi, arkkitehtuurinen suunnittelu ja suunnittelumallit. Kurssissa korostetaan tehokkaan ohjelmistosuunnittelun merkitystä huolimattomien ja skaalautuvien sovellusten luomisessa.",
    },
    2026,
    "Laurea University of Applied Sciences",
  ),

  new Course(
    {
      en: "Robotic Process Automation",
      fi: "Ohjelmistorobotiikka ja prosessiautomaatio",
    },
    "5",
    "5 ECTS",
    {
      en: "A course that introduces the concepts and applications of robotic process automation (RPA), including process automation, bot development, and implementation strategies. The course provides hands-on experience with Power Automate and Robocorp. During this course, we created a bot that automates my work tasks using Playwright and Robocorp, such as scheduling social media posts and navigating through different applications to complete tasks.",
      fi: "Kurssi, joka esittelee robottiprosessin automaation käsitteet ja sovellukset, mukaan lukien prosessiautomaatio, botti-kehitys ja toteutusstrategiat. Kurssissa annetaan käytännön kokemusta Power Automate ja Robocorp -työkalujen käytöstä. Tämän kurssin aikana loimme bordin, joka automatisoi työtehtäviäni käyttäen Playwrightia ja Robocorpuksen, kuten sosiaalisen median julkaisujen suunnittelua ja eri sovellusten välillä navigointia tehtävien suorittamiseksi.",
    },
    2026,
    "Laurea University of Applied Sciences",
  ),

  new Course(
    {
      en: "Introduction to Information Security",
      fi: "Tietoturvan perusteet",
    },
    "4",
    "5 ECTS",
    {
      en: "A course that provides an introduction to information security principles and practices, including risk management, threat analysis, and security controls. The course emphasizes the importance of protecting information assets in the digital age. We completed many Capture the Flag (CTF) exercises during this course, which provided practical experience in identifying and mitigating security vulnerabilities.",
      fi: "Kurssi, joka tarjoaa johdannon tietoturvallisuuden periaatteisiin ja käytäntöihin, mukaan lukien riskienhallinta, uhkien analyysi ja turvallisuuden kontrollit. Kurssissa korostetaan tieto- ja tietoturvallisuuden merkitystä digitaalisessa iässä. Tämän kurssin aikana suoritimme monia Capture the Flag (CTF) harjoituksia, jotka tarjosi käytännön kokemusta tietoturvallisuusuhkien tunnistamisessa ja niiden lievittämisessä.",
    },
    2026,
    "Laurea University of Applied Sciences",
  ),
];

courses = courses.sort((a, b) => b.year - a.year);

export { courses };
