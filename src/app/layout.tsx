import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alvorenergia.com.br"
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
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
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
