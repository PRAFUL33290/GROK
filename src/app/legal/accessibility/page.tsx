import Link from "next/link";
import Image from "next/image";

export default function Accessibility() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-20 text-center relative">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10"></div>
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-highest border border-outline-variant/15 mb-6">
          <span className="material-symbols-outlined text-primary text-sm">accessible</span>
          <span className="font-label text-[10px] uppercase tracking-[0.08em] font-bold text-on-surface-variant">Accessibilité Numérique</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight mb-8">
          L'inclusion au cœur de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">l'éditorial IA</span>
        </h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed font-body">
          The Neural Editorial s'engage à rendre ses services accessibles à tous, sans distinction de capacité. Notre mission est de démocratiser l'IA grâce à un design organique et inclusif.
        </p>
      </header>

      {/* Commitment Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
        <div className="md:col-span-8 glass-card rounded-xl p-10 border border-outline-variant/10 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-headline font-semibold mb-6">Engagement de Conformité WCAG 2.1</h2>
            <p className="text-on-surface-variant mb-8 max-w-xl leading-relaxed">
              Nous visons le niveau de conformité AA des règles pour l'accessibilité des contenus Web (WCAG) 2.1. Nos interfaces sont testées pour garantir une navigation fluide via lecteur d'écran, clavier et autres technologies d'assistance.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-surface-container-low px-5 py-3 rounded-xl">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-label text-xs font-bold uppercase tracking-wider">Perceptible</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-low px-5 py-3 rounded-xl">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-label text-xs font-bold uppercase tracking-wider">Utilisable</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-low px-5 py-3 rounded-xl">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-label text-xs font-bold uppercase tracking-wider">Compréhensible</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-low px-5 py-3 rounded-xl">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-label text-xs font-bold uppercase tracking-wider">Robuste</span>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[240px]">visibility</span>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-high rounded-xl p-10 flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-secondary text-4xl mb-6">palette</span>
            <h3 className="text-2xl font-headline font-semibold mb-4">Contraste &amp; Couleur</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Notre système "Organic Futurism" utilise des palettes à haut contraste. Nous n'utilisons jamais la couleur comme seul moyen de transmettre une information critique.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-outline-variant/10">
            <div className="flex justify-between items-center text-xs font-label uppercase tracking-widest text-on-surface-variant">
              <span>Ratio Minimum</span>
              <span className="text-primary">4.5:1</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-low rounded-xl p-10 border border-outline-variant/5">
          <span className="material-symbols-outlined text-tertiary text-4xl mb-6">keyboard_tab</span>
          <h3 className="text-2xl font-headline font-semibold mb-4">Navigation Clavier</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Chaque interaction est accessible via le clavier. Un indicateur de focus clair et stylisé permet de se repérer sans ambiguïté.
          </p>
        </div>

        <div className="md:col-span-8 glass-card rounded-xl p-1 p-[1px] bg-gradient-to-br from-outline-variant/20 to-transparent">
          <div className="bg-surface-container-lowest rounded-[calc(0.75rem-1px)] h-full p-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="w-full aspect-square rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-on-surface">hearing</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-headline font-semibold mb-4">Alternatives Textuelles</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Toutes nos visualisations de données IA et images éditoriales sont accompagnées de descriptions textuelles détaillées pour les utilisateurs de lecteurs d'écran.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Aria-labels descriptifs
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Transcriptions pour le contenu multimédia
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="max-w-4xl mx-auto bg-surface-container rounded-xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 md:p-14 bg-surface-container-high">
            <h2 className="text-3xl font-headline font-bold mb-6">Support Accessibilité</h2>
            <p className="text-on-surface-variant mb-8 font-body">
              Vous rencontrez une difficulté de navigation ? Vous avez une suggestion pour améliorer notre plateforme ? Notre équipe dédiée est à votre écoute.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">mail</span>
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Email</p>
                  <p className="text-on-surface font-medium">access@neural-editorial.ai</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-xl">support_agent</span>
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Délai de réponse</p>
                  <p className="text-on-surface font-medium">Sous 48 heures ouvrées</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative min-h-[300px]">
            <img
              alt="Visual representation of data"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzCGCestZr41BKsHiXQYL356ZKAa0mk-y9p1jq85QHsNklX1ZwaGRg5a928DyJ2eezPaHPG8LqpfZT7o6JB7QbCVny2QCf9F_wxsj49Kos8cU9k2iTd6GGVtlXulkgrmzjbwFza0G3FzoaplBGVQuxyKIuk0CRCD4ktZyCg3K2s6sI4fumKr95PGpoO05JPHFbG0kirY2O_IXqeLqolZCKwrJornATQCB0shgt0qkHJXaDLv54fvZEG-3-LkzHb4_jDb_AMLxy38E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 p-6 glass-card rounded-xl border border-outline-variant/20">
              <p className="text-xs font-label uppercase tracking-widest text-primary font-black mb-2">Note technique</p>
              <p className="text-sm font-body italic text-on-surface">"Le design ne peut être qualifié de moderne s'il exclut une partie de l'humanité."</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
