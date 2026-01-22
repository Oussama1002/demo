
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Play } from 'lucide-react';
import { Vehicle } from '../types';

interface GalleryProps {
  vehicle: Vehicle;
}

const Gallery: React.FC<GalleryProps> = ({ vehicle }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % vehicle.images.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative group aspect-[16/10] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
        <img 
          src={vehicle.images[activeIdx]} 
          alt={`${vehicle.model} - Image ${activeIdx + 1}`}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Miniature Vidéo Flottante */}
        <div className="absolute bottom-6 right-6 w-28 h-40 rounded-2xl overflow-hidden border-2 border-white shadow-2xl z-20 group-hover:scale-110 transition-transform cursor-pointer">
          <img src={vehicle.images[1]} className="w-full h-full object-cover opacity-90" alt="Aperçu vidéo" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
             <div className="w-10 h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center">
               <Play size={18} className="text-white fill-white ml-0.5" />
             </div>
          </div>
          <div className="absolute top-2 right-2 flex gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-[8px] font-black text-white uppercase tracking-widest drop-shadow-md">VUE EN DIRECT</span>
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={prev}
            className="p-4 bg-white/90 backdrop-blur rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft size={24} className="text-slate-800" />
          </button>
          <button 
            onClick={next}
            className="p-4 bg-white/90 backdrop-blur rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight size={24} className="text-slate-800" />
          </button>
        </div>

        <button className="absolute bottom-6 left-6 p-3 bg-black/40 backdrop-blur text-white rounded-xl hover:bg-black/60 transition-colors">
          <Maximize2 size={20} />
        </button>

        <div className="absolute top-6 right-6">
           <span className="px-4 py-1.5 bg-black/50 backdrop-blur text-white text-[10px] font-black uppercase tracking-widest rounded-full">
            {activeIdx + 1} / {vehicle.images.length}
           </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {vehicle.images.map((img, idx) => (
          <button 
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`aspect-[4/3] rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
              activeIdx === idx ? 'border-[#1459DD] shadow-lg ring-4 ring-blue-50' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt="Miniature" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
