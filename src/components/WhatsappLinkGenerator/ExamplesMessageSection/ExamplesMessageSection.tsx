"use client";

import { ArrowRightIcon } from "@/components/Icons";
import type { ExampleCardProps } from "./interfaces";
import { exampleMessages } from "@/constants/sections.constants";
import { scrollToSection } from "@/utils/scroll.utils";

function ExampleCard({ number, text }: ExampleCardProps) {
  return (
    <div className="w-full sm:flex-1 sm:min-w-0 bg-white rounded-xl border border-[#f1f3f5]">
      <div className="flex flex-col gap-4 items-start p-6 h-full">
        <p className="font-['Red_Hat_Display',sans-serif] font-bold text-xl text-[#005a87]">
          Opção {number}
        </p>
        <p className="font-['DM_Sans',sans-serif] font-normal text-base text-[#3a4149] leading-[1.4]">
          {text}
        </p>
      </div>
    </div>
  );
}

export function ExamplesMessageSection() {
  return (
    <section aria-labelledby="examples-title" className="bg-[#f8fafa] w-full">
      <div className="flex flex-col items-center gap-8 md:gap-10 px-6 md:px-12 py-10 md:py-16 max-w-[1440px] mx-auto">
        <h2
          id="examples-title"
          className="font-['Red_Hat_Display',sans-serif] font-bold text-xl md:text-[32px] text-black leading-[1.4] text-center"
        >
          Exemplos de mensagem para WhatsApp
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch w-full">
          {exampleMessages.map((example) => (
            <ExampleCard
              key={example.number}
              number={example.number}
              text={example.text}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToSection("form-section")}
          className="bg-[#003d5c] flex gap-2 items-center justify-center px-6 py-3 rounded-xl cursor-pointer hover:bg-[#005580] transition-colors"
        >
          <span className="font-['DM_Sans',sans-serif] font-semibold text-base text-white tracking-[-0.32px] whitespace-nowrap">
            Gere seu link grátis
          </span>
          <ArrowRightIcon color="white" />
        </button>
      </div>
    </section>
  );
}
