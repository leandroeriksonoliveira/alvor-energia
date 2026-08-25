import { differentiators } from "@/lib/company";

export function Differentials() {
  return (
    <section id="diferenciais" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Por que Alvor</span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Tecnologia, engenharia e operação no mesmo parceiro
          </h2>
          <p className="mt-4 text-muted-foreground">
            Diferenciais construídos sobre experiência técnica, conformidade
            regulatória e acompanhamento contínuo do sistema fotovoltaico.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {differentiators.map((item, index) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-2xl border bg-card p-6"
            >
              <span className="text-5xl font-bold leading-none text-emerald-100">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
