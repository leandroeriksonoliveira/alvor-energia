"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useFormState } from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import {
  submitQuote,
  initialQuoteState,
} from "@/app/actions/submit-quote";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FileUpload } from "@/components/FileUpload";
import {
  quoteFormSchema,
  PROPERTY_TYPES,
  PROPERTY_TYPE_LABELS,
  type QuoteFormValues,
} from "@/lib/quote-schema";
import { maskPhoneBR, maskCurrencyBR, parseCurrencyBR } from "@/lib/masks";
import { cn } from "@/lib/utils";

interface QuoteFormProps {
  className?: string;
  compact?: boolean;
}

function SubmitButton({ disabled, pending }: { disabled?: boolean; pending: boolean }) {
  return (
    <Button
      type="submit"
      size="lg"
      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
      disabled={pending || disabled}
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin" aria-hidden="true" />
          Enviando...
        </>
      ) : (
        "Gerar Orçamento Rápido"
      )}
    </Button>
  );
}

export function QuoteForm({ className, compact = false }: QuoteFormProps) {
  const [state, formAction] = useFormState(submitQuote, initialQuoteState);
  const [isPending, startTransition] = useTransition();
  const [showSuccess, setShowSuccess] = useState(false);
  const [billFile, setBillFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      cityState: "",
      propertyType: undefined,
      averageBill: undefined,
      lgpdConsent: undefined,
    },
  });

  const propertyType = watch("propertyType");
  const phoneValue = watch("phone");
  const averageBillValue = watch("averageBill");

  useEffect(() => {
    if (state.success) {
      setShowSuccess(true);
    }
  }, [state.success]);

  const handleSuccessClose = () => {
    setShowSuccess(false);
    reset();
    setBillFile(null);
    formRef.current?.reset();
  };

  const onSubmit = (data: QuoteFormValues) => {
    if (!billFile) {
      setFileError("Envie a conta de luz (PDF, PNG ou JPG)");
      return;
    }
    setFileError(null);

    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("cityState", data.cityState);
    formData.append("propertyType", data.propertyType);
    formData.append(
      "averageBill",
      data.averageBill.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );
    formData.append("billFile", billFile);
    formData.append("lgpdConsent", "true");

    startTransition(() => {
      formAction(formData);
    });
  };

  const serverFieldError = (field: keyof QuoteFormValues) =>
    state.fieldErrors?.[field]?.[0];

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className={cn("space-y-5", className)}
        noValidate
      >
        {!compact && (
          <div className="mb-2">
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              Orçador Inteligente
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Preencha os dados abaixo e receba uma proposta personalizada em
              até 24 horas.
            </p>
          </div>
        )}

        {state.message && !state.success && (
          <div
            role="alert"
            className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          >
            {state.message}
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="fullName">Nome completo *</Label>
            <Input
              id="fullName"
              placeholder="Seu nome completo"
              autoComplete="name"
              aria-invalid={!!errors.fullName || !!serverFieldError("fullName")}
              aria-describedby={
                errors.fullName || serverFieldError("fullName")
                  ? "fullName-error"
                  : undefined
              }
              {...register("fullName")}
            />
            {(errors.fullName || serverFieldError("fullName")) && (
              <p id="fullName-error" className="text-sm text-destructive">
                {errors.fullName?.message || serverFieldError("fullName")}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone / WhatsApp *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="(00) 00000-0000"
              autoComplete="tel"
              value={phoneValue || ""}
              aria-invalid={!!errors.phone || !!serverFieldError("phone")}
              aria-describedby={
                errors.phone || serverFieldError("phone")
                  ? "phone-error"
                  : undefined
              }
              onChange={(e) => {
                const masked = maskPhoneBR(e.target.value);
                setValue("phone", masked, { shouldValidate: true });
              }}
            />
            {(errors.phone || serverFieldError("phone")) && (
              <p id="phone-error" className="text-sm text-destructive">
                {errors.phone?.message || serverFieldError("phone")}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              inputMode="email"
              placeholder="seu@email.com"
              autoComplete="email"
              aria-invalid={!!errors.email || !!serverFieldError("email")}
              aria-describedby={
                errors.email || serverFieldError("email")
                  ? "email-error"
                  : undefined
              }
              {...register("email")}
            />
            {(errors.email || serverFieldError("email")) && (
              <p id="email-error" className="text-sm text-destructive">
                {errors.email?.message || serverFieldError("email")}
              </p>
            )}
          </div>

          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="cityState">Cidade / Estado *</Label>
            <Input
              id="cityState"
              placeholder="Ex: São Paulo, SP"
              autoComplete="address-level2"
              aria-invalid={
                !!errors.cityState || !!serverFieldError("cityState")
              }
              aria-describedby={
                errors.cityState || serverFieldError("cityState")
                  ? "cityState-error"
                  : undefined
              }
              {...register("cityState")}
            />
            {(errors.cityState || serverFieldError("cityState")) && (
              <p id="cityState-error" className="text-sm text-destructive">
                {errors.cityState?.message || serverFieldError("cityState")}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <Label>Tipo de imóvel *</Label>
          <RadioGroup
            value={propertyType}
            onValueChange={(value) =>
              setValue("propertyType", value as QuoteFormValues["propertyType"], {
                shouldValidate: true,
              })
            }
            className="grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {PROPERTY_TYPES.map((type) => (
              <label
                key={type}
                htmlFor={type}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-3 text-sm transition-all hover:border-primary/50",
                  propertyType === type
                    ? "border-primary bg-primary/5 font-medium"
                    : "border-input"
                )}
              >
                <RadioGroupItem value={type} id={type} />
                {PROPERTY_TYPE_LABELS[type]}
              </label>
            ))}
          </RadioGroup>
          <input type="hidden" name="propertyType" value={propertyType || ""} />
          {(errors.propertyType || serverFieldError("propertyType")) && (
            <p className="text-sm text-destructive">
              {errors.propertyType?.message ||
                serverFieldError("propertyType")}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="averageBill">Valor médio da conta de luz *</Label>
          <Input
            id="averageBill"
            name="averageBill"
            inputMode="numeric"
            placeholder="R$ 0,00"
            value={
              averageBillValue
                ? maskCurrencyBR(String(Math.round(averageBillValue * 100)))
                : ""
            }
            aria-invalid={
              !!errors.averageBill || !!serverFieldError("averageBill")
            }
            aria-describedby={
              errors.averageBill || serverFieldError("averageBill")
                ? "averageBill-error"
                : undefined
            }
            onChange={(e) => {
              const parsed = parseCurrencyBR(e.target.value);
              setValue("averageBill", parsed, { shouldValidate: true });
            }}
          />
          {(errors.averageBill || serverFieldError("averageBill")) && (
            <p id="averageBill-error" className="text-sm text-destructive">
              {errors.averageBill?.message ||
                serverFieldError("averageBill")}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="billFile">Conta de luz *</Label>
          <FileUpload
            onFileChange={(file) => {
              setBillFile(file);
              if (file) setFileError(null);
            }}
            error={state.fileError || fileError || undefined}
          />
        </div>

        <div className="space-y-3 rounded-lg border bg-muted/30 p-4">
          <Controller
            name="lgpdConsent"
            control={control}
            render={({ field }) => (
              <label className="flex cursor-pointer items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={field.value === true}
                  onChange={(e) => field.onChange(e.target.checked ? true : undefined)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-input accent-emerald-600"
                  aria-invalid={!!errors.lgpdConsent || !!serverFieldError("lgpdConsent")}
                />
                <span className="leading-relaxed text-muted-foreground">
                  Autorizo o tratamento dos meus dados pessoais pela{" "}
                  <strong className="text-foreground">Alvor Soluções Energéticas</strong>{" "}
                  para elaboração de proposta comercial, contato por telefone,
                  WhatsApp ou e-mail, conforme a{" "}
                  <Link
                    href="/privacidade"
                    target="_blank"
                    className="font-medium text-emerald-600 underline-offset-2 hover:underline"
                  >
                    Política de Privacidade
                  </Link>{" "}
                  e a LGPD (Lei nº 13.709/2018). *
                </span>
              </label>
            )}
          />
          {(errors.lgpdConsent || serverFieldError("lgpdConsent")) && (
            <p className="text-sm text-destructive">
              {errors.lgpdConsent?.message || serverFieldError("lgpdConsent")}
            </p>
          )}
        </div>

        <SubmitButton pending={isPending} />
      </form>

      <Dialog
        open={showSuccess}
        onOpenChange={(open) => {
          if (!open) handleSuccessClose();
          else setShowSuccess(true);
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-emerald-700">
              Orçamento solicitado!
            </DialogTitle>
            <DialogDescription className="pt-2 text-base leading-relaxed text-foreground">
              {state.message}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={handleSuccessClose}
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              Entendido
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
