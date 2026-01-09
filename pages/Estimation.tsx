
import React, { useState } from 'react';
// Added ChevronRight and TrendingUp to the imports below
import { ArrowLeft, CarFront, Calendar, Gauge, Fuel, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, ChevronRight, TrendingUp } from 'lucide-react';

interface EstimationProps {
  onBack: () => void;
}

const Estimation: React.FC<EstimationProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24 text-left">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-[#1459DD] transition-colors font-black text-[10px] uppercase tracking-widest mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour à l'accueil
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-6">
            Estimation <span className="text-[#1459DD]">INSTANTANÉE</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-md mx-auto">
            Découvrez la valeur réelle de votre véhicule sur le marché marocain actuel.
          </p>
        </div>

        {/* Multi-step Container */}
        <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-blue-100/50 border border-slate-100 overflow-hidden">
          {/* Progress Bar */}
          <div className="h-2 bg-slate-100 w-full flex">
            {[...Array(totalSteps)].map((_, i) => (
              <div 
                key={i} 
                className={`h-full transition-all duration-700 ease-out ${
                  i + 1 <= step ? 'bg-[#1459DD] flex-1' : 'w-0'
                }`}
              />
            ))}
          </div>

          <div className="p-8 md:p-16">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-blue-50 text-[#1459DD] rounded-2xl flex items-center justify-center">
                    <CarFront size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Quelle est votre voiture ?</h3>
                    <p className="text-slate-400 text-sm font-medium">Commencez par identifier la marque et le modèle.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Marque</label>
                    <select className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold">
                      <option>Sélectionnez la marque</option>
                      <option>Porsche</option>
                      <option>BMW</option>
                      <option>Mercedes-Benz</option>
                      <option>Audi</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Modèle</label>
                    <select className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold">
                      <option>Sélectionnez le modèle</option>
                      <option>911 Carrera</option>
                      <option>Cayenne</option>
                      <option>Macan</option>
                      <option>Taycan</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-left">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-blue-50 text-[#1459DD] rounded-2xl flex items-center justify-center">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Année et Kilométrage</h3>
                    <p className="text-slate-400 text-sm font-medium">L'âge et l'usage sont des facteurs clés de valeur.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Année de mise en circulation</label>
                    <input type="number" placeholder="Ex: 2022" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Kilométrage actuel (km)</label>
                    <input type="number" placeholder="Ex: 45000" className="w-full bg-slate-50 border-2 border-transparent focus:border-[#1459DD] focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all font-bold" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-left">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-blue-50 text-[#1459DD] rounded-2xl flex items-center justify-center">
                    <Fuel size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Détails de motorisation</h3>
                    <p className="text-slate-400 text-sm font-medium">Précisez le carburant et la puissance.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Carburant</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Diesel', 'Essence', 'Hybride', 'Électrique'].map(f => (
                        <button key={f} className="py-4 border-2 border-slate-100 rounded-xl font-bold hover:border-[#1459DD] transition-all text-xs uppercase">{f}</button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Boîte de vitesse</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Automatique', 'Manuelle'].map(t => (
                        <button key={t} className="py-4 border-2 border-slate-100 rounded-xl font-bold hover:border-[#1459DD] transition-all text-xs uppercase">{t}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-in fade-in zoom-in-95 duration-700 text-center py-8">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Sparkles size={48} className="animate-pulse" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Calcul en cours...</h3>
                <p className="text-slate-500 font-medium mb-12">Notre intelligence artificielle analyse des milliers de transactions récentes pour vous donner le prix le plus juste.</p>
                
                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 mb-12 max-w-sm mx-auto">
                   <span className="text-[10px] font-black text-[#1459DD] uppercase tracking-[0.3em] block mb-2">Valeur Estimée NADO</span>
                   <div className="text-4xl font-black text-slate-900 tracking-tighter">
                     450.000 - 485.000 <span className="text-sm">MAD</span>
                   </div>
                </div>

                <div className="flex flex-col gap-4">
                  <button className="w-full py-5 bg-[#1459DD] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3">
                     Recevoir l'offre finale par email <ArrowRight size={18} />
                  </button>
                  <button className="w-full py-5 bg-white text-[#1459DD] border-2 border-[#1459DD] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all">
                     Prendre rendez-vous pour expertise physique
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {step < 4 && (
              <div className="flex items-center justify-between pt-12 border-t border-slate-100">
                <button 
                  onClick={prevStep}
                  disabled={step === 1}
                  className={`px-8 py-4 font-black text-xs uppercase tracking-widest transition-all ${
                    step === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Précédent
                </button>
                <button 
                  onClick={nextStep}
                  className="px-12 py-5 bg-[#1459DD] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95"
                >
                  Continuer <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {[
            { icon: <ShieldCheck size={28}/>, title: "100% Gratuit", desc: "Aucun frais caché, l'estimation est offerte par NADO." },
            { icon: <TrendingUp size={28}/>, title: "Prix du Marché", desc: "Données actualisées en temps réel sur tout le Maroc." },
            { icon: <CheckCircle2 size={28}/>, title: "Offre Ferme", desc: "Possibilité de rachat immédiat après expertise." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 text-left">
              <div className="text-[#1459DD] mb-6">{item.icon}</div>
              <h4 className="font-black text-slate-900 uppercase tracking-tight mb-3">{item.title}</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Estimation;
