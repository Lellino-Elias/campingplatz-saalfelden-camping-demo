import type { CampsiteConfig } from "../types";

/**
 * Campingplatz Theurerhof — Saalfelden am Steinernen Meer (Pinzgau, Salzburg).
 * Kleiner, exklusiver Campingplatz am Fischteich beim Landgasthof Theurerhof.
 * Inhalte zu 100 % aus raw/digest abgeleitet. Keine Preise in der Quelle
 * ("Preise auf Anfrage") → pricesArePlaceholder mit offenem priceNote.
 */
const IMG = "/campsites/campingplatz-saalfelden";

const campingplatzSaalfelden: CampsiteConfig = {
  name: "Campingplatz Theurerhof",
  shortName: "Theurerhof",
  slug: "campingplatz-saalfelden",
  ort: "Saalfelden am Steinernen Meer",
  region: "Pinzgau",
  brandKind: "Camping am Landgasthof",
  regionLong: "Saalfelden am Steinernen Meer · Pinzgau · Salzburg",

  heroVariant: "center",

  claim: "Kleiner Platz am Fischteich, großes Bergpanorama",
  claimEmphasis: "am Fischteich",
  intro:
    "Ein kleiner, exklusiver Campingplatz am Fischteich beim Landgasthof Theurerhof — eingebettet in eine ruhige Naturlandschaft, das Pinzgauer Bergpanorama vor dem Vorzelt und Saalfelden in nur drei Autominuten.",

  logo: { src: `${IMG}/logo.png`, alt: "Theurerhof Camping Logo" },

  statement: {
    text: "Bei uns stehst du am eigenen Fischteich — und Saalfelden ist nur drei Autominuten weit weg.",
    emphasis: "am eigenen Fischteich",
  },

  pillars: [
    {
      title: "Klein und ruhig gelegen",
      text: "Eingebettet in Wiesen und Wald: ein überschaubarer, ruhiger Platz mit guter Anbindung ans Umland.",
      image: { src: `${IMG}/natur-wiese.webp`, alt: "Der Theurerhof in den Wiesen bei Saalfelden" },
    },
    {
      title: "Berge ringsum",
      text: "Vom Platz und von der Terrasse blickst du mitten in die Pinzgauer Bergwelt rund um Saalfelden am Steinernen Meer.",
      image: { src: `${IMG}/bergblick-terrasse.webp`, alt: "Terrasse mit Blick auf die Pinzgauer Berge" },
    },
    {
      title: "Landgasthof Theurerhof",
      text: "Im Gasthof gibt es regionale Spezialitäten à la carte und eine gemütliche Sonnenterrasse.",
      image: { src: `${IMG}/gasthof-terrasse.webp`, alt: "Sonnenterrasse des Landgasthofs Theurerhof" },
    },
  ],

  usps: [
    "Frei wählbarer Stellplatz",
    "Wasch- & Duschraum gratis",
    "Stromanschluss am Platz",
    "Gratis WLAN",
    "3 Minuten nach Saalfelden",
    "Landgasthof mit Küche",
  ],

  trust: {
    heading: "Klein genug, dass man sich kennt",
    headingEmphasis: "sich kennt",
    intro:
      "Hier zählt nicht die Größe, sondern die Ruhe: ein gepflegter Platz am Fischteich, kostenlose Wasch- und Duschräume und ein Gasthof, in dem du als Gast empfangen wirst und nicht als Nummer.",
  },

  awards: [],

  saison: { von: "Termine", bis: "auf Anfrage" },

  hero: {
    aerial: { src: `${IMG}/hero-fischteich.webp`, alt: "Landgasthof Theurerhof am Fischteich mit den Pinzgauer Bergen" },
  },

  camping: {
    heading: "Dein Platz beim Theurerhof",
    intro:
      "Frei wählbarer Stellplatz mit Strom, kostenlose Wasch- und Duschräume, Geschirrspül- und Entsorgungsstelle, Waschmaschine und Trockner sowie gratis WLAN — alles, was dein Campingtag braucht.",
    features: [
      {
        title: "Direkt am Fischteich",
        text: "Der Platz liegt direkt am hauseigenen Fischteich — Bergblick inklusive.",
        image: { src: `${IMG}/fischteich-steg.webp`, alt: "Fischteich mit Holzsteg am Landgasthof Theurerhof" },
      },
      {
        title: "Mitten am Hof",
        text: "Nur wenige Schritte trennen deinen Platz vom Landgasthof — morgens zum Frühstück, abends auf die Terrasse, ganz ohne Anfahrt.",
        image: { src: `${IMG}/hof-terrasse.webp`, alt: "Eingang und Außenbereich des Landgasthofs Theurerhof" },
      },
    ],
  },

  anreise: {
    heading: "So kommst du zum Theurerhof",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A10 Tauern Autobahn und die B311 nach Saalfelden — der Theurerhof liegt rund drei Autominuten außerhalb des Zentrums in Ramseiden.",
      },
      {
        title: "Mit der Bahn",
        text: "Der Bahnhof Saalfelden liegt wenige Minuten entfernt und ist von Salzburg wie von Innsbruck aus direkt erreichbar.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Salzburg ist rund eine Stunde, der Flughafen München gut zwei Stunden entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Theurerhof",
    headingEmphasis: "",
    intro: "Ein paar Aufnahmen vom Platz am Fischteich und vom Landgasthof.",
    tag: "Saalfelden am Steinernen Meer",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Fischteich",
    headingEmphasis: "am Fischteich",
    intro:
      "Wähle Zeitraum und Personenzahl — Familie Heugenhauser meldet sich persönlich mit deiner Verfügbarkeit und dem aktuellen Preis.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen). Stellplatz inkl. 2 Personen · zzgl. Ortstaxe.",
    highlight: {
      title: "Preise auf Anfrage",
      text: "Familie Heugenhauser nennt dir gerne den fairen Preis für deinen Aufenthalt.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 34, perExtraGuest: 8 },
      { id: "zelt", label: "Zeltplatz", perNight: 26, perExtraGuest: 8 },
    ],
  },

  kontakt: {
    coords: { lat: 47.417513, lng: 12.877458 },
    tel: "+43 664 540 1930",
    telHref: "tel:+436645401930",
    mail: "info@campingplatz-saalfelden.at",
    adresse: "Ödt 26 · 5760 Saalfelden am Steinernen Meer",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Lage & Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking" },
  ],
};

export default campingplatzSaalfelden;
