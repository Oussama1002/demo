
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, User, Mail, Phone, MapPin, CarFront, Settings2, 
  CheckCircle2, Sparkles, Smartphone, Landmark, Banknote, ShieldCheck, 
  FileText, ClipboardList, Timer, HandCoins, BarChart3, Users, TrendingUp, Info, Zap, ChevronRight, X,
  // Fix: Added missing Search icon import
  Search
} from 'lucide-react';

interface ConnectProps {
  onBack: () => void;
}

const Connect: React.FC<ConnectProps> = ({ onBack }) => {
  const [vehiclePrice, setVehiclePrice] = useState(250000);
  const [apport, setApport] = useState(50000);
  const [duration, setDuration] = useState(60);
  const [activeProfile, setActiveProfile] = useState('Salarié');
  const [showSuccess, setShowSuccess] = useState(false);

  // Simulation logic
  const [mensualite, setMensualite] = useState(0);

  useEffect(() => {
    const capital = vehiclePrice - apport;
    const tauxAnnuel = 0.075; // Taux moyen indicatif
    const tauxMensuel = tauxAnnuel / 12;
    const m = (capital * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -duration));
    setMensualite(Math.round(m));
  }, [vehiclePrice, apport, duration]);

  const profiles = [
    {
      name: 'Salarié',
      docs: [
        'CIN originale (ou carte de séjour)',
        '3 derniers bulletins de paie',
        'Attestation de travail (moins de 3 mois)',
        '3 derniers relevés bancaires originaux',
        'Spécimen de chèque',
        'Quittance (Eau, électricité ou tel fixe)'
      ]
    },
    {
      name: 'Fonctionnaire',
      docs: [
        'CIN originale',
        'État d\'engagement (moins de 3 mois)',
        'Dernier relevé bancaire original',
        'Spécimen de chèque',
        'Quittance de loyer ou de service'
      ]
    },
    {
      name: 'Retraité',
      docs: [
        'CIN originale',
        'Avis de pension ou attestation de pension',
        '3 derniers relevés bancaires originaux',
        'Spécimen de chèque',
        'Justificatif de domicile récent'
      ]
    },
    {
      name: 'Indépendant / Libéral',
      docs: [
        'CIN originale',
        'Modèle J du Registre de Commerce',
        'Dernier avis d\'imposition (IR/IS)',
        '6 derniers relevés bancaires originaux',
        'Spécimen de chèque',
        'Carte professionnelle ou attestation d\'inscription'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20 text-left font-inter">
      {/* --- HERO SECTION --- */}
      <section className="bg-slate-900 pt-20 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1459DD]/5 skew-x-[-15deg] translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full font-black text-[10px] uppercase tracking-[0.2em] mb-8">
              <Landmark size={14} /> Partenaire Financement Officiel
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
              Financez votre <br />
              <span className="text-[#1459DD]">VOITURE</span> <span className="text-[#FDD817]">SANS ATTENDRE.</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed border-l-4 border-[#1459DD] pl-8">
              NADO Connect s'associe aux plus grandes banques du Royaume pour vous offrir un crédit automobile souple, rapide et transparent.
            </p>
          </div>
        </div>
      </section>

      {/* --- SIMULATEUR --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 mb-24">
        <div className="bg-white rounded-[3.5rem] shadow-3xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Colonne réglages */}
            <div className="lg:col-span-7 p-10 md:p-16 space-y-12 border-r border-slate-50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 text-[#1459DD] rounded-2xl flex items-center justify-center">
                  <BarChart3 size={24} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Configurez votre crédit</h2>
              </div>

              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Valeur du véhicule (MAD)</label>
                    <span className="text-2xl font-black text-slate-900">{vehiclePrice.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="50000" max="1500000" step="10000" 
                    value={vehiclePrice} onChange={(e) => setVehiclePrice(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#1459DD]"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Apport initial (MAD)</label>
                    <span className="text-2xl font-black text-slate-900">{apport.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="0" max={vehiclePrice * 0.8} step="5000" 
                    value={apport} onChange={(e) => setApport(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#1459DD]"
                  />
                </div>

                <div className="space-y-6">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest block">Durée du crédit (Mois)</label>
                  <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
                    {[12, 24, 36, 48, 60, 72, 84].map(m => (
                      <button 
                        key={m} 
                        onClick={() => setDuration(m)}
                        className={`py-3 rounded-xl font-black text-[10px] transition-all border-2 ${
                          duration === m ? 'border-[#1459DD] bg-blue-50 text-[#1459DD]' : 'border-slate-50 text-slate-400 hover:border-slate-200'
                        }`}
                      >
                        {m} m
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne résultat */}
            <div className="lg:col-span-5 bg-slate-50 p-10 md:p-16 flex flex-col justify-center items-center text-center">
              <span className="text-[10px] font-black text-[#1459DD] uppercase tracking-[0.3em] mb-4">Votre Mensualité Estimée</span>
              <div className="text-7xl font-black text-slate-900 tracking-tighter mb-4">
                {mensualite.toLocaleString()} <span className="text-2xl font-bold">MAD</span>
              </div>
              <p className="text-slate-400 text-xs font-medium max-w-[280px] leading-relaxed mb-10">
                Offre indicative calculée sur un taux annuel de 7,5%. Réponse de principe immédiate.
              </p>
              <button className="w-full py-6 bg-[#1459DD] text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-blue-900/20 hover:bg-blue-600 transition-all flex items-center justify-center gap-4 active:scale-95">
                Demander un accord de principe <ArrowRight size={20} />
              </button>
              <div className="mt-8 flex items-center gap-3 text-slate-400">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Paiement 100% Sécurisé</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMMENT ÇA MARCHE ? --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-20">Le parcours <span className="text-[#1459DD]">Digital.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <Search size={28} />, title: "Simulation", desc: "Choisissez votre véhicule et simulez vos mensualités." },
              { icon: <Smartphone size={28} />, title: "Appel Expert", desc: "Un conseiller financier vous contacte sous 2 heures." },
              { icon: <FileText size={28} />, title: "Dossier", desc: "Envoyez vos justificatifs via notre plateforme sécurisée." },
              { icon: <CheckCircle2 size={28} />, title: "Accord & Livraison", desc: "Virement immédiat et livraison de votre voiture." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-blue-50 text-[#1459DD] rounded-3xl flex items-center justify-center mb-8 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PIÈCES JUSTIFICATIVES (STYLE WAFASALAF) --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-20">
            <span className="text-[10px] font-black text-[#1459DD] uppercase tracking-[0.5em] mb-4 block">Votre Dossier</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">Pièces à <br />fournir.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Navigation Profils */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {profiles.map(p => (
                <button 
                  key={p.name} 
                  onClick={() => setActiveProfile(p.name)}
                  className={`w-full text-left p-6 rounded-2xl flex items-center justify-between border-2 transition-all ${
                    activeProfile === p.name ? 'border-[#1459DD] bg-white shadow-xl' : 'border-transparent text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <span className="text-sm font-black uppercase tracking-widest">{p.name}</span>
                  <ChevronRight size={18} className={activeProfile === p.name ? 'text-[#1459DD]' : 'text-slate-200'} />
                </button>
              ))}
            </div>

            {/* Liste des documents */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-xl border border-slate-100 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-12 h-12 bg-blue-50 text-[#1459DD] rounded-2xl flex items-center justify-center">
                     <ClipboardList size={24} />
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Profil : {activeProfile}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {profiles.find(p => p.name === activeProfile)?.docs.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl group hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-blue-100">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                        <CheckCircle2 size={14} className="text-green-500" />
                      </div>
                      <span className="text-xs font-bold text-slate-700 leading-snug">{doc}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-16 p-8 bg-[#FDD817]/10 rounded-3xl border border-[#FDD817]/20 flex flex-col md:flex-row items-center gap-6">
                  <div className="w-14 h-14 bg-[#FDD817] rounded-2xl flex items-center justify-center text-slate-900 shrink-0">
                    <Info size={24} />
                  </div>
                  <p className="text-xs font-bold text-slate-600 leading-relaxed text-left">
                    <span className="text-slate-900 font-black">Note :</span> Votre dossier complet nous permet de vous donner un accord définitif en moins de 24 heures. Tous les documents originaux doivent être présentés au moment de la signature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RÉASSURANCE FINALE --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <HandCoins />, title: "Taux Compétitifs", desc: "Accédez aux meilleurs taux négociés auprès de nos partenaires." },
              { icon: <Timer />, title: "Réponse en 2h", desc: "Évaluation ultra-rapide de votre solvabilité par nos experts." },
              { icon: <ShieldCheck />, title: "Transparence Totale", desc: "Zéro frais caché. Vous connaissez le coût réel de votre crédit." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-14 h-14 bg-slate-50 text-[#1459DD] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#1459DD] group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-black text-slate-900 uppercase tracking-tight text-base mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#1459DD 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">
            Besoin d'un <br /><span className="text-[#FDD817]">Conseil Pro</span> ?
          </h2>
          <p className="text-xl text-slate-400 mb-12">Nos conseillers en financement sont disponibles du Lundi au Vendredi pour vous accompagner.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 bg-[#1459DD] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-blue-900/40 flex items-center gap-4">
              <Phone size={18} /> +212 520 070 611
            </button>
            <button onClick={onBack} className="px-12 py-5 border border-white/20 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
              Retour au site
            </button>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-white border-t border-slate-100 text-center">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">NADO CONNECT • SOLUTIONS DE FINANCEMENT PREMIUM • 2025</p>
      </footer>

      <style>{`
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            background: #1459DD;
            cursor: pointer;
            border: 4px solid white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            margin-top: -8px;
        }
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 8px;
            cursor: pointer;
            background: #f1f5f9;
            border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Connect;
