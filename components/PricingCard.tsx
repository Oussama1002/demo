
import React from 'react';
import { MessageSquareText, Smartphone, Calculator, Gavel, CheckCircle2, ShieldCheck } from 'lucide-react';
import { MOCK_VEHICLE } from '../constants';

const PricingCard: React.FC = () => {
  const monthlyPrice = Math.round(MOCK_VEHICLE.price / 84);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
      <div className="p-8">
        <div className="mb-8">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-black text-slate-900 tracking-tighter">
              {MOCK_VEHICLE.price.toLocaleString()}
            </span>
            <span className="text-xl font-bold text-slate-400">MAD</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#1459DD] rounded-lg font-bold text-sm">
            <Calculator size={16} strokeWidth={2} />
            <span>Dès {monthlyPrice.toLocaleString()} MAD / mois</span>
          </div>
        </div>

        <div className="space-y-4">
          <a 
            href="https://wa.me/212520070611"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-5 bg-[#1459DD] text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-[0.98]"
          >
            <MessageSquareText size={22} strokeWidth={2} />
            Contacter par WhatsApp
          </a>

          <button className="flex items-center justify-center gap-3 w-full py-5 bg-[#FDD817] text-slate-900 rounded-2xl font-black text-lg hover:bg-[#eec915] transition-all active:scale-[0.98]">
            <Smartphone size={22} strokeWidth={2} />
            05 20 07 06 11
          </button>

          <button className="flex items-center justify-center gap-3 w-full py-4 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 transition-all">
            <Gavel size={20} strokeWidth={1.5} /> Faire une offre
          </button>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-100 space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={18} strokeWidth={2} className="text-green-500 shrink-0" />
            <p className="text-sm font-medium text-slate-600">Disponibilité immédiate à Casablanca</p>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck size={18} strokeWidth={2} className="text-[#1459DD] shrink-0" />
            <p className="text-sm font-medium text-slate-600">Garantie constructeur préservée</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-center gap-2">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">PROGRAMME DE CONFIANCE NADO</span>
      </div>
    </div>
  );
};

export default PricingCard;
