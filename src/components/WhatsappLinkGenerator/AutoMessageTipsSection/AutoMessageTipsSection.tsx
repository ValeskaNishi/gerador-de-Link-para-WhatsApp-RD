import { CheckCircleIcon } from "@/components/Icons";
import { tips } from "@/constants/sections.constants";

export function AutoMessageTipsSection() {
  return (
    <section aria-labelledby="tips-title" className="bg-white w-full">
      <div className="px-6 md:px-12 py-14 md:py-20 max-w-[1440px] mx-auto">
        <div className="mx-auto max-w-[808px] text-center">
          <h2
            id="tips-title"
            className="font-['Red_Hat_Display',sans-serif] text-2xl font-bold leading-[1.4] text-black md:text-[32px]"
          >
            Como criar mensagens automáticas para o WhatsApp
          </h2>
          <p className="mt-4 font-['DM_Sans',sans-serif] text-base leading-[1.4] text-black md:text-[18px]">
            Agora que você viu como fazer link do WhatsApp é fácil, confira
            algumas ideias para mensagens que agilizam a comunicação!
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1062px] grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {tips.map((tip) => (
            <div
              key={tip}
              className="flex flex-row md:flex-col items-start md:items-center gap-3 md:gap-0 text-left md:text-center"
            >
              <CheckCircleIcon
                color="#8800F7"
                className="shrink-0 mt-0.5 md:mt-0"
              />
              <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[1.4] text-[#3A4149] md:text-[16px] md:mt-4">
                {tip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
