import { Clock, Headphones, Star, Wrench } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Residencial — Campinas, SP",
    text: "Reduzi minha conta de luz em 92%. A equipe da Alvor foi impecável do início ao fim. Recomendo!",
    rating: 5,
  },
  {
    name: "João Pereira",
    role: "Comercial — Ribeirão Preto, SP",
    text: "Investimento que se pagou em 3 anos. O suporte pós-instalação é excelente. Empresa séria.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Industrial — Sorocaba, SP",
    text: "Projeto industrial complexo executado no prazo. Luis Carlos e equipe demonstraram total competência.",
    rating: 5,
  },
];

const differentials = [
  {
    icon: Clock,
    title: "Resposta em 24h",
    description: "Orçamento detalhado entregue em até um dia útil.",
  },
  {
    icon: Wrench,
    title: "Instalação certificada",
    description: "Equipe própria treinada e equipamentos premium.",
  },
  {
    icon: Headphones,
    title: "Suporte contínuo",
    description: "Monitoramento e assistência pós-venda dedicados.",
  },
];

export function Testimonials() {
  return (
    <section id="diferenciais" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Diferenciais
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-2xl border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex gap-0.5" aria-label={`${item.rating} estrelas`}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{item.text}&rdquo;
              </p>
              <footer className="mt-4">
                <cite className="not-italic">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border bg-emerald-50/50 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
