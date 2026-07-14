import Link from "next/link";
import { ArrowRight, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-transparent" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            <Zap className="h-3.5 w-3.5" aria-hidden="true" />
            Transição energética inteligente
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Energia solar que{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              transforma
            </span>{" "}
            seu futuro
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Reduza sua conta de luz em até 95% com soluções personalizadas de
            energia solar e eficiência energética. Tecnologia, sustentabilidade
            e confiança sob a liderança de Luis Carlos de Oliveira.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
            >
              <Link href="/orcamento">
                Solicitar Orçamento Grátis
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#servicos">Conhecer Serviços</a>
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 blur-3xl" />
            <div className="relative flex h-full w-full flex-col items-center justify-center rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-xl backdrop-blur-sm">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-400 shadow-lg">
                <Sun className="h-12 w-12 text-white" aria-hidden="true" />
              </div>
              <div className="mt-8 grid w-full grid-cols-2 gap-4">
                <div className="rounded-xl bg-emerald-50 p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-700">95%</p>
                  <p className="text-xs text-muted-foreground">Economia média</p>
                </div>
                <div className="rounded-xl bg-cyan-50 p-4 text-center">
                  <p className="text-2xl font-bold text-cyan-700">25+</p>
                  <p className="text-xs text-muted-foreground">Anos de vida útil</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <p className="text-2xl font-bold text-slate-700">100%</p>
                  <p className="text-xs text-muted-foreground">Energia limpa</p>
                </div>
                <div className="rounded-xl bg-teal-50 p-4 text-center">
                  <p className="text-2xl font-bold text-teal-700">24h</p>
                  <p className="text-xs text-muted-foreground">Resposta do orçamento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
