export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f1f3f5] h-14 w-full shrink-0">
      <div className="flex items-center justify-center h-full">
        <div className="flex gap-4 items-center text-[#3a4149] text-sm text-center whitespace-nowrap leading-[1.2]">
          <a
            href="https://legal.rdstation.com/pt/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Nunito_Sans',sans-serif] font-bold underline decoration-solid hover:text-[#003d5c] transition-colors"
          >
            Política de Privacidade
          </a>

          <span className="font-['Nunito_Sans',sans-serif] font-normal">
            © {year} Resultados Digitais
          </span>
        </div>
      </div>
    </footer>
  );
}
