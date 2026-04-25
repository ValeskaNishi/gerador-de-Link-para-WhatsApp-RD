export interface WhatsAppFormData {
  name: string;
  phone: string;
  position: string;
  message: string;
}

export interface WhatsAppLinkResponse {
  success: boolean;
  link: string;
  error?: string;
}
