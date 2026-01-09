
import React from 'react';
import { ShieldCheck, Compass, Trophy, Sparkles } from 'lucide-react';

const TrustSection: React.FC = () => {
  const items = [
    {
      icon: <ShieldCheck className="text-[#1459DD]" size={36} strokeWidth={1.5} />,
      title: "Contrôle Expert",
      desc: "Chaque véhicule est soumis à une inspection rigoureuse de 110 points par nos techniciens certifiés."
    },
    {
      icon: <Compass className="text-[#1459DD]" size={36} strokeWidth={1.5} />,
      title: "Transparence Totale",
      desc: "Historique d'entretien vérifié et rapport d'expertise complet disponible pour chaque annonce."
    },
    {
      icon: <Trophy className="text-[#1459DD]" size={36} strokeWidth={1.5} />,
      title: "Garantie Incluse",
      desc: "Roulez serein avec notre garantie NADO Sérénité couvrant pièces et main d'œuvre pendant 12 mois."
    },
    {
      icon: <Sparkles className="text-[#1459DD]" size={36} strokeWidth={1.5} />,
      title: "Accompagnement",
      desc: "Un conseiller dédié vous accompagne de l'essai routier jusqu'à la signature finale."
    }
  ];

  return (
    <section className="py-20 mt-12 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 uppercase">Pourquoi faire confiance à NADO ?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">Plus de 20 ans d'expertise dans l'automobile premium au Maroc. Nous ne vendons pas seulement des voitures, nous offrons la tranquillité d'esprit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-5 bg-blue-50 rounded-[2.5rem] group-hover:bg-blue-100 transition-all duration-500 group-hover:rotate-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-slate-50 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Porsche_logo.svg" className="h-8" alt="Porsche" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" className="h-10" alt="BMW" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Mercedes-Benz_Logo_2010.svg" className="h-10" alt="Mercedes" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Audi_logo_detail.svg" className="h-8" alt="Audi" />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
