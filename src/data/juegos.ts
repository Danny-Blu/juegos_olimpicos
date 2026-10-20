import halterofilia from "@/assets/stickers/halterofilia.png";
import tiro from "@/assets/stickers/tiro-con-arco.png";
import atletismo from "@/assets/stickers/atletismo.png";
import natacion from "@/assets/stickers/natacion.png";
import voleibol from "@/assets/stickers/voleibol.png";
import ciclismo from "@/assets/stickers/ciclismo.png";
import futbol from "@/assets/stickers/futbol.png";
import ritmica from "@/assets/stickers/gimnasia-ritmica.png";
import gimnasia from "@/assets/stickers/gimnasia.png";
import jabalina from "@/assets/stickers/jabalina.png";

export type MascotSlug = "jucumari" | "paraba-roja" | "gato-andino";
export type Scoring = "kg" | "puntos" | "tiempo" | "distancia" | "sets" | "goles";

export interface Mascot {
  slug: MascotSlug;
  name: string;
  value: string;
  tone: "night" | "paraba" | "andino";
  pic: string;
  concept: string;
  traits: string[];
  habitat: string;
  sport: string;
}

export interface Sport {
  slug: string;
  num: number;
  name: string;
  mascot: MascotSlug;
  pic: string;
  tagline: string;
  what: string;
  how: string;
  rules: string[];
  modalities: string[];
  scoring: Scoring;
  scoringText: string;
}

export const mascots: Mascot[] = [
  {
    slug: "jucumari",
    name: "Jucumari",
    value: "Fuerza",
    tone: "night",
    pic: halterofilia,
    concept:
      "El oso andino de anteojos es el guardián de los bosques nublados. Representa la fuerza serena: la que no necesita gritar para sostener el peso de una montaña.",
    traits: ["Constancia", "Potencia", "Nobleza", "Resistencia"],
    habitat:
      "Yungas y bosques de neblina de La Paz, Cochabamba y Santa Cruz, entre los 1.000 y 4.000 m s. n. m.",
    sport:
      "Lidera las disciplinas donde el cuerpo empuja, levanta y lanza: halterofilia, natación, fútbol y jabalina.",
  },
  {
    slug: "paraba-roja",
    name: "Paraba roja",
    value: "Libertad",
    tone: "paraba",
    pic: tiro,
    concept:
      "La paraba roja cruza el cielo amazónico como una llamarada. Es libertad, precisión y color: la elegancia de quien domina el aire.",
    traits: ["Precisión", "Expresión", "Visión", "Ritmo"],
    habitat:
      "Llanos de Moxos y bosques amazónicos del Beni y Pando, anidando en palmeras y acantilados de arcilla.",
    sport:
      "Vuela en las disciplinas de técnica y gracia: tiro con arco, voleibol y gimnasia rítmica.",
  },
  {
    slug: "gato-andino",
    name: "Gato andino",
    value: "Agilidad",
    tone: "andino",
    pic: atletismo,
    concept:
      "Uno de los felinos más raros del planeta. Silencioso, veloz y exacto, se mueve entre rocas a más de 4.000 metros como si el vértigo no existiera.",
    traits: ["Velocidad", "Equilibrio", "Instinto", "Reflejos"],
    habitat:
      "Altiplano y cordilleras de Potosí, Oruro y La Paz, entre roquedales y pajonales de altura.",
    sport: "Corre, pedalea y gira en atletismo, ciclismo y gimnasia artística.",
  },
];

