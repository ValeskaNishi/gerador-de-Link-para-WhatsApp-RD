import type { WhatsAppFormData } from "@/types/whatsapp";

export interface useWhatsAppLinkReturn {
  submitForm: (data: WhatsAppFormData) => Promise<void>;
  isSubmitting: boolean;
  submitError: string | null;
}
