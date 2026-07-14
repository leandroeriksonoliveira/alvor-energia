import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuoteCta() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 px-6 py-12 text-white shadow-2xl sm:px-12 md:py-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Calculator className="h-7 w-7" aria-hidden="true" />
            </div>

            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              Descubra quanto você pode economizar
            </h2>
            <p className="mt-4 text-lg text-emerald-50">
              Use nosso Orçador Inteligente e receba uma proposta personalizada
              em até 24 horas. Rápido, gratuito e sem compromisso.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-white text-emerald-700 hover:bg-emerald-50"
            >
              <Link href="/orcamento">
                Acessar Orçador Inteligente
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
