
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { MOCK_VEHICLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
      <span className="hover:text-[#1459DD] cursor-pointer transition-colors">Accueil</span>
      <ChevronRight size={10} />
      <span className="hover:text-[#1459DD] cursor-pointer transition-colors">Occasions</span>
      <ChevronRight size={10} />
      <span className="hover:text-[#1459DD] cursor-pointer transition-colors">Porsche</span>
      <ChevronRight size={10} />
      <span className="text-slate-900">{MOCK_VEHICLE.model}</span>
    </nav>
  );
};

export default Hero;
