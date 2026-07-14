import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { company } from "@/lib/company";
import { veltro } from "@/lib/consent";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo size="md" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {company.description}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Liderança: <strong className="text-foreground">{company.leader}</strong>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {company.contact.phones.map((phone, i) => (
                <li key={phone} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  <a
                    href={`tel:${company.contact.phoneLinks[i]}`}
                    className="hover:text-foreground"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                <a
                  href={`mailto:${company.contact.email}`}
                  className="hover:text-foreground"
                >
                  {company.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                <span>
                  {company.location.full}
                  <br />
                  CEP {company.location.zip}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Redes sociais</h3>
            <div className="mt-4 flex gap-3">
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:border-emerald-500 hover:text-emerald-600"
                aria-label="Instagram @alvorenergia"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:border-emerald-500 hover:text-emerald-600"
                aria-label="LinkedIn Luis Carlos de Oliveira"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 text-sm">
              <Link
                href="/orcamento"
                className="font-medium text-emerald-600 hover:underline"
              >
                Solicite seu orçamento gratuito →
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-3 border-t pt-6 text-center text-xs text-muted-foreground">
          <p>
            © {currentYear} {company.name}. Todos os direitos reservados.{" "}
            <Link href="/privacidade" className="hover:text-foreground hover:underline">
              Política de Privacidade
            </Link>
          </p>
          <p>
            Powered by{" "}
            <a
              href={veltro.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-emerald-600 hover:underline"
            >
              {veltro.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