export const sports: Sport[] = [
  {
    slug: "halterofilia", num: 1, name: "Halterofilia", mascot: "jucumari", pic: halterofilia,
    tagline: "La fuerza de nuestra tierra.",
    what: "Deporte olímpico en el que el atleta levanta la mayor cantidad de peso posible en una barra, en dos movimientos técnicos.",
    how: "Cada competidor dispone de tres intentos en arranque y tres en envión. Se suma el mejor de cada uno.",
    rules: ["La barra debe quedar inmóvil sobre la cabeza", "Tres jueces validan cada intento", "Prohibido tocar la plataforma con rodillas"],
    modalities: ["Arranque", "Envión", "Total olímpico"],
    scoring: "kg", scoringText: "Total en kilogramos (mejor arranque + mejor envión).",
  },
  {
    slug: "tiro-con-arco", num: 2, name: "Tiro con arco", mascot: "paraba-roja", pic: tiro,
    tagline: "Respirar. Apuntar. Volar.",
    what: "Disciplina de precisión en la que se disparan flechas hacia una diana de diez anillos a 70 metros.",
    how: "Ronda de clasificación de 72 flechas y eliminación directa por sets.",
    rules: ["Diana de 122 cm a 70 m", "Tiempo límite por flecha", "El centro vale 10 puntos"],
    modalities: ["Recurvo individual", "Recurvo por equipos", "Mixto"],
    scoring: "puntos", scoringText: "Suma de puntos por flecha (máximo 10 por disparo).",
  },
  {
    slug: "atletismo", num: 3, name: "Atletismo", mascot: "gato-andino", pic: atletismo,
    tagline: "No hay límites.",
    what: "El deporte madre: carreras, saltos y lanzamientos que miden velocidad, resistencia y potencia.",
    how: "Series clasificatorias y final. Gana quien cruza primero la meta.",
    rules: ["Una salida falsa descalifica", "Cronometraje electrónico al centésimo", "Viento máximo de 2,0 m/s para récords"],
    modalities: ["100 m", "400 m", "1.500 m", "Salto largo"],
    scoring: "tiempo", scoringText: "Tiempo en segundos; menor tiempo gana.",
  },
  {
    slug: "natacion", num: 4, name: "Natación", mascot: "jucumari", pic: natacion,
    tagline: "Fuerza que fluye.",
    what: "Pruebas en piscina olímpica de 50 metros en cuatro estilos.",
    how: "Eliminatorias por tiempo y final con los ocho mejores.",
    rules: ["Toque con ambas manos en pecho y mariposa", "Máximo 15 m bajo el agua", "Salida desde poyete"],
    modalities: ["100 m libre", "200 m espalda", "100 m mariposa"],
    scoring: "tiempo", scoringText: "Tiempo en segundos; menor tiempo gana.",
  },
  {
    slug: "voleibol", num: 5, name: "Voleibol", mascot: "paraba-roja", pic: voleibol,
    tagline: "Volar más alto que la red.",
    what: "Dos equipos de seis jugadores buscan que el balón toque el suelo rival.",
    how: "Partidos al mejor de cinco sets de 25 puntos.",
    rules: ["Máximo tres toques por equipo", "Rotación obligatoria", "Quinto set a 15 puntos"],
    modalities: ["Sala femenino", "Sala masculino"],
    scoring: "sets", scoringText: "Sets ganados (al mejor de cinco).",
  },
  {
    slug: "ciclismo", num: 6, name: "Ciclismo", mascot: "gato-andino", pic: ciclismo,
    tagline: "La altura es nuestra ventaja.",
    what: "Carreras de ruta y contrarreloj sobre los caminos de altura de Bolivia.",
    how: "Salida en grupo o individual contra el reloj.",
    rules: ["Casco obligatorio", "Prohibido el rebufo en contrarreloj", "Control de bicicletas previo"],
    modalities: ["Ruta", "Contrarreloj individual"],
    scoring: "tiempo", scoringText: "Tiempo total de recorrido.",
  },
  {
    slug: "futbol", num: 7, name: "Fútbol", mascot: "jucumari", pic: futbol,
    tagline: "Una pasión que no se negocia.",
    what: "El deporte más popular del país: once contra once en busca del gol.",
    how: "Fase de grupos y eliminación directa. 90 minutos más alargue y penales.",
    rules: ["Tres puntos por victoria", "Cinco cambios por partido", "VAR en semifinales y final"],
    modalities: ["Masculino sub-23", "Femenino"],
    scoring: "goles", scoringText: "Goles anotados por equipo.",
  },
  {
    slug: "gimnasia-ritmica", num: 8, name: "Gimnasia rítmica", mascot: "paraba-roja", pic: ritmica,
    tagline: "Libertad en cada giro.",
    what: "Combinación de danza y gimnasia con aparatos: cinta, aro, pelota y mazas.",
    how: "Rutinas de 90 segundos con música evaluadas por un panel de jueces.",
    rules: ["El aparato debe estar en movimiento constante", "Tapiz de 13 x 13 m", "Penalización por caída"],
    modalities: ["Cinta", "Aro", "Pelota", "Mazas"],
    scoring: "puntos", scoringText: "Nota de dificultad + ejecución + artística.",
  },
  {
    slug: "gimnasia", num: 9, name: "Gimnasia", mascot: "gato-andino", pic: gimnasia,
    tagline: "Equilibrio a 4.000 metros.",
    what: "Gimnasia artística en suelo, barras, viga y salto.",
    how: "Cada gimnasta presenta su rutina por aparato; gana la mayor nota.",
    rules: ["Panel D (dificultad) y panel E (ejecución)", "Caída descuenta 1 punto", "Tiempo límite en suelo"],
    modalities: ["Suelo", "Viga", "Barras", "Salto"],
    scoring: "puntos", scoringText: "Nota de dificultad + ejecución.",
  },
  {
    slug: "jabalina", num: 10, name: "Lanzamiento de jabalina", mascot: "jucumari", pic: jabalina,
    tagline: "Lanzar la fuerza al horizonte.",
    what: "Prueba de lanzamiento en la que se arroja una jabalina lo más lejos posible.",
    how: "Seis intentos; cuenta el mejor lanzamiento válido.",
    rules: ["La punta debe tocar primero el suelo", "No pisar la línea de lanzamiento", "Sector de caída de 29°"],
    modalities: ["Masculino (800 g)", "Femenino (600 g)"],
    scoring: "distancia", scoringText: "Distancia en metros; mayor distancia gana.",
  },
];

