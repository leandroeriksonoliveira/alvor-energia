import {
  Building2,
  Factory,
  Home,
  MessageCircle,
  Tractor,
} from "lucide-react";
import Link from "next/link";
import { segments } from "@/lib/company";

const icons = {
  residential: Home,
  commercial: Building2,
  industrial: Factory,
  rural: Tractor,
} as const;

const accents = [
  "from-emerald-500/15 to-emerald-500/5 text-emerald-700",
  "from-teal-500/15 to-teal-500/5 text-teal-700",
  "from-cyan-500/15 to-cyan-500/5 text-cyan-800",
  "from-amber-500/15 to-amber-500/5 text-amber-800",
];

export function Services() {
  return (
    <section id="servicos" className="bg-slate-50/80 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="section-label">Segmentos</span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Fotovoltaica para cada perfil de consumo
          </h2>
          <p className="mt-4 text-muted-foreground">
            Dimensionamos sistemas On-Grid para residências, comércios,
            indústrias e propriedades rurais — com engenharia completa e
            acompanhamento pós-energização.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {segments.map((segment, index) => {
            const Icon = icons[segment.id];
            return (
              <article
                key={segment.id}
                className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100 ${accents[index]}`}
                />
                <div className="relative">
                  <div className="inline-flex rounded-xl border bg-background p-3 shadow-sm">
                    <Icon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {segment.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {segment.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-emerald-300 bg-white p-6 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-emerald-600 p-2.5 text-white">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Não sabe qual segmento se aplica?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Nossa equipe analisa seu perfil de consumo e indica a melhor
                solução — sem compromisso.
              </p>
            </div>
          </div>
          <Link
            href="/orcamento"
            className="shrink-0 text-sm font-semibold text-emerald-700 hover:underline"
          >
            Falar com especialista →
          </Link>
        </div>
      </div>
    </section>
  );
}
