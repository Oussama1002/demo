
import React, { useState, useEffect } from 'react';
import { MOCK_VEHICLE } from '../constants';
import { LayoutGrid, Coins, Timer, Fingerprint, MessageSquare } from 'lucide-react';
import { ProfileType } from '../types';

const FinanceSimulator: React.FC = () => {
  const [apport, setApport] = useState(MOCK_VEHICLE.price * 0.2);
  const [duree, setDuree] = useState(60);
  const [profile, setProfile] = useState<ProfileType>(ProfileType.SALARIE);
  const [mensualite, setMensualite] = useState(0);

  useEffect(() => {
    const capital = MOCK_VEHICLE.price - apport;
    const tauxAnnuel = 0.05; // 5% base rate
    const tauxMensuel = tauxAnnuel / 12;
    const m = (capital * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -duree));
    setMensualite(Math.round(m));
  }, [apport, duree, profile]);

  return (
    <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden mt-12">
      <div className="p-8 border-b border-slate-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-blue-50 text-[#1459DD] rounded-xl">
            <LayoutGrid size={22} strokeWidth={2} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Simulateur de Financement</h2>
        </div>
        <p className="text-slate-500">Personnalisez votre plan de financement et obtenez une réponse en 24h.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 space-y-8 border-r border-slate-100">
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <Coins size={16} strokeWidth={2} /> Apport Initial (MAD)
              </label>
              <span className="text-lg font-bold text-[#1459DD]">{apport.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min={0} 
              max={MOCK_VEHICLE.price * 0.8} 
              step={5000}
              value={apport}
              onChange={(e) => setApport(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#1459DD]"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <Timer size={16} strokeWidth={2} /> Durée du crédit
              </label>
              <span className="text-lg font-bold text-[#1459DD]">{duree} mois</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[12, 24, 36, 48, 60, 72, 84].map((v) => (
                <button
                  key={v}
                  onClick={() => setDuree(v)}
                  className={`py-2 text-sm font-bold rounded-lg border transition-all ${
                    duree === v 
                    ? 'border-[#1459DD] bg-blue-50 text-[#1459DD]' 
                    : 'border-slate-100 text-slate-400 hover:border-slate-300'
                  }`}
                >
                  {v}m
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2 mb-4">
              <Fingerprint size={16} strokeWidth={2} /> Votre Profil
            </label>
            <div className="grid grid-cols-2 gap-3">
              {Object.values(ProfileType).map((p) => (
                <button
                  key={p}
                  onClick={() => setProfile(p)}
                  className={`px-4 py-3 text-xs font-bold text-left rounded-xl border transition-all uppercase tracking-tight ${
                    profile === p 
                    ? 'border-[#1459DD] bg-blue-50 text-[#1459DD]' 
                    : 'border-slate-100 text-slate-400 hover:border-slate-300'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-50 flex flex-col justify-center items-center text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Mensualité Estimée</span>
          <div className="text-6xl font-black text-slate-900 mb-2">
            {mensualite.toLocaleString()} <span className="text-2xl font-bold">MAD</span>
          </div>
          <p className="text-slate-400 text-[11px] font-medium max-w-[280px] mb-8 leading-relaxed">
            Offre indicative soumise à acceptation du dossier par nos partenaires financiers.
          </p>
          
          <button className="flex items-center gap-3 bg-[#1459DD] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95">
            <MessageSquare size={22} strokeWidth={2} />
            Discuter de cette offre
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinanceSimulator;
