"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  COOKIE_CONSENT_KEY,
  type CookieConsentValue,
  setCookieConsent,
} from "@/lib/consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  const save = (value: CookieConsentValue) => {
    setCookieConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 p-4 shadow-lg backdrop-blur-md sm:p-6"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h2 id="cookie-consent-title" className="text-sm font-semibold text-foreground">
            Cookies e privacidade (LGPD)
          </h2>
          <p id="cookie-consent-desc" className="text-sm leading-relaxed text-muted-foreground">
            Utilizamos cookies essenciais para o funcionamento do site e armazenamento
            local da sua preferência de consentimento. Ao continuar, você concorda com
            nossa{" "}
            <Link href="/privacidade" className="font-medium text-emerald-600 underline-offset-2 hover:underline">
              Política de Privacidade
            </Link>
            , em conformidade com a Lei nº 13.709/2018 (LGPD).
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button
            variant="outline"
            size="sm"
            onClick={() => save("rejected")}
            className="w-full sm:w-auto"
          >
            Recusar opcionais
          </Button>
          <Button
            size="sm"
            onClick={() => save("accepted")}
            className="w-full bg-emerald-600 hover:bg-emerald-700 sm:w-auto"
          >
            Aceitar cookies
          </Button>
        </div>
      </div>
    </div>
  );
}
