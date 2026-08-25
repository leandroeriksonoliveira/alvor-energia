import { ClipboardList, HardHat, LineChart } from "lucide-react";
import { processSteps } from "@/lib/company";

const phaseIcons = [ClipboardList, HardHat, LineChart];

export function Process() {
  return (
    <section id="processo" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Metodologia</span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Do projeto à operação em três fases
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fluxo integrado da Alvor: engenharia, instalação certificada e
            operação assistida com monitoramento e manutenção.
          </p>
        </div>

        <div className="relative mt-14 grid gap-8 lg:grid-cols-3">
          <div
            className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent lg:block"
            aria-hidden="true"
          />

          {processSteps.map((step, index) => {
            const Icon = phaseIcons[index];
            return (
              <article
                key={step.phase}
                className="relative rounded-2xl border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {step.phase}
                </h3>
                <ul className="mt-4 space-y-2">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-lg bg-muted/70 px-3 py-2 text-xs font-medium text-foreground">
                  {step.duration}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
