import Link from "next/link";

export default function TopNavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0e0e13]/80 backdrop-blur-xl bg-gradient-to-b from-[#131319] to-transparent shadow-[0px_24px_48px_rgba(0,0,0,0.4)]">
      <div className="flex justify-between items-center h-20 px-8 max-w-[1440px] mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-[#f9f5fd] font-headline">
          <Link href="/">The Neural Editorial</Link>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-headline tracking-tight">
          <Link
            className="text-[#f9f5fd]/60 font-medium hover:text-[#f9f5fd] transition-colors"
            href="/"
          >
            Accueil
          </Link>
          <Link
            className="text-[#f9f5fd]/60 font-medium hover:text-[#f9f5fd] transition-colors"
            href="/models/chatgpt"
          >
            ChatGPT
          </Link>
          <Link
            className="text-[#f9f5fd]/60 font-medium hover:text-[#f9f5fd] transition-colors"
            href="/models/grok"
          >
            Grok
          </Link>
          <Link
            className="text-[#f9f5fd]/60 font-medium hover:text-[#f9f5fd] transition-colors"
            href="/compare"
          >
            Différences
          </Link>
          <Link
            className="text-[#f9f5fd]/60 font-medium hover:text-[#f9f5fd] transition-colors"
            href="/benchmarks"
          >
            Benchmarks
          </Link>
        </nav>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <Link href="/legal/terms" className="hover:bg-[#25252d]/50 p-2 rounded-full cursor-pointer transition-all">
              <span className="material-symbols-outlined text-[#76f0c7]">gavel</span>
            </Link>
            <Link href="/legal/privacy" className="hover:bg-[#25252d]/50 p-2 rounded-full cursor-pointer transition-all">
              <span className="material-symbols-outlined text-[#76f0c7]">security</span>
            </Link>
          </div>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-bold active:scale-95 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
