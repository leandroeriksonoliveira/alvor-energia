import { z } from "zod";

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
    .min(1, "Informe seu telefone/WhatsApp")
    .regex(phoneRegex, "Telefone inválido. Use o formato (XX) XXXXX-XXXX"),
  email: z
    .string()
    .min(1, "Informe seu e-mail")
    .email("E-mail inválido"),
  cityState: z
    .string()
    .min(1, "Informe sua cidade e estado")
    .min(3, "Cidade/Estado deve ter pelo menos 3 caracteres"),
  propertyType: z.enum(PROPERTY_TYPES, {
    errorMap: () => ({ message: "Selecione o tipo de imóvel" }),
  }),
  averageBill: z
    .number({ invalid_type_error: "Informe o valor médio da conta de luz" })
    .min(50, "Valor mínimo de R$ 50,00")
    .max(999999, "Valor muito alto"),
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
  if (!file) {
    return "Envie a conta de luz (PDF, PNG ou JPG)";
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

  return quoteFormSchema.safeParse({
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    cityState: formData.get("cityState"),
    propertyType: formData.get("propertyType"),
    averageBill,
  });
}

export type QuoteSubmitState = {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
  fileError?: string;
};

export const initialQuoteState: QuoteSubmitState = {
  success: false,
  message: "",
};
