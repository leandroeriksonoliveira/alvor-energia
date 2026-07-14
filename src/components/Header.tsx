import Link from "next/link";
import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-foreground transition-opacity hover:opacity-80"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-600 text-white">
            <Sun className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg">
            Alvor <span className="text-emerald-600">Energia</span>
          </span>
        </Link>

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
