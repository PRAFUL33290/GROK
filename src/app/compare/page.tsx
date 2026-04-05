import Link from "next/link";

export default function Compare() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[614px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px]"></div>
        </div>
        <div className="z-10 max-w-4xl">
          <span className="font-label text-xs tracking-[0.2em] text-primary mb-6 block uppercase">Intelligence Duel 2024</span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6">
            Analyse Comparative <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Technique</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Un duel de données entre les deux piliers de l'IA générative : ChatGPT-4o et Grok-1.5. Performance brute contre intégration écosystémique.
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/10">
            <div className="grid grid-cols-4 bg-surface-container-highest p-6 border-b border-outline-variant/15">
              <div className="col-span-2 md:col-span-1 flex items-center">
                <h3 className="font-label text-sm tracking-widest text-on-surface-variant uppercase">Critères</h3>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#76f0c7]"></div>
                  <span className="font-headline font-bold text-primary">ChatGPT</span>
                </div>
                <span className="text-[10px] font-label text-on-surface-variant uppercase">OpenAI</span>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#e67aff]"></div>
                  <span className="font-headline font-bold text-secondary">Grok</span>
                </div>
                <span className="text-[10px] font-label text-on-surface-variant uppercase">xAI</span>
              </div>
            </div>

            {/* Row: Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <span className="material-symbols-outlined text-primary">payments</span>
                <span className="font-headline text-lg font-medium">Tarification</span>
              </div>
              <div className="hidden md:flex items-center justify-center text-center">
                <p className="text-on-surface/80">Freemium / Plus <br/> <span className="text-xs text-on-surface-variant">$20/mois</span></p>
              </div>
              <div className="hidden md:flex items-center justify-center text-center">
                <p className="text-on-surface/80">Premium+ <br/> <span className="text-xs text-on-surface-variant">Inclus dans X Premium</span></p>
              </div>
            </div>

            {/* Row: Logic */}
            <div className="grid grid-cols-1 md:grid-cols-4 p-6 bg-surface-container/30 hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <span className="material-symbols-outlined text-primary">psychology</span>
                <span className="font-headline text-lg font-medium">Raisonnement</span>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary mb-2">GPT-4o Excellence</div>
                <p className="text-on-surface/80 text-sm">Complexité logique supérieure</p>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs text-secondary mb-2">Grok-1.5 Raw</div>
                <p className="text-on-surface/80 text-sm">Optimisé pour le code &amp; maths</p>
              </div>
            </div>

            {/* Row: Images */}
            <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <span className="material-symbols-outlined text-primary">image</span>
                <span className="font-headline text-lg font-medium">Génération Images</span>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <span className="font-medium text-on-surface">DALL-E 3</span>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <span className="font-medium text-on-surface">Flux.1 Integration</span>
              </div>
            </div>

            {/* Row: Video */}
            <div className="grid grid-cols-1 md:grid-cols-4 p-6 bg-surface-container/30 hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <span className="material-symbols-outlined text-primary">movie</span>
                <span className="font-headline text-lg font-medium">Génération Vidéo</span>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <span className="px-3 py-1 rounded-full bg-surface-bright text-xs">Sora (Beta)</span>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <span className="px-3 py-1 rounded-full bg-surface-bright text-xs">En développement</span>
              </div>
            </div>

            {/* Row: Performance */}
            <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <span className="material-symbols-outlined text-primary">speed</span>
                <span className="font-headline text-lg font-medium">Performance</span>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <span className="text-primary font-bold">~80 tokens/sec</span>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <span className="text-secondary font-bold">~120 tokens/sec</span>
              </div>
            </div>

            {/* Row: Integration */}
            <div className="grid grid-cols-1 md:grid-cols-4 p-6 bg-surface-container/30 hover:bg-white/5 transition-colors group rounded-b-2xl">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <span className="material-symbols-outlined text-primary">hub</span>
                <span className="font-headline text-lg font-medium">Intégration</span>
              </div>
              <div className="hidden md:flex items-center justify-center text-center">
                <p className="text-xs text-on-surface-variant">Microsoft, Apple, API Robustes</p>
              </div>
              <div className="hidden md:flex items-center justify-center text-center">
                <p className="text-xs text-on-surface-variant">X (Twitter), Temps réel total</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graphic Benchmarks Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* HumanEval */}
          <div className="glass-card p-8 rounded-2xl border border-primary/10 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <h4 className="font-headline text-2xl font-bold mb-8">Score HumanEval</h4>
            <p className="text-xs font-label text-on-surface-variant mb-4 uppercase tracking-widest">Coding Capability</p>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">ChatGPT (GPT-4o)</span>
                  <span className="text-primary font-bold">88.4%</span>
                </div>
                <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{width: '88.4%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Grok-1.5</span>
                  <span className="text-secondary font-bold">74.1%</span>
                </div>
                <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary" style={{width: '74.1%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* MMLU */}
          <div className="glass-card p-8 rounded-2xl border border-secondary/10 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
            <h4 className="font-headline text-2xl font-bold mb-8">MMLU Benchmarks</h4>
            <p className="text-xs font-label text-on-surface-variant mb-4 uppercase tracking-widest">General Knowledge</p>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">ChatGPT (GPT-4o)</span>
                  <span className="text-primary font-bold">88.7%</span>
                </div>
                <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{width: '88.7%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Grok-1.5</span>
                  <span className="text-secondary font-bold">81.3%</span>
                </div>
                <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary" style={{width: '81.3%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Verdict Section */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-highest border border-outline-variant/30 mb-8">
            <span className="material-symbols-outlined text-primary text-sm">gavel</span>
            <span className="text-xs font-label uppercase tracking-widest">Le Verdict Neural</span>
          </div>
          <h2 className="font-headline text-4xl font-bold mb-10 tracking-tight">Quelle intelligence pour votre workflow ?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-6 rounded-xl bg-surface-container border-l-4 border-primary">
              <h5 className="text-primary font-bold mb-2">Optez pour ChatGPT si...</h5>
              <p className="text-on-surface-variant text-sm leading-relaxed">Vous recherchez une polyvalence extrême, un raisonnement logique sans faille pour les tâches académiques et une intégration native dans les écosystèmes productifs (Apple/Office).</p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container border-l-4 border-secondary">
              <h5 className="text-secondary font-bold mb-2">Optez pour Grok si...</h5>
              <p className="text-on-surface-variant text-sm leading-relaxed">Le temps réel est votre priorité absolue. Grok excelle dans l'analyse de l'actualité via X et propose une vitesse de génération brute supérieure pour les tâches de code itératives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <h2 className="font-headline text-5xl font-bold mb-8 tracking-tighter">Prêt à tester la puissance ?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/compare/pros-cons">
              <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold font-headline shadow-[0_0_20px_rgba(118,240,199,0.3)] hover:scale-105 transition-transform">
                Voir Avantages et Inconvénients
              </button>
            </Link>
            <Link href="/benchmarks">
              <button className="w-full sm:w-auto px-10 py-5 rounded-full border border-outline-variant text-on-surface font-medium font-headline hover:bg-surface-bright transition-all">
                Consulter la documentation
              </button>
            </Link>
          </div>
        </div>
        {/* Decorative circle */}
        <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]"></div>
      </section>
    </main>
  );
}
