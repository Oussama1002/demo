
import React, { useState } from 'react';
import { 
  Play, Instagram, MessageCircle, ArrowUpRight, 
  Volume2, Heart, Share2, ChevronDown, Radio, 
  Zap, ShieldCheck, Users, ExternalLink, MoveRight
} from 'lucide-react';

interface AboutProps {
  onBack: () => void;
  onExploreClick: () => void;
}

const About: React.FC<AboutProps> = ({ onBack, onExploreClick }) => {
  const [filter, setFilter] = useState<'all' | 'tiktok' | 'insta'>('all');

  const content = [
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
      title: 'Details Porsche 992',
      stats: '45K likes',
      author: '@nadocars'
    },
    {
      id: 3,
      type: 'tiktok',
      thumbnail: 'https://images.unsplash.com/photo-1562141989-c5c79ac8f576?auto=format&fit=crop&q=80&w=600',
      title: 'Showroom Night',
      stats: '89K vues',
      author: '@nado_officiel'
    },
    {
      id: 4,
      type: 'insta',
      thumbnail: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600',
      title: 'M4 Competition Arrival',
      stats: '12K likes',
      author: '@nadocars'
    },
    {
      id: 5,
      type: 'tiktok',
      thumbnail: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600',
      title: 'Expertise Technique',
      stats: '210K vues',
      author: '@nado_officiel'
    },
    {
      id: 6,
      type: 'insta',
      thumbnail: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600',
      title: 'Classic Sunday',
      stats: '33K likes',
      author: '@nadocars'
    }
  ];

  const filteredContent = filter === 'all' ? content : content.filter(c => c.type === filter);

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-slate-900 font-inter selection:bg-[#FDD817]">
      
      {/* --- HERO: THE VISUAL STATEMENT --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1459DD]/5 skew-x-[-15deg] translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#1459DD] rounded-full mb-6">
              <Radio size={12} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">NADO UNIVERSE LIVE</span>
            </div>
            <h1 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              L'Auto <br />
              <span className="text-[#1459DD]">SANS FILTRES.</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-md leading-relaxed mb-10 border-l-4 border-[#FDD817] pl-6">
              Oubliez les longs discours. Plongez dans notre quotidien à travers l'œil de nos experts et les émotions de nos clients.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#1459DD] transition-all shadow-xl">
                Suivre sur TikTok <MoveRight size={16} />
              </button>
            </div>
          </div>

          {/* Floating Vertical Video Mockup */}
          <div className="relative group hidden lg:flex justify-center">
            <div className="w-[300px] aspect-[9/16] bg-slate-200 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(20,89,221,0.3)] border-[8px] border-white transform rotate-3 group-hover:rotate-0 transition-transform duration-700">
               <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Featured Story" />
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Play size={24} className="text-white fill-white ml-1" />
                  </div>
               </div>
               <div className="absolute bottom-10 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#FDD817]"></div>
                    <span className="text-white font-black text-[10px] uppercase">@nado_officiel</span>
                  </div>
                  <p className="text-white text-xs font-bold">Livraison d'une GT3 RS à Casablanca 🔥</p>
               </div>
            </div>
            <div className="absolute -bottom-6 -left-12 bg-[#FDD817] p-8 rounded-3xl shadow-2xl max-w-[200px] -rotate-6">
               <span className="text-slate-900 font-black text-xs uppercase tracking-widest block mb-2">Social Proof</span>
               <span className="text-3xl font-black text-slate-900 leading-none">50K+</span>
               <p className="text-slate-900/60 text-[9px] font-bold uppercase mt-1 tracking-tight">Abonnés passionnés</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE SOCIAL WALL (GRID) --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="text-left">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
                Explorez le <span className="text-[#1459DD]">Mur Social</span>
              </h2>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">Cliquez pour voir sur la plateforme</p>
            </div>

            <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200">
              {[
                { id: 'all', label: 'Tout' },
                { id: 'tiktok', label: 'TikTok', icon: <MessageCircle size={14} /> },
                { id: 'insta', label: 'Insta', icon: <Instagram size={14} /> }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setFilter(t.id as any)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
                    filter === t.id ? 'bg-[#1459DD] text-white shadow-lg' : 'text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {t.icon} {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredContent.map((item, idx) => (
              <div 
                key={item.id} 
                className={`group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl hover:border-[#1459DD]/20 transition-all duration-500 ${idx % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
              >
                {/* Video Container */}
                <div className="relative aspect-[9/16] overflow-hidden cursor-pointer">
                  <img src={item.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 scale-90 group-hover:scale-100 transition-transform">
                      <Play size={20} fill="white" className="ml-1 text-white" />
                    </div>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <div className={`p-2 rounded-xl backdrop-blur-md border border-white/20 ${item.type === 'tiktok' ? 'bg-black/40' : 'bg-gradient-to-tr from-yellow-400/20 via-red-500/20 to-purple-600/20'}`}>
                      {item.type === 'tiktok' ? <MessageCircle size={14} className="text-white" /> : <Instagram size={14} className="text-white" />}
                    </div>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-black text-white uppercase tracking-widest">{item.stats}</span>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-8 text-left">
                  <span className="text-[9px] font-black text-[#1459DD] uppercase tracking-widest mb-2 block">{item.author}</span>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-[#1459DD] transition-colors">{item.title}</h3>
                  <a href="#" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
                    Voir la vidéo <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HARMONY SECTION: TRUST & EXPERTISE --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4">
                    <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden"><img src="https://images.unsplash.com/photo-1562141989-c5c79ac8f576?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Expertise 1" /></div>
                    <div className="aspect-[3/4] rounded-3xl bg-[#1459DD] p-8 text-white flex flex-col justify-end">
                       <Zap size={32} className="text-[#FDD817] mb-4" />
                       <h4 className="text-2xl font-black uppercase tracking-tight leading-none">20 Ans <br /> d'Expérience</h4>
                    </div>
                 </div>
                 <div className="space-y-4 pt-8">
                    <div className="aspect-[3/4] rounded-3xl bg-slate-900 p-8 text-white flex flex-col justify-between">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Certification</span>
                       <ShieldCheck size={48} className="text-[#1459DD]" />
                       <p className="text-sm font-bold leading-tight">110 points de contrôle chirurgical.</p>
                    </div>
                    <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden"><img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Expertise 2" /></div>
                 </div>
              </div>
            </div>

            <div className="text-left order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-10">
                La confiance <br /><span className="text-[#1459DD]">DÉMONTRÉE.</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                Nous ne nous contentons pas de dire que nous sommes experts. Nous vous le montrons chaque jour, en direct de nos ateliers et showrooms. La transparence est notre moteur.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: <Users size={20} />, title: "Communauté engagée", desc: "Plus de 50,000 passionnés nous suivent quotidiennement." },
                  { icon: <MessageCircle size={20} />, title: "Interaction directe", desc: "Nous répondons à toutes vos questions en vidéo." },
                  { icon: <ExternalLink size={20} />, title: "Zéro barrière", desc: "Achetez, vendez ou simulez depuis votre smartphone." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#1459DD] group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div className="text-left">
                       <h4 className="font-black text-slate-900 uppercase tracking-tight text-lg mb-1">{item.title}</h4>
                       <p className="text-slate-400 text-sm font-medium leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#1459DD 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12">
            Vivez l'expérience <br /><span className="text-[#FDD817]">AU QUOTIDIEN.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
             <button className="flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FDD817] transition-all">
               <MessageCircle size={18} /> @nado_officiel
             </button>
             <button className="flex items-center gap-3 px-10 py-5 bg-[#1459DD] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
               <Instagram size={18} /> @nadocars
             </button>
          </div>
        </div>
      </section>

      {/* Footer Nav Integration */}
      <footer className="py-20 bg-white border-t border-slate-100 text-center">
         <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button onClick={onExploreClick} className="px-10 py-5 bg-[#1459DD] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:shadow-xl transition-all">Explorer le stock</button>
            <button onClick={onBack} className="px-10 py-5 border border-slate-200 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:text-slate-900 hover:border-slate-900 transition-all">Retour à l'accueil</button>
         </div>
         <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">NADO PREMIUM AUTOMOTIVE • 2025</p>
      </footer>
    </div>
  );
};

export default About;
