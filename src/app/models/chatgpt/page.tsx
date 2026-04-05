import Link from "next/link";
import Image from "next/image";

export default function ChatGPT() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(118,240,199,0.15)_0%,rgba(14,14,19,0)_70%)]"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary font-label text-[10px] uppercase tracking-[0.15em] font-bold">Standard de l'Industrie</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-none text-on-surface">
              ChatGPT <span className="text-primary text-glow-primary">(OpenAI)</span>
            </h1>

            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed font-light">
              L'intelligence artificielle qui a redéfini notre rapport à la machine. Un écosystème complet alliant raisonnement multimodal, création visuelle et intégration sans couture.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold px-8 py-4 rounded-full shadow-[0px_4px_20px_rgba(118,240,199,0.3)] hover:scale-105 active:scale-95 transition-all">
                Essayer GPT-4o
              </button>
              <button className="border border-outline-variant hover:bg-surface-bright text-on-surface px-8 py-4 rounded-full transition-all">
                Voir les API
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative aspect-square rounded-[2rem] overflow-hidden glass-card border border-outline-variant/15 p-2">
              {/* Using native img to match HTML structure & avoiding extra configuration for now */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk0pKdELoSeO_Nmo8R-hYaUKtqQq3sp8GxARJLHkTdiCUOpeSadf_2uE5nwN2UPvRvEgd4UP8hsoqGCtlY4kHU8w8x_tUa-qsSj-GJPFq-2VL9ZgyKZTtWGJ1yPJHi4GINDxwT5aWT3s7p86AvDxOgOat_ypYw-9CAC2rJhK_ABUoVMfY_oak6Y7N6Zdmu0xChaT6pOGEZFXprVixoku0tIgAslvyVgzyPn3sPdlWm7iALPcOkIW-t-TeyNt_Dr7SNQGnBfnulv5o"
                alt="AI Visualization"
                className="w-full h-full object-cover rounded-[1.75rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Points Forts (Bento Grid) */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4 tracking-tight">Capacités Fondamentales</h2>
            <p className="text-on-surface-variant max-w-2xl">Plus qu'un simple chatbot, un outil de productivité polyvalent.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Raisonnement */}
            <div className="md:col-span-2 glass-card p-8 rounded-xl border-l-2 border-primary group hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">psychology</span>
              <h3 className="text-2xl font-headline font-bold mb-4">Raisonnement complexe (GPT-4o)</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Le modèle phare d'OpenAI capable de traiter des instructions complexes, de résoudre des problèmes mathématiques et de coder avec une précision inégalée.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-label uppercase tracking-widest text-primary">Multimodal</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-label uppercase tracking-widest text-primary">Zero-latency</span>
              </div>
            </div>

            {/* DALL-E */}
            <div className="glass-card p-8 rounded-xl border border-outline-variant/15 hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">palette</span>
              <h4 className="text-xl font-headline font-bold mb-2">DALL-E 3</h4>
              <p className="text-on-surface-variant text-sm">Générez des visuels haute fidélité directement au sein de votre conversation.</p>
            </div>

            {/* GPT Store */}
            <div className="glass-card p-8 rounded-xl border border-outline-variant/15 hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-4">store</span>
              <h4 className="text-xl font-headline font-bold mb-2">GPT Store</h4>
              <p className="text-on-surface-variant text-sm">Accédez à des millions de versions personnalisées de ChatGPT créées par la communauté.</p>
            </div>

            {/* Voice Mode */}
            <div className="md:col-span-2 lg:col-span-1 glass-card p-8 rounded-xl border border-outline-variant/15 hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">record_voice_over</span>
              <h4 className="text-xl font-headline font-bold mb-2">Voice Mode</h4>
              <p className="text-on-surface-variant text-sm">Une interaction vocale fluide et émotionnelle pour des conversations naturelles en temps réel.</p>
            </div>

            {/* Extra card for grid balance */}
            <div className="md:col-span-1 lg:col-span-3 bg-gradient-to-r from-surface-container-high to-surface-container rounded-xl p-8 flex items-center justify-between">
              <div>
                <h4 className="text-xl font-headline font-bold mb-2">Vision &amp; Analyse</h4>
                <p className="text-on-surface-variant">L'IA peut désormais voir et interpréter vos documents, photos et graphiques.</p>
              </div>
              <span className="material-symbols-outlined text-primary text-5xl opacity-30">visibility</span>
            </div>
          </div>
        </div>
      </section>

      {/* Écosystème */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video glass-card rounded-xl flex flex-col items-center justify-center p-6 text-center">
                  <span className="material-symbols-outlined text-3xl mb-3 text-primary">api</span>
                  <span className="font-headline font-bold">API robuste</span>
                </div>
                <div className="aspect-video glass-card rounded-xl flex flex-col items-center justify-center p-6 text-center">
                  <span className="material-symbols-outlined text-3xl mb-3 text-primary">smartphone</span>
                  <span className="font-headline font-bold">iOS &amp; Android</span>
                </div>
                <div className="aspect-video glass-card rounded-xl flex flex-col items-center justify-center p-6 text-center">
                  <span className="material-symbols-outlined text-3xl mb-3 text-primary">handshake</span>
                  <span className="font-headline font-bold">Microsoft Azure</span>
                </div>
                <div className="aspect-video glass-card rounded-xl flex flex-col items-center justify-center p-6 text-center">
                  <span className="material-symbols-outlined text-3xl mb-3 text-primary">terminal</span>
                  <span className="font-headline font-bold">Python SDK</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-5xl font-headline font-bold tracking-tight">
                Un Écosystème <br/><span className="text-primary">Omniprésent</span>
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                ChatGPT ne vit pas seul. Grâce au partenariat stratégique avec Microsoft, la technologie GPT alimente Bing, Copilot et l'ensemble de la suite Office 365.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Pour les développeurs, l'API d'OpenAI est devenue le standard d'or pour construire la prochaine génération d'applications intelligentes.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Disponibilité multi-plateforme native</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Sécurité de niveau entreprise (SOC 2)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tarification */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4 tracking-tight">Choisissez votre puissance</h2>
            <p className="text-on-surface-variant">Des solutions adaptées à chaque besoin.</p>
          </div>
          <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-8">
            {/* Free */}
            <div className="glass-card rounded-[2rem] p-10 border border-outline-variant/15 flex flex-col items-start text-left hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-headline font-bold mb-2">Free</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">0$</span>
                <span className="text-on-surface-variant">/mois</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">done</span>
                  Accès au modèle GPT-4o mini
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">done</span>
                  Analyse de données limitée
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-on-surface-variant text-xl">done</span>
                  Navigation Web de base
                </li>
              </ul>
              <button className="w-full border border-outline text-on-surface font-bold py-4 rounded-full hover:bg-surface-bright transition-colors">
                Commencer gratuitement
              </button>
            </div>

            {/* Plus */}
            <div className="bg-gradient-to-br from-surface-container-highest to-surface-container-high rounded-[2rem] p-10 border-2 border-primary relative flex flex-col items-start text-left shadow-[0px_24px_48px_rgba(118,240,199,0.15)] hover:scale-[1.02] transition-transform">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label text-[10px] uppercase font-black px-4 py-1 rounded-full">
                Recommandé
              </div>
              <h3 className="text-2xl font-headline font-bold mb-2 text-primary">ChatGPT Plus</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">20$</span>
                <span className="text-on-surface-variant">/mois</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
                  Accès prioritaire à GPT-4o
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">image</span>
                  Génération d'images DALL-E 3
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">code</span>
                  Analyse avancée de données &amp; Python
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">record_voice_over</span>
                  Mode vocal avancé exclusif
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">rocket_launch</span>
                  Early access aux nouvelles fonctionnalités
                </li>
              </ul>
              <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-full shadow-lg shadow-primary/20 hover:bg-primary-fixed transition-colors">
                S'abonner à Plus
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
