
import React, { useState, useRef } from 'react';
import { 
  ArrowLeft, ChevronRight, CarFront, Calendar, Camera, FileText, 
  Fuel, Settings2, Gauge, ShieldCheck, User, Phone, MapPin, 
  CheckCircle2, Sparkles, Star, Zap, Video, History, HandCoins, 
  Search, X, Clock, Play, BarChart3, TrendingUp, Tags, ArrowRight
} from 'lucide-react';

interface SellingProps {
  onBack: () => void;
}

const Selling: React.FC<SellingProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedMainOption, setSelectedMainOption] = useState<'vendre' | 'estimer' | null>(null);
  const [selectedPack, setSelectedPack] = useState<string | null>(null);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const scheduleRef = useRef<HTMLDivElement>(null);

  const steps = [
    { id: 1, label: 'Véhicule', icon: <CarFront size={16} /> },
    { id: 2, label: 'Détails', icon: <Settings2 size={16} /> },
    { id: 3, label: 'Profil', icon: <User size={16} /> },
    { id: 4, label: 'RDV', icon: <Clock size={16} /> },
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handlePackSelection = (packTitle: string) => {
    setSelectedPack(packTitle);
    setTimeout(() => {
      scheduleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleFinish = () => {
    if (!appointmentDate || !appointmentTime) {
      alert("Veuillez choisir une date et une heure pour votre rendez-vous.");
      return;
    }
    setShowSuccessModal(true);
  };

  const PackCard = ({ 
    title, price, features, recommended = false 
  }: { 
    title: string; 
    price: string; 
    features: string[]; 
    recommended?: boolean;
  }) => (
    <div className={`relative flex flex-col p-8 rounded-[2.5rem] border-2 transition-all cursor-pointer group ${
      selectedPack === title 
        ? 'border-[#1459DD] bg-blue-50/50 shadow-2xl shadow-blue-100 scale-105 z-10' 
        : 'border-slate-100 bg-white hover:border-slate-200'
    }`} onClick={() => handlePackSelection(title)}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1459DD] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
          <Star size={10} fill="currentColor" /> Meilleur Choix
        </div>
      )}
      
      <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2 group-hover:text-[#1459DD] transition-colors">{title}</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-3xl font-black text-slate-900">{price}</span>
        <span className="text-xs font-bold text-slate-400 uppercase">DH</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-600 leading-tight">
            <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
        selectedPack === title 
          ? 'bg-[#1459DD] text-white' 
          : 'bg-slate-900 text-white group-hover:bg-[#1459DD]'
      }`}>
        {selectedPack === title ? 'Sélectionné' : 'Prendre RDV'}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24 text-left">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100 mb-12">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <button onClick={onBack} className="hover:text-[#1459DD] cursor-pointer transition-colors">Accueil</button>
            <ChevronRight size={10} />
            <span className="text-slate-900">Vendre ma voiture</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDD817] text-slate-900 rounded-full font-black text-[10px] uppercase tracking-[0.2em] mb-6 shadow-sm">
            <Zap size={14} fill="currentColor" /> Vendez au meilleur prix
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-6">
            Déposez votre <br /><span className="text-[#1459DD]">ANNONCE</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-md mx-auto">
            Plus de 200,000 acheteurs potentiels consultent NADO chaque mois. Profitez de notre expertise.
          </p>
        </div>

        {/* Stepper Header */}
        <div className="flex items-center justify-between max-w-2xl mx-auto mb-12 px-4">
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  step >= s.id ? 'bg-[#1459DD] text-white shadow-lg shadow-blue-200' : 'bg-white text-slate-300 border border-slate-200'
                }`}>
                  {s.icon}
                </div>
                <span className={`text-[9px] font-black uppercase tracking-widest ${step >= s.id ? 'text-slate-900' : 'text-slate-300'}`}>
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px bg-slate-200 mx-2 -mt-6">
                  <div className={`h-full bg-[#1459DD] transition-all duration-500 ease-out`} style={{ width: step > s.id ? '100%' : '0%' }}></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-blue-100/30 border border-slate-100 overflow-hidden relative">
          <div className="p-8 md:p-16">
            {/* ETAPE 1 */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">1. Identité de votre véhicule</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Marque</label>
                    <select className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold appearance-none">
                      <option>Choisir</option>
                      <option>Porsche</option>
                      <option>BMW</option>
                      <option>Audi</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Modèle</label>
                    <input type="text" placeholder="Ex: 911 Carrera" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Année</label>
                    <input type="number" placeholder="2022" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Image Avant', key: 'front' },
                    { label: 'Image Arrière', key: 'back' },
                    { label: 'Carte Grise', key: 'paper' }
                  ].map(img => (
                    <div key={img.key} className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">{img.label}</label>
                      <div className="h-40 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-blue-50 hover:border-[#1459DD]/30 transition-all group">
                        <Camera className="text-slate-300 group-hover:text-[#1459DD] transition-colors" size={28} />
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Cliquez pour ajouter</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ETAPE 2 */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">2. Fiche technique détaillée</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Carburant</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Diesel', 'Essence', 'Hybride'].map(f => (
                        <button key={f} className="py-4 border-2 border-slate-100 rounded-xl font-bold text-[10px] uppercase hover:border-[#1459DD] transition-all">{f}</button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Boîte de vitesse</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Auto', 'Manuelle'].map(b => (
                        <button key={b} className="py-4 border-2 border-slate-100 rounded-xl font-bold text-[10px] uppercase hover:border-[#1459DD] transition-all">{b}</button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Kilométrage (km)</label>
                     <input type="number" placeholder="45000" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 outline-none font-bold" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">État de véhicule</label>
                     <select className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 outline-none font-bold">
                        <option>Excellent</option>
                        <option>Bon</option>
                        <option>Correct</option>
                     </select>
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Type de véhicule</label>
                     <select className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 outline-none font-bold">
                        <option>Berline</option>
                        <option>SUV</option>
                        <option>Coupé</option>
                     </select>
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Origine</label>
                     <select className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 outline-none font-bold">
                        <option>WW Maroc</option>
                        <option>Importé Neuf</option>
                        <option>Importé Occasion</option>
                     </select>
                   </div>
                </div>
              </div>
            )}

            {/* ETAPE 3 */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">3. Vos coordonnées</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Nom & Prénom</label>
                    <input type="text" placeholder="Entrez votre nom" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 outline-none font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Téléphone</label>
                    <input type="tel" placeholder="+212 6..." className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 outline-none font-bold" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Ville</label>
                    <select className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 outline-none font-bold">
                      <option>Casablanca</option>
                      <option>Rabat</option>
                      <option>Marrakech</option>
                      <option>Tanger</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* ETAPE 4 */}
            {step === 4 && (
              <div className="animate-in fade-in zoom-in-95 duration-700">
                <div className="text-center mb-12">
                   <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-2 leading-none">4. Finalisez votre rendez-vous</h2>
                   <p className="text-slate-500 font-medium">Sélectionnez votre offre et planifiez l'expertise.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 mb-16">
                   <button 
                     onClick={() => {
                       setSelectedMainOption('vendre');
                       setSelectedPack(null);
                     }}
                     className={`flex-1 p-8 rounded-[2.5rem] border-2 transition-all flex flex-col items-center gap-4 ${
                       selectedMainOption === 'vendre' ? 'border-[#1459DD] bg-blue-50/50' : 'border-slate-100 bg-slate-50 hover:bg-white'
                     }`}
                   >
                     <div className={`w-14 h-14 rounded-full flex items-center justify-center ${selectedMainOption === 'vendre' ? 'bg-[#1459DD] text-white' : 'bg-white text-slate-400 shadow-sm'}`}>
                       <Tags size={24} />
                     </div>
                     <span className="text-lg font-black text-slate-900 uppercase tracking-tight">Vendre ma voiture</span>
                   </button>
                   <button 
                     onClick={() => {
                       setSelectedMainOption('estimer');
                       setSelectedPack('Estimation Expert');
                     }}
                     className={`flex-1 p-8 rounded-[2.5rem] border-2 transition-all flex flex-col items-center gap-4 ${
                       selectedMainOption === 'estimer' ? 'border-[#1459DD] bg-blue-50/50' : 'border-slate-100 bg-slate-50 hover:bg-white'
                     }`}
                   >
                     <div className={`w-14 h-14 rounded-full flex items-center justify-center ${selectedMainOption === 'estimer' ? 'bg-[#1459DD] text-white' : 'bg-white text-slate-400 shadow-sm'}`}>
                       <BarChart3 size={24} />
                     </div>
                     <span className="text-lg font-black text-slate-900 uppercase tracking-tight">Estimer ma voiture</span>
                   </button>
                </div>

                {selectedMainOption === 'vendre' && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 animate-in slide-in-from-top-4 duration-500">
                    <PackCard title="Pack Distance" price="199" features={["Service à distance", "Renouvellement 1x/jour (10j)", "Diffusion NADO, Avito, Moteur.ma", "Appel direct client", "Assistance de base"]} />
                    <PackCard title="Pack Showroom" price="499" recommended={true} features={["Service local personnalisé", "Renouvellement 3x/jour (30j)", "Reels & Vidéo YouTube Pro", "Expertise & Contrôle général", "Exposition Showroom (1 sem)", "Badge de garantie NADO", "Gestion complète rendez-vous"]} />
                    <PackCard title="Pack Express" price="299" features={["Service de mobilité", "Renouvellement 2x/jour (15j)", "Vidéo présentation YouTube", "Le contrôle général & Expertise", "Accompagnement rendez-vous"]} />
                  </div>
                )}

                {selectedMainOption === 'estimer' && (
                  <div className="max-w-xl mx-auto mb-16 animate-in slide-in-from-top-4 duration-500">
                    <div className={`bg-white p-10 rounded-[3rem] border-2 transition-all flex flex-col items-center text-center ${selectedPack === 'Estimation Expert' ? 'border-[#1459DD] shadow-2xl shadow-blue-100' : 'border-slate-100'}`}>
                       <div className="w-20 h-20 bg-blue-50 text-[#1459DD] rounded-full flex items-center justify-center mb-6"><TrendingUp size={40} /></div>
                       <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 leading-none">Consultation Expert</h3>
                       <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">Détails objectifs, classification précise et inspection complète.</p>
                       <div className="flex items-baseline gap-1 mb-8"><span className="text-5xl font-black text-[#1459DD]">199</span><span className="text-sm font-black text-slate-400 uppercase">DH</span></div>
                       <button onClick={() => handlePackSelection('Estimation Expert')} className="w-full py-5 bg-[#1459DD] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-blue-700 active:scale-95 transition-all">Choisir cette option</button>
                    </div>
                  </div>
                )}

                {selectedPack && (
                  <div ref={scheduleRef} className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-[#f8fafc] rounded-[3rem] p-10 md:p-16 border border-blue-100 shadow-xl scroll-mt-24">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-12 h-12 bg-[#1459DD] text-white rounded-2xl flex items-center justify-center"><Calendar size={24} /></div>
                      <div className="text-left">
                        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Planifiez votre expertise</h3>
                        <p className="text-slate-500 text-sm font-medium italic">Pour : {selectedPack}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Choisir la date</label>
                        <input type="date" min={new Date().toISOString().split('T')[0]} value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} className="w-full bg-white border-2 border-transparent focus:border-[#1459DD] rounded-2xl px-6 py-5 outline-none font-bold text-slate-900 shadow-sm" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Choisir l'heure</label>
                        <div className="grid grid-cols-4 gap-2">
                          {timeSlots.map(t => (
                            <button key={t} onClick={() => setAppointmentTime(t)} className={`py-3 rounded-xl font-bold text-[10px] transition-all ${appointmentTime === t ? 'bg-[#1459DD] text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-100 hover:border-blue-200'}`}>{t}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                       <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-slate-100">
                          <CheckCircle2 size={18} className="text-green-500" />
                          <p className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">RDV disponible • Validation en 2h</p>
                       </div>
                       <button onClick={handleFinish} className="px-16 py-6 bg-[#1459DD] text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-4 active:scale-95">Confirmer le rendez-vous <ArrowRight size={20} /></button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {step < 4 && (
              <div className="flex items-center justify-between pt-12 border-t border-slate-100">
                <button onClick={prevStep} disabled={step === 1} className={`px-8 py-4 font-black text-xs uppercase tracking-widest transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-400 hover:text-slate-900'}`}>Précédent</button>
                <button onClick={nextStep} className="px-12 py-5 bg-[#1459DD] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95 group">Suivant <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 z-[110] bg-slate-900/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-white rounded-[4rem] p-12 max-w-lg w-full text-center relative overflow-hidden shadow-2xl">
             <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10"><Sparkles size={48} className="animate-pulse" /></div>
             <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-none">C'est confirmé !</h2>
             <div className="bg-slate-50 rounded-3xl p-6 mb-8 text-left border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Récapitulatif de votre RDV</p>
                <div className="space-y-3">
                   <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-600 uppercase">Offre :</span><span className="text-xs font-black text-[#1459DD] uppercase">{selectedPack}</span></div>
                   <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-600 uppercase">Date :</span><span className="text-xs font-black text-slate-900">{appointmentDate}</span></div>
                   <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-600 uppercase">Heure :</span><span className="text-xs font-black text-slate-900">{appointmentTime}</span></div>
                </div>
             </div>
             <button onClick={() => { setShowSuccessModal(false); onBack(); }} className="w-full py-5 bg-[#1459DD] text-white rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-blue-700 active:scale-95">Retour au catalogue <ArrowRight size={18} /></button>
             <button onClick={() => setShowSuccessModal(false)} className="absolute top-8 right-8 text-slate-300 hover:text-slate-900"><X size={24} /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selling;
