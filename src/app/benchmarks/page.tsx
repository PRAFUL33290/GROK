import Link from "next/link";
import Image from "next/image";

export default function Benchmarks() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <section className="mb-24 flex flex-col items-center text-center">
        <div className="font-label text-primary tracking-[0.2em] mb-4 uppercase text-xs font-bold">Protocole de Rigueur</div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl">
          L'Art de la Mesure <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">Algorithmique.</span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
          Comment nous évaluons l'intelligence synthétique. Une immersion technique dans nos bancs d'essai pour ChatGPT, Grok et les modèles émergents.
        </p>
      </section>

      {/* Core Benchmarks Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
        {/* MMLU focus */}
        <div className="md:col-span-8 glass-card rounded-xl p-8 border-l-2 border-primary glow-teal">
          <div className="flex justify-between items-start mb-12">
            <div>
              <span className="font-label text-[10px] tracking-widest text-primary-dim uppercase bg-primary-container/20 px-3 py-1 rounded-full">Standard Industriel</span>
              <h3 className="font-headline text-3xl font-bold mt-4">MMLU (Massive Multitask Language Understanding)</h3>
            </div>
            <span className="material-symbols-outlined text-primary text-4xl">account_tree</span>
          </div>
          <p className="text-on-surface-variant mb-8 leading-relaxed max-w-2xl">
            Le benchmark MMLU teste les modèles sur 57 sujets à travers les STEM, les sciences humaines, les sciences sociales et plus encore. Nous mesurons la capacité de ChatGPT et Grok à mobiliser des connaissances encyclopédiques dans des contextes de raisonnement complexe.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-surface-container-high p-4 rounded-lg">
              <div className="text-xs font-label text-on-surface-variant uppercase mb-1">Fréquence</div>
              <div className="font-headline font-bold text-primary">Hebdomadaire</div>
            </div>
            <div className="bg-surface-container-high p-4 rounded-lg">
              <div className="text-xs font-label text-on-surface-variant uppercase mb-1">Echantillon</div>
              <div className="font-headline font-bold text-primary">14k+ Tasks</div>
            </div>
            <div className="bg-surface-container-high p-4 rounded-lg">
              <div className="text-xs font-label text-on-surface-variant uppercase mb-1">Mode</div>
              <div className="font-headline font-bold text-primary">Zero-shot</div>
            </div>
            <div className="bg-surface-container-high p-4 rounded-lg">
              <div className="text-xs font-label text-on-surface-variant uppercase mb-1">Cible</div>
              <div className="font-headline font-bold text-primary">Raisonnement</div>
            </div>
          </div>
        </div>

        {/* HumanEval focus */}
        <div className="md:col-span-4 glass-card rounded-xl p-8 border-l-2 border-secondary glow-purple">
          <div className="flex justify-between items-start mb-12">
            <span className="material-symbols-outlined text-secondary text-4xl">terminal</span>
          </div>
          <h3 className="font-headline text-2xl font-bold mb-4">HumanEval</h3>
          <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
            Évaluation de la génération de code Python. Nous testons la capacité de Grok-1.5 et GPT-4 à résoudre des problèmes d'ingénierie logicielle sans "contamination" par les données d'entraînement.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-secondary-container/30 text-secondary text-[10px] font-label uppercase rounded-full">Pass@1</span>
            <span className="px-3 py-1 bg-secondary-container/30 text-secondary text-[10px] font-label uppercase rounded-full">Logic</span>
            <span className="px-3 py-1 bg-secondary-container/30 text-secondary text-[10px] font-label uppercase rounded-full">Syntax</span>
          </div>
        </div>
      </div>

      {/* Technical Environment Section */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="font-headline text-4xl font-bold mb-6 italic">L'Environnement "Air-Gapped"</h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Pour garantir l'intégrité de nos résultats, tous les tests de performance sont effectués dans des environnements isolés. Nous neutralisons les variations de latence réseau et les optimisations spécifiques aux API pour capturer le "poids brut" de l'intelligence.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-tertiary">verified_user</span>
                <div>
                  <span className="font-bold block">Gouvernance des Données</span>
                  <span className="text-sm text-on-surface-variant">Aucune donnée de test n'est réinjectée dans les cycles d'apprentissage des modèles.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-tertiary">update</span>
                <div>
                  <span className="font-bold block">Cycle de Rafraîchissement</span>
                  <span className="text-sm text-on-surface-variant">Re-benchmarking automatique toutes les 72h après chaque mise à jour système (System Prompt updates).</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square w-full rounded-full border border-outline-variant/20 flex items-center justify-center relative overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVvD3qgFgQ_ccMqCFYivDNP3GnYRfnA-m_6zB37Xjkaepge8I2JB5Pps1s6l11rSSeBVaYV2B53xbtVNABEyXT4oA_oQJ7VAPnpnwYNF2cbNCHV2V-zu7zgzWktsbPZF3Qu9zNGsuNkXm2r8XO3zF711tlBfvhu-pkuktIr8gDIFEPiwkxyfEzc8yN58TQpobr1JeiGeEd2Chbg8kXim9YyfhIuWU3r8pmGBMbKcnP69m0kjipecx5kL1ETxQOeig2Ho1kulhMsyY"
                alt="Abstract visualization of neural network pathways"
                className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute glass-card p-6 rounded-xl border border-primary/30 top-1/4 left-1/4 animate-pulse">
                <span className="font-label text-[10px] text-primary uppercase">Active Monitoring</span>
                <div className="font-headline font-bold text-2xl">99.98% Integrity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Selection & Environment (from Screen 8) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
        <div className="md:col-span-7 glass-card rounded-xl p-8 flex flex-col justify-between overflow-hidden relative border border-outline-variant/15">
          <div className="z-10">
            <h2 className="text-3xl font-headline font-bold mb-4">Critères de Sélection</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div className="flex-1">
                  <span className="font-bold text-on-surface block">Disponibilité API Publique</span>
                  <span className="text-sm text-on-surface-variant">Seuls les modèles accessibles par les développeurs tiers sont intégrés.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                <div className="flex-1">
                  <span className="font-bold text-on-surface block">Gouvernance de Données</span>
                  <span className="text-sm text-on-surface-variant">Analyse de la transparence des jeux de données d'entraînement.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                <div className="flex-1">
                  <span className="font-bold text-on-surface block">Impact Sectoriel</span>
                  <span className="text-sm text-on-surface-variant">Adoption par l'industrie et innovation technique démontrée.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10 scale-150 rotate-12">
            <span className="material-symbols-outlined text-[200px]" style={{fontVariationSettings: "'FILL' 1"}}>analytics</span>
          </div>
        </div>
        <div className="md:col-span-5 bg-surface-container-high rounded-xl p-8 border border-outline-variant/15 flex flex-col">
          <h2 className="text-3xl font-headline font-bold mb-4">Environnement</h2>
          <p className="text-on-surface-variant mb-6 flex-1">Nos tests sont effectués dans des conteneurs isolés pour garantir l'absence de fuite de contexte.</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 rounded-lg bg-surface-container">
              <span className="font-label text-xs tracking-widest text-on-surface-variant">LATENCE MOYENNE</span>
              <span className="font-headline font-bold text-primary">120ms</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-surface-container">
              <span className="font-label text-xs tracking-widest text-on-surface-variant">TEMPÉRATURE</span>
              <span className="font-headline font-bold text-secondary">0.7 (Fixe)</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-surface-container">
              <span className="font-label text-xs tracking-widest text-on-surface-variant">RÉGION SERVEUR</span>
              <span className="font-headline font-bold text-tertiary">EU-West</span>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-primary/40 transition-colors group">
          <span className="material-symbols-outlined text-primary mb-6 block text-3xl group-hover:scale-110 transition-transform">psychology_alt</span>
          <h4 className="font-headline text-xl font-bold mb-4">Raisonnement Abstrait</h4>
          <p className="text-sm text-on-surface-variant leading-relaxed">Utilisation du benchmark ARC (Abstraction and Reasoning Corpus) pour tester la capacité des modèles à apprendre de nouveaux concepts à partir de peu d'exemples.</p>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-secondary/40 transition-colors group">
          <span className="material-symbols-outlined text-secondary mb-6 block text-3xl group-hover:scale-110 transition-transform">translate</span>
          <h4 className="font-headline text-xl font-bold mb-4">Nuance Linguistique</h4>
          <p className="text-sm text-on-surface-variant leading-relaxed">Évaluation sur le dataset WinoGrande pour la résolution d'ambiguïtés sémantiques nécessitant une compréhension du monde réel.</p>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-tertiary/40 transition-colors group">
          <span className="material-symbols-outlined text-tertiary mb-6 block text-3xl group-hover:scale-110 transition-transform">policy</span>
          <h4 className="font-headline text-xl font-bold mb-4">Éthique &amp; Sécurité</h4>
          <p className="text-sm text-on-surface-variant leading-relaxed">Protocoles de Red-Teaming systématiques pour mesurer la résistance aux "jailbreaks" et la conformité aux directives de sécurité AI.</p>
        </div>
      </div>
    </main>
  );
}
