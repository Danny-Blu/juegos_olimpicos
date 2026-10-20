import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { Headline } from "./ui";
import bear from "@/assets/stickers/halterofilia.png";
import bird from "@/assets/stickers/voleibol.png";
import cat from "@/assets/stickers/gimnasia.png";

const nav = [
  ["/", "Inicio"],
  ["/deportes", "Deportes"],
  ["/calendario", "Calendario"],
  ["/resultados", "Resultados"],
  ["/mascotas", "Mascotas"],
  ["/sobre-los-juegos", "Sobre los juegos"],
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night pt-24 text-cream">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="min-w-0">
            <Headline lines={["El movimiento", "no termina", "acá."]} className="display-lg" />
            <p className="eyebrow mt-8 text-andino">Juegos Bolivia 2026</p>
          </div>
          <div className="flex flex-col justify-between gap-10">
            <div className="flex items-end gap-2" aria-hidden>
              <img src={bear} alt="" className="w-1/3 rounded-2xl bg-cream p-3" />
              <img src={bird} alt="" className="w-1/3 -translate-y-6 rounded-2xl bg-cream p-3" />
              <img src={cat} alt="" className="w-1/3 rounded-2xl bg-cream p-3" />
            </div>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-3" aria-label="Pie de página">
              {nav.map(([to, l], i) => (
                <Link key={to} to={to} className="group flex items-baseline gap-3 font-display text-lg font-bold">
                  <span className="eyebrow text-andino">0{i + 1}</span>
                  <span className="link-line">{l}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-4 border-t border-cream/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow flex flex-wrap gap-x-6 gap-y-2 opacity-70">
            <span>Proyecto académico</span>
            <span>Datos de demostración</span>
            <span>Bolivia · 2026</span>
          </p>
          <motion.button
            whileHover={{ y: -4 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-3 self-start eyebrow"
          >
            Volver arriba
            <span className="grid h-11 w-11 place-items-center rounded-full bg-paraba text-ivory transition-transform group-hover:-translate-y-1">
              <ArrowUp className="h-4 w-4" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
