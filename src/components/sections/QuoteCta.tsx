import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

export function QuoteCta() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[1.75rem] gradient-brand px-6 py-12 text-white shadow-2xl shadow-emerald-900/20 sm:px-12 md:py-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Orçador Inteligente
              </div>
              <h2 className="mt-5 text-balance text-3xl font-bold md:text-4xl">
                Proposta personalizada para o seu perfil de consumo
              </h2>
              <p className="mt-4 max-w-xl text-emerald-50">
                Envie sua conta de energia e receba uma análise técnica da
                equipe Alvor. Atendimento comercial:{" "}
                {company.contact.phones[0].value}.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="h-12 bg-white px-8 text-emerald-800 hover:bg-emerald-50"
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
