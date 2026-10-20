import { getSport, type GameEvent } from "@/data/juegos";
import { cn } from "@/lib/utils";

const podiumH = ["h-28 sm:h-36", "h-20 sm:h-28", "h-14 sm:h-20"];
const podiumBg = ["bg-andino text-night", "bg-stone text-night", "bg-paraba-deep text-ivory"];

/** Renders a result in the format that fits the sport: match score vs. ranked marks. */
export function ResultView({ e, compact = false }: { e: GameEvent; compact?: boolean }) {
  const s = getSport(e.sport)!;
  if (e.match) {
    const m = e.match;
    const unit = s.scoring === "sets" ? "sets" : "goles";
    return (
      <div>
        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 rounded-2xl bg-night p-5 text-cream">
          <span className={cn("truncate text-right font-display text-lg font-bold sm:text-2xl", m.scoreHome > m.scoreAway && "text-andino")}>{m.home}</span>
          <span className="numeral text-5xl sm:text-7xl">
            {m.scoreHome}<span className="px-2 opacity-40">:</span>{m.scoreAway}
          </span>
          <span className={cn("truncate font-display text-lg font-bold sm:text-2xl", m.scoreAway > m.scoreHome && "text-andino")}>{m.away}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">Marcador en {unit}{m.detail ? ` · ${m.detail}` : ""}</p>
      </div>
    );
  }
  const res = e.results ?? [];
  const order = [1, 0, 2];
  return (
    <div className="space-y-5">
      {!compact && (
        <div className="grid grid-cols-3 items-end gap-2">
          {order.map((i) => res[i] && (
            <div key={i} className="flex min-w-0 flex-col items-center text-center">
              <span className="truncate font-display text-sm font-bold sm:text-base">{res[i].name}</span>
              <span className="eyebrow !text-[0.6rem] text-muted-foreground">{res[i].country} · {res[i].mark}</span>
              <div className={cn("mt-2 grid w-full place-items-center rounded-t-2xl", podiumH[i], podiumBg[i])}>
                <span className="numeral text-5xl">{i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      <table className="w-full text-left text-sm">
        <thead className="eyebrow !text-[0.6rem] text-muted-foreground">
          <tr><th className="py-2">Pos.</th><th>Participante</th><th className="hidden sm:table-cell">País</th><th className="text-right">{s.scoring === "tiempo" ? "Tiempo" : s.scoring === "kg" ? "Total" : s.scoring === "distancia" ? "Distancia" : "Puntos"}</th></tr>
        </thead>
        <tbody>
          {res.map((x) => (
            <tr key={x.pos} className="border-t border-border">
              <td className="numeral py-2.5 text-2xl">{x.pos}</td>
              <td className="font-semibold">{x.name}<span className="block text-xs font-normal text-muted-foreground sm:hidden">{x.country}</span></td>
              <td className="hidden sm:table-cell">{x.country}</td>
              <td className="text-right font-display font-bold tabular-nums">{x.mark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