export const venues = [
  "Estadio Hernando Siles · La Paz",
  "Coliseo Julio Borelli · La Paz",
  "Complejo Acuático · Cochabamba",
  "Estadio Félix Capriles · Cochabamba",
  "Coliseo Ramón Oliver · Santa Cruz",
  "Circuito El Alto · El Alto",
] as const;

export type Status = "finalizado" | "en-vivo" | "programado";

export interface IndividualResult { pos: number; name: string; country: string; mark: string }
export interface MatchResult { home: string; away: string; scoreHome: number; scoreAway: number; detail?: string }

export interface GameEvent {
  id: string;
  date: string; // YYYY-MM-DD
  time: string;
  sport: string;
  prueba: string;
  venue: string;
  status: Status;
  results?: IndividualResult[];
  match?: MatchResult;
}

const r = (pos: number, name: string, country: string, mark: string): IndividualResult => ({ pos, name, country, mark });

export const events: GameEvent[] = [
  { id: "e01", date: "2026-10-12", time: "10:00", sport: "halterofilia", prueba: "61 kg masculino", venue: venues[1], status: "finalizado",
    results: [r(1, "Marco Quispe", "Bolivia", "281 kg"), r(2, "Andrés Pinto", "Colombia", "276 kg"), r(3, "Luis Hurtado", "Ecuador", "270 kg"), r(4, "José Mendoza", "Perú", "262 kg")] },
  { id: "e02", date: "2026-10-12", time: "15:30", sport: "natacion", prueba: "100 m libre femenino", venue: venues[2], status: "finalizado",
    results: [r(1, "Valeria Rojas", "Chile", "55.12 s"), r(2, "Karen Torrico", "Bolivia", "55.48 s"), r(3, "Sofía Andrade", "Ecuador", "56.03 s"), r(4, "Daniela Pérez", "Venezuela", "56.40 s")] },
  { id: "e03", date: "2026-10-12", time: "19:00", sport: "futbol", prueba: "Grupo A · Masculino", venue: venues[0], status: "finalizado",
    match: { home: "Bolivia", away: "Paraguay", scoreHome: 2, scoreAway: 1, detail: "Goles: Vaca 23', Algarañaz 71' · Benítez 58'" } },
  { id: "e04", date: "2026-10-13", time: "09:00", sport: "atletismo", prueba: "100 m masculino · Final", venue: venues[0], status: "finalizado",
    results: [r(1, "Diego Arévalo", "Colombia", "10.18 s"), r(2, "Bryan Cuéllar", "Bolivia", "10.27 s"), r(3, "Renzo Salas", "Perú", "10.31 s"), r(4, "Iván Mora", "Venezuela", "10.40 s")] },
  { id: "e05", date: "2026-10-13", time: "11:30", sport: "tiro-con-arco", prueba: "Recurvo individual femenino", venue: venues[5], status: "finalizado",
    results: [r(1, "Ana Lucía Vargas", "Bolivia", "672 pts"), r(2, "Camila Ortiz", "Perú", "668 pts"), r(3, "María Ríos", "Colombia", "661 pts"), r(4, "Elena Paz", "Chile", "654 pts")] },
  { id: "e06", date: "2026-10-13", time: "17:00", sport: "voleibol", prueba: "Semifinal femenino", venue: venues[4], status: "finalizado",
    match: { home: "Perú", away: "Bolivia", scoreHome: 3, scoreAway: 2, detail: "25-21 · 22-25 · 25-19 · 23-25 · 15-12" } },
  { id: "e07", date: "2026-10-19", time: "08:00", sport: "ciclismo", prueba: "Contrarreloj individual", venue: venues[5], status: "en-vivo" },
  { id: "e08", date: "2026-10-19", time: "10:30", sport: "gimnasia-ritmica", prueba: "Cinta individual", venue: venues[4], status: "en-vivo" },
  { id: "e09", date: "2026-10-19", time: "16:00", sport: "jabalina", prueba: "Final masculino", venue: venues[0], status: "finalizado",
    results: [r(1, "Rodrigo Saavedra", "Ecuador", "78.42 m"), r(2, "Pablo Choque", "Bolivia", "76.90 m"), r(3, "Felipe Núñez", "Chile", "75.11 m"), r(4, "Tomás Riera", "Colombia", "73.85 m")] },
  { id: "e10", date: "2026-10-20", time: "10:00", sport: "gimnasia", prueba: "Suelo masculino", venue: venues[1], status: "programado" },
  { id: "e11", date: "2026-10-20", time: "15:00", sport: "natacion", prueba: "200 m espalda masculino", venue: venues[2], status: "programado" },
  { id: "e12", date: "2026-10-20", time: "19:30", sport: "futbol", prueba: "Semifinal · Masculino", venue: venues[3], status: "programado" },
  { id: "e13", date: "2026-10-21", time: "09:30", sport: "atletismo", prueba: "1.500 m femenino · Final", venue: venues[0], status: "programado" },
  { id: "e14", date: "2026-10-21", time: "14:00", sport: "halterofilia", prueba: "76 kg femenino", venue: venues[1], status: "programado" },
  { id: "e15", date: "2026-10-21", time: "18:00", sport: "voleibol", prueba: "Final femenino", venue: venues[4], status: "programado" },
  { id: "e16", date: "2026-10-22", time: "10:00", sport: "tiro-con-arco", prueba: "Recurvo por equipos", venue: venues[5], status: "programado" },
  { id: "e17", date: "2026-10-22", time: "16:30", sport: "gimnasia-ritmica", prueba: "Aro · Final", venue: venues[4], status: "programado" },
  { id: "e18", date: "2026-10-23", time: "19:00", sport: "futbol", prueba: "Gran final · Masculino", venue: venues[0], status: "programado" },
];

