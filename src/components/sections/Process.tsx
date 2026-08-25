import { ClipboardList, HardHat, LineChart } from "lucide-react";
import { processSteps } from "@/lib/company";

const phaseIcons = [ClipboardList, HardHat, LineChart];

export function Process() {
  return (
    <section id="processo" className="section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-start">
          <div>
            <span className="section-label">Metodologia</span>
            <h2 className="mt-2 text-balance text-2xl font-bold text-foreground md:text-3xl">
              Do projeto à operação em três fases
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Engenharia, instalação certificada e operação assistida com
              monitoramento e manutenção.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = phaseIcons[index];
              return (
                <article
                  key={step.phase}
                  className="rounded-xl border bg-card p-4 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-foreground">
                    {step.phase}
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-muted-foreground sm:text-sm"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 rounded-md bg-muted/70 px-2.5 py-1.5 text-[11px] font-medium text-foreground">
                    {step.duration}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
