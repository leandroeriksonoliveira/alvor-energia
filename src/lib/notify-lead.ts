import { company } from "@/lib/company";
import {
  formatCurrencyBRL,
  formatKwh,
  formatKwp,
  type PreliminaryEstimate,
} from "@/lib/quote-estimate";
import {
  PROPERTY_TYPE_LABELS,
  type PropertyType,
  type QuoteFormValues,
} from "@/lib/quote-schema";

/** Destino do e-mail de leads do Orçamento Inteligente. */
export const LEAD_NOTIFICATION_EMAIL = "oliveira.luiscarlos1972@gmail.com";

export type LeadNotificationPayload = QuoteFormValues & {
  estimate: PreliminaryEstimate;
  billFileUrl: string | null;
  submittedAt: string;
  source: string;
};

function whatsappDigits(): string {
  const phone =
    company.contact.phones.find((p) => p.label === "WhatsApp") ??
    company.contact.phones[1];
  return phone.link.replace(/\D/g, "");
}

export function buildLeadMessage(payload: LeadNotificationPayload): string {
  const { estimate } = payload;
  const propertyLabel = payload.propertyType
    ? PROPERTY_TYPE_LABELS[payload.propertyType as PropertyType]
    : "Não informado";

  return [
    `*Novo lead — Orçamento Inteligente*`,
    `Fonte: ${payload.source}`,
    ``,
    `*Cliente*`,
    `Nome: ${payload.fullName}`,
    `WhatsApp: ${payload.phone}`,
    `E-mail: ${payload.email || "Não informado"}`,
    `Cidade/UF: ${payload.cityState || "Não informado"}`,
    `Imóvel: ${propertyLabel}`,
    `Conta média: ${formatCurrencyBRL(payload.averageBill)}`,
    payload.billFileUrl ? `Arquivo conta: ${payload.billFileUrl}` : null,
    ``,
    `*Estimativa preliminar (apenas referência)*`,
    `Consumo: ${formatKwh(estimate.monthlyConsumptionKwh)}/mês`,
    `Sistema: ${formatKwp(estimate.systemSizeKwp)} (~${estimate.estimatedPanels} módulos)`,
    `Economia mensal (ref.): ${formatCurrencyBRL(estimate.estimatedMonthlySavings)}`,
    `Investimento (ref.): ${formatCurrencyBRL(estimate.estimatedInvestmentMin)} – ${formatCurrencyBRL(estimate.estimatedInvestmentMax)}`,
    `Retorno (ref.): ${estimate.estimatedPaybackYearsMin} – ${estimate.estimatedPaybackYearsMax} anos`,
    ``,
    `_Prévia apenas referencial. Necessária análise técnica e proposta formal._`,
    `Recebido em: ${new Date(payload.submittedAt).toLocaleString("pt-BR")}`,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export function buildWhatsAppLeadUrl(payload: LeadNotificationPayload): string {
  const text = buildLeadMessage(payload);
  return `https://wa.me/${whatsappDigits()}?text=${encodeURIComponent(text)}`;
}

async function sendEmailResend(subject: string, text: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const from =
    process.env.RESEND_FROM_EMAIL ??
    "Alvor Energia <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [LEAD_NOTIFICATION_EMAIL],
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("[notifyLead] Resend error:", response.status, body);
    return false;
  }

  return true;
}

/** Fallback sem API key (primeira confirmação no e-mail do destinatário). */
async function sendEmailFormSubmit(
  subject: string,
  text: string,
  payload: LeadNotificationPayload
): Promise<boolean> {
  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${LEAD_NOTIFICATION_EMAIL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: subject,
          _template: "table",
          name: payload.fullName,
          phone: payload.phone,
          email: payload.email || "nao-informado@alvorenergia.com.br",
          message: text,
        }),
      }
    );

    if (!response.ok) {
      const body = await response.text();
      console.error("[notifyLead] FormSubmit error:", response.status, body);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[notifyLead] FormSubmit exception:", error);
    return false;
  }
}

async function sendWhatsAppCloudApi(text: string): Promise<boolean> {
  const token = process.env.WHATSAPP_API_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const to = process.env.WHATSAPP_NOTIFY_TO ?? whatsappDigits();

  if (!token || !phoneNumberId) return false;

  const response = await fetch(
    `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body: text },
      }),
    }
  );

  if (!response.ok) {
    const body = await response.text();
    console.error("[notifyLead] WhatsApp Cloud API error:", response.status, body);
    return false;
  }

  return true;
}

export type NotifyLeadResult = {
  emailSent: boolean;
  whatsappApiSent: boolean;
  whatsappUrl: string;
};

/**
 * Notifica a equipe Alvor por e-mail e (se configurado) WhatsApp Business API.
 * Sempre retorna URL wa.me com o lead pré-preenchido para abertura no cliente.
 */
export async function notifyLead(
  payload: LeadNotificationPayload
): Promise<NotifyLeadResult> {
  const text = buildLeadMessage(payload);
  const subject = `Orçamento Inteligente — ${payload.fullName} (${formatCurrencyBRL(payload.averageBill)}/mês)`;
  const whatsappUrl = buildWhatsAppLeadUrl(payload);

  let emailSent = false;
  try {
    emailSent = await sendEmailResend(subject, text);
    if (!emailSent) {
      emailSent = await sendEmailFormSubmit(subject, text, payload);
    }
  } catch (error) {
    console.error("[notifyLead] Email exception:", error);
  }

  let whatsappApiSent = false;
  try {
    whatsappApiSent = await sendWhatsAppCloudApi(text);
  } catch (error) {
    console.error("[notifyLead] WhatsApp API exception:", error);
  }

  if (!emailSent) {
    console.warn(
      "[notifyLead] E-mail não enviado. Configure RESEND_API_KEY ou confirme FormSubmit no e-mail do destinatário."
    );
  }

  return { emailSent, whatsappApiSent, whatsappUrl };
}
