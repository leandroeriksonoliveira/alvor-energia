import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, heroImage, heroStats } from "@/lib/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden mesh-bg">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--background))_100%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <span className="section-label inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-4 py-1.5 shadow-sm">
            <Sun className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
            Energia fotovoltaica On-Grid
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem]">
            {company.headline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {company.subheadline} Liderança técnica de{" "}
            <strong className="font-semibold text-foreground">
              {company.leader}
            </strong>
            , {company.leaderRole.toLowerCase()}.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-2xl p-4">
                <dt className="text-2xl font-bold tracking-tight text-emerald-700">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/25 via-amber-300/20 to-teal-400/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-2xl shadow-slate-900/10">
            <Image
              src={heroImage}
              alt="Instalação fotovoltaica — Alvor Soluções Energéticas"
              width={883}
              height={427}
              className="h-auto w-full object-cover"
              priority
            />
            <div className="border-t border-emerald-100 bg-gradient-to-r from-emerald-950 to-teal-900 px-6 py-5 text-white">
              <p className="text-sm font-medium text-emerald-100">
                {company.tagline}
              </p>
              <p className="mt-1 text-xs text-emerald-200/80">
                Projeto · Instalação · Operação — {company.location.full}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
