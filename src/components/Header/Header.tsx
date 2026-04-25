import Link from "next/link";
import { RDStationLogo } from "@/components/Icons";

interface HeaderProps {
  onLogoClick?: () => void;
}

export function Header({ onLogoClick }: HeaderProps) {
  return (
    <header className="bg-white flex items-center justify-between overflow-hidden px-6 md:px-12 py-6 w-full shrink-0">
      {onLogoClick ? (
        <button
          type="button"
          onClick={onLogoClick}
          aria-label="Gerar novo link"
          className="hover:opacity-80 transition-opacity"
        >
          <RDStationLogo />
        </button>
      ) : (
        <Link
          href="/"
          aria-label="Página inicial"
          className="hover:opacity-80 transition-opacity"
        >
          <RDStationLogo />
        </Link>
      )}
      <p className="hidden sm:block font-['Red_Hat_Display',sans-serif] font-semibold text-xl text-black text-right whitespace-nowrap leading-[1.4]">
        Gerador link do WhatsApp
      </p>
    </header>
  );
}
