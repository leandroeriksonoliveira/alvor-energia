import { Award, Leaf, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Confiança",
    description:
      "Projetos dimensionados com rigor técnico e equipamentos de alta performance.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description:
      "Contribuímos para um planeta mais limpo com energia 100% renovável.",
  },
  {
    icon: Award,
    title: "Excelência",
    description:
      "Compromisso com qualidade em cada etapa, da consultoria à instalação.",
  },
  {
    icon: Users,
    title: "Parceria",
    description:
      "Acompanhamento próximo e suporte contínuo pós-instalação.",
  },
];

export function About() {
  return (
    <section id="quem-somos" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Quem Somos
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Liderança técnica que você pode confiar
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A <strong className="text-foreground">Alvor Energia</strong> nasceu
              da visão de{" "}
              <strong className="text-foreground">
                Luis Carlos de Oliveira
              </strong>
              , engenheiro com décadas de experiência em energia solar e
              eficiência energética. Nossa missão é democratizar o acesso à
              energia limpa, oferecendo soluções personalizadas que geram
              economia real e impacto ambiental positivo.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Combinamos tecnologia de ponta, equipe especializada e atendimento
              humanizado para entregar projetos que superam expectativas — do
              residencial ao industrial.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border bg-card p-5 transition-shadow hover:shadow-md"
              >
                <value.icon
                  className="h-8 w-8 text-emerald-600"
                  aria-hidden="true"
                />
                <h3 className="mt-3 font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
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
