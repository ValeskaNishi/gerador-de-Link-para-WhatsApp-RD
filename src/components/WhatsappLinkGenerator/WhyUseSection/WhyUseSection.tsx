"use client";

import { ArrowRightIcon, CheckCircleIcon } from "@/components/Icons";
import { benefits } from "@/constants/sections.constants";
import { scrollToSection } from "@/utils/scroll.utils";

export function WhyUseSection() {
  const scrollToForm = () => scrollToSection("form-section");

  return (
    <section aria-labelledby="why-use-title" className="bg-white w-full">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-start px-6 md:px-12 py-10 md:py-14 max-w-[1440px] mx-auto">
        <h2
          id="why-use-title"
          className="font-['Red_Hat_Display',sans-serif] font-bold text-[1.75rem] sm:text-[2.5rem] lg:text-5xl text-black leading-[1.3] lg:leading-[1.4] w-full lg:w-[519px] lg:max-w-[519px] lg:shrink-0 lg:flex-none"
        >
          Acelere suas
          <br />
          conversas com o{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Gerador de link de</span>
            <span className="absolute left-0 bottom-1 h-7 w-full rounded-lg bg-[#7BEFFF] -z-0" />
          </span>{" "}
          <span className="relative inline-block">
            <span className="relative z-10">WhatsApp</span>
            <span className="absolute left-0 bottom-1 h-7 w-full rounded-lg bg-[#C3F628] -z-0" />
          </span>
        </h2>

        <div className="flex flex-1 flex-col gap-6 items-start min-w-0">
          <p className="font-['DM_Sans',sans-serif] font-normal text-base md:text-lg text-black leading-[1.4]">
            O WhatsApp é uma das plataformas preferidas pelos brasileiros —{" "}
            <strong className="font-bold">
              são mais de 165 milhões de usuários*
            </strong>{" "}
            (ou 96,4% da população que faz uso das redes sociais). Quando você
            traz um link de WhatsApp nas redes sociais ou site da sua empresa,
            só tem vantagens:
          </p>
          <p className="font-['DM_Sans',sans-serif] text-xs text-black opacity-70 not-italic">
            *Dados da pesquisa Digital 2022: Brazil
          </p>

          <ul
            className="flex flex-col gap-2 w-full"
            aria-label="Vantagens do link do WhatsApp"
          >
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 items-start">
                <CheckCircleIcon color="#00D4FF" className="shrink-0 mt-0.5" />
                <p className="font-['DM_Sans',sans-serif] font-normal text-lg text-black leading-[1.4]">
                  {benefit}
                </p>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={scrollToForm}
            className="bg-[#003d5c] flex gap-2 items-center justify-center px-6 py-3 rounded-xl cursor-pointer hover:bg-[#005580] transition-colors"
          >
            <span className="font-['DM_Sans',sans-serif] font-semibold text-base text-white tracking-[-0.32px] whitespace-nowrap">
              Gere seu link grátis
            </span>
            <ArrowRightIcon color="white" />
          </button>
        </div>
      </div>
    </section>
  );
}
