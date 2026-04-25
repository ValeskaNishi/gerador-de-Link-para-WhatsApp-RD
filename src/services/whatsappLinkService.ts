import type { WhatsAppFormData } from "@/types/whatsapp";
import { normalizePhone } from "@/utils";

const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL ?? "";

export function buildWhatsAppLink(phone: string, message?: string): string {
  const normalizedPhone = normalizePhone(phone);
  const trimmedMessage = message?.trim();

  return trimmedMessage
    ? `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(trimmedMessage)}`
    : `https://wa.me/${normalizedPhone}`;
}

export async function sendLeadToZapier(data: WhatsAppFormData): Promise<void> {
  try {
    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error(
        `[Zapier] Webhook respondeu com status inesperado: ${response.status}`,
      );
    }
  } catch (error) {
    console.error("[Zapier] Falha ao enviar lead:", error);
  }
}
