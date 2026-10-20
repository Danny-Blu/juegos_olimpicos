import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import type { Mascot, Status } from "@/data/juegos";
import { statusLabel } from "@/data/juegos";
import { cn } from "@/lib/utils";

export const toneBg: Record<Mascot["tone"], string> = {
  night: "bg-night text-cream",
  paraba: "bg-paraba text-ivory",
  andino: "bg-andino text-night",
};
export const toneText: Record<Mascot["tone"], string> = {
  night: "text-night",
  paraba: "text-paraba",
  andino: "text-ocre",
};

export function Reveal({ children, delay = 0, className, y = 32 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Robust headline reveal: never hides copy when scroll observers fail or fonts load late. */
export function Headline({ lines, className, as: Tag = "h2", delay = 0 }: { lines: string[]; className?: string; as?: "h1" | "h2"; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <Tag className={cn(className, "headline-safe")}>
      {lines.map((line, i) => (
        <span key={i} className="block max-w-full">
          <motion.span className="block" initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: delay + i * 0.09 }}>
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function StatusPill({ status }: { status: Status }) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-2 rounded-full px-3 py-1.5 !text-[0.65rem]",
        status === "finalizado" && "bg-night text-cream",
        status === "en-vivo" && "bg-paraba text-ivory",
        status === "programado" && "bg-stone text-night",
      )}
    >
      {status === "en-vivo" && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ivory" />}
      {statusLabel[status]}
    </span>
  );
}

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 0c.8 6.6 5.4 11.2 12 12-6.6.8-11.2 5.4-12 12-.8-6.6-5.4-11.2-12-12C6.6 11.2 11.2 6.6 12 0Z" fill="currentColor" />
    </svg>
  );
}

export function PageHero({ eyebrow, lines, tone = "night", children, pic }: { eyebrow: string; lines: string[]; tone?: Mascot["tone"]; children?: ReactNode; pic?: string }) {
  return (
    <section className={cn("relative overflow-hidden pb-12 pt-36 sm:pb-16 sm:pt-40", toneBg[tone])}>
      <div className="container-wide relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div className="min-w-0">
          <p className="eyebrow mb-6 opacity-80">{eyebrow}</p>
          <Headline as="h1" lines={lines} className="display-xl page-heading" />
          {children}
        </div>
        {pic && (
          <motion.img
            src={pic}
            alt=""
            className="mx-auto w-2/3 max-w-sm lg:w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          />
        )}
      </div>
    </section>
  );
}
