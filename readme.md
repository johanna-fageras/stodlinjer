# 🆘 Stödlinjer.se

En ideell informationssida som samlar svenska stödlinjer och hjälplinjer på ett ställe — för dig som behöver hjälp, eller för dig som vill hjälpa någon annan.

🌐 **Webbplats:** [stodlinjer.se](https://stodlinjer.se)

---

## 💡 Om projektet

Ibland känns livet övermäktigt. Det kan handla om ångest, depression, ensamhet, våld, missbruk eller oro för någon annan. Stödlinjer.se samlar Sveriges viktigaste stödlinjer på ett ställe — så att du snabbt kan hitta rätt nummer att ringa eller chatt att skriva till. Alla stödlinjer som listas är seriösa aktörer som erbjuder anonymt, kostnadsfritt stöd.

Byggt med **Eleventy (11ty)** och Nunjucks-mallar, med data i JSON-filer under `src/_data/`.

---

## ✨ Funktioner

- 🔍 **Sökbar lista** med 21+ svenska stödlinjer
- 🏷️ **Kategorifiltrering** — psykisk hälsa, barn & unga, våld, missbruk, äldre
- #️⃣ **Taggfiltrering** för detaljerad sökning
- 🌓 **Ljust/mörkt tema** med automatisk systempreferens
- 🔗 **URL-baserad sökning** (`?q=sökterm`) för delning och schema.org SearchAction
- 📱 **Responsiv design** för mobil, surfplatta och desktop
- ♿ **Tillgänglighetsanpassad** — skip links, ARIA-attribut, semantisk HTML
- 💬 **Motiverande citat** som slumpas vid varje sidladdning

---

## 📦 Installation & scripts

Kräver Node 18+.

```bash
npm install
```

Lokalt utvecklingsläge med live-reload:

```bash
npm run serve
```

Bygg statisk sajt (till `site/`, konfigurerat för GitHub Pages):

```bash
npm run build
```

---

## 📁 Projektstruktur (Eleventy)

```
src/
├── index.njk               # Startsida (sök + grid)
├── kontakt.njk             # Kontaktformulär
├── _data/
│   ├── support-lines.json  # Alla stödlinjer
│   └── quotes.json         # Motiverande citat
├── _includes/
│   ├── layouts/base.njk
│   └── partials/           # Header, footer, sektioner m.m.
└── assets/
    ├── css/                # base.css, main.css (+ komponent-partials)
    ├── js/                 # app.js, tailwind-config.js
    └── fonts/              # Ikon- och typsnitts-filer
```

Output: `site/` (Eleventy skriver färdiga HTML-filer och kopierar assets).

---

## ➕ Lägg till eller ändra stödlinjer

All data finns i `src/_data/support-lines.json`. Varje stödlinje följer detta format:

```json
{
  "id": 1,
  "name": "Namn på stödlinjen",
  "url": "https://exempel.se/",
  "number": "020-12 34 56",
  "description": "Kort beskrivning av vem linjen hjälper.",
  "category": "psykiskhalsa",
  "available": "Dygnet runt, alla dagar",
  "urgent": true,
  "tags": ["akut", "samtal", "anonymt"]
}
```

### Tillgängliga kategorier

| Kategori               | Värde          |
| ---------------------- | -------------- |
| 🧠 Psykisk hälsa       | `psykiskhalsa` |
| 👶 Barn & unga         | `barn-unga`    |
| 🛡️ Våld & utsatthet    | `vald`         |
| 🍷 Missbruk & beroende | `missbruk`     |
| 🧓 Äldre               | `aldre`        |

### Tillgängliga taggar

`akut`, `psykiskhalsa`, `suicid`, `samtal`, `chatt`, `anonymt`, `valdbrott`, `sorgtrauma`, `anhorig`, `missbruk`, `barn-unga`, `killarman`, `hbtqi`, `stodgrupp`

### Lägg till citat

`src/_data/quotes.json` innehåller citatobjekt:

```json
{
  "text": "Det kommer en dag till.",
  "author": "Okänd"
}
```

---

## 🎨 Design

Webbplatsen använder ett varmt, lugnt färgschema med fokus på tillgänglighet och läsbarhet:

- **Ljust tema:** Krämvit bakgrund med varma accenter
- **Mörkt tema:** Djupgrå/svart bakgrund med mjukare accenter
- **Accentfärg:** Varm orange/terrakotta (`#d97757`)
- **Typografi:** Athletics (sans-serif) med optimerade vikter och radavstånd

---

## 🚀 Publicering

Konfigurerad för **GitHub Pages** genom att bygga till `site/`. Kör `npm run build` och pusha — Pages serverar innehållet direkt från `site/`.

---

## 📧 Kontakt

- 🌐 **Webb:** [stodlinjer.se](https://stodlinjer.se)
- 📬 **E-post:** [info@stodlinjer.se](mailto:info@stodlinjer.se)
- 👤 **Skapad av:** [Robert Claesson](https://github.com/YouTubeRobski87)

---

## 📄 Licens

Fritt att använda och anpassa för ideella ändamål. 💚

---

> _"Du är inte ensam. Hjälp finns."_
