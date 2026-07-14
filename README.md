# Alvor Energia

Site institucional da **Alvor Energia** — energia solar e eficiência energética. Inclui landing page e Orçador Inteligente para captura de leads qualificados.

## Stack

- Next.js 14 (App Router, Server Components + Server Actions)
- TypeScript · Tailwind CSS · Shadcn/ui
- React Hook Form + Zod
- @vercel/blob (upload de arquivos)

## Setup local

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.local.example .env.local
# Edite .env.local com suas credenciais

# 3. Rodar em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

| Variável | Obrigatória | Descrição |
|---|---|---|
| `BLOB_READ_WRITE_TOKEN` | Produção | Token do Vercel Blob para upload de contas de luz |
| `NEXT_PUBLIC_SITE_URL` | Recomendada | URL pública do site (Open Graph) |

> Em desenvolvimento, sem `BLOB_READ_WRITE_TOKEN`, o upload é simulado (mock URL no console).

## Deploy na Vercel

1. Faça push do repositório para GitHub/GitLab/Bitbucket
2. Importe o projeto em [vercel.com/new](https://vercel.com/new)
3. Adicione as variáveis de ambiente no dashboard
4. Crie um **Blob Store** em Storage → Connect to Project (gera `BLOB_READ_WRITE_TOKEN` automaticamente)
5. Deploy!

```bash
# Alternativa via CLI (após npm i -g vercel)
vercel
vercel env pull
vercel --prod
```

## Estrutura principal

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── orcamento/page.tsx    # Página do Orçador (otimizada p/ WebView)
│   ├── actions/submit-quote.ts
│   └── layout.tsx
├── components/
│   ├── QuoteForm.tsx         # Formulário modular
│   ├── FileUpload.tsx        # Drag & drop de conta de luz
│   ├── Header.tsx / Footer.tsx
│   ├── sections/             # Seções da landing
│   └── ui/                   # Shadcn/ui components
└── lib/
    ├── quote-schema.ts       # Schema Zod compartilhado
    └── masks.ts              # Máscaras BR (telefone, moeda)
```

## Integrações futuras

O Server Action `submit-quote.ts` contém comentários indicando onde conectar:

- **Banco de dados** — Postgres (Neon/Supabase via Vercel Marketplace)
- **CRM** — HubSpot, Pipedrive
- **WhatsApp Business API** — notificação da equipe comercial
- **E-mail transacional** — Resend/SendGrid para confirmação ao cliente

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Landing institucional com scroll suave |
| `/orcamento` | Formulário isolado, otimizado para Instagram/Facebook WebView |
