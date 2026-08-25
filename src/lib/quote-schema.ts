import { z } from "zod";
import type { PreliminaryEstimate } from "@/lib/quote-estimate";

export const PROPERTY_TYPES = [
  "residential",
  "commercial",
  "industrial",
  "rural",
] as const;

export type PropertyType = (typeof PROPERTY_TYPES)[number];

export const PROPERTY_TYPE_LABELS: Record<PropertyType, string> = {
  residential: "Residencial",
  commercial: "Comercial",
  industrial: "Industrial",
  rural: "Rural",
};

const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(1, "Informe seu nome completo")
    .min(3, "Nome deve ter pelo menos 3 caracteres"),
  phone: z
    .string()
    .min(1, "Informe seu WhatsApp")
    .regex(phoneRegex, "WhatsApp inválido. Use o formato (XX) XXXXX-XXXX"),
  email: z
    .string()
    .trim()
    .refine(
      (value) => value === "" || z.string().email().safeParse(value).success,
      "E-mail inválido"
    )
    .optional(),
  cityState: z.string().trim().optional(),
  propertyType: z.enum(PROPERTY_TYPES).optional(),
  averageBill: z
    .number({ invalid_type_error: "Informe o valor médio da conta de luz" })
    .min(50, "Valor mínimo de R$ 50,00")
    .max(999999, "Valor muito alto"),
  lgpdConsent: z.literal(true, {
    errorMap: () => ({
      message:
        "É necessário autorizar o tratamento dos seus dados conforme a LGPD",
    }),
  }),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/jpg",
] as const;

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const ALLOWED_EXTENSIONS = [".pdf", ".png", ".jpg", ".jpeg"];

export function validateBillFile(file: File | null): string | null {
  if (!file || file.size === 0) {
    return null;
  }

  if (file.size > MAX_FILE_SIZE) {
    return "Arquivo muito grande. Tamanho máximo: 10MB";
  }

  const extension = `.${file.name.split(".").pop()?.toLowerCase() ?? ""}`;
  const isValidType =
    ALLOWED_FILE_TYPES.includes(
      file.type as (typeof ALLOWED_FILE_TYPES)[number]
    ) || ALLOWED_EXTENSIONS.includes(extension);

  if (!isValidType) {
    return "Formato inválido. Use PDF, PNG ou JPG";
  }

  return null;
}

export function parseQuoteFormData(formData: FormData) {
  const averageBillRaw = formData.get("averageBill") as string;
  const digits = averageBillRaw?.replace(/\D/g, "") ?? "";
  const averageBill = digits ? parseInt(digits, 10) / 100 : NaN;

  const lgpdConsent = formData.get("lgpdConsent") === "true";
  const propertyTypeRaw = formData.get("propertyType") as string;

  return quoteFormSchema.safeParse({
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    email: (formData.get("email") as string) || undefined,
    cityState: (formData.get("cityState") as string) || undefined,
    propertyType:
      propertyTypeRaw && PROPERTY_TYPES.includes(propertyTypeRaw as PropertyType)
        ? propertyTypeRaw
        : undefined,
    averageBill,
    lgpdConsent,
  });
}

export type QuoteSubmitState = {
  success: boolean;
  message: string;
  estimate?: PreliminaryEstimate;
  whatsappUrl?: string;
  fieldErrors?: Record<string, string[]>;
  fileError?: string;
};

export const initialQuoteState: QuoteSubmitState = {
  success: false,
  message: "",
};
