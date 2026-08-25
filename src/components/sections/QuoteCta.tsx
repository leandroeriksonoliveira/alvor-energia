import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

export function QuoteCta() {
  return (
    <section className="section-tight">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl gradient-brand px-5 py-8 text-white shadow-xl shadow-emerald-900/15 sm:px-8 md:py-9">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-medium backdrop-blur-sm">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                Orçamento Inteligente
              </div>
              <h2 className="mt-3 text-balance text-xl font-bold sm:text-2xl">
                Proposta personalizada para o seu perfil de consumo
              </h2>
              <p className="mt-2 text-sm text-emerald-50">
                Envie sua conta de energia e receba análise técnica da equipe
                Alvor. Comercial: {company.contact.phones[0].value}.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="h-11 shrink-0 bg-white px-6 text-emerald-800 hover:bg-emerald-50"
            >
              <Link href="/orcamento">
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
