import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    default: "Alvor Energia | Energia Solar e Eficiência Energética",
    template: "%s | Alvor Energia",
  },
  description:
    "Energia solar e eficiência energética com excelência técnica. Liderança de Luis Carlos de Oliveira. Reduza sua conta de luz em até 95%.",
  keywords: [
    "energia solar",
    "painéis solares",
    "eficiência energética",
    "Alvor Energia",
    "Luis Carlos de Oliveira",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Alvor Energia",
    title: "Alvor Energia | Energia Solar e Eficiência Energética",
    description:
      "Transição energética inteligente. Solicite seu orçamento gratuito e receba proposta personalizada em até 24h.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvor Energia | Energia Solar",
    description:
      "Reduza sua conta de luz em até 95% com energia solar. Orçamento gratuito em 24h.",
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
      </body>
    </html>
  );
}
