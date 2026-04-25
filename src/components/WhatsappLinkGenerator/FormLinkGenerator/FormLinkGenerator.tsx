import Image from "next/image";
import { MainForm } from "@/components/WhatsappLinkGenerator/MainForm/MainForm";
import type { FormLinkGeneratorProps } from "./interfaces";

export function FormLinkGenerator({ onSuccess }: FormLinkGeneratorProps) {
  return (
    <section
      className="relative w-full px-4 md:px-6 shrink-0 overflow-hidden"
      id="form-section"
      aria-label="Formulário gerador de link do WhatsApp"
    >
      <Image
        src="/images/whatsApp.png"
        alt=""
        aria-hidden="true"
        width={298}
        height={300}
        className="block absolute pointer-events-none select-none z-10"
        style={{
          width: "clamp(180px, 24vw, 298px)",
          height: "clamp(182px, 24.2vw, 300px)",
          left: "8px",
          bottom: "32.599px",
          transform: "rotate(-6deg)",
          objectFit: "contain",
        }}
      />

      <div
        className="relative w-full overflow-hidden"
        style={{
          borderRadius: "var(--size-spacing-05, 24px)",
          background:
            "radial-gradient(69.49% 31.29% at 100% 43.65%, var(--highlight-lime-lime-2, rgba(195, 246, 40, 0.20)) 0%, var(--grayscale-gray-8, rgba(241, 243, 245, 0.20)) 100%), radial-gradient(53.64% 31.39% at 0% 65.34%, var(--brand-brand-6, #7BEFFF) 0%, var(--grayscale-gray-8, #F1F3F5) 100%), var(--bw-color-gray-10, #F1F3F5)",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center py-8 md:py-16 px-4 sm:px-6 md:px-16 lg:px-32 xl:px-56">
          <MainForm onSuccess={onSuccess} />
        </div>
      </div>
    </section>
  );
}
