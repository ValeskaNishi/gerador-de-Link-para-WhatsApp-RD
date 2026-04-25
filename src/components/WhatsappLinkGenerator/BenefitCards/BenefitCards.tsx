import Image from "next/image";
import {
  ExternalLinkAltIcon,
  MessageCaptionsIcon,
  BoltLightningIcon,
} from "@/components/Icons";
import type { BenefitItemProps } from "./interfaces";

function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex flex-1 flex-col gap-3 items-start justify-start p-5 md:p-6 rounded-[4px] bg-white border-2 border-[#7befff] min-w-0 w-full">
      <div className="flex flex-col gap-2 items-start w-full min-w-0">
        {icon}
        <h3 className="font-['Nunito_Sans',sans-serif] font-bold text-base md:text-xl text-black leading-[1.4] break-words">
          {title}
        </h3>
      </div>
      <p className="font-['DM_Sans',sans-serif] font-normal text-sm text-[#3a4149] leading-[1.4] w-full break-words">
        {description}
      </p>
    </div>
  );
}

export function BenefitCards() {
  return (
    <section
      aria-label="Benefícios do Gerador de Link para WhatsApp"
      className="bg-white w-full"
    >
      <div className="flex flex-col lg:flex-row items-stretch gap-6 md:gap-10 lg:gap-14 px-6 md:px-12 py-10 md:py-20 max-w-[1440px] mx-auto">
        <div className="flex flex-1 flex-col md:flex-row items-stretch gap-4 md:gap-6 min-w-0">
          <BenefitItem
            icon={<ExternalLinkAltIcon />}
            title="Atalho rumo às vendas"
            description="O Gerador de link do WhatsApp faz com que usuários se transformem em contatos (Leads) e iniciem conversas certeiras com sua marca."
          />
          <BenefitItem
            icon={<MessageCaptionsIcon />}
            title="Mensagem automática"
            description="Você automatiza mensagens estimulando o início da conversa, o que facilita a vida dos usuários e clientes."
          />
          <BenefitItem
            icon={<BoltLightningIcon />}
            title="Rápido e 100% gratuito"
            description="Não sabe como fazer link de WhatsApp? O Gerador da RD Station é fácil de usar e permite gerar links em segundos!"
          />
        </div>

        <div className="relative order-first lg:order-last w-full lg:shrink-0 h-[clamp(160px,30vw,280px)] lg:h-auto lg:w-[clamp(260px,24vw,340px)] rounded-[4px] overflow-hidden">
          <Image
            src="/images/woman.png"
            alt="Mulher usando celular"
            fill
            sizes="(min-width: 1024px) clamp(260px, 24vw, 340px), 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
