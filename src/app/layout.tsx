import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://alvor-energia.vercel.app"
  ),
  title: {
    default: "Alvor Soluções Energéticas | Energia Fotovoltaica",
    template: "%s | Alvor Energia",
  },
  description:
    "Energia fotovoltaica com eficiência e rentabilidade. Projeto, instalação, operação e manutenção — experiência nacional e internacional. Belo Horizonte — MG.",
  keywords: [
    "energia fotovoltaica",
    "energia solar",
    "Alvor Soluções Energéticas",
    "Belo Horizonte",
    "Luís Carlos de Oliveira",
    "sistema on-grid",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Alvor Soluções Energéticas",
    title: "Alvor Soluções Energéticas | Energia Fotovoltaica",
    description:
      "Do projeto à operação: sistemas solares com engenharia completa e garantia Alvor.",
    images: [{ url: "/images/logo-alvor.jpg", alt: "Alvor Soluções Energéticas" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
