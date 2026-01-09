
import React, { useState } from 'react';
import { 
  ArrowRight, User, Mail, Phone, MapPin, CarFront, Settings2, 
  CheckCircle2, Sparkles, Smartphone, Landmark, Banknote, ShieldCheck, 
  FileText, ClipboardList, Timer, HandCoins, BarChart3, Users, TrendingUp, Info, Zap
} from 'lucide-react';

interface ConnectProps {
  onBack: () => void;
}

type StepType = 1 | 2 | 3 | 4;

const Connect: React.FC<ConnectProps> = ({ onBack }) => {
  const [step, setStep] = useState<StepType>(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasCurrentLoan, setHasCurrentLoan] = useState<string | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    professionalStatus: '',
    loanAmount: '',
    vehiclePrice: 200000,
    apport: 40000,
    duration: 60,
    fullName: '',
    phone: '',
    email: '',
    cin: '',
    city: '',
    appointment: ''
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4) as StepType);
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1) as StepType);

  const stepsInfo = [
    { id: 1, label: 'Véhicule', icon: <CarFront size={14} /> },
    { id: 2, label: 'Profil', icon: <Users size={14} /> },
    { id: 3, label: 'Simu', icon: <BarChart3 size={14} /> },
    { id: 4, label: 'Perso', icon: <User size={14} /> },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20 text-left font-inter overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="bg-slate-900 pt-12 md:pt-16 pb-24 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1459DD]/10 skew-x-[-12deg] translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="flex flex-col items-start max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FDD817] text-slate-900 rounded-full font-black text-[9px] uppercase tracking-wider mb-6 shadow-xl">
              <Landmark size={12} /> FINANCEMENT PREMIUM
            </div>
            <h1 className="text-3xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
              Financer votre <br className="hidden md:block" />
              <span className="text-[#1459DD]">Occasion Nado</span>
            </h1>
            <p className="text-base md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl border-l-4 border-[#1459DD] pl-5 md:pl-8">
              Adossée à la puissance de <strong>AUTO ENCHERE</strong>, profitez de conditions souples et d'acceptations records.
            </p>
          </div>
        </div>
      </section>

      {/* --- TIMELINE PÉDAGOGIQUE --- */}
      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl md:rounded-[3.5rem] shadow-xl p-6 md:p-16 border border-slate-100 mb-12">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">
              Comment <span className="text-[#1459DD]">ça marche</span> ?
            </h2>
            <p className="text-slate-500 text-sm font-medium">Un parcours digital simple en 4 étapes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-10 left-0 w-full h-px bg-slate-100 hidden md:block"></div>
            {[
              { id: "01", title: "Choisissez", desc: "Trouvez votre voiture et simulez.", icon: <CarFront size={20} /> },
              { id: "02", title: "Simulation", desc: "Un expert vous guide par téléphone.", icon: <Smartphone size={20} /> },
              { id: "03", title: "Justificatifs", desc: "Envoyez vos pièces en ligne.", icon: <FileText size={20} /> },
              { id: "04", title: "Achat", desc: "Virement reçu, voiture livrée.", icon: <CheckCircle2 size={20} /> }
            ].map((s, i) => (
              <div key={i} className="relative z-10 flex items-start md:flex-col gap-4 md:gap-0 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1459DD] text-white rounded-2xl flex items-center justify-center mb-0 md:mb-6 shadow-lg shrink-0">
                  {s.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[#1459DD] font-black text-[9px] uppercase tracking-widest mb-1">{s.id}</span>
                  <h4 className="text-base font-black text-slate-900 uppercase tracking-tight mb-1">{s.title}</h4>
                  <p className="text-slate-500 text-xs font-medium leading-tight">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- STEPPER FORMULAIRE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl md:rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden">
              {/* Header Stepper Progress */}
              <div className="bg-slate-50 px-4 py-6 md:px-12 md:py-8 border-b border-slate-100">
                <div className="flex items-center justify-between max-w-xl mx-auto">
                  {stepsInfo.map((s, i) => (
                    <React.Fragment key={s.id}>
                      <div className="flex flex-col items-center gap-2">
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all ${
                          step >= s.id ? 'bg-[#1459DD] text-white shadow-md' : 'bg-white text-slate-300 border border-slate-200'
                        }`}>
                          {s.icon}
                        </div>
                        <span className={`text-[8px] font-black uppercase tracking-tighter ${step >= s.id ? 'text-slate-900' : 'text-slate-300'}`}>
                          {s.label}
                        </span>
                      </div>
                      {i < stepsInfo.length - 1 && <div className={`flex-1 h-px mx-2 ${step > s.id ? 'bg-[#1459DD]' : 'bg-slate-200'}`}></div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-16">
                {/* ETAPE 1: INFO VÉHICULE */}
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">1. Le Véhicule</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Marque</label>
                        <input type="text" placeholder="Ex: Porsche" value={formData.brand} onChange={(e) => setFormData({...formData, brand: e.target.value})} className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] focus:bg-white rounded-xl px-5 py-3.5 outline-none font-bold text-slate-900 text-sm transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Modèle</label>
                        <input type="text" placeholder="Ex: 911" value={formData.model} onChange={(e) => setFormData({...formData, model: e.target.value})} className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] focus:bg-white rounded-xl px-5 py-3.5 outline-none font-bold text-slate-900 text-sm transition-all" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Année</label>
                        <input type="number" placeholder="2022" value={formData.year} onChange={(e) => setFormData({...formData, year: e.target.value})} className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] focus:bg-white rounded-xl px-5 py-3.5 outline-none font-bold text-slate-900 text-sm transition-all" />
                      </div>
                    </div>
                  </div>
                )}

                {/* ETAPE 2: SITUATION PRO */}
                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">2. Votre Profil</h3>
                    <div className="space-y-8">
                      <div className="space-y-3">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Situation Professionnelle</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {['Salarié', 'Fonctionnaire', 'Commerçant', 'Libéral', 'Retraité'].map(s => (
                            <button key={s} onClick={() => setFormData({...formData, professionalStatus: s})} className={`px-4 py-3 rounded-xl font-bold text-[10px] uppercase transition-all border-2 ${formData.professionalStatus === s ? 'border-[#1459DD] bg-blue-50 text-[#1459DD]' : 'border-slate-50 text-slate-500'}`}>{s}</button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 pt-6 border-t border-slate-100">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Crédits en cours ?</label>
                        <div className="flex gap-3">
                          {['OUI', 'NON'].map(opt => (
                            <button key={opt} onClick={() => setHasCurrentLoan(opt)} className={`flex-1 py-3.5 rounded-xl font-black text-xs transition-all border-2 ${hasCurrentLoan === opt ? 'border-[#1459DD] bg-blue-50 text-[#1459DD]' : 'border-slate-50 text-slate-400'}`}>{opt}</button>
                          ))}
                        </div>
                      </div>

                      {hasCurrentLoan === 'OUI' && (
                        <div className="animate-in slide-in-from-top-4 duration-500 space-y-2">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Montant mensuel (DH)</label>
                          <input type="number" placeholder="Ex: 2500" value={formData.loanAmount} onChange={(e) => setFormData({...formData, loanAmount: e.target.value})} className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] focus:bg-white rounded-xl px-5 py-3.5 outline-none font-bold text-slate-900 text-sm transition-all" />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ETAPE 3: SIMULATION */}
                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">3. La Simulation</h3>
                    <div className="space-y-10">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Prix (DH)</label>
                          <span className="text-base font-black text-[#1459DD]">{formData.vehiclePrice.toLocaleString()}</span>
                        </div>
                        <input type="range" min="50000" max="1000000" step="5000" value={formData.vehiclePrice} onChange={(e) => setFormData({...formData, vehiclePrice: Number(e.target.value)})} className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#1459DD]" />
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Apport (DH)</label>
                          <span className="text-base font-black text-[#1459DD]">{formData.apport.toLocaleString()}</span>
                        </div>
                        <input type="range" min="0" max={formData.vehiclePrice * 0.8} step="5000" value={formData.apport} onChange={(e) => setFormData({...formData, apport: Number(e.target.value)})} className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#1459DD]" />
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Durée (Mois)</label>
                          <span className="text-base font-black text-[#1459DD]">{formData.duration} mois</span>
                        </div>
                        <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                          {[12, 24, 36, 48, 60, 72, 84].map(m => (
                            <button key={m} onClick={() => setFormData({...formData, duration: m})} className={`py-2 rounded-lg text-[9px] font-black transition-all ${formData.duration === m ? 'bg-[#1459DD] text-white' : 'bg-slate-50 text-slate-400'}`}>{m}m</button>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                        <span className="text-[8px] font-black text-[#1459DD] uppercase tracking-widest block mb-1">Estimation Mensuelle</span>
                        <div className="text-3xl font-black text-slate-900 tracking-tighter">
                          {Math.round((formData.vehiclePrice - formData.apport) * 1.15 / formData.duration).toLocaleString()} <span className="text-xs">DH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ETAPE 4: INFO PERSO */}
                {step === 4 && (
                  <div className="animate-in fade-in zoom-in-95 duration-500">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">4. Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Nom Complet</label>
                        <input type="text" placeholder="Nom & Prénom" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] rounded-xl px-5 py-3.5 text-sm font-bold" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Numéro CIN</label>
                        <input type="text" placeholder="Ex: BE123..." value={formData.cin} onChange={(e) => setFormData({...formData, cin: e.target.value})} className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] rounded-xl px-5 py-3.5 text-sm font-bold" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Téléphone</label>
                        <input type="tel" placeholder="+212..." value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] rounded-xl px-5 py-3.5 text-sm font-bold" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Ville</label>
                        <input type="text" placeholder="Ex: Casa" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] rounded-xl px-5 py-3.5 text-sm font-bold" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-3">Email</label>
                        <input type="email" placeholder="votre@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] rounded-xl px-5 py-3.5 text-sm font-bold" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-100">
                  <button onClick={prevStep} disabled={step === 1} className={`px-6 py-4 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all ${step === 1 ? 'opacity-0' : 'text-slate-400 hover:text-slate-900'}`}>Retour</button>
                  {step < 4 ? (
                    <button onClick={nextStep} className="px-8 py-4 bg-[#1459DD] text-white rounded-xl font-black text-[9px] uppercase tracking-widest flex items-center gap-2">Continuer <ArrowRight size={14} /></button>
                  ) : (
                    <button onClick={() => setShowSuccess(true)} className="px-8 py-4 bg-[#FDD817] text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2">Envoyer <Sparkles size={14} /></button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#1459DD] rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
               <h3 className="text-xl font-black uppercase tracking-tight mb-4">Avantages</h3>
               <ul className="space-y-3">
                  {["Tarifs compétitifs", "Zéro frais dossier", "Accord rapide", "Expertise incluse"].map((text, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-bold opacity-90"><CheckCircle2 size={14} className="text-[#FDD817] shrink-0" />{text}</li>
                  ))}
               </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
               <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">Sécurité</h4>
               <p className="text-slate-500 text-xs font-medium leading-relaxed">Prix ajustés selon les tendances du marché marocain en temps réel.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* --- PIÈCES JUSTIFICATIVES --- */}
      <section className="max-w-7xl mx-auto px-4 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
            Pièces <span className="text-[#1459DD]">A FOURNIR</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
           <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-black uppercase mb-6 text-[#FDD817]">Dossier Commun</h3>
              <ul className="space-y-3">
                 {["CIN originale", "Spécimen de chèques", "3 relevés bancaires", "Quittance récente"].map((doc, i) => (
                   <li key={i} className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10"><FileText size={16} className="text-[#1459DD]" /><span className="text-xs font-bold">{doc}</span></li>
                 ))}
              </ul>
           </div>
           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Salarié", docs: ["3 bulletins salaire", "Attestation travail"] },
                { title: "Fonctionnaire", docs: ["État d'engagement"] },
                { title: "Retraité", docs: ["Avis de pension"] },
                { title: "Indépendant", docs: ["Modèle J", "Patente"] }
              ].map((p, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                   <h4 className="font-black text-slate-900 uppercase text-[11px] mb-3">{p.title}</h4>
                   <ul className="space-y-2">
                      {p.docs.map((d, idx) => <li key={idx} className="text-[10px] font-bold text-slate-500 uppercase flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#1459DD] mt-1 shrink-0"></div>{d}</li>)}
                   </ul>
                </div>
              ))}
           </div>
        </div>
      </section>

      {showSuccess && (
        <div className="fixed inset-0 z-[150] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
           <div className="bg-white rounded-[2.5rem] p-10 max-w-md w-full text-center relative animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                 <Sparkles size={40} className="animate-pulse" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-3">Merci !</h2>
              <p className="text-slate-500 font-medium text-sm mb-10 leading-relaxed">Votre dossier est transmis. Un conseiller NADO vous contactera sous 2 heures.</p>
              <button onClick={onBack} className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl">Retour à l'accueil</button>
           </div>
        </div>
      )}

      <style>{`
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #1459DD;
            cursor: pointer;
            border: 3px solid white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            margin-top: -8px;
        }
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 6px;
            cursor: pointer;
            background: #f1f5f9;
            border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Connect;
