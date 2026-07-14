import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, projects } from "@/lib/company";

export function Projects() {
  return (
    <section id="projetos" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Projetos
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Obras e instalações reais
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Confira alguns dos projetos da {company.shortName}. Mais de{" "}
              {company.stats.posts} publicações com obras, instalações e
              resultados no Instagram.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              @alvorenergia
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-600">
                  {project.location}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
