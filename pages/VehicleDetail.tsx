
import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import PricingCard from '../components/PricingCard';
import TabsSection from '../components/TabsSection';
import FinanceSimulator from '../components/FinanceSimulator';
import TrustSection from '../components/TrustSection';
import { Vehicle } from '../types';

interface VehicleDetailProps {
  vehicle: Vehicle;
}

const VehicleDetail: React.FC<VehicleDetailProps> = ({ vehicle }) => {
  return (
    <div className="bg-[#f8fafc]">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Hero />
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 min-w-0">
            <div className="mb-10 text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">ID: {vehicle.id}</span>
                {vehicle.certified && (
                  <span className="text-[#1459DD] bg-blue-50 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border border-blue-100">Certifié NADO Expert</span>
                )}
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight uppercase leading-[0.9]">
                {vehicle.brand} <span className="text-[#1459DD]">{vehicle.model}</span>
              </h1>
              <p className="text-xl text-slate-500 mt-4 font-medium">
                {vehicle.year} • {vehicle.specs['Kilométrage']} • {vehicle.fuel} • {vehicle.transmission}
              </p>
            </div>

            <Gallery vehicle={vehicle} />
            
            <section className="mt-20 text-left">
              <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3 uppercase tracking-tighter">
                <div className="w-12 h-1 bg-[#1459DD] rounded-full"></div>
                À propos de ce véhicule
              </h2>
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm leading-relaxed text-left">
                <p className="text-xl text-slate-700 font-medium">
                  {vehicle.description}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  {['Première main', "Carnet d'entretien", 'Non accidenté', 'État concours', 'Garantie 12 mois'].map(tag => (
                    <div key={tag} className="px-5 py-2 bg-slate-50 rounded-full border border-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <TabsSection />
            <FinanceSimulator />
            <TrustSection />
          </div>

          <aside className="lg:w-[440px] shrink-0">
            <div className="sticky top-28">
              <PricingCard />
              <div className="mt-8 space-y-4 px-2">
                <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white overflow-hidden relative text-left">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#1459DD]/20 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
                  <h4 className="font-black uppercase text-lg mb-2 relative">Besoin d'un essai ?</h4>
                  <p className="text-sm opacity-70 mb-6 font-medium leading-relaxed relative">Prenez rendez-vous aujourd'hui pour essayer ce véhicule dans notre showroom à Casablanca.</p>
                  <button className="w-full py-4 bg-[#1459DD] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-colors relative">
                    Planifier maintenant
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default VehicleDetail;
