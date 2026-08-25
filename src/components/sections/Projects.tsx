import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, projectGallery } from "@/lib/company";

function GalleryCard({
  project,
  className,
}: {
  project: (typeof projectGallery)[number];
  className?: string;
}) {
  const isExternal = project.href.startsWith("http");

  return (
    <Link
      href={project.href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`group relative overflow-hidden rounded-2xl ${className ?? ""}`}
    >
      <Image
        src={project.image}
        alt={project.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/10 transition-opacity group-hover:via-slate-950/50" />

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <span className="inline-block rounded-full bg-emerald-500/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
          {project.tag}
        </span>
        <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">
          {project.title}
        </h3>
        <p className="mt-1 max-w-md text-xs leading-relaxed text-slate-200 sm:text-sm">
          {project.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 transition-colors group-hover:text-white sm:text-sm">
          {project.cta}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export function Projects() {
  const [featured, inverter, ground] = projectGallery;

  return (
    <section id="projetos" className="section bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="section-header flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="section-label">Obras reais</span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              Projetos executados pela Alvor
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Instalações em solo, infraestrutura elétrica e usinas de grande
              porte — clique para solicitar um projeto ou conhecer nosso
              processo.
            </p>
          </div>
          <Button asChild variant="outline" size="sm" className="shrink-0 bg-white">
            <Link
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Mais obras no Instagram
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-3 lg:grid-cols-4 lg:grid-rows-2 lg:gap-4">
          <GalleryCard
            project={featured}
            className="relative min-h-[240px] lg:col-span-2 lg:row-span-2 lg:min-h-[420px]"
          />
          <GalleryCard
            project={inverter}
            className="relative min-h-[200px] lg:col-span-2 lg:min-h-[200px]"
          />

          <GalleryCard
            project={ground}
            className="relative min-h-[180px] lg:min-h-[200px]"
          />

          <Link
            href={company.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[180px] flex-col justify-between rounded-2xl gradient-brand p-4 text-white shadow-lg shadow-emerald-900/15 transition-transform hover:-translate-y-0.5 lg:min-h-[200px] lg:p-5"
          >
            <div>
              <Instagram className="h-6 w-6 text-emerald-100" aria-hidden="true" />
              <h3 className="mt-3 text-base font-semibold sm:text-lg">
                Acompanhe novas instalações
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-emerald-50 sm:text-sm">
                Obras, energização e bastidores técnicos no perfil @alvorenergia.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:text-white sm:text-sm">
              Seguir no Instagram
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
