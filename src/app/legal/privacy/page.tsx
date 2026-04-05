import Link from "next/link";
import Image from "next/image";

export default function Privacy() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="mb-20 text-center relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute -top-10 left-1/3 -translate-x-1/2 w-48 h-48 bg-secondary/10 rounded-full blur-[80px]"></div>
        <span className="font-label text-[10px] tracking-[0.2em] text-secondary font-bold mb-4 block uppercase">Juridique &amp; Éthique</span>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-on-surface via-on-surface to-primary">
          Politique de Confidentialité
        </h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
          Chez The Neural Editorial, la transparence est le pilier de notre analyse IA. Découvrez comment nous protégeons vos données tout en évaluant l'intelligence artificielle.
        </p>
        <div className="mt-8 flex justify-center items-center space-x-4 text-xs font-label text-outline uppercase tracking-widest">
          <span>Dernière mise à jour : 14 Mai 2024</span>
          <span className="w-1 h-1 bg-outline rounded-full"></span>
          <span>Version 2.1.0</span>
        </div>
      </section>

      {/* Content Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Introduction */}
        <div className="md:col-span-12 glass-card rounded-xl p-8 border-l-2 border-primary">
          <div className="flex items-start space-x-6">
            <div className="p-3 rounded-lg bg-primary-container/20">
              <span className="material-symbols-outlined text-primary text-3xl">policy</span>
            </div>
            <div>
              <h2 className="font-headline text-2xl font-bold mb-4">Engagement de Transparence</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Cette politique définit les bases sur lesquelles toutes les données personnelles que nous collectons auprès de vous, ou que vous nous fournissez, seront traitées par nos services de benchmarking. Nous traitons vos données avec la même rigueur technique que celle appliquée à nos tests de modèles LLM.
              </p>
            </div>
          </div>
        </div>

        {/* Collecte des données */}
        <div className="md:col-span-7 glass-card rounded-xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-all group-hover:bg-primary/10"></div>
          <div className="flex items-center space-x-3 mb-6">
            <span className="material-symbols-outlined text-primary">database</span>
            <h3 className="font-headline text-xl font-bold">Collecte des Données</h3>
          </div>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li className="flex items-start space-x-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
              <span><strong>Informations d'Identité :</strong> Nom, prénom et identifiants professionnels pour l'accès aux benchmarks premium.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
              <span><strong>Métriques de Navigation :</strong> Adresses IP anonymisées et comportements d'interaction avec les modèles d'IA comparés.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
              <span><strong>Inputs de Test :</strong> Requêtes soumises lors de l'utilisation de nos outils de comparaison "Arena".</span>
            </li>
          </ul>
        </div>

        {/* Utilisation des Cookies */}
        <div className="md:col-span-5 glass-card rounded-xl p-8 border-t-2 border-secondary/30">
          <div className="flex items-center space-x-3 mb-6">
            <span className="material-symbols-outlined text-secondary">cookie</span>
            <h3 className="font-headline text-xl font-bold">Cookies &amp; Tracking</h3>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
            Nous utilisons des traceurs techniques pour maintenir votre session active et des cookies analytiques pour mesurer la performance de nos algorithmes d'éditorialisation.
          </p>
          <div className="bg-surface-container-highest/50 p-4 rounded-lg">
            <div className="flex justify-between items-center text-[10px] font-label uppercase tracking-widest text-secondary">
              <span>Préférences de Consentement</span>
              <span className="material-symbols-outlined text-sm">settings_input_component</span>
            </div>
          </div>
        </div>

        {/* Droits des utilisateurs */}
        <div className="md:col-span-5 glass-card rounded-xl p-8 overflow-hidden relative">
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tertiary/5 rounded-full blur-3xl"></div>
          <div className="flex items-center space-x-3 mb-6">
            <span className="material-symbols-outlined text-tertiary">fingerprint</span>
            <h3 className="font-headline text-xl font-bold">Vos Droits (RGPD)</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-surface-container rounded-lg text-xs font-medium hover:bg-surface-bright transition-colors">Droit d'accès</div>
            <div className="p-3 bg-surface-container rounded-lg text-xs font-medium hover:bg-surface-bright transition-colors">Rectification</div>
            <div className="p-3 bg-surface-container rounded-lg text-xs font-medium hover:bg-surface-bright transition-colors">Effacement</div>
            <div className="p-3 bg-surface-container rounded-lg text-xs font-medium hover:bg-surface-bright transition-colors">Portabilité</div>
          </div>
          <p className="mt-6 text-xs text-on-surface-variant italic">
            Pour exercer vos droits, contactez notre DPO à legal@neuraleditorial.ai
          </p>
        </div>

        {/* Sécurité IA */}
        <div className="md:col-span-7 glass-card rounded-xl p-8 border-r-2 border-primary/20">
          <div className="flex items-center space-x-3 mb-6">
            <span className="material-symbols-outlined text-primary">security</span>
            <h3 className="font-headline text-xl font-bold">Sécurité des Données IA</h3>
          </div>
          <div className="space-y-4">
            <div className="flex space-x-4 items-start">
              <div className="w-10 h-10 shrink-0 bg-surface-bright rounded flex items-center justify-center font-headline font-bold text-primary">01</div>
              <p className="text-sm text-on-surface-variant">Chiffrement AES-256 de bout en bout pour tous les datasets de benchmarks propriétaires.</p>
            </div>
            <div className="flex space-x-4 items-start">
              <div className="w-10 h-10 shrink-0 bg-surface-bright rounded flex items-center justify-center font-headline font-bold text-primary">02</div>
              <p className="text-sm text-on-surface-variant">Isolation stricte des environnements de test pour éviter toute fuite de données vers les modèles tiers (Grok, ChatGPT, Claude).</p>
            </div>
            <div className="flex space-x-4 items-start">
              <div className="w-10 h-10 shrink-0 bg-surface-bright rounded flex items-center justify-center font-headline font-bold text-primary">03</div>
              <p className="text-sm text-on-surface-variant">Audit trimestriel de nos protocoles d'accès par des entités de cybersécurité indépendantes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="mt-16 glass-card rounded-2xl p-12 text-center border-t border-primary/10">
        <h3 className="font-headline text-2xl font-bold mb-4">Une question sur l'éthique de nos données ?</h3>
        <p className="text-on-surface-variant mb-8 max-w-lg mx-auto">Consultez notre manifeste sur l'IA ou contactez notre équipe juridique pour toute demande spécifique.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-gradient-to-br from-primary to-primary-container px-8 py-3 rounded-full font-headline font-bold text-on-primary shadow-lg hover:shadow-primary/20 transition-all scale-100 hover:scale-105 active:scale-95">
            Contacter le Support Légal
          </button>
          <Link href="/legal/ethics">
            <button className="bg-surface-bright px-8 py-3 rounded-full font-headline font-bold text-primary hover:bg-surface-container-highest transition-all">
              AI Ethics Statement
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
