
import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, X, Sparkles, MapPin, 
  Settings2, Clock, Award, Banknote, HandCoins, History, ShieldCheck, Zap,
  Search, CheckSquare, Truck
} from 'lucide-react';

interface RepriseProps {
  onBack: () => void;
}

const Reprise: React.FC<RepriseProps> = ({ onBack }) => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const repriseSteps = [
    { 
      id: "01",
      icon: <Search size={32} />, 
      title: "Évaluation en ligne", 
      desc: "Obtenez une première estimation de la valeur de votre véhicule actuel en quelques clics via notre simulateur IA."
    },
    { 
      id: "02",
      icon: <ShieldCheck size={32} />, 
      title: "Expertise physique", 
      desc: "Rendez-vous dans l'un de nos showrooms NADO pour une vérification de 30 min et une offre de reprise ferme."
    },
    { 
      id: "03",
      icon: <CheckSquare size={32} />, 
      title: "Validation & Échange", 
      desc: "Nous rachetons votre voiture au juste prix. Ce montant est déduit directement du prix de votre futur véhicule NADO."
    },
    { 
      id: "04",
      icon: <Truck size={32} />, 
      title: "Livraison & Reprise", 
      desc: "Repartez avec votre nouveau véhicule. Nous nous occupons de toute la paperasse administrative de votre ancienne voiture."
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-24 text-left">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#1459DD 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDD817] text-slate-900 rounded-full font-black text-[10px] uppercase tracking-[0.3em] mb-8 shadow-xl">
                <HandCoins size={14} /> Reprise & Échange
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-10">
                L'échange <br />
                <span className="text-[#1459DD]">Gagnant.</span>
              </h1>
              <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-lg mb-12">
                Nous reprenons votre véhicule au juste prix en échange d'une voiture de votre choix dans le stock NADO. <strong>La solution la plus simple pour changer de voiture.</strong>
              </p>
              <button 
                onClick={() => setShowFormModal(true)}
                className="px-12 py-6 bg-[#1459DD] text-white rounded-full font-black text-xs uppercase tracking-widest shadow-2xl shadow-blue-900/40 hover:bg-blue-600 transition-all flex items-center justify-center gap-4 group active:scale-95"
              >
                Estimer pour une reprise <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="hidden lg:block relative">
              <div className="bg-slate-800 p-3 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden transform rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-auto rounded-[3.5rem] grayscale" 
                  alt="Premium Car" 
                />
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                   <div>
                      <p className="text-white font-black text-2xl uppercase tracking-tighter leading-none">Juste Prix</p>
                   </div>
                   <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white">
                      <Zap size={32} />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procès REPRISE */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-20">
            <span className="text-[10px] font-black text-[#1459DD] uppercase tracking-[0.5em] mb-4 block">Notre Processus</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              Le Procès <br />REPRISE NADO.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repriseSteps.map((step, i) => (
              <div key={i} className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-[#1459DD] transition-all relative">
                <span className="absolute top-6 right-10 text-5xl font-black text-slate-50 group-hover:text-blue-50 transition-colors">{step.id}</span>
                <div className="w-16 h-16 bg-blue-50 text-[#1459DD] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#1459DD] group-hover:text-white transition-all relative z-10">{step.icon}</div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 relative z-10">{step.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Form */}
      {showFormModal && (
        <div className="fixed inset-0 z-[120] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-white rounded-[4rem] w-full max-w-4xl overflow-hidden shadow-3xl relative">
            <button onClick={() => setShowFormModal(false)} className="absolute top-10 right-10 text-slate-300 hover:text-slate-950 transition-colors z-20"><X size={32} /></button>
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
               <div className="lg:col-span-5 bg-slate-900 p-16 flex flex-col justify-between text-white">
                  <div>
                    <h3 className="text-4xl font-black uppercase tracking-tighter leading-none mb-8">Reprise <br />Automatisée</h3>
                    <p className="text-slate-400 font-medium leading-relaxed">Déposez votre demande pour un échange contre un véhicule NADO.</p>
                  </div>
               </div>
               <div className="lg:col-span-7 p-16">
                  {!showSuccess ? (
                    <div className="space-y-8">
                       <input type="text" placeholder="Véhicule actuel (Marque & Modèle)" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] rounded-2xl px-8 py-5 font-bold" />
                       <input type="text" placeholder="Véhicule souhaité chez NADO" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] rounded-2xl px-8 py-5 font-bold" />
                       <input type="tel" placeholder="Téléphone" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] rounded-2xl px-8 py-5 font-bold" />
                       <button onClick={() => setShowSuccess(true)} className="w-full py-6 bg-[#1459DD] text-white rounded-2xl font-black text-xs uppercase tracking-widest">Calculer mon offre de reprise</button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-center py-20">
                       <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">Demande de reprise reçue</h3>
                       <p className="text-slate-500 mb-8">Un conseiller expert vous contactera pour finaliser l'offre.</p>
                       <button onClick={() => { setShowSuccess(false); setShowFormModal(false); }} className="px-16 py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase">Retour au site</button>
                    </div>
                  )}
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reprise;
