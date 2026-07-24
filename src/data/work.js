class WorkExperience {
  constructor(position, company, duration, description) {
    this.position = position;
    this.company = company;
    this.duration = duration;
    this.description = description;
  }
}

export const workExperience = [
  new WorkExperience(
    {
      en: "Digital Marketing Assistant",
      fi: "Digitaalisen markkinoinnin avustaja",
    },
    "Pinja's Photography",
    "August 2023 - April 2026",
    {
      en: "Working from home, I schedule social media posts, create content, and offer additional help with various tasks as needed to support Pinja in promoting her photography business online. I have also developed useful scripts to automate repetitive tasks, improving efficiency and productivity.",
      fi: "Työskentelin kotona, suunnittelin sosiaalisen median julkaisuja, loin sisältöä ja tarjosin lisäapua eri tehtävissä tarvittaessa. Olen myös kehittänyt hyödyllisiä skriptejä automatisoidakseen toistuvia tehtäviä, parantaen tehokkuutta ja tuottavuutta.",
    },
  ),

  new WorkExperience(
    {
      en: "Salesperson",
      fi: "Myyjä",
    },
    "Tokmanni Kerava",
    "May 2026 - August 2026, May 2025 - August 2025, May 2024 - August 2024",
    {
      en: "Assisted customers with their purchases at the register, managed inventory, and maintained store cleanliness during the busy summer months. I was also recognized as Customer Service Worker of the Month for my dedication to providing excellent service.",
      fi: "Palvelin asiakkaita kassalla ja osastolla, hallinnoin varastoa ja ylläpidin kaupan siisteyttä kiireisillä kesäkuukausilla. Sain myös tunnustusta kuukauden asiakaspalvelijana erinomaisen palvelun tarjoamisesta.",
    },
  ),

  new WorkExperience(
    {
      en: "Civil Service Worker",
      fi: "Siviilipalvelushenkilö",
    },
    "Pekka Halosen Akatemia, Tuusula",
    "March 2023 - December 2023",
    {
      en: "Worked as a civil service worker at Pekka Halosen Akatemia, assisting students and staff with various tasks and contributing to the smooth operation of the academy. I gained valuable experience in solving IT-related issues and providing technical support.",
      fi: "Työskentelin siviilipalvelushenkilönä Pekka Halosen Akatemiassa, auttamassa opiskelijoita ja henkilökuntaa eri tehtävissä ja osallistumassa akatemian sujuvaan toimintaan. Sain arvokasta kokemusta IT-aiheisien ongelmien ratkaisemisessa ja teknisen tuen tarjoamisessa.",
    },
  ),

  new WorkExperience(
    {
      en: "Grocery Order Picker",
      fi: "Verkkokauppakeräilijä",
    },
    "Joblink Oy, Vantaa",
    "August 2022 - January 2023",
    {
      en: "Picked and packed grocery orders for customers, ensuring accuracy and quality in a timely manner. I developed strong organizational skills and attention to detail while working in a fast-paced environment.",
      fi: "Keräsin ja pakkasin verkkokauppa-tilauksia asiakkaille, samalla varmistaen tarkkuuden ja laadun. Kehitin vahvoja organisointitaitoja ja tarkkuutta työskennellessäni nopeatahtisessa ympäristössä.",
    },
  ),

  new WorkExperience(
    {
      en: "Summer Worker",
      fi: "Kesätyöntekijä",
    },
    "Rusta Kerava",
    "June 2022 - August 2022",
    {
      en: "Assisted customers, managed inventory, and maintained store cleanliness during the summer season. I learned valuable customer service skills and gained experience working in a retail environment.",
      fi: "Autoin asiakkaita, hallinnoin varastoa ja ylläpidin kaupan siisteyttä kesäkaudella. Opin arvokkaita asiakaspalvelutaitoja ja hankin kokemusta myyntiympäristössä työskennellessä.",
    },
  ),
];
