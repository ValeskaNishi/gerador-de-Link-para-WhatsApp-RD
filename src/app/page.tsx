"use client";

import { useState, useCallback } from "react";
import { PageHeader } from "@/components/WhatsappLinkGenerator/PageHeader";
import { BenefitCards } from "@/components/WhatsappLinkGenerator/BenefitCards";
import { WhyUseSection } from "@/components/WhatsappLinkGenerator/WhyUseSection";
import { AutoMessageTipsSection } from "@/components/WhatsappLinkGenerator/AutoMessageTipsSection";
import { ExamplesMessageSection } from "@/components/WhatsappLinkGenerator/ExamplesMessageSection";
import { FaqSection } from "@/components/WhatsappLinkGenerator/FaqSection";
import { Footer } from "@/components/Footer";
import { GeneratedLinkViewSuccess } from "@/components/WhatsappLinkGenerator/GeneratedLinkViewSuccess";

export default function Home() {
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);
  const [formKey, setFormKey] = useState(0);

  const handleSuccess = useCallback((link: string) => {
    setGeneratedLink(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleReset = useCallback(() => {
    setGeneratedLink(null);
    setFormKey((key) => key + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (generatedLink !== null) {
    return (
      <GeneratedLinkViewSuccess
        generatedLink={generatedLink}
        onReset={handleReset}
      />
    );
  }

  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">
      <div className="flex flex-col items-stretch w-full">
        <PageHeader key={formKey} onSuccess={handleSuccess} />
        <BenefitCards />
        <WhyUseSection />
        <AutoMessageTipsSection />
        <ExamplesMessageSection />
        <FaqSection />
        <Footer />
      </div>
    </main>
  );
}
