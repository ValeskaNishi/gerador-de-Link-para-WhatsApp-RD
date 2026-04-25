import {
  buildWhatsAppLink,
  sendLeadToZapier,
} from "@/services/whatsappLinkService";
import type { WhatsAppFormData, WhatsAppLinkResponse } from "@/types/whatsapp";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (request.headers.get("content-type") !== "application/json") {
    return NextResponse.json<WhatsAppLinkResponse>(
      { success: false, link: "", error: "Content-Type deve ser application/json." },
      { status: 415 },
    );
  }

  try {
    const body: WhatsAppFormData = await request.json();

    const missing: string[] = [];
    if (!body.name) missing.push("Nome");
    if (!body.phone) missing.push("Número do WhatsApp");
    if (!body.position) missing.push("Cargo");
    if (!body.message) missing.push("Mensagem padrão");

    if (missing.length > 0) {
      return NextResponse.json<WhatsAppLinkResponse>(
        {
          success: false,
          link: "",
          error: `Campos obrigatórios ausentes: ${missing.join(", ")}.`,
        },
        { status: 400 },
      );
    }

    const link = buildWhatsAppLink(body.phone, body.message);
    void sendLeadToZapier(body);

    return NextResponse.json<WhatsAppLinkResponse>({ success: true, link });
  } catch {
    return NextResponse.json<WhatsAppLinkResponse>(
      { success: false, link: "", error: "Erro ao processar requisição." },
      { status: 500 },
    );
  }
}
