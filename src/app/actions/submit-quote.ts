"use server";

import { put } from "@vercel/blob";
import {
  initialQuoteState,
  parseQuoteFormData,
  validateBillFile,
  type QuoteSubmitState,
} from "@/lib/quote-schema";

/**
 * Server Action: submit quote form with file upload.
 *
 * Integration points:
 * - Database: persist lead to Postgres (Neon/Supabase via Vercel Marketplace)
 * - CRM: sync to HubSpot, Pipedrive, etc.
 * - WhatsApp Business API: notify sales team
 * - Transactional email: Resend, SendGrid for confirmation
 */
export async function submitQuote(
  _prevState: QuoteSubmitState,
  formData: FormData
): Promise<QuoteSubmitState> {
  try {
    const parsed = parseQuoteFormData(formData);

    if (!parsed.success) {
      const fieldErrors: Record<string, string[]> = {};
      parsed.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        if (!fieldErrors[field]) fieldErrors[field] = [];
        fieldErrors[field].push(err.message);
      });

      return {
        success: false,
        message: "Verifique os campos destacados e tente novamente.",
        fieldErrors,
      };
    }

    const billFile = formData.get("billFile") as File | null;
    const fileError = validateBillFile(
      billFile && billFile.size > 0 ? billFile : null
    );

    if (fileError) {
      return {
        success: false,
        message: fileError,
        fileError,
      };
    }

    let blobUrl: string | null = null;

    if (billFile && billFile.size > 0) {
      const token = process.env.BLOB_READ_WRITE_TOKEN;

      if (!token) {
        console.warn(
          "[submitQuote] BLOB_READ_WRITE_TOKEN not set — skipping upload in dev"
        );
        blobUrl = `mock://bill-upload/${Date.now()}-${billFile.name}`;
      } else {
        const blob = await put(
          `quotes/${Date.now()}-${billFile.name}`,
          billFile,
          {
            access: "public",
            token,
          }
        );
        blobUrl = blob.url;
      }
    }

    const leadPayload = {
      ...parsed.data,
      billFileUrl: blobUrl,
      submittedAt: new Date().toISOString(),
      source: "website-orcador",
    };

    // TODO: Integrate with database
    // await db.insert(leads).values(leadPayload);
    console.log("[submitQuote] Lead captured:", JSON.stringify(leadPayload));

    // TODO: Integrate WhatsApp Business API
    // await notifyWhatsAppTeam(leadPayload);

    // TODO: Integrate transactional email
    // await sendConfirmationEmail(parsed.data.email);

    return {
      success: true,
      message:
        "Obrigado! Nossa equipe técnica liderada por Luis Carlos de Oliveira entrará em contato em até 24h com sua proposta comercial personalizada.",
    };
  } catch (error) {
    console.error("[submitQuote] Error:", error);
    return {
      success: false,
      message:
        "Ocorreu um erro ao enviar seu orçamento. Por favor, tente novamente.",
    };
  }
}

export { initialQuoteState };
