import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, Clock, ShieldCheck } from "lucide-react";
import dynamic from "next/dynamic";
import { Logo } from "@/components/Logo";
import { company } from "@/lib/company";

const QuoteForm = dynamic(
  () => import("@/components/QuoteForm").then((mod) => mod.QuoteForm),
  {
    loading: () => (
      <div className="animate-pulse space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-11 rounded-lg bg-muted" />
        ))}
      </div>
    ),
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Orçamento Inteligente",
  description:
    "Solicite seu orçamento de energia solar gratuito. Informe nome, WhatsApp e valor da conta — proposta em até 24h pela Alvor Energia.",
  openGraph: {
    title: "Orçamento Inteligente | Alvor Energia",
    description:
      "Orçamento Inteligente — receba sua proposta de energia solar personalizada em até 24 horas. Grátis e sem compromisso.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orçamento Inteligente | Alvor Energia",
    description:
      "Orçamento Inteligente — proposta personalizada em até 24h. Grátis!",
  },
};

const highlights = [
  {
    icon: Calculator,
    title: "Prévia imediata",
    text: "Estimativa de sistema e investimento com base no valor da sua conta.",
  },
  {
    icon: Clock,
    title: "Retorno em até 24h",
    text: "A equipe Alvor analisa e retorna com os próximos passos.",
  },
  {
    icon: ShieldCheck,
    title: "Apenas referência",
    text: "A prévia não substitui proposta formal após análise técnica.",
  },
];

export default function OrcamentoPage() {
  return (
    <div className="min-h-screen mesh-bg">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar ao site
          </Link>
          <Logo size="sm" />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
          <aside className="space-y-6 lg:sticky lg:top-20">
            <div>
              <span className="section-label">Orçamento Inteligente</span>
              <h1 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Receba uma prévia do seu sistema solar
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Informe nome, WhatsApp e valor médio da conta. A estimativa é
                apenas uma referência — a proposta formal depende de análise
                técnica da {company.shortName}.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {highlights.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-3 rounded-xl border bg-white/80 p-3 shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="hidden text-xs text-muted-foreground lg:block">
              Comercial: {company.contact.phones[0].value} · WhatsApp:{" "}
              {company.contact.phones[1].value}
            </p>
          </aside>

          <div className="min-w-0">
            <div className="rounded-2xl border bg-card p-4 shadow-sm sm:p-6 md:p-8">
              <QuoteForm />
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground lg:text-left">
              Os dados informados são preliminares. A proposta formal será
              elaborada após análise técnica pela equipe Alvor.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
