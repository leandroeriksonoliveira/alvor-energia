import { Award, Leaf, MapPin, Shield } from "lucide-react";
import { company } from "@/lib/company";

const values = [
  {
    icon: Shield,
    title: "Confiança",
    description:
      "Equipe de engenheiros com conhecimentos técnicos e legais para projetos seguros e eficientes.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description:
      "Energia solar e eólica para reduzir custos e o impacto ambiental da sua operação.",
  },
  {
    icon: Award,
    title: "Excelência",
    description:
      "Portfólio de produtos e serviços atuais e de qualidade, com propostas eficientes e eficazes.",
  },
  {
    icon: MapPin,
    title: "Presença nacional",
    description:
      "Sede em Belo Horizonte — MG, com atendimento em todo o território brasileiro.",
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
              {company.name}
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {company.about}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sob a liderança de{" "}
              <strong className="text-foreground">{company.leader}</strong>,{" "}
              {company.leaderRole.toLowerCase()}, combinamos experiência em
              engenharia, gestão de projetos e energias renováveis para entregar
              soluções que geram economia real.
            </p>
            <blockquote className="mt-6 border-l-4 border-emerald-500 pl-4 italic text-muted-foreground">
              &ldquo;{company.vision}&rdquo;
            </blockquote>
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
