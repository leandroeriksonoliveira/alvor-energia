import { BadgeCheck } from "lucide-react";
import { guarantees } from "@/lib/company";

export function Guarantees() {
  return (
    <section className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Garantias
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-4xl">
            Proteção em cada camada do sistema
          </h2>
          <p className="mt-4 text-slate-300">
            Coberturas de fabricante e garantia Alvor na instalação — para
            tranquilidade do primeiro dia de geração em diante.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {guarantees.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <BadgeCheck
                className="h-8 w-8 text-emerald-400"
                aria-hidden="true"
              />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-emerald-300/90">
                {item.brand}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
