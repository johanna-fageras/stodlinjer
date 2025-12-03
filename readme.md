# Stödlinjer.se

En ideell informationssida som samlar svenska stödlinjer och hjälplinjer på ett ställe.

## Projektstruktur

```
stodlinjer/
├── index.html              # Startsida
├── anhoriga.html           # Sida för anhöriga
├── CNAME                   # Custom domain för GitHub Pages
├── data/
│   └── support-lines.json  # Centraliserad data för alla stödlinjer
├── assets/
│   ├── css/
│   │   ├── base.css        # Grundläggande stilar och typografi
│   │   └── components.css  # Komponentstilar (kort, knappar, etc.)
│   ├── js/
│   │   ├── app.js          # Huvudapplikationslogik
│   │   └── tailwind-config.js  # Tailwind CDN-konfiguration
│   └── imgs/
│       └── og-image-generator.html  # Generator för OG-bild
└── readme.md
```

## Teknisk stack

- **HTML5** med semantisk markup och Schema.org strukturerade data
- **Tailwind CSS** via CDN med anpassad konfiguration
- **Athletics** (premium typsnitt) för modern, varm känsla
- **Font Awesome** för ikoner
- **Vanilla JavaScript** (ES6+) för interaktivitet

## Funktioner

- Sökbar lista med 22+ svenska stödlinjer
- Kategorifiltrering (psykisk hälsa, barn & unga, våld, missbruk, anhöriga, äldre)
- Taggfiltrering för detaljerad sökning
- Ljust/mörkt tema med automatisk systempreferens
- URL-baserad sökning (`?q=sökterm`) för schema.org SearchAction
- Responsiv design för mobil, surfplatta och desktop
- Tillgänglighetsanpassad (skip links, ARIA, semantisk HTML)

## Lägg till/ändra stödlinjer

All data finns i `data/support-lines.json`. Varje stödlinje har följande format:

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

**Kategorier:** `psykiskhalsa`, `barn-unga`, `vald`, `missbruk`, `anhörig`, `aldre`

## Skapa OG-bild (Open Graph)

1. Öppna `assets/imgs/og-image-generator.html` i en webbläsare
2. Använd Chrome DevTools och högerklicka på bildelementet
3. Välj "Capture node screenshot"
4. Spara som `og-image.jpg` i projektets rotmapp (1200×630 px)

## Publicering

Sidan publiceras via GitHub Pages på:
**https://stodlinjer.se**

## Kontakt

- Webb: [stodlinjer.se](https://stodlinjer.se)
- E-post: [info@stodlinjer.se](mailto:info@stodlinjer.se)
- Skapad av Robert Claesson

## Licens

Fritt att använda och anpassa för ideella ändamål.
