import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import bear from "@/assets/stickers/halterofilia.png";
import bird from "@/assets/stickers/tiro-con-arco.png";
import cat from "@/assets/stickers/atletismo.png";

const steps = [
  { word: "Fuerza", bg: "bg-night text-cream", pic: bear },
  { word: "Libertad", bg: "bg-paraba text-ivory", pic: bird },
  { word: "Agilidad", bg: "bg-andino text-night", pic: cat },
];
const KEY = "jb26-intro";

export function Intro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce || sessionStorage.getItem(KEY)) return;
    setShow(true);
    const t = [900, 1800, 2700, 4000].map((ms, i) => setTimeout(() => setStep(i + 1), ms));
    const end = setTimeout(() => setStep(5), 5000);
    return () => { t.forEach(clearTimeout); clearTimeout(end); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  function close() {
    sessionStorage.setItem(KEY, "1");
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
        >
          <AnimatePresence mode="popLayout">
            {step < 3 ? (
              <motion.div
                key={step}
                className={`absolute inset-0 grid place-items-center ${steps[step]!.bg}`}
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 0.55, ease: [0.7, 0, 0.2, 1] }}
              >
                <div className="relative flex flex-col items-center">
                  <motion.img
                    src={steps[step]!.pic}
                    alt=""
                    className="w-[min(60vw,22rem)]"
                    initial={{ clipPath: "circle(0% at 50% 50%)" }}
                    animate={{ clipPath: "circle(75% at 50% 50%)" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  />
                  <span className="block overflow-hidden">
                    <motion.span
                      className="display-xl block"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: [0.7, 0, 0.2, 1] }}
                    >
                      {steps[step]!.word}
                    </motion.span>
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div key="final" className="absolute inset-0 flex flex-col items-center justify-center gap-8 bg-cream px-6 text-night" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex items-end gap-4">
                  {steps.map((s, i) => (
                    <motion.img key={i} src={s.pic} alt="" className="w-[22vw] max-w-40" initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} />
                  ))}
                </div>
                <p className="display-md text-center">
                  Tres espíritus.<br />
                  <span className="text-paraba">Una misma pasión.</span>
                </p>
                {step >= 4 && (
                  <motion.p className="eyebrow" initial={{ opacity: 0, letterSpacing: "0.6em" }} animate={{ opacity: 1, letterSpacing: "0.22em" }}>
                    Juegos Bolivia 2026
                  </motion.p>
                )}
                {step >= 5 && <motion.button initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} onClick={close} className="rounded-full bg-paraba px-8 py-4 font-display font-bold uppercase text-ivory">Que comiencen los juegos ↗</motion.button>}
              </motion.div>
            )}
          </AnimatePresence>
          <button onClick={close} className="eyebrow absolute bottom-6 right-6 z-10 rounded-full bg-ivory px-5 py-3 text-night">
            Omitir intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
