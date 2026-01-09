
import React, { useState } from 'react';
import { MOCK_VEHICLE } from '../constants';
import { Info, List, FileText, History, ShieldCheck, ChevronRight } from 'lucide-react';

type TabType = 'details' | 'equipment' | 'expertise' | 'history' | 'warranty';

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('details');

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'details', label: 'Détails techniques', icon: <Info size={18} /> },
    { id: 'equipment', label: 'Équipements', icon: <List size={18} /> },
    { id: 'expertise', label: 'Expertise NADO', icon: <FileText size={18} /> },
    { id: 'history', label: 'Historique', icon: <History size={18} /> },
    { id: 'warranty', label: 'Garantie', icon: <ShieldCheck size={18} /> },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mt-12">
      <div className="flex overflow-x-auto border-b border-slate-200 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
              activeTab === tab.id 
                ? 'border-[#1459DD] text-[#1459DD] bg-blue-50/50' 
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-8">
        {activeTab === 'details' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {Object.entries(MOCK_VEHICLE.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-slate-500 font-medium">{key}</span>
                <span className="text-slate-900 font-semibold">{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'equipment' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_VEHICLE.equipment.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-[#1459DD]"></div>
                <span className="text-slate-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'expertise' && (
          <div className="space-y-6">
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
              <div className="bg-[#1459DD] p-3 rounded-xl h-fit">
                <FileText className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Rapport de certification NADO Expert</h4>
                <p className="text-sm text-slate-600">Ce véhicule a passé avec succès notre test rigoureux de 110 points de contrôle esthétique et mécanique.</p>
                <button className="mt-4 text-[#1459DD] font-bold text-sm flex items-center gap-1 hover:underline">
                  Télécharger le rapport complet (PDF) <ChevronRight size={16} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {['Structure', 'Mécanique', 'Électronique', 'Esthétique'].map(item => (
                 <div key={item} className="flex flex-col items-center p-4 border border-slate-100 rounded-xl">
                    <span className="text-xs font-bold text-slate-400 uppercase mb-2">{item}</span>
                    <span className="text-green-600 font-bold">100% OK</span>
                 </div>
               ))}
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-4 relative before:absolute before:left-[17px] before:top-4 before:bottom-4 before:w-px before:bg-slate-200">
            {MOCK_VEHICLE.history.map((h, i) => (
              <div key={i} className="flex gap-6 items-center relative z-10">
                <div className="w-9 h-9 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">{h.event}</h5>
                  <p className="text-sm text-slate-500">{h.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'warranty' && (
          <div className="flex flex-col items-center text-center max-w-lg mx-auto py-6">
             <div className="w-20 h-20 bg-blue-50 text-[#1459DD] rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={48} />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-2">Garantie NADO Sérénité</h3>
             <p className="text-slate-600 mb-6">Ce véhicule bénéficie d'une garantie totale de 12 mois couvrant les pièces et la main d'œuvre, extensible jusqu'à 24 mois.</p>
             <button className="px-8 py-3 bg-[#1459DD] text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
               Consulter les conditions
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsSection;
