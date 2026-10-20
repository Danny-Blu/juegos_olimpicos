import { Star } from "./ui";

const words = ["Fuerza", "Libertad", "Agilidad", "Movimiento", "Bolivia 2026"];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden bg-paraba py-5 text-cream" aria-label="Fuerza, libertad, agilidad, movimiento, Bolivia 2026">
      <div className="marquee-track" aria-hidden>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((w, i) => (
              <span key={i} className="flex items-center gap-8 px-8 font-display text-[clamp(1.6rem,4vw,3.4rem)] font-extrabold uppercase tracking-tight">
                {w}
                <Star className="h-6 w-6 text-andino" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
