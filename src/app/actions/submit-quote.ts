"use server";

import { put } from "@vercel/blob";
import { calculatePreliminaryEstimate } from "@/lib/quote-estimate";
import { notifyLead } from "@/lib/notify-lead";
import {
  initialQuoteState,
  parseQuoteFormData,
  validateBillFile,
  type QuoteSubmitState,
} from "@/lib/quote-schema";

/**
 * Server Action: submit quote form with file upload and team notification.
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

    const estimate = calculatePreliminaryEstimate(
      parsed.data.averageBill,
      parsed.data.propertyType
    );

    const leadPayload = {
      ...parsed.data,
      estimate,
      billFileUrl: blobUrl,
      submittedAt: new Date().toISOString(),
      source: "website-orcamento-inteligente",
    };

    console.log("[submitQuote] Lead captured:", JSON.stringify(leadPayload));

    const notification = await notifyLead(leadPayload);

    return {
      success: true,
      estimate,
      whatsappUrl: notification.whatsappUrl,
      message:
        "Obrigado! Recebemos suas informações. A prévia abaixo é apenas uma referência — será necessária análise técnica adicional e envio de proposta formal pela equipe Alvor. Seus dados foram encaminhados por e-mail e WhatsApp. Entraremos em contato em até 24h.",
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
