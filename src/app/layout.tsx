import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://alvor-energia.vercel.app"
  ),
  title: {
    default: "Alvor Soluções Energéticas | Energia Solar e Eólica",
    template: "%s | Alvor Energia",
  },
  description:
    "Se tudo gira em torno do Sol, porque a sua energia não? Energia solar e eólica em Belo Horizonte e todo o Brasil. Liderança de Luis Carlos de Oliveira.",
  keywords: [
    "energia solar",
    "energia eólica",
    "Alvor Soluções Energéticas",
    "Alvor Energia",
    "Belo Horizonte",
    "Luis Carlos de Oliveira",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Alvor Soluções Energéticas",
    title: "Alvor Soluções Energéticas | Energia Solar e Eólica",
    description:
      "Deixe o sol e o vento pagarem sua conta de energia. Orçamento gratuito em até 24h.",
    images: [{ url: "/images/logo-full.png", alt: "Alvor Soluções Energéticas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvor Soluções Energéticas",
    description:
      "Energia solar e eólica. Belo Horizonte — MG. Atendimento em todo o Brasil.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
