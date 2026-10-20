import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { formatDate, getSport, type GameEvent } from "@/data/juegos";
import { StatusPill } from "./ui";
import { ResultView } from "./ResultView";

export function EventRow({ e }: { e: GameEvent }) {
  const s = getSport(e.sport)!;
  const [open, setOpen] = useState(false);
  return (
    <motion.li layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-3xl bg-ivory">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 p-4 text-left sm:grid-cols-[5rem_auto_minmax(0,1fr)_auto_auto] sm:gap-6 sm:p-5"
      >
        <span className="hidden sm:block">
          <span className="numeral block text-4xl">{e.time}</span>
          <span className="eyebrow !text-[0.6rem] text-muted-foreground">{formatDate(e.date)}</span>
        </span>
        <img src={s.pic} alt="" className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16" />
        <span className="min-w-0">
          <span className="eyebrow block !text-[0.62rem] text-paraba">
            <span className="sm:hidden">{e.time} · </span>{s.name}
          </span>
          <span className="block truncate font-display text-lg font-bold sm:text-xl">{e.prueba}</span>
          <span className="mt-1 flex items-center gap-1 truncate text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" /> {e.venue}
          </span>
        </span>
        <span className="hidden sm:block"><StatusPill status={e.status} /></span>
        <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-border px-4 pb-5 pt-4 sm:px-5">
          <div className="mb-4 flex flex-wrap items-center gap-3 sm:hidden"><StatusPill status={e.status} /></div>
          {e.status === "finalizado" ? (
            <ResultView e={e} compact />
          ) : (
            <p className="text-sm text-muted-foreground">
              {e.status === "en-vivo" ? "La prueba se está disputando ahora mismo." : "Prueba programada."} Sistema: {s.scoringText}
            </p>
          )}
          <Link to="/deportes/$slug" params={{ slug: s.slug }} className="link-line eyebrow mt-4 inline-block">
            Ver disciplina
          </Link>
        </div>
      )}
    </motion.li>
  );
}
