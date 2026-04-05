import Link from "next/link";
import Image from "next/image";

export default function ProsCons() {
  return (
    <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-20 text-center relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">Analyse Comparative</span>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          Avantages &amp; <span className="text-gradient-secondary">Inconvénients</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
          Une exploration approfondie des forces et des faiblesses des deux titans de l'IA générative pour vous aider à choisir votre allié numérique.
        </p>
      </header>

      {/* Why Choose Section: Asymmetric Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
        {/* ChatGPT Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
            </div>
            <h2 className="font-headline text-3xl font-bold">Pourquoi choisir <span className="text-primary">ChatGPT</span> ?</h2>
          </div>

          <div className="glass-card ghost-border p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary shadow-[0_0_15px_rgba(118,240,199,0.5)]"></div>
            <p className="text-on-surface mb-6 leading-relaxed">
              Le pionnier d'OpenAI reste la référence pour sa polyvalence créative et son écosystème ultra-développé.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <span className="font-bold block">Accessibilité Maximale</span>
                  <span className="text-sm text-on-surface-variant">Interface intuitive et application mobile performante.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <span className="font-bold block">GPT Store &amp; Plugins</span>
                  <span className="text-sm text-on-surface-variant">Des milliers d'outils personnalisés pour chaque métier.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <span className="font-bold block">Nuances Créatives</span>
                  <span className="text-sm text-on-surface-variant">Excellence dans la rédaction littéraire et le storytelling.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-error/50">
            <h4 className="font-label text-xs font-bold uppercase tracking-widest text-error mb-4">Points de Vigilance</h4>
            <ul className="text-sm space-y-2 text-on-surface-variant">
              <li>• Filtres de sécurité parfois trop restrictifs ("préjugés de neutralité").</li>
              <li>• Données d'entraînement décalées par rapport à l'actualité immédiate (hors navigation web).</li>
            </ul>
          </div>
        </div>

        {/* Grok Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
              <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
            </div>
            <h2 className="font-headline text-3xl font-bold">Pourquoi choisir <span className="text-secondary">Grok</span> ?</h2>
          </div>

          <div className="glass-card ghost-border p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary shadow-[0_0_15px_rgba(230,122,255,0.5)]"></div>
            <p className="text-on-surface mb-6 leading-relaxed">
              L'IA de xAI se distingue par son accès en temps réel au flux X et sa personnalité sans compromis.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                <div>
                  <span className="font-bold block">Flux X en Temps Réel</span>
                  <span className="text-sm text-on-surface-variant">Analyse instantanée des tendances et actualités mondiales.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                <div>
                  <span className="font-bold block">Anti-Woke &amp; Direct</span>
                  <span className="text-sm text-on-surface-variant">Moins de censure et un ton humoristique/sarcastique unique.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                <div>
                  <span className="font-bold block">Capacités de Raisonnement</span>
                  <span className="text-sm text-on-surface-variant">Forte performance sur les benchmarks de logique pure.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-error/50">
            <h4 className="font-label text-xs font-bold uppercase tracking-widest text-error mb-4">Points de Vigilance</h4>
            <ul className="text-sm space-y-2 text-on-surface-variant">
              <li>• Limité à l'écosystème Premium de X pour une expérience complète.</li>
              <li>• Moins d'outils tiers et d'intégrations API par rapport à OpenAI.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparative Table (No Lines) */}
      <section className="mb-32">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold mb-4">Tableau Récapitulatif</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="overflow-hidden rounded-2xl glass-card ghost-border">
          <div className="grid grid-cols-4 bg-surface-container-high p-6 font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
            <div className="col-span-1">Critère</div>
            <div className="col-span-1 text-primary">ChatGPT-4o</div>
            <div className="col-span-1 text-secondary">Grok-1.5</div>
            <div className="col-span-1">Verdict</div>
          </div>

          {/* Rows */}
          <div className="grid grid-cols-4 p-6 bg-surface-container items-center transition-colors hover:bg-surface-container-highest/50">
            <div className="font-bold">Créativité</div>
            <div className="text-sm">Exceptionnelle</div>
            <div className="text-sm">Standard</div>
            <div><span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase">ChatGPT</span></div>
          </div>
          <div className="grid grid-cols-4 p-6 bg-surface-container-low items-center transition-colors hover:bg-surface-container-highest/50">
            <div className="font-bold">Actualité</div>
            <div className="text-sm">Navigation Web</div>
            <div className="text-sm">Flux X Live</div>
            <div><span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase">Grok</span></div>
          </div>
          <div className="grid grid-cols-4 p-6 bg-surface-container items-center transition-colors hover:bg-surface-container-highest/50">
            <div className="font-bold">Accessibilité</div>
            <div className="text-sm">Gratuit / Plus</div>
            <div className="text-sm">X Premium</div>
            <div><span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase">ChatGPT</span></div>
          </div>
          <div className="grid grid-cols-4 p-6 bg-surface-container-low items-center transition-colors hover:bg-surface-container-highest/50">
            <div className="font-bold">Ton / Style</div>
            <div className="text-sm">Formel / Neutre</div>
            <div className="text-sm">Audacieux / Humour</div>
            <div><span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase">Grok</span></div>
          </div>
        </div>
      </section>

      {/* Privacy & Ethics Section */}
      <section className="mb-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsRx1MjuHK-CL5Tp7y6RvPF9YRqOM3jb0aO-0baxwnt8i3M-T-aVNJ9Fk6bm4lalqhRRfhmT192PUjFspp0Po3oMr85SKEJG0RjnBWzeyckQ7RqtraoD1kgxUcC9rVgVcMNvh68RWC4c6DcfMcPLVlHwRBBL95rfH1fZ1PLBp3UrART3YUXGSy1JIeVCaInvVDTISBsLTLlCkPFB0g_5Oqowguh-p9xgpwcTkpIwb4xOcJgYC-3_xRIXMTMeweK4bmFWRpuqxSY0Q"
                alt="Cybersecurity interface"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl ghost-border max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-tertiary">security</span>
                <span className="font-headline font-bold">Data Sovereignty</span>
              </div>
              <p className="text-xs text-on-surface-variant italic">"Le cryptage n'est pas une option, c'est un droit fondamental."</p>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-4xl font-bold mb-8">Confidentialité &amp; Éthique</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1.5 h-12 bg-primary rounded-full"></div>
                <div>
                  <h4 className="font-bold text-primary">OpenAI (ChatGPT)</h4>
                  <p className="text-sm text-on-surface-variant">Plusieurs niveaux de contrôle. Utilise les données pour l'entraînement par défaut, mais propose un mode "Conversation Temporaire" et des options Enterprise strictes (SOC 2 Type II).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-12 bg-secondary rounded-full"></div>
                <div>
                  <h4 className="font-bold text-secondary">xAI (Grok)</h4>
                  <p className="text-sm text-on-surface-variant">Vision libertarienne. Met l'accent sur la "recherche de la vérité" sans filtres idéologiques. Moins de transparence publique sur les protocoles de suppression de données individuelles à ce jour.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict Final: Bento Grid */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold mb-4 italic">Verdict : Quelle IA pour quel usage ?</h2>
          <p className="text-on-surface-variant uppercase font-label tracking-widest text-xs">Notre recommandation finale</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card ghost-border p-8 rounded-3xl flex flex-col items-center text-center transition-all hover:-translate-y-2">
            <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{fontVariationSettings: "'FILL' 1"}}>edit_note</span>
            <h3 className="font-headline text-xl font-bold mb-4">Le Créatif &amp; Pro</h3>
            <p className="text-sm text-on-surface-variant mb-6">Idéal pour la rédaction, le code complexe et l'intégration dans des workflows existants.</p>
            <div className="mt-auto">
              <span className="font-label text-[10px] font-bold text-primary border border-primary/30 px-3 py-1 rounded-full uppercase">Top ChatGPT</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-surface-container-highest to-surface-container-low p-8 rounded-3xl flex flex-col items-center text-center shadow-xl border border-white/5 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 blur-3xl group-hover:bg-secondary/20 transition-all"></div>
            <span className="material-symbols-outlined text-4xl text-secondary mb-6" style={{fontVariationSettings: "'FILL' 1"}}>trending_up</span>
            <h3 className="font-headline text-xl font-bold mb-4">Le Veilleur Info</h3>
            <p className="text-sm text-on-surface-variant mb-6">Idéal pour suivre l'actualité tech, politique ou sociale en direct avec un ton tranché.</p>
            <div className="mt-auto">
              <span className="font-label text-[10px] font-bold text-secondary border border-secondary/30 px-3 py-1 rounded-full uppercase">Top Grok</span>
            </div>
          </div>

          <div className="glass-card ghost-border p-8 rounded-3xl flex flex-col items-center text-center transition-all hover:-translate-y-2">
            <span className="material-symbols-outlined text-4xl text-tertiary mb-6" style={{fontVariationSettings: "'FILL' 1"}}>hub</span>
            <h3 className="font-headline text-xl font-bold mb-4">L'Omnivore Digital</h3>
            <p className="text-sm text-on-surface-variant mb-6">Pourquoi choisir ? L'usage hybride permet de confronter les faits et les styles.</p>
            <div className="mt-auto">
              <span className="font-label text-[10px] font-bold text-tertiary border border-tertiary/30 px-3 py-1 rounded-full uppercase">Usage Mixte</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative rounded-[40px] overflow-hidden p-12 text-center bg-surface-container-highest">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1TLNge0ecvtLUmthwo_012yjABcPvK7S3G4G9oJHekLjZ99B7W7Sq77Tu-Giu6OXZSVXvkvTnpdv74bfQNwxMtNfzXPG1MtrhWwveAqqIBBSLBtXbgFiPsKy2K9JyT-2s3Q1au2OLinVtMRwd7CqM5KOQT3qfyMVOurxksBv9TgxNT1EI6gBNXu4Jozg-z94c_bvpCHVjmSZ9U61sf3vaix8gTjZlwnBtCCCx-2rjOnYwMX-j8hYPhFD4YD1nH9CSzuOEdKp8sXw')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="relative z-10">
          <h2 className="font-headline text-3xl font-bold mb-6">Prêt à tester la puissance ?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/compare">
              <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-full font-bold shadow-[0_0_15px_rgba(118,240,199,0.3)] hover:scale-105 transition-transform">
                Comparer les Modèles
              </button>
            </Link>
            <Link href="/benchmarks">
              <button className="bg-white/5 backdrop-blur-md text-on-surface border border-white/10 px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
                Lire le Guide Complet
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
