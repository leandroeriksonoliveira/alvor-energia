import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, heroImage } from "@/lib/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-transparent" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            <Zap className="h-3.5 w-3.5" aria-hidden="true" />
            Energia solar e eólica
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Deixe o{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              sol
            </span>{" "}
            e o vento pagarem sua conta de energia
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {company.tagline} Soluções energéticas para empresas e residências,
            com liderança técnica de {company.leader}.
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
              <a href="#projetos">Ver Projetos</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl">
            <Image
              src={heroImage}
              alt="Instalação de energia solar — Alvor Soluções Energéticas"
              width={883}
              height={427}
              className="h-auto w-full object-cover"
              priority
            />
            <div className="grid grid-cols-2 gap-px bg-emerald-100">
              <div className="bg-white p-4 text-center">
                <p className="text-2xl font-bold text-emerald-700">77+</p>
                <p className="text-xs text-muted-foreground">Projetos no Instagram</p>
              </div>
              <div className="bg-white p-4 text-center">
                <p className="text-2xl font-bold text-cyan-700">24h</p>
                <p className="text-xs text-muted-foreground">Resposta do orçamento</p>
              </div>
              <div className="bg-white p-4 text-center">
                <p className="text-2xl font-bold text-slate-700">MG</p>
                <p className="text-xs text-muted-foreground">Base em Belo Horizonte</p>
              </div>
              <div className="bg-white p-4 text-center">
                <p className="text-2xl font-bold text-teal-700">BR</p>
                <p className="text-xs text-muted-foreground">Atendimento nacional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
