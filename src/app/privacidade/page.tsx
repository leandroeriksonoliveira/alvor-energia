import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade e tratamento de dados pessoais da Alvor Soluções Energéticas, em conformidade com a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-bold text-foreground">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última atualização: julho de 2026 · Lei nº 13.709/2018 (LGPD)
        </p>

        <div className="prose prose-slate mt-8 max-w-none space-y-6 text-sm leading-relaxed text-muted-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_strong]:text-foreground">
          <section>
            <h2>1. Controlador dos dados</h2>
            <p>
              <strong>{company.name}</strong>, com sede em {company.location.full},
              CEP {company.location.zip}, é a controladora dos dados pessoais
              coletados neste site. Contato do encarregado/DPO:{" "}
              <a href={`mailto:${company.contact.email}`} className="text-emerald-600 hover:underline">
                {company.contact.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2>2. Dados coletados</h2>
            <p>Podemos coletar, conforme o uso do site:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Nome, telefone, e-mail, cidade/estado e dados da conta de luz (formulário de orçamento);</li>
              <li>Arquivo enviado (conta de luz em PDF ou imagem);</li>
              <li>Preferência de consentimento de cookies (armazenamento local);</li>
              <li>Dados técnicos de navegação essenciais ao funcionamento do site.</li>
            </ul>
          </section>

          <section>
            <h2>3. Finalidade e base legal</h2>
            <p>Seus dados são tratados para:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Elaborar proposta comercial de energia solar/eólica (execução de procedimentos preliminares e consentimento);</li>
              <li>Contato comercial por telefone, WhatsApp ou e-mail (consentimento);</li>
              <li>Cumprir obrigações legais e exercer direitos em processos;</li>
              <li>Garantir segurança e funcionamento do site (legítimo interesse).</li>
            </ul>
          </section>

          <section>
            <h2>4. Compartilhamento</h2>
            <p>
              Os dados podem ser compartilhados com prestadores de serviços
              (hospedagem, armazenamento de arquivos, ferramentas de comunicação)
              estritamente para as finalidades descritas, sempre com medidas de
              segurança adequadas.
            </p>
          </section>

          <section>
            <h2>5. Retenção</h2>
            <p>
              Os dados são mantidos pelo tempo necessário para a finalidade do
              tratamento ou conforme exigência legal. Você pode solicitar exclusão
              quando aplicável.
            </p>
          </section>

          <section>
            <h2>6. Seus direitos (LGPD)</h2>
            <p>Você pode solicitar, a qualquer momento:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Confirmação da existência de tratamento;</li>
              <li>Acesso, correção ou anonimização de dados;</li>
              <li>Portabilidade, eliminação ou revogação do consentimento;</li>
              <li>Informação sobre compartilhamentos e revisão de decisões automatizadas.</li>
            </ul>
            <p className="mt-2">
              Envie solicitações para{" "}
              <a href={`mailto:${company.contact.email}`} className="text-emerald-600 hover:underline">
                {company.contact.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2>7. Cookies</h2>
            <p>
              Utilizamos cookies essenciais e armazenamento local para registrar
              sua preferência de privacidade. Cookies opcionais de analytics só
              serão ativados após seu consentimento explícito no banner exibido
              no site.
            </p>
          </section>

          <section>
            <h2>8. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus
              dados contra acesso não autorizado, perda ou alteração indevida.
            </p>
          </section>
        </div>

        <p className="mt-10 text-sm">
          <Link href="/" className="font-medium text-emerald-600 hover:underline">
            ← Voltar ao site
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
