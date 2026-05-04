"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { CopyIcon } from "@/components/Icons";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import type { GeneratedLinkViewSuccessProps } from "./interfaces";
import {
  ChevronLeftBlue,
  ChevronRightBlue,
  ArrowRightBlack,
  CheckmarkGreen,
} from "./icons";

export function GeneratedLinkViewSuccess({
  generatedLink,
  onReset,
}: GeneratedLinkViewSuccessProps) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleCopy = async () => {
    clearTimeout(timerRef.current!);
    setCopyError(false);
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyError(true);
    }
  };

  return (
    <div className="flex flex-col items-start w-full bg-white min-h-screen">
      <Header onLogoClick={onReset} />
      <main aria-label="Link gerado com sucesso" className="w-full">
        <div className="flex flex-col items-start overflow-clip px-6 relative shrink-0 w-full">
          <div
            className="relative rounded-[24px] shrink-0 w-full"
            style={{
              borderRadius: "var(--size-spacing-05, 24px)",
              background:
                " radial-gradient(69.49% 31.29% at 100% 43.65%, var(--brand-rd-station-color-primary-shade-6, rgba(110, 247, 251, 0.20)) 0%, var(--bw-color-gray-10, rgba(241, 243, 245, 0.20)) 100%), radial-gradient(53.64% 31.39% at 0% 65.34%, var(--functional-green-20, #D1F7D8) 0%, var(--bw-color-gray-10, #F1F3F5) 100%), var(--grayscale-gray-8, #F1F3F5)",
            }}
          >
            <div className="flex flex-col items-start justify-center gap-[10px] relative w-full max-w-[1440px] mx-auto px-6 py-10 md:px-16 md:py-16 lg:px-40 lg:py-24">
              <div className="flex flex-col items-start gap-10 md:gap-[72px] w-full max-w-[838px]">
                <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
                  <button
                    type="button"
                    onClick={onReset}
                    className="flex items-center gap-2 hover:opacity-75 transition-opacity"
                  >
                    <ChevronLeftBlue />
                    <span className="font-['DM_Sans',sans-serif] font-normal text-lg text-[#005A87] leading-[1.4] tracking-[-0.36px] whitespace-nowrap">
                      Gerar novo link
                    </span>
                  </button>

                  <h1 className="font-['Red_Hat_Display',sans-serif] font-bold text-[32px] leading-[1.4] text-black w-full">
                    Seu link de WhatsApp foi gerado com sucesso!
                  </h1>

                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="bg-white flex items-center overflow-hidden w-full rounded-xl border border-[#636E7C] p-3 gap-3">
                      <output
                        aria-label="Link gerado"
                        className="flex-1 min-w-0 truncate font-['DM_Sans',sans-serif] font-normal text-base leading-[1.4] text-[#3A4149]"
                      >
                        {generatedLink}
                      </output>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 w-full">
                    <div className="flex flex-col items-start gap-2 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#003D5C] rounded-xl px-6 py-3 hover:opacity-90 transition-opacity"
                      >
                        {copied ? <CheckmarkGreen /> : <CopyIcon />}
                        <span className="font-['DM_Sans',sans-serif] font-semibold text-base text-white leading-[1.4] tracking-[-0.32px] whitespace-nowrap">
                          {copied ? "Link copiado" : "Copiar link"}
                        </span>
                      </button>
                      {copyError && (
                        <p role="alert" className="text-red-500 text-sm">
                          Não foi possível copiar. Selecione o link manualmente.
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-start sm:items-end justify-center gap-3 w-full sm:w-auto">
                      <a
                        href="https://www.rdstation.com/produtos/marketing/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-white flex items-center justify-center gap-2 border border-[#003D5C] rounded-xl px-6 py-3 hover:bg-gray-50 transition-colors no-underline"
                      >
                        <span className="font-['DM_Sans',sans-serif] font-semibold text-base text-black leading-[1.4] tracking-[-0.32px]">
                          Adicione um Botão de WhatsApp no site
                        </span>
                        <ArrowRightBlack />
                      </a>
                      <p className="font-['DM_Sans',sans-serif] font-normal text-base leading-[1.4] text-[#002A3D]">
                        Faça isso com o teste grátis do{" "}
                        <strong className="font-bold">
                          RD Station Marketing
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white flex flex-col items-start w-full border border-[#7BEFFF] rounded-2xl p-6 gap-4">
                  <h2 className="font-['Red_Hat_Display',sans-serif] font-bold text-2xl leading-[1.4] text-[#003D5C] w-full">
                    Quer aumentar em até 56% as suas vendas pelo WhatsApp?
                  </h2>

                  <div className="font-['DM_Sans',sans-serif] font-normal text-lg leading-[1.4] text-black">
                    <p>
                      Conheça o{" "}
                      <strong className="font-bold">
                        RD Station Conversas
                      </strong>
                      {", "}uma solução oficial de WhatsApp API que te garante
                      um atendimento mais eficiente, lucrativo e seguro. Com a
                      nossa ferramenta você diminui os riscos de ter seu número
                      bloqueado e ainda melhorar suas taxas de conversão.
                    </p>
                    <p className="mt-[1.4em]">
                      Quer ficar por dentro sobre como nossa plataforma pode
                      ajudar a sua empresa?
                    </p>
                  </div>

                  <a
                    href="https://www.rdstation.com/contato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-75 transition-opacity"
                  >
                    <span className="font-['DM_Sans',sans-serif] font-bold text-lg leading-[1.4] tracking-[-0.36px] text-[#005A87] whitespace-nowrap">
                      Saiba mais
                    </span>
                    <ChevronRightBlue />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Image
            src="/images/whatsApp.png"
            alt=""
            aria-hidden="true"
            width={298}
            height={300}
            className="hidden xl:block absolute pointer-events-none select-none z-10"
            style={{
              width: "clamp(180px, 24vw, 298px)",
              height: "clamp(182px, 24.2vw, 300px)",
              right: "-28px",
              top: "280px",
              transform: "rotate(-2deg)",
              objectFit: "contain",
            }}
          />
        </div>
      </main>
      <div className="mt-5 w-full">
        <Footer />
      </div>
    </div>
  );
}
