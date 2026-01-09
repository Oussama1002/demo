
import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, Calendar, Gauge, Settings2, Fuel, Play, ShieldCheck, ArrowRight, TrendingUp, HandCoins, SlidersHorizontal, X, MapPin, CarFront, Tags, Check, Clock } from 'lucide-react';
import { MOCK_VEHICLE } from '../constants';

interface PurchaseProps {
  onVehicleClick: () => void;
  onBackClick: () => void;
}

const Purchase: React.FC<PurchaseProps> = ({ onVehicleClick, onBackClick }) => {
  const [mileage, setMileage] = useState(50000);
  const [price, setPrice] = useState(800000);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>(['Porsche', 'Automatique', '2022+']);

  // Empêcher le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isFilterDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isFilterDrawerOpen]);

  const vehicles = [
    { ...MOCK_VEHICLE, id: '1', brand: 'Porsche', model: '911 Carrera S', year: 2022, price: 1450000, images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'], status: 'disponible', transmission: 'Auto', fuel: 'Essence', mileage: 12500 },
    { ...MOCK_VEHICLE, id: '2', brand: 'BMW', model: 'M4 Competition', year: 2023, price: 1250000, images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'], status: 'disponible', transmission: 'Auto', fuel: 'Essence', mileage: 5400 },
    { ...MOCK_VEHICLE, id: '3', brand: 'Mercedes-Benz', model: 'G 63 AMG', year: 2021, price: 2850000, images: ['https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800'], status: 'disponible', transmission: 'Auto', fuel: 'Essence', mileage: 22000 },
    { ...MOCK_VEHICLE, id: '4', brand: 'Range Rover', model: 'Sport SVR', year: 2022, price: 1680000, images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800'], status: 'disponible', transmission: 'Auto', fuel: 'Diesel', mileage: 18900 },
    { ...MOCK_VEHICLE, id: '5', brand: 'Tesla', model: 'Model X Plaid', year: 2023, price: 1540000, images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'], status: 'réservé', transmission: 'Auto', fuel: 'Elec', mileage: 1200 },
    { ...MOCK_VEHICLE, id: '6', brand: 'Porsche', model: 'Taycan Turbo S', year: 2022, price: 1950000, images: ['https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800'], status: 'vendu', transmission: 'Auto', fuel: 'Elec', mileage: 4500 },
  ];

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Marque & Modèle */}
      <div className="grid grid-cols-1 gap-5">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1">Marque</label>
          <select className="w-full bg-white border-none rounded-2xl px-5 py-4 outline-none font-bold text-sm shadow-sm appearance-none cursor-pointer hover:bg-slate-50 transition-colors">
            <option>Toutes les marques</option>
            <option>Porsche</option>
            <option>BMW</option>
            <option>Mercedes-Benz</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1">Modèle</label>
          <select className="w-full bg-white border-none rounded-2xl px-5 py-4 outline-none font-bold text-sm shadow-sm appearance-none cursor-pointer hover:bg-slate-50 transition-colors">
            <option>Tous les modèles</option>
            <option>911 Carrera</option>
            <option>Cayenne</option>
          </select>
        </div>
      </div>

      {/* AJOUT : Filtre Année */}
      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1">Année</label>
        <div className="grid grid-cols-2 gap-3">
          <select className="w-full bg-white border-none rounded-2xl px-4 py-4 outline-none font-bold text-xs shadow-sm appearance-none cursor-pointer">
            <option>Min</option>
            {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018].map(y => <option key={y}>{y}</option>)}
          </select>
          <select className="w-full bg-white border-none rounded-2xl px-4 py-4 outline-none font-bold text-xs shadow-sm appearance-none cursor-pointer">
            <option>Max</option>
            {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018].map(y => <option key={y}>{y}</option>)}
          </select>
        </div>
      </div>

      {/* Energie & Transmission (Style Pills) */}
      <div className="space-y-4">
        <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1">Énergie</label>
        <div className="flex flex-wrap gap-2">
          {['Diesel', 'Essence', 'Électrique', 'Hybride'].map(e => (
            <button key={e} className="px-4 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-tight shadow-sm border border-transparent hover:border-slate-900 transition-all">
              {e}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1">Transmission</label>
        <div className="grid grid-cols-2 gap-2">
          {['Manuelle', 'Automatique'].map(t => (
            <button key={t} className="px-4 py-3 bg-white rounded-xl text-[10px] font-black uppercase tracking-tight shadow-sm border border-transparent hover:border-slate-900 transition-all">
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Sliders de précision */}
      <div className="space-y-6 bg-white/50 p-6 rounded-[2.5rem] border border-white/40">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Prix Max</label>
            <span className="text-sm font-black text-[#1459DD]">{price.toLocaleString()} MAD</span>
          </div>
          <input 
            type="range" min="0" max="5000000" step="50000" value={price} 
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full h-2 bg-slate-900/10 rounded-lg appearance-none cursor-pointer accent-[#1459DD]" 
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Km Max</label>
            <span className="text-sm font-black text-[#1459DD]">{mileage.toLocaleString()} KM</span>
          </div>
          <input 
            type="range" min="0" max="250000" step="5000" value={mileage} 
            onChange={(e) => setMileage(Number(e.target.value))}
            className="w-full h-2 bg-slate-900/10 rounded-lg appearance-none cursor-pointer accent-[#1459DD]" 
          />
        </div>
      </div>

      {/* Localisation & Carrosserie */}
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1">Ville</label>
          <div className="relative">
            <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <select className="w-full bg-white border-none rounded-2xl pl-12 pr-5 py-4 outline-none font-bold text-sm shadow-sm appearance-none">
              <option>Toutes les villes</option>
              <option>Casablanca</option>
              <option>Rabat</option>
              <option>Marrakech</option>
              <option>Tanger</option>
            </select>
          </div>
        </div>
      </div>

      <button className="w-full py-5 bg-slate-900 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#1459DD] transition-all active:scale-95 flex items-center justify-center gap-3">
        Lancer la recherche
      </button>
    </div>
  );

  const VehicleCard = ({ vehicle }: { vehicle: any }) => (
    <div onClick={onVehicleClick} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all group flex flex-col h-full text-left cursor-pointer shadow-sm">
      <div className="relative aspect-[16/11] overflow-hidden">
        <img src={vehicle.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={vehicle.model} />
        
        {/* Miniature Vidéo Flottante */}
        <div className="absolute bottom-4 right-4 w-20 h-32 rounded-2xl overflow-hidden border-2 border-white shadow-2xl z-20 group-hover:scale-110 transition-transform hidden md:block">
          <img src={vehicle.images[0]} className="w-full h-full object-cover opacity-90" alt="Video preview" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
             <div className="w-6 h-6 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white">
               <Play size={10} className="fill-white ml-0.5" />
             </div>
          </div>
        </div>

        {/* Badge de Statut */}
        <div className="absolute top-5 left-5">
          <span className={`px-3 py-1.5 rounded-full font-black text-[8px] uppercase tracking-widest shadow-xl backdrop-blur-md ${
            vehicle.status === 'disponible' ? 'bg-green-500/90 text-white' : 
            vehicle.status === 'réservé' ? 'bg-orange-500/90 text-white' : 
            'bg-red-500/90 text-white'
          }`}>
            {vehicle.status}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2 rounded-2xl shadow-2xl flex flex-col border border-slate-100">
          <span className="text-xl font-black tracking-tighter leading-none text-[#1459DD]">{vehicle.price.toLocaleString()} MAD</span>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
           <h3 className="text-xl font-black uppercase text-slate-900 tracking-tight leading-none group-hover:text-[#1459DD] transition-colors">{vehicle.brand} {vehicle.model}</h3>
           {vehicle.id === '1' && <ShieldCheck size={20} className="text-[#1459DD]" />}
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
          <div className="flex items-center gap-2 text-slate-400">
            <Calendar size={14} className="text-[#1459DD]" />
            <span className="text-[11px] font-bold uppercase tracking-tight text-slate-600">{vehicle.year}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Gauge size={14} className="text-[#1459DD]" />
            <span className="text-[11px] font-bold uppercase tracking-tight text-slate-600">{vehicle.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Settings2 size={14} className="text-[#1459DD]" />
            <span className="text-[11px] font-bold uppercase tracking-tight text-slate-600">{vehicle.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Fuel size={14} className="text-[#1459DD]" />
            <span className="text-[11px] font-bold uppercase tracking-tight text-slate-600">{vehicle.fuel}</span>
          </div>
        </div>

        <div className="mt-auto p-5 bg-[#1459DD] rounded-3xl flex justify-between items-center group-hover:scale-[1.02] transition-transform shadow-lg shadow-blue-100">
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-white/60 uppercase tracking-widest">À partir de</span>
            <span className="text-lg font-black text-white tracking-tighter">{(vehicle.price / 84).toFixed(0)} MAD/MOIS</span>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f8fafc] min-h-screen text-left pb-20">
      {/* NOUVEAU : Header Path (Blanc comme la page détail) */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <button onClick={onBackClick} className="hover:text-[#1459DD] cursor-pointer transition-colors">Accueil</button>
            <ChevronRight size={10} />
            <span className="text-slate-900">Acheter une voiture</span>
          </nav>
        </div>
      </div>

      {/* Header Info (Titre principal) */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
               <Clock size={16} className="text-[#1459DD]" />
               <span className="text-[#1459DD] font-black text-[10px] uppercase tracking-widest">Catalogue mis à jour il y a 5 min</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              Trouvez votre <br />
              <span className="text-[#1459DD]">VOITURE</span> <span className="text-[#FDD817]">IDÉALE</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
             </div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">+150 experts en ligne</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Quick Filter Bar */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-8 pt-2">
          {['Toutes', 'SUV', 'Berline', 'Coupé', 'Sport', 'Électrique', 'Prestige'].map(cat => (
             <button key={cat} className="px-6 py-3 bg-white rounded-full whitespace-nowrap text-[10px] font-black uppercase tracking-widest shadow-sm border border-slate-100 hover:border-[#1459DD] hover:text-[#1459DD] transition-all">
                {cat}
             </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block w-[340px] shrink-0">
             <div className="sticky top-28 bg-[#FDD817] rounded-[3.5rem] p-10 shadow-2xl shadow-yellow-100 overflow-hidden relative border-4 border-white">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Affiner</h2>
                    <SlidersHorizontal size={20} className="text-slate-900" />
                  </div>
                  <FilterContent />
                </div>
             </div>
          </aside>

          {/* LISTING CONTENT */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Filtres actifs:</span>
              {activeFilters.map(f => (
                <span key={f} className="inline-flex items-center gap-2 px-4 py-2 bg-[#1459DD] text-white rounded-full text-[9px] font-black uppercase tracking-widest">
                  {f} <X size={12} className="cursor-pointer" />
                </span>
              ))}
              <button className="text-[9px] font-black text-[#1459DD] uppercase tracking-widest hover:underline ml-auto">Effacer tout</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vehicles.map((v, i) => (
                <React.Fragment key={v.id}>
                  <VehicleCard vehicle={v} />
                  {(i + 1) % 4 === 0 && (
                    <div className="col-span-1 md:col-span-2 relative overflow-hidden bg-slate-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 group shadow-2xl">
                      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1459DD]/10 blur-3xl rounded-full translate-x-1/2"></div>
                      <div className="relative z-10 flex flex-col max-w-lg text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp className="text-[#FDD817]" size={20} />
                          <span className="text-[#FDD817] font-black text-[9px] uppercase tracking-[0.4em]">Expertise NADO</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-6">Faites expertiser votre véhicule actuel</h2>
                        <p className="text-slate-400 font-medium text-sm leading-relaxed mb-8">Obtenez un rapport de 110 points de contrôle et accélérez votre vente.</p>
                        <button className="w-fit px-8 py-4 bg-[#1459DD] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all flex items-center gap-3 shadow-xl">Prendre rendez-vous <ArrowRight size={16} /></button>
                      </div>
                      <div className="relative z-10 w-full md:w-1/3 aspect-video rounded-[2rem] overflow-hidden border-4 border-slate-800 shadow-2xl">
                         <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Expertise" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-between">
               <button className="flex items-center gap-3 text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-[#1459DD] transition-colors">
                  <ChevronRight size={18} className="rotate-180" /> Page Précédente
               </button>
               <div className="flex gap-2">
                  {[1, 2, 3].map(p => (
                    <button key={p} className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm transition-all ${p === 1 ? 'bg-[#1459DD] text-white shadow-lg' : 'bg-white text-slate-400 hover:bg-slate-100'}`}>
                      {p}
                    </button>
                  ))}
               </div>
               <button className="flex items-center gap-3 text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-[#1459DD] transition-colors">
                  Page Suivante <ChevronRight size={18} />
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE STICKY FILTER BUTTON */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-[400px]">
         <button 
           onClick={() => setIsFilterDrawerOpen(true)}
           className="w-full bg-slate-900 text-white h-16 rounded-[2rem] shadow-2xl shadow-slate-900/40 flex items-center justify-center gap-4 active:scale-95 transition-transform"
         >
            <SlidersHorizontal size={20} className="text-[#FDD817]" />
            <span className="font-black text-xs uppercase tracking-[0.2em]">Filtrer ma recherche</span>
            <div className="bg-[#1459DD] w-6 h-6 rounded-full flex items-center justify-center text-[10px]">3</div>
         </button>
      </div>

      {/* MOBILE FILTER DRAWER */}
      <div className={`fixed inset-0 z-[100] bg-white transition-transform duration-500 ease-in-out lg:hidden ${isFilterDrawerOpen ? 'translate-y-0' : 'translate-y-full'}`}>
         <div className="h-full flex flex-col">
            <div className="bg-[#FDD817] p-6 flex items-center justify-between shadow-lg">
               <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Filtres de recherche</h2>
               <button onClick={() => setIsFilterDrawerOpen(false)} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-slate-900 hover:rotate-90 transition-transform"><X size={28} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 bg-[#f8fafc]"><FilterContent /><div className="h-24"></div></div>
            <div className="p-6 bg-white border-t border-slate-100 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)]">
               <button onClick={() => setIsFilterDrawerOpen(false)} className="w-full py-5 bg-[#1459DD] text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl active:scale-95">Voir les 128 résultats</button>
            </div>
         </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
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
            background: rgba(0,0,0,0.05);
            border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Purchase;