export const dates = Array.from(new Set(events.map((e) => e.date))).sort();

export const getSport = (slug: string) => sports.find((s) => s.slug === slug);
export const getMascot = (slug: string) => mascots.find((m) => m.slug === slug);
export const sportsOf = (m: MascotSlug) => sports.filter((s) => s.mascot === m);

export const statusLabel: Record<Status, string> = {
  finalizado: "Finalizado",
  "en-vivo": "En vivo",
  programado: "Programado",
};

export function formatDate(iso: string, opts: Intl.DateTimeFormatOptions = { weekday: "short", day: "numeric", month: "short" }) {
  return new Date(iso + "T12:00:00").toLocaleDateString("es-BO", opts);
}

export function computeStats(list: GameEvent[] = events) {
  const done = list.filter((e) => e.status === "finalizado");
  const countries = new Set<string>();
  list.forEach((e) => {
    e.results?.forEach((x) => countries.add(x.country));
    if (e.match) { countries.add(e.match.home); countries.add(e.match.away); }
  });
  return {
    total: list.length,
    finished: done.length,
    pending: list.filter((e) => e.status !== "finalizado").length,
    live: list.filter((e) => e.status === "en-vivo").length,
    countries: countries.size,
  };
}

export function medalTable(list: GameEvent[] = events) {
  const t: Record<string, { gold: number; silver: number; bronze: number }> = {};
  const add = (c: string, k: "gold" | "silver" | "bronze") => { (t[c] ??= { gold: 0, silver: 0, bronze: 0 })[k]++; };
  list.filter((e) => e.status === "finalizado").forEach((e) => {
    if (e.results) { add(e.results[0]!.country, "gold"); add(e.results[1]!.country, "silver"); add(e.results[2]!.country, "bronze"); }
  });
  return Object.entries(t)
    .map(([country, m]) => ({ country, ...m, total: m.gold + m.silver + m.bronze }))
    .sort((a, b) => b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze);
}
