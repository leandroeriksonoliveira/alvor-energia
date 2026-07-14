import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo size="md" />

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
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

        <Button
          asChild
          size="sm"
          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
        >
          <Link href="/orcamento">Solicitar Orçamento</Link>
        </Button>
      </div>
    </header>
  );
}
