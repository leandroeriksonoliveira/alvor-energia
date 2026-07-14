import {
  Building2,
  Factory,
  Home,
  Leaf,
  Tractor,
  Wind,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Solar Residencial",
    description:
      "Sistemas fotovoltaicos para casas e condomínios. Economia imediata na conta de luz com payback acelerado.",
    color: "emerald",
  },
  {
    icon: Building2,
    title: "Solar Comercial",
    description:
      "Soluções para lojas, escritórios e estabelecimentos comerciais. Reduza custos operacionais significativamente.",
    color: "cyan",
  },
  {
    icon: Factory,
    title: "Solar Industrial",
    description:
      "Usinas e sistemas de grande porte para indústrias. Máxima eficiência e retorno sobre investimento.",
    color: "teal",
  },
  {
    icon: Tractor,
    title: "Solar Rural",
    description:
      "Energia para propriedades rurais, irrigação e agroindústria. Autonomia energética no campo.",
    color: "green",
  },
  {
    icon: Wind,
    title: "Energia Eólica",
    description:
      "Instalação de sistemas eólicos para complementar a geração de energia e ampliar a autonomia energética.",
    color: "sky",
  },
  {
    icon: Zap,
    title: "Eficiência Energética",
    description:
      "Auditorias, retrofit e otimização de consumo. Reduza desperdícios antes mesmo de gerar energia.",
    color: "teal",
  },
];

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
  cyan: "bg-cyan-50 text-cyan-600 border-cyan-100",
  teal: "bg-teal-50 text-teal-600 border-teal-100",
  green: "bg-green-50 text-green-600 border-green-100",
  sky: "bg-sky-50 text-sky-600 border-sky-100",
};

export function Services() {
  return (
    <section id="servicos" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Serviços
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Soluções completas em energia
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Energia solar e eólica para empresas e residências — do projeto à
            instalação, com equipe de engenharia especializada.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`inline-flex rounded-xl border p-3 ${colorMap[service.color]}`}
              >
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}

          <article className="group rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/50 p-6 transition-all duration-300 hover:border-emerald-400">
            <div className="inline-flex rounded-xl border border-emerald-200 bg-emerald-100 p-3 text-emerald-700">
              <Leaf className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Consultoria Gratuita
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Não sabe por onde começar? Nossa equipe analisa seu perfil de
              consumo e indica a melhor solução — sem compromisso.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
