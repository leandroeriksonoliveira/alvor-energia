import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { company } from "@/lib/company";

const navLinks = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Segmentos" },
  { href: "#processo", label: "Processo" },
  { href: "#projetos", label: "Expertise" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const commercial = company.contact.phones[0];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo size="md" />

        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label="Principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${commercial.link}`}
            className="hidden items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            <Phone className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            {commercial.value}
          </a>
          <Button
            asChild
            size="sm"
            className="gradient-brand shadow-sm hover:opacity-95"
          >
            <Link href="/orcamento">Orçamento</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
