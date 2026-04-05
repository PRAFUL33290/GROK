import Link from "next/link";
import Image from "next/image";

export default function Grok() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center px-6 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
          {/* Using native img for quick prototyping as per references */}
          <img
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
            alt="Futuristic digital abstract"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUcDMQzpre83VfiktmAS7PJAPC-PpApAWydw6EKSIZ75bUlcU6AQK6D3S1PqFueY2-xVIjT-7aOxao-8PO6cdlyxoqYLRqlXGfUjkWWeSOtZxepsDu_gkb4IZ9MFPJ23jz6Ear06AjBzU58vUpc4aO7NYaIjMWIUy5-Z-KhyQ6_IeZjpHjsRaoLjatwQb0BxVaPsnccIld9DMC8QCtjhIY4VKG8MNSAUxWj-kkNHaLZyOh5zm-MSLCfY7pHnLsXfLyJRKyLgglMsQ"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">Powered by xAI</span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
            Grok (xAI) — <span className="text-secondary">L'IA Sans Filtre</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-10">
            Conçue pour comprendre l'univers avec un sens de l'humour rebelle. Grok accède en temps réel aux données de X pour une pertinence inégalée.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-secondary-container text-on-surface font-headline font-bold shadow-lg hover:shadow-secondary/20 transition-all scale-100 active:scale-95">
              Essayer Grok sur X
            </button>
            <button className="px-8 py-4 rounded-full border border-outline-variant hover:bg-surface-bright transition-all font-headline font-bold">
              Voir les benchmarks
            </button>
          </div>
        </div>
      </section>

      {/* Points Forts */}
      <section className="px-6 lg:px-20 py-24 bg-surface-container-low">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Points Forts</h2>
          <div className="h-1 w-20 bg-secondary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-8 rounded-xl border-l-2 border-secondary/50 hover:bg-surface-container-highest transition-all duration-300">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6">rocket_launch</span>
            <h3 className="font-headline text-xl font-bold mb-3">Données temps réel</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Accès exclusif au flux X (ex-Twitter) pour des réponses basées sur les événements mondiaux à la seconde près.</p>
          </div>
          <div className="glass-card p-8 rounded-xl border-l-2 border-secondary/50 hover:bg-surface-container-highest transition-all duration-300">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6">mood</span>
            <h3 className="font-headline text-xl font-bold mb-3">Mode "Fun"</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Une personnalité unique dotée d'esprit et de sarcasme, brisant les codes des assistants IA aseptisés.</p>
          </div>
          <div className="glass-card p-8 rounded-xl border-l-2 border-secondary/50 hover:bg-surface-container-highest transition-all duration-300">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6">bolt</span>
            <h3 className="font-headline text-xl font-bold mb-3">Inférence Ultra-Rapide</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Optimisation matérielle poussée permettant une génération de texte quasi instantanée pour les utilisateurs premium.</p>
          </div>
          <div className="glass-card p-8 rounded-xl border-l-2 border-secondary/50 hover:bg-surface-container-highest transition-all duration-300">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6">directions_car</span>
            <h3 className="font-headline text-xl font-bold mb-3">Intégration Tesla</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">L'écosystème xAI s'étend nativement aux véhicules Tesla pour un compagnon de route intelligent.</p>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-6 lg:px-20 py-32 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="font-label text-secondary font-bold tracking-widest mb-4">MANIFESTO</div>
            <h2 className="font-headline text-5xl font-bold tracking-tighter mb-8">La Philosophie de xAI</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">lock_open</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2">Liberté d'Expression</h4>
                  <p className="text-on-surface-variant font-light">Grok est conçu pour répondre à des questions complexes et sensibles que d'autres IA pourraient éviter par excès de prudence.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">balance</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2">Approche Anti-Woke</h4>
                  <p className="text-on-surface-variant font-light">Une IA qui privilégie la vérité brute et les faits plutôt que le politiquement correct ou les biais idéologiques pré-établis.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">science</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2">Approche xAI</h4>
                  <p className="text-on-surface-variant font-light">L'objectif ultime est d'aider l'humanité dans sa quête de compréhension et de connaissance fondamentale.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-secondary/20 blur-3xl rounded-full"></div>
            <img
              className="relative z-10 rounded-2xl shadow-2xl border border-white/10"
              alt="Monolithic abstract structure"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbJmCfgJSuKQXC8djbxt856nKHFvnQLx6rOlQSpC6JdhZIOUtIlVKwRooL-FxLiiHDRDMNZOiX8vJ8gOhq8PLINxj_eGk4qJ0bxVebIfAOqw3jo3Hq1v7vDYLajBdhZWl44o7LytV-xLb1qOUrDQL15EcU6uLAlaoQnRJoAkCY920fbNb0Lzh4RuAESbEkISy3hj4_UU3JOlvpiRqjtGQ4a7uc-uNsXFAvjfrwqNLiwsDnKAEHGVHsntwmSvqWhYku_RdsZPAzsQg"
            />
          </div>
        </div>
      </section>

      {/* Tarification */}
      <section className="px-6 lg:px-20 py-24 bg-surface-container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Accès &amp; Tarification</h2>
          <p className="text-on-surface-variant">L'expérience Grok est exclusivement disponible via les abonnements X.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Premium */}
          <div className="bg-surface-container-low p-10 rounded-2xl border border-outline-variant hover:border-secondary/30 transition-all group">
            <div className="mb-8">
              <h3 className="font-headline text-2xl font-bold mb-2">X Premium</h3>
              <div className="text-4xl font-headline font-bold">8€ <span className="text-sm font-light text-on-surface-variant">/ mois</span></div>
            </div>
            <ul className="space-y-4 mb-10 text-on-surface-variant">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                Accès complet à Grok (Inférence standard)
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                Badge de certification bleu
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                Réduction des publicités
              </li>
            </ul>
            <button className="w-full py-4 rounded-full border border-secondary text-secondary font-headline font-bold group-hover:bg-secondary group-hover:text-on-secondary transition-all">
              S'abonner via X
            </button>
          </div>

          {/* Premium+ */}
          <div className="bg-surface-container-highest p-10 rounded-2xl border-2 border-secondary relative overflow-hidden glow-secondary">
            <div className="absolute top-0 right-0 bg-secondary text-on-secondary px-4 py-1 font-label text-[10px] font-black uppercase tracking-widest rounded-bl-xl">Best Value</div>
            <div className="mb-8">
              <h3 className="font-headline text-2xl font-bold mb-2 text-secondary">X Premium+</h3>
              <div className="text-4xl font-headline font-bold">16€ <span className="text-sm font-light text-on-surface-variant">/ mois</span></div>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Accès Prioritaire à Grok (Plus rapide)
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Zéro publicité dans le flux
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Capacité d'écriture d'articles longs
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Accès anticipé aux nouvelles fonctions
              </li>
            </ul>
            <button className="w-full py-4 rounded-full bg-secondary text-on-secondary font-headline font-bold hover:opacity-90 transition-all">
              Passer au Premium+
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
