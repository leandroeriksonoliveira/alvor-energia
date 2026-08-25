import { Award, Globe2, Shield, Users } from "lucide-react";
import { company } from "@/lib/company";

const values = [
  {
    icon: Shield,
    title: "Engenharia e conformidade",
    description:
      "Conhecimentos técnicos e legais para projetos seguros, homologados e alinhados à ANEEL.",
  },
  {
    icon: Globe2,
    title: "Experiência ampliada",
    description:
      "Atuação nacional e internacional, com processos maduros do parecer de acesso à operação.",
  },
  {
    icon: Users,
    title: "Liderança executiva",
    description: company.teamHighlight,
  },
  {
    icon: Award,
    title: "Rentabilidade",
    description:
      "Foco em eficiência energética e retorno sobre investimento com energia 100% renovável.",
  },
];

export function About() {
  return (
    <section id="quem-somos" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="section-label">Quem somos</span>
            <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
              {company.name}
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {company.about}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sob a direção de{" "}
              <strong className="text-foreground">{company.leader}</strong>,{" "}
              {company.leaderRole.toLowerCase()}, a Alvor integra projeto,
              instalação e operação assistida em um único fluxo — com equipe
              preparada para entregar qualidade em cada fase.
            </p>

            <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
              <p className="text-sm font-medium text-emerald-900">
                Sede em {company.location.city} — {company.location.state}
              </p>
              <p className="mt-1 text-sm text-emerald-800/80">
                {company.location.address} · CEP {company.location.zip}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-panel rounded-2xl p-5 transition-shadow hover:shadow-xl"
              >
                <value.icon
                  className="h-8 w-8 text-emerald-600"
                  aria-hidden="true"
                />
                <h3 className="mt-3 font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
