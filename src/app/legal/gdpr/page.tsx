import Link from "next/link";
import Image from "next/image";

export default function GDPR() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-[1200px] mx-auto">
      {/* Hero Section */}
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20 mb-6">
          <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
          <span className="font-label uppercase tracking-[0.08em] text-[10px] text-primary">Standard de Protection Européen</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter mb-8 leading-[0.9]">
          Conformité <span className="text-primary text-glow-primary">RGPD</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          Chez The Neural Editorial, la souveraineté de vos données n'est pas une option. Nous appliquons les standards de chiffrement les plus rigoureux pour garantir un environnement éditorial sécurisé.
        </p>
      </header>

      {/* Rights Grid (Bento Style) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div className="md:col-span-2 glass-card rounded-xl p-8 flex flex-col justify-between min-h-[320px]">
          <div>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">fingerprint</span>
            </div>
            <h3 className="text-2xl font-headline font-semibold mb-4">Vos Droits Fondamentaux</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-on-surface-variant font-body">
              <div className="space-y-2">
                <span className="text-primary font-bold">01. Accès</span>
                <p className="text-sm">Obtenez une copie complète de toutes les données traitées par nos algorithmes.</p>
              </div>
              <div className="space-y-2">
                <span className="text-primary font-bold">02. Rectification</span>
                <p className="text-sm">Modifiez instantanément toute information inexacte via votre portail de contrôle.</p>
              </div>
              <div className="space-y-2">
                <span className="text-primary font-bold">03. Effacement</span>
                <p className="text-sm">Le droit à l'oubli définitif. Suppression totale de nos serveurs en 72h.</p>
              </div>
              <div className="space-y-2">
                <span className="text-primary font-bold">04. Portabilité</span>
                <p className="text-sm">Exportez vos préférences et historiques dans un format JSON standardisé.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-high rounded-xl p-8 relative overflow-hidden flex flex-col justify-end group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <span className="material-symbols-outlined text-[120px]">lock_open</span>
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-headline font-semibold mb-2">Transparence Totale</h3>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Nous ne vendons jamais vos données à des tiers. Chaque bit d'information est utilisé pour améliorer votre expérience éditoriale.</p>
            <button className="flex items-center gap-2 text-primary font-label uppercase tracking-widest text-xs font-bold hover:gap-4 transition-all">
              Consulter le registre <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Security Section (Horizontal Showcase) */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10">
          <div className="w-full md:w-1/2 h-80 md:h-auto min-h-[400px] relative">
            <img
              alt="Chiffrement de données"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA67meZ1Zy5sbcDSLslle10rG9kI-1LQUUKWOO9kLukJK6OYnYUJmNcV6oesOeWfINuaxI5O8LIV2IacADLMekp9cRvG9ATiSlVVkjTAN8eOQ6k9rtVL3Zu0NWv5aEqzFn1xK5Sicl_RYNjkHI8w82T8lP8mznE7JSJsROTC_bDZ2Qyq0BNm1ujufWZykP3J0WxF-CQs3v75C_05ekdQSiJVDbS3I6soco8Cg5qElRoZ5QhZf0aWieVNgJsvvuRqI8jjWB60-O3uvY"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-6 glass-card rounded-xl border-primary/20">
                <span className="font-label text-primary text-xl font-black block text-center">AES-256</span>
                <span className="text-[10px] uppercase tracking-tighter text-on-surface/60">Military Grade Encryption</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 md:pr-16">
            <h2 className="text-4xl font-headline font-bold mb-6">Sécurité Infrastructurelle</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>shield_lock</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">Chiffrement de bout en bout</h4>
                  <p className="text-sm text-on-surface-variant">Toutes les communications entre votre interface et nos modèles neuronaux sont encapsulées dans des tunnels TLS 1.3.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>hub</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">Siloing des Données</h4>
                  <p className="text-sm text-on-surface-variant">Vos données d'entraînement ne sont jamais mélangées avec celles d'autres utilisateurs, garantissant une étanchéité absolue.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">update</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">Audits Hebdomadaires</h4>
                  <p className="text-sm text-on-surface-variant">Des tests d'intrusion automatisés et manuels sont effectués chaque semaine pour prévenir toute vulnérabilité.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DPO Contact Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-headline font-bold mb-6">Contactez notre DPO</h2>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            Une question sur vos données ? Notre Data Protection Officer est à votre disposition pour toute demande relative à la confidentialité.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors group">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-secondary text-sm">mail</span>
              </div>
              <div>
                <span className="block text-[10px] font-label uppercase text-on-surface-variant">Email Direct</span>
                <span className="font-medium">dpo@neural-editorial.ai</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors group">
              <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-tertiary text-sm">pin_drop</span>
              </div>
              <div>
                <span className="block text-[10px] font-label uppercase text-on-surface-variant">Siège Social</span>
                <span className="font-medium">Rue de la Technologie, 75008 Paris, France</span>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card rounded-xl p-8 border-l-4 border-l-primary">
          <h3 className="text-xl font-headline font-semibold mb-6">Soumettre une demande RGPD</h3>
          <form className="space-y-4" action="#">
            <div>
              <label className="block text-[10px] font-label uppercase mb-1 ml-1 text-on-surface-variant">Votre Identité</label>
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full bg-surface-container-lowest border-none rounded-xl py-3 px-4 text-on-surface placeholder:text-on-surface/20 focus:ring-1 focus:ring-primary/40 transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-label uppercase mb-1 ml-1 text-on-surface-variant">Type de Demande</label>
              <select className="w-full bg-surface-container-lowest border-none rounded-xl py-3 px-4 text-on-surface focus:ring-1 focus:ring-primary/40 transition-all appearance-none">
                <option>Droit d'accès</option>
                <option>Demande de suppression</option>
                <option>Opposition au traitement</option>
                <option>Autre question</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-label uppercase mb-1 ml-1 text-on-surface-variant">Précisions</label>
              <textarea
                rows={4}
                placeholder="Détaillez votre demande..."
                className="w-full bg-surface-container-lowest border-none rounded-xl py-3 px-4 text-on-surface placeholder:text-on-surface/20 focus:ring-1 focus:ring-primary/40 transition-all"
              ></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-on-primary font-headline font-bold rounded-xl hover:bg-primary-container transition-colors active:scale-[0.98]">
              Envoyer la demande
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
