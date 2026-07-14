import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sun } from "lucide-react";
import dynamic from "next/dynamic";

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
  title: "Orçamento Grátis",
  description:
    "Solicite seu orçamento de energia solar gratuito. Proposta personalizada em até 24h pela equipe técnica da Alvor Energia.",
  openGraph: {
    title: "Orçamento Grátis | Alvor Energia",
    description:
      "Orçador Inteligente — receba sua proposta de energia solar personalizada em até 24 horas. Grátis e sem compromisso.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orçamento Grátis | Alvor Energia",
    description:
      "Orçador Inteligente — proposta personalizada em até 24h. Grátis!",
  },
};

export default function OrcamentoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-lg items-center justify-between px-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar
          </Link>
          <Link href="/" className="flex items-center gap-1.5 font-bold">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-cyan-600 text-white">
              <Sun className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            Alvor Energia
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 py-8 sm:py-12">
        <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
          <QuoteForm />
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Seus dados estão protegidos e serão usados apenas para elaboração do
          orçamento.
        </p>
      </main>
    </div>
  );
}
