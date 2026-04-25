import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Red_Hat_Display, DM_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-red-hat-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const BASE_URL =
  process.env.APP_PUBLIC_BASE_URL ??
  "https://gerador-link-whatsapp.rdstation.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Gerador de Link para WhatsApp - RD Station",
    template: "%s | RD Station",
  },
  description:
    "Crie seu link de WhatsApp gratuitamente e inicie conversas com um clique nos seus canais digitais. Ferramenta gratuita da RD Station.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Gerador de Link para WhatsApp - RD Station",
    description:
      "Crie seu link de WhatsApp gratuitamente e inicie conversas com um clique nos seus canais digitais.",
    type: "website",
    locale: "pt_BR",
    siteName: "RD Station",
    url: BASE_URL,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gerador de Link para WhatsApp — ferramenta gratuita da RD Station",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerador de Link para WhatsApp - RD Station",
    description:
      "Crie seu link de WhatsApp gratuitamente e inicie conversas com um clique.",
    images: ["/images/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gerador de Link para WhatsApp",
  description:
    "Crie seu link de WhatsApp gratuitamente e inicie conversas com um clique nos seus canais digitais.",
  url: BASE_URL,
  applicationCategory: "BusinessApplication",
  inLanguage: "pt-BR",
  isAccessibleForFree: true,
  author: {
    "@type": "Organization",
    name: "RD Station",
    url: "https://www.rdstation.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      dir="ltr"
      className={`${redHatDisplay.variable} ${dmSans.variable} ${nunitoSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
