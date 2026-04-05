import Link from "next/link";
import Image from "next/image";

export default function Ethics() {
  return (
    <div className="flex relative">
      {/* SideNavBar Shell (Hidden on Mobile) */}
      <aside className="hidden lg:flex flex-col py-8 gap-4 h-screen w-72 sticky top-0 bg-[#131319] border-r border-[#25252d] z-40">
        <div className="px-8 mb-10 pt-20">
          <div className="text-lg font-black text-[#76f0c7] font-headline">Compliance Portal</div>
          <div className="text-[10px] text-on-surface/40 uppercase tracking-widest font-label mt-1">v2.0.4 Premium</div>
        </div>

        <nav className="flex-1 flex flex-col px-4 gap-2">
          <Link href="/legal/terms" className="flex items-center gap-4 px-4 py-3 text-[#f9f5fd]/40 hover:bg-[#25252d]/30 hover:translate-x-1 transition-transform duration-200 cursor-pointer rounded-xl font-label text-sm tracking-wide">
            <span className="material-symbols-outlined">policy</span>
            <span>Legal Overview</span>
          </Link>
          <Link href="/legal/terms" className="flex items-center gap-4 px-4 py-3 text-[#f9f5fd]/40 hover:bg-[#25252d]/30 hover:translate-x-1 transition-transform duration-200 cursor-pointer rounded-xl font-label text-sm tracking-wide">
            <span className="material-symbols-outlined">description</span>
            <span>User Agreement</span>
          </Link>
          <Link href="/legal/privacy" className="flex items-center gap-4 px-4 py-3 text-[#f9f5fd]/40 hover:bg-[#25252d]/30 hover:translate-x-1 transition-transform duration-200 cursor-pointer rounded-xl font-label text-sm tracking-wide">
            <span className="material-symbols-outlined">shield_lock</span>
            <span>Data Privacy</span>
          </Link>
          <Link href="/legal/gdpr" className="flex items-center gap-4 px-4 py-3 text-[#f9f5fd]/40 hover:bg-[#25252d]/30 hover:translate-x-1 transition-transform duration-200 cursor-pointer rounded-xl font-label text-sm tracking-wide">
            <span className="material-symbols-outlined">cookie</span>
            <span>Cookie Policy</span>
          </Link>
          <Link href="/legal/ethics" className="flex items-center gap-4 px-4 py-3 text-primary bg-[#25252d]/30 translate-x-1 cursor-pointer rounded-xl font-label text-sm tracking-wide">
            <span className="material-symbols-outlined">psychology</span>
            <span>AI Ethics</span>
          </Link>
        </nav>

        <div className="px-6 mt-auto">
          <button className="w-full bg-surface-container-highest text-on-surface py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-surface-bright transition-colors border border-outline-variant/15">
            <span className="material-symbols-outlined text-sm">download</span>
            Download PDFs
          </button>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="flex-1 pt-32 px-6 lg:px-16 pb-24 max-w-[1100px]">
        {/* Hero Section: Organic Futurism */}
        <header className="relative mb-32">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-0 -right-24 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 bg-surface-container-highest border border-outline-variant/20 rounded-full mb-8">
              <span className="text-[10px] font-label font-extrabold uppercase tracking-[0.2em] text-primary">Manifeste de l'IA Responsable</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-none mb-12">
              L'Éthique <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">Organique.</span>
            </h1>
            <p className="max-w-2xl text-xl text-on-surface/70 leading-relaxed font-light">
              Dans l'ère du Neural Editorial, nous ne construisons pas seulement des algorithmes. Nous cultivons un écosystème numérique fondé sur l'intégrité, la clarté et l'harmonie humaine.
            </p>
          </div>
        </header>

        {/* Bento Grid: Principles */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {/* Bento Item 1: Transparency */}
          <div className="md:col-span-2 glass-card rounded-xl p-10 flex flex-col justify-between border border-outline-variant/10 group hover:border-primary/30 transition-all">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{fontVariationSettings: "'FILL' 1"}}>visibility</span>
              <h3 className="text-3xl font-headline font-bold mb-4">Transparence Radicale</h3>
              <p className="text-on-surface/60 max-w-lg">Chaque décision prise par nos modèles est traçable. Nous refusons l'opacité des "boîtes noires" au profit d'une documentation systématique des processus de pensée synthétique.</p>
            </div>
            <div className="mt-12 flex gap-4">
              <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-label font-bold uppercase tracking-widest">Audit Ouvert</span>
              <span className="px-4 py-1 bg-surface-container-highest text-on-surface/40 rounded-full text-[10px] font-label font-bold uppercase tracking-widest">Temps Réel</span>
            </div>
          </div>

          {/* Bento Item 2: Bias Mitigation */}
          <div className="bg-surface-container-low rounded-xl p-10 border border-outline-variant/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">balance</span>
            <h3 className="text-2xl font-headline font-bold mb-4">Équité Algorithmique</h3>
            <p className="text-on-surface/60 text-sm leading-relaxed">Identification proactive et neutralisation des biais cognitifs et culturels. Nos ensembles de données sont sculptés pour refléter la diversité globale.</p>
            <img
              className="mt-8 rounded-xl w-full h-40 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Abstract iridescent flowing silk layers"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_WUaoyxRMfiuCgCgf5fZMuDtsJHDvRvJuKppwzS8P6b4lQYh2Ufd4qKgZ_ccDNmu74UbKkjjhvfAu-XHYPCD3kGkzcUU6UF_DB4fGgGmxzpkflHMSbXHClMMttnrJlBuzn_Z8o6r7DW1d5PPiT7RmrVwfCHzRJ2MiVsJeBsHfFqMFuz3GbGuo-hxIx8l_iLlBuYPB3ZZFKJYRWd55uR2oKGNxRHvhBRL4vYhMFy07hXzJ8aboEo8WfLVOhQLolQ6H1kbBe8Ox0rk"
            />
          </div>

          {/* Bento Item 3: Responsible Dev */}
          <div className="bg-surface-container-high rounded-xl p-10 border border-outline-variant/10">
            <span className="material-symbols-outlined text-4xl text-tertiary mb-6">eco</span>
            <h3 className="text-2xl font-headline font-bold mb-4">Développement Durable</h3>
            <p className="text-on-surface/60 text-sm leading-relaxed">Optimisation de l'empreinte carbone de l'entraînement des modèles. L'intelligence ne doit pas se faire au détriment de l'écologie.</p>
          </div>

          {/* Bento Item 4: Human-in-the-loop */}
          <div className="md:col-span-2 glass-card rounded-xl p-10 border border-outline-variant/10 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h3 className="text-3xl font-headline font-bold mb-4">L'Arbitrage Humain</h3>
              <p className="text-on-surface/60">L'IA est un outil de co-création. Nous maintenons un contrôle humain strict sur toutes les décisions éditoriales critiques pour garantir l'empathie et le contexte moral.</p>
            </div>
            <div className="w-full md:w-64 h-48 bg-background rounded-xl border border-outline-variant/20 flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-primary animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>fingerprint</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Asymmetric Detail Section */}
        <section className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-3xl rounded-full"></div>
            <img
              className="relative z-10 rounded-2xl shadow-2xl border border-outline-variant/20"
              alt="Close up of futuristic crystal structure"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiRp2tgtVIfAeQjG-q3nLvKggG1EVPecRhBmQc3vOE279PS11xDblvj9Q7oF7gbnFdOpB25Fp2ePzg2KV_DxdIvQx6CLYhLrnHEJ6q1bj0-32hIDuTLrwK3KXMEScZy0uaFcNIWkY-WBcBJWdJNqX822vOu8fD1AngSeRBTTDWONqsj0wiX6WBf53B15Ftril-kQJNzUAiujvkY7XfzwlFZ252DQN5P32RYWYW1YOTh9e8KXAUOwhMvjfMpxmdEyt5hEWF8yjtFQg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-headline font-bold mb-8 leading-tight">Vision : Futurisme Organique</h2>
            <div className="space-y-6 text-on-surface/70 leading-relaxed text-lg">
              <p>Le futurisme organique rejette la froideur métallique de la technologie traditionnelle. Nous concevons des interfaces qui imitent les structures naturelles : croissance, adaptation et résilience.</p>
              <p>Nos principes ne sont pas des règles statiques gravées dans le code, mais une charte vivante qui évolue avec la découverte de nouvelles capacités synthétiques.</p>
            </div>
            <button className="mt-10 flex items-center gap-3 text-primary font-bold group">
              Lire le Livre Blanc Complet
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* Comparison/Status without dividers */}
        <section className="mb-32">
          <h3 className="text-sm font-label font-bold uppercase tracking-[0.3em] text-on-surface/40 mb-10 text-center">Indicateurs d'Impact Éthique</h3>
          <div className="bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/5">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-12 bg-surface-container-low flex flex-col items-center text-center">
                <div className="text-5xl font-headline font-bold text-primary mb-2">99.2%</div>
                <div className="text-xs font-label uppercase tracking-widest text-on-surface/40">Neutralité de Genre</div>
              </div>
              <div className="p-12 bg-surface-container flex flex-col items-center text-center border-y md:border-y-0 md:border-x border-outline-variant/10">
                <div className="text-5xl font-headline font-bold text-secondary mb-2">0.05ms</div>
                <div className="text-xs font-label uppercase tracking-widest text-on-surface/40">Vitesse de Modération</div>
              </div>
              <div className="p-12 bg-surface-container-high flex flex-col items-center text-center">
                <div className="text-5xl font-headline font-bold text-tertiary mb-2">100%</div>
                <div className="text-xs font-label uppercase tracking-widest text-on-surface/40">Provenance des Données</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
