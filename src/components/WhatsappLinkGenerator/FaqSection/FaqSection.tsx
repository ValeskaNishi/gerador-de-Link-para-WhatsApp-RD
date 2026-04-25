"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@/components/Icons";
import type { FaqItemProps } from "./interfaces";
import { faqs } from "@/constants/faq.constants";

function FaqItem({ question, answer, isOpen, onClick, index }: FaqItemProps) {
  const answerId = `faq-answer-${index}`;
  const headingId = `faq-heading-${index}`;

  return (
    <div className="w-full border-t border-[#00d4ff]">
      <button
        type="button"
        id={headingId}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="flex items-start gap-3 pt-6 w-full text-left cursor-pointer"
      >
        <div className="flex-1 min-w-0 pb-8 pl-6">
          <p className="font-['DM_Sans',sans-serif] font-bold text-xl text-black tracking-[-0.4px] leading-[1.4]">
            {question}
          </p>
        </div>

        <div className="shrink-0 mr-2 mt-6" aria-hidden="true">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M15.3782 11.8809L8.25756 19.0016C7.91414 19.345 7.91414 19.9018 8.25756 20.2452L9.08807 21.0757C9.43091 21.4185 9.98655 21.4192 10.3302 21.0772L16 15.4339L21.6698 21.0772C22.0134 21.4192 22.5691 21.4185 22.9119 21.0757L23.7424 20.2452C24.0859 19.9018 24.0859 19.345 23.7424 19.0016L16.6218 11.881C16.2784 11.5375 15.7216 11.5375 15.3782 11.8809Z"
              fill="black"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div
          id={answerId}
          role="region"
          aria-labelledby={headingId}
          className="pl-6 pb-8"
        >
          <p className="font-['DM_Sans',sans-serif] font-normal text-base text-[#3a4149] leading-[1.4]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const isOpen = prev.includes(index);
      return isOpen ? prev.filter((i) => i !== index) : [...prev, index];
    });
  };

  const anyOpen = openItems.length > 0;

  const toggleAll = () => {
    setOpenItems(anyOpen ? [] : faqs.map((_, idx) => idx));
  };

  return (
    <section aria-labelledby="faq-title" className="w-full">
      <div className="flex flex-col gap-4 items-end px-6 md:px-12 py-10 md:py-20 max-w-[1440px] mx-auto">
        <button
          type="button"
          onClick={toggleAll}
          aria-label={
            anyOpen ? "Fechar todas as perguntas" : "Abrir todas as perguntas"
          }
          className="bg-white border border-[#003d5c] flex gap-2 items-center justify-center px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <span className="font-['DM_Sans',sans-serif] font-semibold text-base text-black tracking-[-0.32px] whitespace-nowrap">
            {anyOpen ? "Fechar todos" : "Abrir todos"}
          </span>
          <ArrowRightIcon color="black" />
        </button>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start w-full">
          <h2
            id="faq-title"
            className="font-['Red_Hat_Display',sans-serif] font-bold text-2xl text-black leading-[1.4] w-full md:w-[360px] md:shrink-0"
          >
            Perguntas mais comuns
          </h2>

          <div className="flex flex-1 flex-col min-w-0 w-full">
            {faqs.map((faq, idx) => (
              <FaqItem
                key={faq.question}
                index={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems.includes(idx)}
                onClick={() => toggleItem(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
