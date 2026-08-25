import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, projects } from "@/lib/company";

export function Projects() {
  return (
    <section id="projetos" className="bg-slate-50/80 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="section-label">Expertise</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Engenharia aplicada em campo
            </h2>
            <p className="mt-4 text-muted-foreground">
              Da estrutura metálica à energização On-Grid — a {company.shortName}{" "}
              entrega projetos com acompanhamento técnico em todas as etapas.
              Acompanhe novidades e obras no Instagram.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 bg-white">
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

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden bg-muted ${
                  index === 0 ? "aspect-[21/10]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={
                    index === 0
                      ? "(max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 1024px) 100vw, 33vw"
                  }
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
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
