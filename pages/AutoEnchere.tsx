
import React, { useState } from 'react';
import { 
  Gavel, ShieldCheck, TrendingUp, Zap, UserPlus, 
  HandCoins, Building2, Briefcase, ArrowRight, 
  CheckCircle2, Phone, Mail, Clock, ShieldAlert,
  BarChart3, Users, Lock, LogIn, Fingerprint, ChevronRight, Check, Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface AutoEnchereProps {
  onBack: () => void;
  onExploreClick: () => void;
}

const AutoEnchere: React.FC<AutoEnchereProps> = ({ onBack, onExploreClick }) => {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');

  return (
    <div className="min-h-screen bg-white text-slate-900 font-inter selection:bg-[#F37021] selection:text-white">
      
      {/* --- HERO SECTION: DEEP NAVY & ORANGE --- */}
      <section className="relative pt-20 pb-24 md:pb-40 overflow-hidden bg-[#0F172A]">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1459DD]/10 skew-x-[-15deg] translate-x-32 pointer-events-none"></div>
        <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-[#F37021]/10 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-md">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F37021] animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Elite Automotive Network</span>
              </div>
              
              <h1 className="text-5xl md:text-[90px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-10">
                L'avenir <br />
                <span className="text-[#F37021]">est aux</span> <br />
                <span className="text-[#1459DD]">enchères.</span>
              </h1>
              
              <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-lg mb-12">
                La plateforme B2B & B2C de référence pour la valorisation de flottes automobiles au Maroc.
              </p>

              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => document.getElementById('auth-module')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-[#F37021] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-[#F37021]/20 active:scale-95 flex items-center gap-3"
                >
                  Démarrer maintenant <ArrowUpRight size={18} />
                </button>
                <button className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3">
                  <BarChart3 size={18} className="text-[#1459DD]" /> Nos résultats
                </button>
              </div>
            </div>

            {/* --- AUTH CLIENT MODULE --- */}
            <div id="auth-module" className="w-full lg:w-[480px] relative">
               <div className="bg-white rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] p-10 md:p-12 relative z-10">
                  <div className="flex bg-slate-50 p-1.5 rounded-2xl mb-12">
                     <button 
                       onClick={() => setAuthMode('register')}
                       className={`flex-1 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${authMode === 'register' ? 'bg-white text-[#F37021] shadow-sm' : 'text-slate-400'}`}
                     >
                       Créer un compte
                     </button>
                     <button 
                       onClick={() => setAuthMode('login')}
                       className={`flex-1 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${authMode === 'login' ? 'bg-white text-[#1459DD] shadow-sm' : 'text-slate-400'}`}
                     >
                       Connexion
                     </button>
                  </div>

                  <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                     {authMode === 'register' && (
                       <div className="space-y-2">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left block">Nom ou Société</label>
                          <div className="relative">
                            <Users size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" />
                            <input type="text" placeholder="Ex: NADO Maroc" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#F37021] rounded-2xl pl-12 pr-6 py-4 outline-none font-bold text-sm transition-all" />
                          </div>
                       </div>
                     )}
                     <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left block">Email Professionnel</label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" />
                          <input type="email" placeholder="contact@domaine.ma" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] rounded-2xl pl-12 pr-6 py-4 outline-none font-bold text-sm transition-all" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left block">Mot de passe</label>
                        <div className="relative">
                          <Lock size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" />
                          <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#F37021] rounded-2xl pl-12 pr-6 py-4 outline-none font-bold text-sm transition-all" />
                        </div>
                     </div>

                     <button className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all flex items-center justify-center gap-3 mt-4 text-white hover:scale-[1.02] active:scale-95 ${authMode === 'register' ? 'bg-[#F37021]' : 'bg-[#1459DD]'}`}>
                        {authMode === 'register' ? <><Fingerprint size={18} /> Créer l'accès</> : <><LogIn size={18} /> Se connecter</>}
                     </button>
                  </form>
                  
                  <p className="mt-8 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center leading-relaxed">
                    Plateforme certifiée par <span className="text-[#1459DD]">NADO Premium Automotive</span>
                  </p>
               </div>
               
               {/* Background Decorative Shield */}
               <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[#1459DD] rounded-[2rem] flex items-center justify-center -rotate-12 shadow-2xl z-0 border-[6px] border-white">
                  <ShieldCheck size={48} className="text-white" />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SOLUTIONS GRID: BENTO STYLE --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Auction Card (Orange Focus) */}
            <div className="group p-12 bg-white rounded-[3.5rem] border border-slate-100 hover:border-[#F37021]/30 hover:shadow-2xl hover:shadow-[#F37021]/5 transition-all text-left">
              <div className="w-16 h-16 bg-[#F37021]/10 text-[#F37021] rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-[#F37021] group-hover:text-white transition-all">
                <Gavel size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">Enchères <br />Dynamiques</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-10">
                Vendez au meilleur offrant parmi notre réseau de 1200+ acheteurs professionnels qualifiés.
              </p>
              <div className="flex items-center gap-2 text-[#F37021] font-black text-[10px] uppercase tracking-widest">
                En savoir plus <ArrowRight size={14} />
              </div>
            </div>

            {/* Direct Sale Card (Dark Blue Focus) */}
            <div className="group p-12 bg-[#0F172A] rounded-[3.5rem] text-white shadow-3xl hover:translate-y-[-8px] transition-all text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1459DD]/20 blur-3xl"></div>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-10 text-[#1459DD] group-hover:bg-[#1459DD] group-hover:text-white transition-all">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Achat Cash <br />Immédiat</h3>
              <p className="text-slate-400 font-medium text-sm leading-relaxed mb-10">
                Libérez votre trésorerie en 24h. Nous rachetons vos parcs automobiles sans condition.
              </p>
              <div className="flex items-center gap-2 text-[#1459DD] font-black text-[10px] uppercase tracking-widest">
                Estimer mon cash <ArrowRight size={14} />
              </div>
            </div>

            {/* Fleet Management (Institution Focus) */}
            <div className="group p-12 bg-white rounded-[3.5rem] border border-slate-100 hover:border-[#1459DD]/30 hover:shadow-2xl hover:shadow-[#1459DD]/5 transition-all text-left">
              <div className="w-16 h-16 bg-[#1459DD]/10 text-[#1459DD] rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-[#1459DD] group-hover:text-white transition-all">
                <Building2 size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">Gestion <br />de Flotte</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-10">
                Solutions sur-mesure pour banques, loueurs et grandes entreprises marocaines.
              </p>
              <div className="flex items-center gap-2 text-[#1459DD] font-black text-[10px] uppercase tracking-widest">
                Espace Pro <ArrowRight size={14} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- KEY ARGUMENTS: AUTHORITY & SPEED --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <div className="text-left">
               <span className="text-[10px] font-black text-[#F37021] uppercase tracking-[0.4em] mb-6 block">Pourquoi nous choisir ?</span>
               <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9] mb-12">
                 La force d'un <br />
                 <span className="text-[#1459DD]">RÉSEAU UNIQUE.</span>
               </h2>
               
               <div className="space-y-8">
                  {[
                    { c: "border-[#F37021]", t: "Vitesse d'exécution", d: "Mise en vente sous 48h et clôture en moins de 7 jours." },
                    { c: "border-[#1459DD]", t: "Sécurité Juridique", d: "Transactions documentées et garanties par l'expertise NADO." },
                    { c: "border-[#0F172A]", t: "Réseau d'acheteurs", d: "Plus de 1200 professionnels vérifiés accèdent à vos ventes." }
                  ].map((item, i) => (
                    <div key={i} className={`pl-10 border-l-4 ${item.c} py-2`}>
                      <h4 className="font-black uppercase text-base text-slate-900 mb-2">{item.t}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative">
               <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
                     <span className="text-5xl font-black text-[#F37021] mb-2">150+</span>
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Enchères / mois</span>
                  </div>
                  <div className="bg-[#1459DD] p-12 rounded-[3.5rem] shadow-xl text-white flex flex-col items-center text-center mt-12">
                     <span className="text-5xl font-black text-white mb-2">12h</span>
                     <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">Rapport Expert</span>
                  </div>
                  <div className="bg-[#0F172A] p-12 rounded-[3.5rem] shadow-xl text-white flex flex-col items-center text-center -mt-12">
                     <span className="text-5xl font-black text-white mb-2">24h</span>
                     <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">Paiement Cash</span>
                  </div>
                  <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
                     <span className="text-5xl font-black text-[#1459DD] mb-2">100%</span>
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sécurisé</span>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- BUYER PROCESS: THE DARK ROAD --- */}
      <section className="py-40 bg-[#0F172A] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#1459DD 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-[100px] font-black uppercase tracking-tighter mb-24 leading-none">
            Devenir <span className="text-[#F37021]">Acheteur.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { i: <UserPlus className="text-[#F37021]" />, t: "Inscription", d: "Créez votre profil pro et fournissez vos documents (RC, CIN)." },
              { i: <HandCoins className="text-[#1459DD]" />, t: "Caution", d: "Déposez une caution de garantie pour accéder aux enchères live." },
              { i: <Gavel className="text-white" />, t: "Enchérissez", d: "Accédez à l'arène, analysez les rapports et placez vos offres." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[2.5rem] flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-slate-900 transition-all duration-500 group-hover:rotate-12">
                   {step.i}
                </div>
                <h4 className="text-2xl font-black uppercase mb-4 tracking-tight">{step.t}</h4>
                <p className="text-slate-400 text-sm font-medium leading-relaxed px-8">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-32 p-16 bg-white rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_50px_100px_-20px_rgba(20,89,221,0.2)]">
             <div className="text-left">
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-3">Rejoignez l'élite marocaine.</h3>
                <p className="text-slate-500 font-medium text-lg leading-none">La première communauté d'acheteurs professionnels.</p>
             </div>
             <button 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="px-14 py-6 bg-[#F37021] text-white rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-2xl shadow-[#F37021]/30 active:scale-95 transition-all flex items-center gap-4"
             >
               Démarrer mon inscription <ArrowRight size={20} />
             </button>
          </div>
        </div>
      </section>

      {/* --- MINIMAL CONTACT BAR --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex items-center gap-8">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#1459DD]"><Phone size={24} /></div>
              <div className="text-left">
                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Support Pro</span>
                <span className="text-lg font-black text-slate-900">+212 520 070 611</span>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#F37021]"><Mail size={24} /></div>
              <div className="text-left">
                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Direct</span>
                <span className="text-lg font-black text-slate-900">pro@autoenchere.ma</span>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900"><Clock size={24} /></div>
              <div className="text-left">
                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Horaires</span>
                <span className="text-lg font-black text-slate-900">Lun-Ven • 09h - 18h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AutoEnchere;
