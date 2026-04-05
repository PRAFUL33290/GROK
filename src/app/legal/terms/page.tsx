import Link from "next/link";
import Image from "next/image";

export default function Terms() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-primary"></div>
            <span className="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold">Document de Conformité</span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Conditions d'Utilisation.
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
            Veuillez lire attentivement ces conditions avant d'utiliser notre plateforme de curation éditoriale assistée par IA. L'accès au service implique l'acceptation pleine et entière de ces termes.
          </p>
        </div>
      </section>

      {/* Main Layout with Asymmetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Side Summary Navigation */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-32 space-y-8">
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15">
              <h3 className="font-label text-on-surface-variant uppercase text-[10px] tracking-widest mb-6 font-bold">Navigation Rapide</h3>
              <ul className="space-y-4">
                <li><a className="text-on-surface/60 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2" href="#propriete"><span className="material-symbols-outlined text-xs">arrow_forward</span> Propriété Intellectuelle</a></li>
                <li><a className="text-on-surface/60 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2" href="#responsabilite"><span className="material-symbols-outlined text-xs">arrow_forward</span> Responsabilités Utilisateur</a></li>
                <li><a className="text-on-surface/60 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2" href="#limitation"><span className="material-symbols-outlined text-xs">arrow_forward</span> Limitation de Responsabilité</a></li>
                <li><a className="text-on-surface/60 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2" href="#ai-clauses"><span className="material-symbols-outlined text-xs">arrow_forward</span> Clauses Spécifiques IA</a></li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-xl h-64 group">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Abstract fluid background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-enIf0Nsd0xeVp-h1SDEZUTFEUsbsEogNt_sAqxWgm9whe1MGR8GB8wo0j0-bEJTntLVXtaGUyjePKipzueD1fXG0DT8-e-fgPsfZau3kDbjB4-YpNB5r3K3Y_NRe83AdWCrBR06maILRsvRgDAV6IhKgU-BDAjf0FqeCFoce37bAxLXz7vM8bauHJICz8zXUXEEBnVaGc1n2gs5b1MzcgZAByC5HyOo1DKuPWc2TX6jc0Em6CZkjwHAvde1ZPTiugCngOsyG5pI"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Besoin d'aide ?</span>
                <p className="text-sm text-on-surface font-medium leading-snug">Contactez notre équipe de conformité juridique.</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="lg:col-span-9 space-y-16">
          {/* Section 1: Intellectual Property */}
          <section className="relative" id="propriete">
            <div className="absolute -left-4 top-0 w-1 h-20 bg-primary shadow-[0_0_15px_rgba(118,240,199,0.5)]"></div>
            <div className="bg-surface-container-high/40 p-10 rounded-xl border border-outline-variant/15">
              <h2 className="font-headline text-3xl font-bold mb-6">1. Propriété Intellectuelle</h2>
              <div className="prose prose-invert max-w-none space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  L'ensemble des contenus présents sur <span className="text-primary font-medium">The Neural Editorial</span>, incluant sans limitation les graphismes, logos, textes, sons, logiciels et l'architecture générale du site, est la propriété exclusive de Neural Editorial SARL.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-surface-container-highest p-6 rounded-xl">
                    <span className="material-symbols-outlined text-secondary mb-4">copyright</span>
                    <h4 className="font-bold text-on-surface mb-2">Marques Déposées</h4>
                    <p className="text-xs">Tous les noms de modèles d'IA (GPT-4, Claude, Grok, etc.) appartiennent à leurs propriétaires respectifs.</p>
                  </div>
                  <div className="bg-surface-container-highest p-6 rounded-xl">
                    <span className="material-symbols-outlined text-primary mb-4">terminal</span>
                    <h4 className="font-bold text-on-surface mb-2">Code Propriétaire</h4>
                    <p className="text-xs">Nos algorithmes de comparaison et de scoring sont protégés par le secret industriel.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: User Responsibilities */}
          <section className="bg-surface-container-low p-10 rounded-xl border border-outline-variant/10" id="responsabilite">
            <h2 className="font-headline text-3xl font-bold mb-8">2. Responsabilités de l'Utilisateur</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs italic">01</div>
                  <p className="text-on-surface-variant text-sm">Vous vous engagez à fournir des informations exactes lors de la création de votre profil premium.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs italic">02</div>
                  <p className="text-on-surface-variant text-sm">L'utilisation automatisée (bots, scrapers) sans API officielle est strictement prohibée.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs italic">03</div>
                  <p className="text-on-surface-variant text-sm">Le partage de compte entre plusieurs entités physiques est limité aux licences 'Enterprise'.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs italic">04</div>
                  <p className="text-on-surface-variant text-sm">Toute tentative de reverse-engineering de nos modèles d'analyse entraînera une suspension immédiate.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Limitation of Liability */}
          <section className="glass-card p-12 rounded-xl relative overflow-hidden" id="limitation">
            <div className="absolute right-0 top-0 w-32 h-32 bg-secondary/10 blur-[60px]"></div>
            <div className="relative z-10">
              <h2 className="font-headline text-3xl font-bold mb-6">3. Limitation de Responsabilité</h2>
              <div className="space-y-6 text-on-surface-variant">
                <p className="leading-relaxed">
                  <span className="font-bold text-on-surface">Neural Editorial</span> s'efforce de fournir des informations de comparaison aussi précises que possible. Toutefois, nous ne pouvons être tenus responsables des omissions, des inexactitudes ou des carences dans la mise à jour, qu'elles soient de notre fait ou du fait des tiers partenaires qui nous fournissent ces informations.
                </p>
                <div className="p-6 bg-surface-container-lowest/50 border-l-2 border-secondary rounded-r-xl italic text-sm">
                  "Les scores de performance sont fournis à titre indicatif et dépendent de l'infrastructure cloud au moment du test. Ils ne constituent pas une garantie contractuelle de performance pour vos propres intégrations."
                </div>
                <p className="text-sm">
                  En aucun cas, Neural Editorial ne pourra être tenu responsable des dommages indirects tels qu'une perte de marché ou perte d'une chance consécutive à l'utilisation du site.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: AI Specific Clauses */}
          <section id="ai-clauses">
            <div className="mb-8">
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary font-black mb-2 block">Special Focus</span>
              <h2 className="font-headline text-4xl font-bold tracking-tight">4. Clauses Spécifiques à l'IA</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/15 flex flex-col justify-between">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">psychology</span>
                <div>
                  <h4 className="font-bold mb-3">Hallucinations</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Les synthèses générées par nos outils d'IA peuvent contenir des erreurs factuelles. Une vérification humaine est toujours recommandée.</p>
                </div>
              </div>
              <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/15 flex flex-col justify-between">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6">database</span>
                <div>
                  <h4 className="font-bold mb-3">Entraînement</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Nous ne réutilisons jamais vos prompts confidentiels pour l'entraînement de nos modèles sans votre consentement explicite.</p>
                </div>
              </div>
              <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/15 flex flex-col justify-between">
                <span className="material-symbols-outlined text-4xl text-tertiary mb-6">verified_user</span>
                <div>
                  <h4 className="font-bold mb-3">Biais Algorithmique</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Nos audits de neutralité sont publics. Nous luttons activement contre les biais de genre et de culture dans nos classements.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Box */}
          <section className="mt-20 p-1 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-2xl">
            <div className="bg-background p-12 rounded-[14px] flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="font-headline text-3xl font-bold mb-2">Vous avez des questions ?</h3>
                <p className="text-on-surface-variant">Notre service juridique est disponible pour clarifier nos conditions.</p>
              </div>
              <div className="flex gap-4">
                <button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">mail</span> Contacter
                </button>
                <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold transition-all active:scale-95 shadow-[0_0_20px_rgba(118,240,199,0.3)]">
                  Télécharger PDF
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
