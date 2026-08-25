import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, heroImage, heroStats } from "@/lib/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden mesh-bg">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--background))_100%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:py-12 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <span className="section-label inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-3 py-1 shadow-sm">
            <Sun className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
            Energia fotovoltaica On-Grid / Off-Grid
          </span>

          <h1 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            {company.headline}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {company.subheadline} Liderança técnica de{" "}
            <strong className="font-semibold text-foreground">
              {company.leader}
            </strong>
            , {company.leaderRole.toLowerCase()}.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gradient-brand shadow-lg shadow-emerald-900/10 hover:opacity-95"
            >
              <Link href="/orcamento">
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/80">
              <a href="#processo">Como funciona</a>
            </Button>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-emerald-100/80 bg-white/80 px-3 py-2.5"
              >
                <dt className="text-lg font-bold tracking-tight text-emerald-700 sm:text-xl">
                  {stat.value}
                </dt>
                <dd className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-emerald-400/20 via-amber-300/15 to-teal-400/20 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white shadow-xl shadow-slate-900/10">
            <Image
              src={heroImage}
              alt="Instalação fotovoltaica — Alvor Soluções Energéticas"
              width={883}
              height={427}
              className="aspect-[16/9] h-auto w-full object-cover"
              priority
            />
            <div className="border-t border-emerald-100 bg-gradient-to-r from-emerald-950 to-teal-900 px-4 py-3 text-white sm:px-5">
              <p className="text-sm font-medium text-emerald-100">
                {company.tagline}
              </p>
              <p className="mt-0.5 text-xs text-emerald-200/80">
                Projeto · Instalação · Operação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
