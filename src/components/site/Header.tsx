import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import bear from "@/assets/stickers/futbol.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/deportes", label: "Deportes" },
  { to: "/calendario", label: "Calendario" },
  { to: "/resultados", label: "Resultados" },
  { to: "/mascotas", label: "Mascotas" },
] as const;

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-2.5", className)} aria-label="Juegos Bolivia 2026, inicio">
      <span className="flex h-9 w-9 shrink-0 overflow-hidden rounded-full" aria-hidden>
        <span className="w-1/3 bg-night ring-1 ring-cream/30" />
        <span className="w-1/3 bg-paraba" />
        <span className="w-1/3 bg-andino" />
      </span>
      <span className="font-display text-sm font-extrabold uppercase leading-[0.9] tracking-tight">
        Juegos<br />Bolivia <span className="text-andino">26</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 text-cream transition-all duration-500",
          scrolled ? "bg-night/95 py-3 shadow-[0_10px_30px_-20px] shadow-night backdrop-blur" : "bg-night py-6",
        )}
      >
        <div className="container-wide grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="link-line eyebrow !text-[0.74rem] transition-colors hover:text-andino data-[status=active]:text-andino"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-end gap-3">
            <Link
              to="/calendario"
              className="group hidden items-center gap-2 rounded-full bg-paraba px-5 py-2.5 eyebrow text-ivory transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Explorar competencias
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full bg-cream text-night lg:hidden"
              aria-label="Abrir menú"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] overflow-hidden bg-paraba text-ivory"
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
          >
            <div className="container-wide flex items-center justify-between py-6">
              <Logo />
              <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full bg-ivory text-paraba" aria-label="Cerrar menú">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="container-wide mt-6 flex flex-col gap-1">
              {[...links, { to: "/sobre-los-juegos", label: "Sobre los juegos" } as const].map((l, i) => (
                <motion.div key={l.to} initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 + i * 0.06 }}>
                  <Link to={l.to} className="flex items-baseline gap-4 py-1">
                    <span className="eyebrow opacity-70">0{i + 1}</span>
                    <span className="font-display text-[clamp(2.4rem,11vw,4rem)] font-extrabold uppercase leading-none tracking-tight">{l.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.img
              src={bear}
              alt=""
              className="pointer-events-none absolute bottom-2 right-0 w-40 max-w-[28vw] object-contain opacity-95 sm:w-64"
              initial={{ y: 120, rotate: 10 }}
              animate={{ y: 0, rotate: -6 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
