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
    <section id="quem-somos" className="section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="section-label">Quem somos</span>
            <h2 className="mt-2 text-balance text-2xl font-bold text-foreground md:text-3xl">
              {company.name}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {company.about}
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Sob a direção de{" "}
              <strong className="text-foreground">{company.leader}</strong>,{" "}
              {company.leaderRole.toLowerCase()}, a Alvor integra projeto,
              instalação e operação assistida em um único fluxo.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border bg-card p-4 transition-shadow hover:shadow-md"
              >
                <value.icon
                  className="h-6 w-6 text-emerald-600"
                  aria-hidden="true"
                />
                <h3 className="mt-2 text-sm font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">
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
