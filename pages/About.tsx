
import React, { useState } from 'react';
import { 
  Play, Instagram, MessageCircle, ArrowUpRight, 
  Radio, Zap, ShieldCheck, Users, ExternalLink, MoveRight,
  Settings2, Sparkles, History, Star, Quote, ChevronRight,
  CarFront, Tags, HandCoins, Gavel, Landmark, TrendingUp
} from 'lucide-react';

interface AboutProps {
  onBack: () => void;
  onExploreClick: () => void;
}

const About: React.FC<AboutProps> = ({ onBack, onExploreClick }) => {
  const [filter, setFilter] = useState<'all' | 'tiktok' | 'insta'>('all');

  const historyMilestones = [
    { year: "2005", title: "La Fondation", desc: "Création du premier showroom premium à Casablanca." },
    { year: "2012", title: "L'Expansion", desc: "Déploiement national et création du pôle Expertise NADO." },
    { year: "2025", title: "L'Écosystème", desc: "Leader digital 360° du marché automobile premium au Maroc." }
  ];

  const nadoServices = [
    { title: "NADO Achat", icon: <CarFront size={24} />, desc: "Stock certifié avec 110 points de contrôle." },
    { title: "NADO Vente", icon: <Tags size={24} />, desc: "Mandat de vente premium pour le meilleur prix." },
    { title: "NADO Reprise", icon: <HandCoins size={24} />, desc: "Échange immédiat contre un véhicule du stock." },
    { title: "Auto Enchère", icon: <Gavel size={24} />, desc: "Plateforme dynamique de vente aux enchères." },
    { title: "NADO Finance", icon: <Landmark size={24} />, desc: "Crédit et leasing avec accord en 24 heures." },
    { title: "NADO Expert", icon: <ShieldCheck size={24} />, desc: "Certification technique chirurgicale." }
  ];

  const socialContent = [
    {
      id: 1,
      type: 'tiktok',
      thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
      title: 'Livraison du jour',
      stats: '125K vues',
      author: '@nado_officiel'
    },
    {
      id: 2,
      type: 'insta',
      thumbnail: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=600',
      title: 'Détails Porsche 992',
      stats: "45K j'aime",
      author: '@nadocars'
    },
    {
      id: 3,
      type: 'tiktok',
      thumbnail: 'https://images.unsplash.com/photo-1562141989-c5c79ac8f576?auto=format&fit=crop&q=80&w=600',
      title: 'Showroom de Nuit',
      stats: '89K vues',
      author: '@nado_officiel'
    }
  ];

  const testimonials = [
    {
      name: "Ahmed El Fassi",
      role: "Client Fidèle",
      text: "L'expertise NADO est unique au Maroc. J'ai acheté 3 véhicules chez eux, la transparence est totale.",
      rating: 5
    },
    {
      name: "Sanaa Benjelloun",
      role: "Vendeuse Mandat",
      text: "Vendre ma voiture via NADO m'a fait gagner un temps précieux. Ils gèrent tout de A à Z.",
      rating: 5
    }
  ];

  const filteredContent = filter === 'all' ? socialContent : socialContent.filter(c => c.type === filter);

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-slate-900 font-inter selection:bg-[#FDD817]">
      
      {/* --- HERO SECTION (EXISTANT) --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1459DD]/5 skew-x-[-15deg] translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#1459DD] rounded-full mb-6">
              <Radio size={12} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">L'UNIVERS NADO EN DIRECT</span>
            </div>
            <h1 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              L'Auto <br />
              <span className="text-[#1459DD]">SANS FILTRES.</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-md leading-relaxed mb-10 border-l-4 border-[#FDD817] pl-6">
              Plus de 20 ans d'histoire à redéfinir la confiance automobile au Maroc.
            </p>
          </div>
          <div className="relative group hidden lg:flex justify-center">
            <div className="w-[300px] aspect-[9/16] bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white rotate-3">
               <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Hero Story" />
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Play size={24} className="text-white fill-white" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION HISTOIRE (NOUVEAU) --- */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 text-left">
              <span className="text-[10px] font-black text-[#1459DD] uppercase tracking-[0.5em] mb-4 block">Notre Héritage</span>
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-8">Depuis 2005.</h2>
              <div className="space-y-8">
                {historyMilestones.map((m, i) => (
                  <div key={i} className="flex gap-6 group">
                    <span className="text-2xl font-black text-[#1459DD] opacity-20 group-hover:opacity-100 transition-opacity">{m.year}</span>
                    <div className="text-left">
                       <h4 className="font-black text-slate-900 uppercase text-lg">{m.title}</h4>
                       <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
               <div className="aspect-video bg-slate-100 rounded-[3rem] overflow-hidden relative shadow-xl">
                  <img src="https://images.unsplash.com/photo-1603584173870-7f3bc1335384?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale" alt="Showroom History" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TOUS LES SERVICES (NOUVEAU) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter">L'Écosystème <span className="text-[#1459DD]">NADO.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nadoServices.map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-[#1459DD] transition-all text-left group">
                <div className="w-14 h-14 bg-blue-50 text-[#1459DD] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1459DD] group-hover:text-white transition-all">{s.icon}</div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERTISE BENTO (EXISTANT) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              L'Expertise <br />en 30 minutes.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Settings2 size={32} />, title: "Diagnostic", desc: "Analyse complète du moteur." },
              { icon: <Sparkles size={32} />, title: "Esthétique", desc: "Examen de la carrosserie." },
              { icon: <History size={32} />, title: "Historique", desc: "Audit de la traçabilité." },
              { icon: <ShieldCheck size={32} />, title: "Confiance", desc: "Estimation au juste prix." }
            ].map((point, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-[#1459DD] transition-all text-left">
                <div className="w-14 h-14 bg-white text-[#1459DD] rounded-2xl flex items-center justify-center mb-8 shadow-sm">{point.icon}</div>
                <h3 className="text-lg font-black text-slate-900 uppercase mb-2">{point.title}</h3>
                <p className="text-slate-400 text-xs font-medium">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOCIAL WALL (EXISTANT) --- */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="text-left">
              <h2 className="text-4xl font-black uppercase tracking-tighter">Le Mur <span className="text-[#1459DD]">Social.</span></h2>
            </div>
            <div className="flex bg-white p-1 rounded-2xl border border-slate-200">
              {['all', 'tiktok', 'insta'].map(t => (
                <button
                  key={t}
                  onClick={() => setFilter(t as any)}
                  className={`px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
                    filter === t ? 'bg-[#1459DD] text-white' : 'text-slate-400'
                  }`}
                >
                  {t === 'all' ? 'Tout' : t === 'tiktok' ? 'TikTok' : 'Insta'}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((item) => (
              <div key={item.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 hover:shadow-2xl transition-all text-left">
                <div className="relative aspect-[9/16]">
                  <img src={item.thumbnail} className="w-full h-full object-cover" alt={item.title} />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play size={40} className="text-white fill-white" />
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-[9px] font-black text-[#1459DD] uppercase tracking-widest block mb-2">{item.author}</span>
                  <h3 className="text-xl font-black uppercase tracking-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TÉMOIGNAGES (NOUVEAU) --- */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#FDD817] uppercase tracking-[0.5em] mb-4 block">Avis Clients</span>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Ils nous font <span className="text-[#1459DD]">Confiance.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md p-12 rounded-[3.5rem] border border-white/10 relative">
                <Quote className="absolute top-8 right-12 text-[#1459DD] opacity-20" size={60} />
                <div className="flex gap-1 mb-8 text-[#FDD817]">
                  {[...Array(t.rating)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg font-medium italic mb-8">"{t.text}"</p>
                <div className="text-left">
                  <h4 className="font-black uppercase text-sm">{t.name}</h4>
                  <p className="text-[#1459DD] font-bold text-[10px] uppercase">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <footer className="py-24 bg-white text-center">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-12">Rejoignez <span className="text-[#1459DD]">la Famille.</span></h2>
        <div className="flex justify-center gap-6">
          <button onClick={onExploreClick} className="px-12 py-5 bg-[#1459DD] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl">Explorer le stock</button>
          <button onClick={onBack} className="px-12 py-5 border border-slate-200 text-slate-400 rounded-2xl font-black text-xs uppercase tracking-widest">Retour à l'accueil</button>
        </div>
      </footer>
    </div>
  );
};

export default About;
