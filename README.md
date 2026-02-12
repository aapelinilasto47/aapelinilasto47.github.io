# Aapeli Nilasto - Full-Stack Kehittäjän Portfolio

✨ **[Tässä linkki julkaistuun sovellukseen](https://aapelinilasto47.github.io/)**

Tämä on moderni, React-pohjainen portfolio-sivusto, jonka tavoitteena on esitellä ohjelmointiosaamistani, opintohistoriaani ja projektejani. Sivusto on rakennettu alusta alkaen korostaen responsiivisuutta, komponenttien uudelleenkäytettävyyttä ja selkeää käyttöliittymäsuunnittelua.

## 🛠️ Tekninen pino (Tech Stack)

- **Frontend:** React 18 (Vite)
- **Tyylittely:** Custom CSS3 (Flexbox & Grid), Bootstrap Icons
- **Deployment:** GitHub Pages
- **Versiohallinta:** Git

## 🌟 Keskeiset ominaisuudet

- **Dynaaminen datan hallinta:** Kurssitiedot on erotettu omaksi JavaScript-moduulikseen, mikä mahdollistaa helpon päivitettävyyden ilman muutoksia UI-logiikkaan.
- **Interaktiiviset komponentit:** Itse toteutetut laajennettavat projektikortit (Accordion-tyyli) hyödyntävät Reactin `useState`-hookia.
- **Responsiivinen Design:** Sivusto hyödyntää Mobile-First -lähestymistapaa ja CSS:n `clamp()`-funktioita, jotta typografia on luettavaa kaikilla näytöillä.
- **Saavutettavuus:** Huomioitu värikontrastit (Dark Theme + Green accents) ja semanttinen HTML.

## 📂 Projektin rakenne

```bash
├── public/              # tarvittavat julkiset tiedostot
├── src/
│   ├── assets/          # Kuvat yms.
│   ├── components/      # Uudelleenkäytettävät UI-komponentit
│   ├── data/            # Sovelluksen data (kurssit, projektit)
│   ├── App.jsx          # Pääkomponentti ja reititys
│   ├── index.css        # Globaalit tyylit ja CSS-muuttujat
│   └── App.css          # Komponenttikohtaiset tyylit
```

## 📈 Oppimistavoitteet

Tämä projekti toimi harjoituksena seuraavissa asioissa:

React State Management: Tilan hallinta ja propseilla välittäminen.

CSS-arkkitehtuuri: Modernit layout-tekniikat ilman raskaita kirjastoja.

Clean Code: Koodin refaktorointi selkeisiin moduuleihin luettavuuden parantamiseksi.


## 🚀 Kehitysympäristön pystytys (Kehittäjille)

Jos haluat tutkia koodia paikallisesti:

Kloonaa repositorio: git clone https://github.com/aapelinilasto47/eka-react-projekti

Asenna riippuvuudet: npm install

Käynnistä kehityspalvelin: npm run dev

Buildaa tuotantoversio: npm run build


