import { BadgeCheck } from "lucide-react";
import { differentiators, guarantees } from "@/lib/company";

export function Guarantees() {
  return (
    <section className="bg-slate-950 py-10 text-white md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Garantias
            </span>
            <h2 className="mt-2 text-balance text-2xl font-bold md:text-3xl">
              Proteção em cada camada
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Coberturas de fabricante e garantia Alvor na instalação.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {guarantees.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <BadgeCheck
                  className="h-6 w-6 text-emerald-400"
                  aria-hidden="true"
                />
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-emerald-300/90">
                  {item.brand}
                </p>
                <h3 className="mt-1 text-sm font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="section-header flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Por que Alvor
              </span>
              <h2 className="mt-2 text-xl font-bold md:text-2xl">
                Tecnologia, engenharia e operação no mesmo parceiro
              </h2>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, index) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <span className="text-2xl font-bold leading-none text-emerald-500/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
