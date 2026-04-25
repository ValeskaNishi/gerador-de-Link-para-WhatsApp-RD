import { useState, useCallback } from "react";
import type { WhatsAppFormData, WhatsAppLinkResponse } from "@/types/whatsapp";
import type { useWhatsAppLinkReturn } from "./interfaces";

export function useWhatsAppLink(
  onSuccess: (link: string) => void,
): useWhatsAppLinkReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const submitForm = useCallback(
    async (data: WhatsAppFormData) => {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const response = await fetch("/api/whatsapp-link", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (response.status >= 500) {
          setSubmitError("Erro no servidor. Tente novamente em instantes.");
          return;
        }

        const result: WhatsAppLinkResponse = await response.json();

        if (!result.success) {
          setSubmitError(
            result.error ?? "Erro ao gerar link. Tente novamente.",
          );
          return;
        }

        onSuccess(result.link);
      } catch {
        setSubmitError(
          "Erro de conexão. Verifique sua internet e tente novamente.",
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [onSuccess],
  );

  return {
    submitForm,
    isSubmitting,
    submitError,
  };
}
