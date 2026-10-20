import { createFileRoute, Link } from "@tanstack/react-router";
import { mascots } from "@/data/juegos";
import { PageHero } from "@/components/site/ui";
export const Route = createFileRoute("/sobre-los-juegos")({ component: Page });
function Page(){
return <><PageHero eyebrow="05 / El concepto" lines={["El movimiento", "tiene raíces."]}/><section className="container-wide py-20"><p className="max-w-4xl font-display text-2xl leading-relaxed sm:text-4xl">Una celebración deportiva ficticia inspirada en la biodiversidad boliviana. Tres animales conectan territorio, carácter y movimiento a través de diez pictogramas originales.</p><div className="mt-12 grid gap-5 md:grid-cols-3">{mascots.map(m=><div key={m.slug} className="rounded-[2rem] bg-ivory p-7"><img src={m.pic} alt="" className="h-44 w-full object-contain"/><h2 className="mt-5 font-display text-2xl font-bold uppercase">{m.name}</h2><p className="eyebrow text-paraba">{m.value}</p><p className="mt-4">{m.concept}</p></div>)}</div><p className="mt-10 rounded-3xl bg-stone p-6">Proyecto académico de diseño. Juegos, participantes, fechas y resultados presentados como datos ficticios de demostración; no corresponden a un evento olímpico oficial.</p></section></>;
}
