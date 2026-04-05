import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-32">
      {/* Hero Section: Welcome Home */}
      <section className="max-w-7xl mx-auto px-8 mb-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="font-label text-xs tracking-[0.2em] uppercase text-primary mb-6 block">The Neural Editorial 2026</span>
            <h1 className="font-headline text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
              Bienvenue sur la référence de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">comparaison IA.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-lg mb-10 leading-relaxed">
              Explorez l'écosystème de l'intelligence artificielle à travers des analyses approfondies, des benchmarks en temps réel et des duels technologiques.
            </p>
            <div className="flex gap-6">
              <button className="px-8 py-4 rounded-full font-headline font-bold bg-primary text-on-primary-container glow-primary hover:scale-105 transition-all">Démarrer l'Analyse</button>
              <button className="px-8 py-4 rounded-full font-headline font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">Explorer les Modèles</button>
            </div>
          </div>
          <div className="relative h-[500px] w-full hidden lg:block">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0px_24px_48px_rgba(0,0,0,0.6)]">
              {/* Using img for raw external domains without configuration, in real prod this might be configured next/image */}
              <img className="w-full h-full object-cover opacity-60" alt="Abstract neural network nodes in vibrant teal and neon green with glowing connections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgkAZWbk7IGPZXWHGIqccNTySO6-EuEY4a_n1DAHAIebJSehONFs4HtVWltxojesYqDsbcCvUEBJ9S0vnBZJnOuFTjBNLZBbxrjq4tKV39wyBY6B4MKvc2RWirXnpNXrV9NnKeZORJ-a6qRn1zC9601qXuES-csXNeddE3LCA4PwPi3yraCw7OzB59DEZhvIacfRP2Wy0J5gVAqwAHwMT64lWq2ULytsw_EA3f8QQSJ5Z2szrZhdl4q7dB3YkEGXK0-Xf1n4J775k" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-2xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-primary animate-ping"></span>
                <span className="font-label text-[10px] uppercase tracking-widest text-primary">Mise à jour Live</span>
              </div>
              <div className="font-headline font-bold text-xl mb-2">Grok-3 vs GPT-4o</div>
              <p className="text-xs text-on-surface-variant leading-relaxed">Nouveaux résultats de benchmarks disponibles pour le codage Python et l'analyse de données.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Cards Section */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">Les Titans à la Loupe</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">Plongez dans les détails de chaque écosystème avant de les voir s'affronter.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ChatGPT Spotlight */}
          <div className="glass-card rounded-[2.5rem] overflow-hidden group">
            <div className="h-64 overflow-hidden relative">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Abstract fluid obsidian shapes with neon purple" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjsVQMs-eBnTQDN1QH9vxbBC0FssZg5tsGeStq89biuxxrnmRj6askXtfb2ZJsgQvzGisZyHwUQmosLJKtmf7COPb2HUnjZCVxNqXckpK8LhLEbzayzZ2SSze6NLd5YlcNTw6VUCDO-mL00O0q71CSboYHjTDb3DV_cWUIAJpA8HxlxNsSGgNUBtVUgEm6f4Jfjk5j0NnwknkozFAGvOoKsQeCF4sGArAISObKpBF4XNcabcTjv-2Z79PgLHN3HCuUCzelc-67ChE" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high to-transparent"></div>
              <div className="absolute bottom-6 left-8">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-2 inline-block">Productivité</span>
                <h3 className="font-headline text-3xl font-bold">ChatGPT (OpenAI)</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-on-surface-variant mb-8 line-clamp-2">Le standard de l'industrie pour la création de contenu, le support client et l'analyse de documents complexes.</p>
              <div className="flex justify-between items-center">
                <Link href="/models/chatgpt" className="text-primary font-bold font-headline flex items-center gap-2 group/link">
                  En savoir plus <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                </Link>
                <Link href="/compare" className="px-6 py-2 rounded-full border border-white/10 text-xs font-bold hover:bg-white/5 transition-all">Voir le duel</Link>
              </div>
            </div>
          </div>
          {/* Grok Spotlight */}
          <div className="glass-card rounded-[2.5rem] overflow-hidden group">
            <div className="h-64 overflow-hidden relative">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Abstract obsidian shapes with magenta light leaks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT6UyokUYiowoD6OT1JcB3NFMO2UF4i2Wh33GmJecyKL6jxt2yZDxSQ-6jjyzAXi2t6Vun4Rr4B0DY31ExUWdrOoUJ0FCBXrXXcp8G_UnaH-ThISOSPcDNuxJH6ER4jXszRb61TJMr4DwXoreOXPaeCIhDLnnPp932VGmrH8QUUzDgM70QGCCfGlKJ-uVxtTVyPwAKx-BfBNmoO9ZHjf_jmqDjQnwCjMbTosRioUP1637Q-tn08kzAav2l_Zbl42yMoBhU3J39xhc" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high to-transparent"></div>
              <div className="absolute bottom-6 left-8">
                <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-widest mb-2 inline-block">Temps Réel</span>
                <h3 className="font-headline text-3xl font-bold">Grok (xAI)</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-on-surface-variant mb-8 line-clamp-2">L'intelligence sans filtre connectée au flux de données global de X pour une actualité instantanée.</p>
              <div className="flex justify-between items-center">
                <Link href="/models/grok" className="text-secondary font-bold font-headline flex items-center gap-2 group/link">
                  En savoir plus <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                </Link>
                <Link href="/compare" className="px-6 py-2 rounded-full border border-white/10 text-xs font-bold hover:bg-white/5 transition-all">Voir le duel</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi comparer Section */}
      <section className="bg-surface-container-low py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">Pourquoi comparer ?</h2>
              <p className="text-on-surface-variant max-w-lg">Le choix d'un modèle d'IA impacte directement votre efficacité opérationnelle et la pertinence de vos résultats.</p>
            </div>
            <Link href="/benchmarks" className="text-primary font-label text-sm uppercase tracking-widest border-b border-primary/30 pb-2 hover:text-primary-dim transition-all">Notre méthodologie</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-3xl group hover:border-primary/30 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">verified</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Précision</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Nous testons la capacité de raisonnement logique et la réduction des hallucinations sur des cas d'usage réels.</p>
            </div>
            <div className="glass-card p-10 rounded-3xl group hover:border-secondary/30 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-secondary text-3xl">speed</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Vitesse</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Mesure de la latence et du débit de tokens pour les applications nécessitant une réactivité instantanée.</p>
            </div>
            <div className="glass-card p-10 rounded-3xl group hover:border-tertiary/30 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-tertiary text-3xl">hub</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Écosystème</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Évaluation des intégrations tierces, des APIs et des outils de personnalisation pour les développeurs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Access Section: Simplified Pricing */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="glass-card rounded-[3rem] p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 blur-[100px]"></div>
          <div className="flex-1 text-center lg:text-left z-10">
            <h2 className="font-headline text-5xl font-bold tracking-tighter mb-6">Prêt à choisir votre camp ?</h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-md mx-auto lg:mx-0">Accédez directement aux meilleures versions de chaque IA dès maintenant.</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Mises à jour quotidiennes
              </div>
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Données vérifiées
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto z-10">
            <div className="p-8 rounded-3xl bg-surface-container-high border border-white/5 flex-1 min-w-[280px]">
              <div className="text-xs uppercase tracking-widest text-primary font-label mb-4">ChatGPT Plus</div>
              <div className="text-3xl font-headline font-bold mb-6">$20<span className="text-sm font-normal text-on-surface-variant">/mois</span></div>
              <Link href="/models/chatgpt">
                <button className="w-full py-3 rounded-xl bg-primary text-on-primary-container font-headline font-bold text-sm glow-primary hover:opacity-90 transition-all">Accéder à OpenAI</button>
              </Link>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container-high border border-white/5 flex-1 min-w-[280px]">
              <div className="text-xs uppercase tracking-widest text-secondary font-label mb-4">X Premium+</div>
              <div className="text-3xl font-headline font-bold mb-6">$16<span className="text-sm font-normal text-on-surface-variant">/mois</span></div>
              <Link href="/models/grok">
                <button className="w-full py-3 rounded-xl bg-secondary text-on-secondary font-headline font-bold text-sm glow-secondary hover:opacity-90 transition-all">Accéder à Grok</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
