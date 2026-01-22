
import React, { useState, useEffect } from 'react';
import { 
  Search, ChevronRight, Calendar, Gauge, Settings2, Fuel, Play, 
  ShieldCheck, ArrowRight, TrendingUp, SlidersHorizontal, X, 
  MapPin, CarFront, Tags, Check, Clock, Car, Zap, Box, Sun, Users, Star
} from 'lucide-react';
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
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [selectedEnergy, setSelectedEnergy] = useState('Électrique');
  const [selectedTrans, setSelectedTrans] = useState('Automatique');

  const categories = [
    { label: 'Toutes', icon: <CarFront size={18} /> },
    { label: 'SUV', icon: <Box size={18} /> },
    { label: 'Berline', icon: <Car size={18} /> },
    { label: 'Coupé', icon: <Zap size={18} /> },
    { label: 'Sport', icon: <TrendingUp size={18} /> },
    { label: 'Électrique', icon: <Zap size={18} className="text-blue-500" /> },
    { label: 'Prestige', icon: <Star size={18} className="text-yellow-500" /> },
  ];

  useEffect(() => {
    if (isFilterDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isFilterDrawerOpen]);

  const vehicles = [
    { ...MOCK_VEHICLE, id: '1', brand: 'Porsche', model: '911 Carrera S', year: 2022, price: 1450000, images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=200', status: 'disponible', transmission: 'Auto', fuel: 'Essence', mileage: 12500 },
    { ...MOCK_VEHICLE, id: '2', brand: 'BMW', model: 'M4 Competition', year: 2023, price: 1250000, images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1556182065-927e9d22a513?auto=format&fit=crop&q=80&w=200', status: 'disponible', transmission: 'Auto', fuel: 'Essence', mileage: 5400 },
    { ...MOCK_VEHICLE, id: '3', brand: 'Mercedes-Benz', model: 'G 63 AMG', year: 2021, price: 2850000, images: ['https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=200', status: 'disponible', transmission: 'Auto', fuel: 'Essence', mileage: 22000 },
    { ...MOCK_VEHICLE, id: '4', brand: 'Range Rover', model: 'Sport SVR', year: 2022, price: 1680000, images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1611859328053-3cbc9f9399f4?auto=format&fit=crop&q=80&w=200', status: 'disponible', transmission: 'Auto', fuel: 'Diesel', mileage: 18900 },
    { ...MOCK_VEHICLE, id: '5', brand: 'Tesla', model: 'Model X Plaid', year: 2023, price: 1540000, images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=200', status: 'réservé', transmission: 'Auto', fuel: 'Elec', mileage: 1200 },
    { ...MOCK_VEHICLE, id: '6', brand: 'Porsche', model: 'Taycan Turbo S', year: 2022, price: 1950000, images: ['https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=200', status: 'vendu', transmission: 'Auto', fuel: 'Elec', mileage: 4500 },
  ];

  const FilterContent = () => (
    <div className="space-y-8">
      <div className="space-y-6">
        <select className="w-full bg-white border-none rounded-2xl px-5 py-5 outline-none font-black text-xs shadow-sm appearance-none cursor-pointer">
          <option>Tous les modèles</option>
          <option>911 Carrera</option>
          <option>Cayenne</option>
        </select>
      </div>

      <div className="space-y-3">
        <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1 block">Année</label>
        <div className="grid grid-cols-2 gap-3">
          <select className="w-full bg-white border-none rounded-2xl px-5 py-4 outline-none font-black text-xs shadow-sm appearance-none cursor-pointer">
            <option>Min</option>
            {[2025, 2024, 2023, 2022, 2021, 2020].map(y => <option key={y}>{y}</option>)}
          </select>
          <select className="w-full bg-white border-none rounded-2xl px-5 py-4 outline-none font-black text-xs shadow-sm appearance-none cursor-pointer">
            <option>Max</option>
            {[2025, 2024, 2023, 2022, 2021, 2020].map(y => <option key={y}>{y}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1 block">Énergie</label>
        <div className="flex flex-wrap gap-2">
          {['Diesel', 'Essence', 'Électrique', 'Hybride'].map(e => (
            <button 
              key={e} 
              onClick={() => setSelectedEnergy(e)}
              className={`px-6 py-3 bg-white rounded-full text-[10px] font-black uppercase tracking-tight shadow-sm border-2 transition-all ${
                selectedEnergy === e ? 'border-slate-900' : 'border-transparent'
              }`}
            >
              {e}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1 block">Transmission</label>
        <div className="grid grid-cols-2 gap-3">
          {['Manuelle', 'Automatique'].map(t => (
            <button 
              key={t} 
              onClick={() => setSelectedTrans(t)}
              className={`py-4 bg-white rounded-2xl text-[10px] font-black uppercase tracking-tight shadow-sm border-2 transition-all ${
                selectedTrans === t ? 'border-slate-900' : 'border-transparent'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-sm p-8 rounded-[3rem] border border-white/20 space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Prix Max</label>
            <span className="text-sm font-black text-blue-700">{price.toLocaleString()} MAD</span>
          </div>
          <input 
            type="range" min="0" max="5000000" step="50000" value={price} 
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-900/10 rounded-lg appearance-none cursor-pointer accent-blue-600" 
          />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Km Max</label>
            <span className="text-sm font-black text-blue-700">{mileage.toLocaleString()} KM</span>
          </div>
          <input 
            type="range" min="0" max="250000" step="5000" value={mileage} 
            onChange={(e) => setMileage(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-900/10 rounded-lg appearance-none cursor-pointer accent-blue-600" 
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1 block">Ville</label>
        <div className="relative">
          <MapPin size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
          <select className="w-full bg-white border-none rounded-2xl pl-12 pr-6 py-5 outline-none font-black text-xs shadow-sm appearance-none cursor-pointer">
            <option>Toutes les villes</option>
            <option>Casablanca</option>
            <option>Rabat</option>
            <option>Marrakech</option>
          </select>
        </div>
      </div>

      <button className="w-full py-6 bg-slate-900 text-white rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-3 mt-4">
        Lancer la recherche
      </button>
    </div>
  );

  const VehicleCard = ({ vehicle }: { vehicle: any }) => (
    <div onClick={onVehicleClick} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 hover:shadow-2xl transition-all group flex flex-col h-full text-left cursor-pointer shadow-sm">
      <div className="relative aspect-[16/11] overflow-hidden">
        <img src={vehicle.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={vehicle.model} />
        <div className="absolute bottom-4 right-4 w-24 h-36 rounded-2xl overflow-hidden border-2 border-white shadow-2xl z-20 group-hover:scale-110 transition-transform hidden md:block">
          <img src={vehicle.videoThumb || vehicle.images[1]} className="w-full h-full object-cover opacity-90" alt="Aperçu vidéo" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
             <div className="w-8 h-8 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white">
               <Play size={14} className="fill-white ml-0.5" />
             </div>
          </div>
        </div>
        <div className="absolute top-6 left-6">
          <span className={`px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl backdrop-blur-md ${
            vehicle.status === 'disponible' ? 'bg-green-500/90 text-white' : 
            vehicle.status === 'réservé' ? 'bg-orange-500/90 text-white' : 
            'bg-red-500/90 text-white'
          }`}>
            {vehicle.status}
          </span>
        </div>
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md text-slate-900 px-5 py-4 rounded-2xl shadow-2xl flex flex-col border border-slate-100">
          <span className="text-2xl font-black tracking-tighter leading-none text-[#1459DD]">{vehicle.price.toLocaleString()} MAD</span>
        </div>
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-6">
           <h3 className="text-2xl font-black uppercase text-slate-900 tracking-tight leading-none group-hover:text-[#1459DD] transition-colors">{vehicle.brand} {vehicle.model}</h3>
           <ShieldCheck size={24} className="text-[#1459DD]" />
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
          <div className="flex items-center gap-3 text-slate-400">
            <Calendar size={16} className="text-[#1459DD]" />
            <span className="text-xs font-bold uppercase tracking-tight text-slate-600">{vehicle.year}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <Gauge size={16} className="text-[#1459DD]" />
            <span className="text-xs font-bold uppercase tracking-tight text-slate-600">{vehicle.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <Settings2 size={16} className="text-[#1459DD]" />
            <span className="text-xs font-bold uppercase tracking-tight text-slate-600">{vehicle.transmission}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <Fuel size={16} className="text-[#1459DD]" />
            <span className="text-xs font-bold uppercase tracking-tight text-slate-600">{vehicle.fuel}</span>
          </div>
        </div>
        <div className="mt-auto p-6 bg-[#1459DD] rounded-[2rem] shadow-xl flex justify-between items-center group-hover:scale-[1.02] transition-transform">
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-white/70 uppercase tracking-widest mb-1">VOTRE MENSUALITÉ À PARTIR DE</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-white">{Math.round(vehicle.price / 84).toLocaleString()}</span>
              <span className="text-xs font-black text-[#FDD817]">MAD / MOIS</span>
            </div>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f8fafc] min-h-screen text-left pb-20">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <button onClick={onBackClick} className="hover:text-[#1459DD] cursor-pointer transition-colors">Accueil</button>
            <ChevronRight size={10} />
            <span className="text-slate-900">Catalogue</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
               <Clock size={16} className="text-[#1459DD]" />
               <span className="text-[#1459DD] font-black text-[10px] uppercase tracking-widest">Mis à jour il y a 5 min</span>
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
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-8 pt-2">
          {categories.map(cat => (
             <button 
               key={cat.label} 
               onClick={() => setSelectedCategory(cat.label)}
               className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap text-[10px] font-black uppercase tracking-widest shadow-sm border transition-all ${
                 selectedCategory === cat.label 
                 ? 'bg-[#1459DD] text-white border-[#1459DD] shadow-xl shadow-blue-100' 
                 : 'bg-white text-slate-600 border-slate-100 hover:border-[#1459DD] hover:text-[#1459DD]'
               }`}
             >
                {cat.icon}
                <span>{cat.label}</span>
             </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="hidden lg:block w-[340px] shrink-0">
             <div className="sticky top-28 bg-[#FDD817] rounded-[3.5rem] p-10 shadow-2xl shadow-yellow-100 overflow-hidden relative border-4 border-white">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-10 text-left">
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Affiner</h2>
                    <SlidersHorizontal size={20} className="text-slate-900" />
                  </div>
                  <FilterContent />
                </div>
             </div>
          </aside>

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
                    <div className="col-span-1 md:col-span-2 relative overflow-hidden bg-[#0A1120] rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group shadow-2xl">
                      <div className="relative z-10 flex flex-col max-w-xl text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <ShieldCheck className="text-[#FDD817]" size={18} />
                          <span className="text-[#FDD817] font-black text-[9px] uppercase tracking-[0.3em]">Label Confiance</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[1] mb-5">
                          EXPERTISE <span className="text-[#1459DD]">110 POINTS</span> DE CONTRÔLE
                        </h2>
                        <p className="text-slate-400 font-medium text-sm leading-relaxed mb-8 max-w-md">
                          Ne laissez rien au hasard. Chaque véhicule certifié passe une inspection chirurgicale avant sa mise en ligne.
                        </p>
                        <button className="w-fit px-8 py-4 bg-[#1459DD] text-white rounded-2xl font-black text-[9px] uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all flex items-center gap-3 shadow-xl">
                          Découvrir le rapport d'expertise <ArrowRight size={16} />
                        </button>
                      </div>
                      <div className="relative z-10 w-full md:w-[35%] aspect-[16/10] rounded-[2.5rem] overflow-hidden border-4 border-slate-800/50 shadow-2xl shrink-0">
                         <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" alt="Expertise" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-20 flex justify-center items-center gap-2">
               <button className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400">
                  <ChevronRight size={18} className="rotate-180" />
               </button>
               {[1, 2, 3].map(p => (
                 <button key={p} className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm transition-all ${p === 1 ? 'bg-[#1459DD] text-white shadow-lg' : 'bg-white text-slate-400 hover:bg-slate-100'}`}>
                   {p}
                 </button>
               ))}
               <button className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400">
                  <ChevronRight size={18} />
               </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-[400px]">
         <button 
           onClick={() => setIsFilterDrawerOpen(true)}
           className="w-full bg-slate-900 text-white h-16 rounded-[2rem] shadow-2xl shadow-slate-900/40 flex items-center justify-center gap-4 active:scale-95 transition-transform"
         >
            <SlidersHorizontal size={20} className="text-[#FDD817]" />
            <span className="font-black text-xs uppercase tracking-[0.2em]">Filtrer ma recherche</span>
         </button>
      </div>

      <div className={`fixed inset-0 z-[100] bg-white transition-transform duration-500 ease-in-out lg:hidden ${isFilterDrawerOpen ? 'translate-y-0' : 'translate-y-full'}`}>
         <div className="h-full flex flex-col">
            <div className="bg-[#FDD817] p-6 flex items-center justify-between shadow-lg">
               <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Filtres</h2>
               <button onClick={() => setIsFilterDrawerOpen(false)} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-slate-900"><X size={28} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 bg-[#f8fafc]"><FilterContent /></div>
            <div className="p-6 bg-white border-t border-slate-100">
               <button onClick={() => setIsFilterDrawerOpen(false)} className="w-full py-5 bg-[#1459DD] text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl">Appliquer</button>
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
