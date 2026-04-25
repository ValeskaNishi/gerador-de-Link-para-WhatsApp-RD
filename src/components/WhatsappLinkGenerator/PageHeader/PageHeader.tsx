import { Header } from "@/components/Header/Header";
import { FormLinkGenerator } from "@/components/WhatsappLinkGenerator/FormLinkGenerator/FormLinkGenerator";
import type { PageHeaderProps } from "./interfaces";

export function PageHeader({ onSuccess }: PageHeaderProps) {
  return (
    <>
      <Header />
      <FormLinkGenerator onSuccess={onSuccess} />
    </>
  );
}
