import {
  Building2,
  Factory,
  Home,
  MessageCircle,
  Tractor,
} from "lucide-react";
import { company, segments } from "@/lib/company";

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

const whatsappPhone =
  company.contact.phones.find((p) => p.label === "WhatsApp")?.link.replace(
    /\D/g,
    ""
  ) ?? "5531973065264";

const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
  "Olá! Gostaria de falar com um especialista da Alvor sobre energia solar."
)}`;

export function Services() {
  return (
    <section id="servicos" className="section bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="section-header grid gap-6 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-end">
          <div>
            <span className="section-label">Segmentos</span>
            <h2 className="mt-2 text-balance text-2xl font-bold text-foreground md:text-3xl">
              Fotovoltaica para cada perfil de consumo
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
            Dimensionamos sistemas On-Grid para residências, comércios,
            indústrias e propriedades rurais — com engenharia completa e
            acompanhamento pós-energização.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment, index) => {
            const Icon = icons[segment.id];
            return (
              <article
                key={segment.id}
                className="group relative overflow-hidden rounded-xl border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100 ${accents[index]}`}
                />
                <div className="relative">
                  <div className="inline-flex rounded-lg border bg-background p-2 shadow-sm">
                    <Icon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-foreground">
                    {segment.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                    {segment.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-3 rounded-xl border border-dashed border-emerald-300 bg-white p-4 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-emerald-600 p-2 text-white">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Não sabe qual segmento se aplica?
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Nossa equipe analisa seu perfil e indica a melhor solução.
              </p>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-semibold text-emerald-700 hover:underline"
          >
            Falar com especialista no WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
