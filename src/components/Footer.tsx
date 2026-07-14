import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone, Sun } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-bold text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-600 text-white">
                <Sun className="h-5 w-5" aria-hidden="true" />
              </span>
              Alvor Energia
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Energia solar e eficiência energética com excelência técnica.
              Liderança de Luis Carlos de Oliveira.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                <a href="tel:+5500000000000" className="hover:text-foreground">
                  (00) 0000-0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                <a
                  href="mailto:contato@alvor-energia.com.br"
                  className="hover:text-foreground"
                >
                  contato@alvor-energia.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                <span>Brasil — Atendimento em todo o território nacional</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Redes sociais</h3>
            <div className="mt-4 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:border-emerald-500 hover:text-emerald-600"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:border-emerald-500 hover:text-emerald-600"
                aria-label="LinkedIn"
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

        <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
          © {currentYear} Alvor Energia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
