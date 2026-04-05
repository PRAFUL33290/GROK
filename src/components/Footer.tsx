import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-[#f9f5fd]/10 bg-[#0e0e13]">
      <div className="flex flex-col items-center justify-center gap-6 max-w-[1440px] mx-auto px-8">
        <div className="flex flex-wrap justify-center gap-8 font-label uppercase tracking-[0.08em] text-[10px] text-[#f9f5fd]/30">
          <Link className="hover:text-[#e67aff] transition-colors" href="/legal/privacy">Privacy</Link>
          <Link className="hover:text-[#e67aff] transition-colors" href="/legal/terms">Terms</Link>
          <Link className="hover:text-[#e67aff] transition-colors" href="/legal/ethics">AI Ethics Statement</Link>
          <Link className="hover:text-[#e67aff] transition-colors" href="/legal/gdpr">GDPR Compliance</Link>
          <Link className="hover:text-[#e67aff] transition-colors" href="/legal/accessibility">Accessibility</Link>
        </div>
        <div className="text-[#76f0c7] font-label uppercase tracking-[0.08em] text-[10px] text-center">
          © {new Date().getFullYear()} Neural Editorial. Organic Futurism Compliance.
        </div>
        <div className="flex gap-4 mt-2">
          <span className="material-symbols-outlined text-[#f9f5fd]/20 text-lg">language</span>
          <span className="material-symbols-outlined text-[#f9f5fd]/20 text-lg">terminal</span>
          <span className="material-symbols-outlined text-[#f9f5fd]/20 text-lg">shield</span>
        </div>
      </div>
    </footer>
  );
}
