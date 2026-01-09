
import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, Play, BadgeCheck, Timer, Zap, Quote, Gavel, CarFront, X, ArrowRight, ExternalLink, Fuel, Gauge, Calendar, Settings2, Wallet, Landmark, Radio, TrendingUp, Banknote, Star, MapPin, ChevronLeft, Bell, Users, PlusCircle, Info, Video, ShieldCheck, Sparkles, HandCoins, Tags, Filter, BookOpen, Clock, ArrowUpRight, BarChart3 } from 'lucide-react';
import { MOCK_VEHICLE } from '../constants';

interface HomeProps {
  onVehicleClick: () => void;
  onSeeMoreClick: () => void;
  onEstimationClick: () => void;
}

interface Story {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  contentImg: string;
  description: string;
  cta: string;
}

interface LiveVideo {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  isLive: boolean;
  views: string;
}

interface AuctionVehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  image: string;
  currentBid: number;
  timeLeft?: string;
  status: 'live' | 'ended';
  bidsCount: number;
  views: number;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  featured?: boolean;
}

const Home: React.FC<HomeProps> = ({ onVehicleClick, onSeeMoreClick, onEstimationClick }) => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const brands = [
    { name: 'Porsche', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Porsche_logo.svg' },
    { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg' },
    { name: 'Mercedes', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Mercedes-Benz_Logo_2010.svg' },
    { name: 'Audi', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Audi_logo_detail.svg' },
    { name: 'Land Rover', logo: 'https://upload.wikimedia.org/wikipedia/fr/c/c9/Land_Rover_Logo.svg' },
    { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
    { name: 'Bentley', logo: 'https://upload.wikimedia.org/wikipedia/fr/6/60/Logo_Bentley.svg' },
  ];

  const stories: Story[] = [
    { id: 1, title: 'Livraison 911', subtitle: 'Service Premium', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=200', contentImg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800', description: 'Nous livrons votre véhicule de rêve directement devant votre porte, partout au Maroc.', cta: 'Découvrir le service' },
    { id: 2, title: 'Arrivage M4', subtitle: 'Nouveauté', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=200', contentImg: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800', description: 'Une BMW M4 Competition G82 vient de rejoindre notre inventaire. Pack Carbone complet.', cta: 'Voir le véhicule' },
    { id: 3, title: 'Showroom VIP', subtitle: 'Expérience', img: 'https://images.unsplash.com/photo-1603584173870-7f3bc1335384?auto=format&fit=crop&q=80&w=200', contentImg: 'https://images.unsplash.com/photo-1603584173870-7f3bc1335384?auto=format&fit=crop&q=80&w=800', description: 'Réservez une visite privée de notre showroom à Casablanca.', cta: 'Prendre rendez-vous' },
    { id: 4, title: 'Expertise Pro', subtitle: 'Confiance', img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=200', contentImg: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800', description: 'Découvrez comment nos experts inspectent chaque centimètre. 110 points de contrôle.', cta: 'En savoir plus' },
  ];

  const auctions: AuctionVehicle[] = [
    { id: 1, brand: 'Porsche', model: 'GT3 RS (992)', year: 2024, image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200', currentBid: 3250000, timeLeft: '02:45:12', status: 'live', bidsCount: 28, views: 1240 },
    { id: 2, brand: 'Lamborghini', model: 'Urus S', year: 2023, image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800', currentBid: 3850000, timeLeft: '12:10:05', status: 'live', bidsCount: 15, views: 850 },
    { id: 3, brand: 'Ferrari', model: 'Roma', year: 2022, image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800', currentBid: 2450000, status: 'ended', bidsCount: 42, views: 3100 },
  ];

  const testimonials: Testimonial[] = [
    { id: 1, name: 'Sophie Martin', role: 'Architecte', text: "J'ai vendu ma voiture en 24h grâce à leur équipe. Professionnalisme et rapidité au rendez-vous.", rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150' },
    { id: 2, name: 'Karim Bennani', role: 'Entrepreneur', text: "L'expertise NADO m'a permis d'acheter ma Porsche en toute sérénité. Le rapport de 110 points est d'une précision chirurgicale.", rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150' },
    { id: 3, name: 'Laila Mansouri', role: 'Directrice Marketing', text: "Le service de conciergerie est bluffant. Ils se sont occupés de tout, de la mutation de carte grise à l'assurance.", rating: 5, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150' },
  ];

  const blogPosts: BlogPost[] = [
    { id: 1, featured: true, title: "L'Art de collectionner : Pourquoi la Porsche 911 (992) est déjà un classique indémodable", category: "ÉDITO", date: "22 Mai 2025", readTime: "12 min", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200", excerpt: "Analyse profonde sur l'héritage Porsche et les raisons qui poussent les investisseurs marocains vers ce modèle mythique." },
    { id: 2, title: "Top 5 des routes les plus spectaculaires du Maroc pour un Road Trip Premium", category: "EVASION", date: "18 Mai 2025", readTime: "7 min", image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=800", excerpt: "De l'Atlas à la côte Atlantique, notre sélection de parcours d'exception." },
    { id: 3, title: "Maintenance : 3 secrets pour préserver la valeur de votre SUV de luxe", category: "CONSEILS", date: "12 Mai 2025", readTime: "5 min", image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800", excerpt: "Comment un entretien méticuleux peut vous faire gagner des millions à la revente." },
  ];

  const liveVideos: LiveVideo[] = [
    { id: 1, title: 'Test Drive: Porsche 911 GT3 RS', duration: '12:45', thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600', isLive: true, views: '1.2k' },
    { id: 2, title: 'Arrivage: Mercedes Classe G 63', duration: '08:20', thumbnail: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=600', isLive: false, views: '850' },
    { id: 3, title: 'Review: BMW M4 Competition G82', duration: '15:10', thumbnail: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600', isLive: false, views: '2.4k' },
  ];

  const vehicleListingsCertifiees = [
    { ...MOCK_VEHICLE, id: 'c1', brand: 'Porsche', model: '911 Carrera S', year: 2022, price: 1450000, images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=200', status: 'disponible', transmission: 'Auto', fuel: 'Essence', mileage: 12500 },
    { ...MOCK_VEHICLE, id: 'c2', brand: 'BMW', model: 'M4 Competition', year: 2023, price: 1250000, images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1556182065-927e9d22a513?auto=format&fit=crop&q=80&w=200', status: 'disponible', transmission: 'Auto', fuel: 'Essence', mileage: 5400 },
    { ...MOCK_VEHICLE, id: 'c3', brand: 'Mercedes-Benz', model: 'G 63 AMG', year: 2021, price: 2850000, images: ['https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=200', status: 'disponible', transmission: 'Auto', fuel: 'Essence', mileage: 22000 },
  ];

  const vehicleListingsParticuliers = [
    { ...MOCK_VEHICLE, id: 'p1', brand: 'Range Rover', model: 'Sport SVR', year: 2022, price: 1680000, images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1611859328053-3cbc9f9399f4?auto=format&fit=crop&q=80&w=200', status: 'disponible', transmission: 'Auto', fuel: 'Diesel', mileage: 18900 },
    { ...MOCK_VEHICLE, id: 'p2', brand: 'Tesla', model: 'Model X Plaid', year: 2023, price: 1540000, images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=200', status: 'réservé', transmission: 'Auto', fuel: 'Elec', mileage: 1200 },
    { ...MOCK_VEHICLE, id: 'p3', brand: 'Porsche', model: 'Taycan Turbo S', year: 2022, price: 1950000, images: ['https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=200', status: 'vendu', transmission: 'Auto', fuel: 'Elec', mileage: 4500 },
  ];

  const vehicleListingsPros = [
    { ...MOCK_VEHICLE, id: 'pr1', brand: 'Audi', model: 'RS6 Avant', year: 2023, price: 1850000, images: ['https://images.unsplash.com/photo-1606152424101-ad4e8a4d9ee4?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1606152424101-ad4e8a4d9ee4?auto=format&fit=crop&q=80&w=200', status: 'disponible', transmission: 'Auto', fuel: 'Essence', mileage: 8200 },
    { ...MOCK_VEHICLE, id: 'pr2', brand: 'Bentley', model: 'Continental GT', year: 2021, price: 3200000, images: ['https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=200', status: 'disponible', transmission: 'Auto', fuel: 'Essence', mileage: 14500 },
    { ...MOCK_VEHICLE, id: 'pr3', brand: 'Lamborghini', model: 'Urus', year: 2022, price: 3950000, images: ['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=200', status: 'réservé', transmission: 'Auto', fuel: 'Essence', mileage: 9800 },
  ];

  useEffect(() => {
    let interval: any;
    if (selectedStory) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setSelectedStory(null);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [selectedStory]);

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Fix: Add key to the component props type definition
  const VehicleCard = ({ vehicle }: { vehicle: any; key?: string | number }) => (
    <div onClick={onVehicleClick} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 hover:shadow-2xl transition-all group flex flex-col h-full text-left cursor-pointer">
      <div className="relative aspect-[16/11] overflow-hidden">
        <img src={vehicle.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={vehicle.model} />
        
        {/* Miniature Vidéo Flottante (Style Temu) */}
        <div className="absolute bottom-4 right-4 w-24 h-36 rounded-2xl overflow-hidden border-2 border-white shadow-2xl z-20 group-hover:scale-110 transition-transform">
          <img src={vehicle.videoThumb || vehicle.images[1]} className="w-full h-full object-cover opacity-90" alt="Video preview" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
             <div className="w-8 h-8 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center">
               <Play size={14} className="text-white fill-white ml-0.5" />
             </div>
          </div>
          <div className="absolute top-2 right-2 flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          </div>
        </div>

        {/* Badge de Statut */}
        <div className="absolute top-6 left-6">
          <span className={`px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl backdrop-blur-md ${
            vehicle.status === 'disponible' ? 'bg-green-500/90 text-white' : 
            vehicle.status === 'réservé' ? 'bg-orange-500/90 text-white' : 
            'bg-red-500/90 text-white'
          }`}>
            {vehicle.status}
          </span>
        </div>

        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md text-slate-900 px-5 py-3 rounded-2xl shadow-2xl flex flex-col border border-slate-100">
          <span className="text-[9px] font-black uppercase tracking-widest opacity-60 leading-none mb-1 text-slate-400">Prix Comptant</span>
          <span className="text-2xl font-black tracking-tighter leading-none text-[#1459DD]">{vehicle.price.toLocaleString()} MAD</span>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-black uppercase text-slate-900 tracking-tight leading-none group-hover:text-[#1459DD] transition-colors mb-6">{vehicle.brand} {vehicle.model}</h3>

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

        {/* BLOC FINANCEMENT HAUTE VISIBILITÉ */}
        <div className="mt-auto p-6 bg-[#1459DD] rounded-[2rem] shadow-xl shadow-blue-100 flex justify-between items-center group-hover:scale-[1.02] transition-transform">
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-white/70 uppercase tracking-widest block mb-1">Mensualité NADO</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-white tracking-tighter">{(vehicle.price / 84).toFixed(0)}</span>
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
    <div className="flex flex-col relative bg-white text-left">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1459DD]/10 skew-x-[-12deg] translate-x-20"></div>
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2400" className="w-full h-full object-cover opacity-40 scale-105" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1459DD]/20 border border-[#1459DD]/30 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FDD817] animate-pulse"></span>
            <span className="text-[#FDD817] font-black text-[10px] uppercase tracking-[0.3em]">NADO Premium Experience</span>
          </div>
          <h1 className="text-6xl lg:text-[100px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-10">L'Auto <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1459DD] to-[#7ea9ff]">Redéfinie</span></h1>
          <p className="text-xl text-slate-300 max-w-md font-medium leading-relaxed mb-12 border-l-4 border-[#FDD817] pl-6">Le plus grand catalogue de véhicules certifiés au Maroc. Achat, vente et enchères en un seul lieu.</p>
        </div>
      </section>

      {/* 2. NADO STORIES */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <div className="flex items-center justify-between mb-10">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-[#FDD817] uppercase tracking-[0.4em] mb-1">En Direct de NADO</span>
              <h2 className="text-2xl font-black uppercase tracking-tight">NADO Stories</h2>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto no-scrollbar pb-4">
            {stories.map(s => (
              <div key={s.id} className="flex-shrink-0 flex flex-col items-center gap-4 cursor-pointer group" onClick={() => setSelectedStory(s)}>
                <div className="w-24 h-24 rounded-full p-1 border-2 border-[#1459DD] transition-transform relative overflow-hidden">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white">
                    <img src={s.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={s.title} />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center"><Play size={20} className="text-white fill-white group-hover:scale-125 transition-transform" /></div>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-[11px] font-black uppercase tracking-tight">{s.title}</span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{s.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MOTEUR DE RECHERCHE ULTRA-PREMIUM (EXPERIENCE) */}
      <section className="px-4 py-28 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 inset-x-0 h-full opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#1459DD 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 text-[#1459DD] rounded-full font-black text-[10px] uppercase tracking-[0.2em] mb-10 shadow-sm border border-blue-100/50 animate-bounce">
            <Filter size={12} />
            Trouvez votre prochaine pépite
          </div>

          <div className="bg-white rounded-[3.5rem] shadow-[0_48px_100px_-24px_rgba(20,89,221,0.15),0_10px_30px_-10px_rgba(0,0,0,0.05)] p-4 border border-slate-100 group transition-all hover:shadow-[0_64px_120px_-24px_rgba(20,89,221,0.2)]">
            <div className="flex flex-wrap lg:flex-nowrap items-center">
              
              {/* Filter: Marque */}
              <div className="flex-1 px-8 py-6 text-left min-w-[200px] relative group/item">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3 flex items-center gap-2 group-hover/item:text-[#1459DD] transition-colors">
                  <CarFront size={14} /> Marque
                </label>
                <div className="relative">
                  <select className="w-full bg-transparent border-none text-xl font-black text-slate-900 outline-none cursor-pointer appearance-none pr-8">
                    <option>Toutes marques</option>
                    <option>Porsche</option>
                    <option>BMW</option>
                    <option>Mercedes-Benz</option>
                    <option>Audi</option>
                    <option>Range Rover</option>
                  </select>
                  <ChevronRight size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-300 rotate-90 pointer-events-none" />
                </div>
              </div>

              <div className="hidden lg:block w-px h-16 bg-slate-100"></div>
              
              {/* Filter: Modèle */}
              <div className="flex-1 px-8 py-6 text-left min-w-[200px] relative group/item">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3 flex items-center gap-2 group-hover/item:text-[#1459DD] transition-colors">
                  <Settings2 size={14} /> Modèle
                </label>
                <div className="relative">
                  <select className="w-full bg-transparent border-none text-xl font-black text-slate-900 outline-none cursor-pointer appearance-none pr-8">
                    <option>Tous modèles</option>
                    <option>911 Carrera</option>
                    <option>M4 Competition</option>
                    <option>G 63 AMG</option>
                    <option>Taycan</option>
                  </select>
                  <ChevronRight size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-300 rotate-90 pointer-events-none" />
                </div>
              </div>

              <div className="hidden lg:block w-px h-16 bg-slate-100"></div>

              {/* Filter: Budget Max */}
              <div className="flex-1 px-8 py-6 text-left min-w-[280px] relative group/item">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3 flex items-center gap-2 group-hover/item:text-[#1459DD] transition-colors">
                  <Tags size={14} /> Budget Maximum
                </label>
                <div className="relative">
                  <select className="w-full bg-transparent border-none text-xl font-black text-slate-900 outline-none cursor-pointer appearance-none pr-8">
                    <option>Budget Indifférent</option>
                    <option>&lt; 100 000 DH (10M)</option>
                    <option>100 000 - 200 000 DH (10M - 20M)</option>
                    <option>&gt; 400 000 DH (40M)</option>
                  </select>
                  <ChevronRight size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-300 rotate-90 pointer-events-none" />
                </div>
              </div>

              {/* Action Button */}
              <div className="p-2 w-full lg:w-auto">
                <button className="w-full lg:w-auto h-20 lg:h-24 px-12 bg-[#1459DD] text-white rounded-[2.5rem] flex items-center justify-center gap-5 font-black text-sm uppercase tracking-[0.15em] hover:bg-blue-700 transition-all shadow-[0_20px_40px_-10px_rgba(20,89,221,0.3)] active:scale-95 group overflow-hidden relative">
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                  <Search size={24} className="group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                  <span>Explorer</span>
                </button>
              </div>

            </div>
          </div>
        </div>
        
        {/* Brand scroll below Search */}
        <div className="overflow-hidden py-20 mt-4">
          <div className="flex gap-24 whitespace-nowrap animate-infinite-scroll">
            {[...brands, ...brands].map((b, i) => (
              <img key={i} src={b.logo} alt={b.name} className="h-10 grayscale opacity-20 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: ANNONCES CERTIFIÉES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
               Dernières <br />
               <span className="text-[#1459DD]">ANNONCES</span> <span className="text-[#FDD817]">CERTIFIÉES</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {vehicleListingsCertifiees.map(v => <VehicleCard key={v.id} vehicle={v} />)}
          </div>
          <div className="mt-16 flex justify-center">
            <button onClick={onSeeMoreClick} className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#1459DD] transition-all flex items-center gap-3 shadow-2xl group">
              <span>Voir tout le catalogue certifié</span>
              <PlusCircle size={18} className="group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* NEW SECTION: NADO PRICE (CAR ESTIMATION) */}
      <section className="py-24 bg-[#1459DD] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600 skew-x-[-12deg] translate-x-20 opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FDD817] rounded-full blur-[100px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <div className="text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full mb-6">
                <BarChart3 size={14} className="text-[#FDD817]" />
                <span className="text-white font-black text-[10px] uppercase tracking-widest">NADO VALUE Service</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
                Combien vaut <br /><span className="text-[#FDD817]">VOTRE VOITURE ?</span>
              </h2>
              <p className="text-blue-50 text-xl font-medium leading-relaxed mb-12 max-w-md">
                Obtenez une estimation précise en 2 minutes basée on l'intelligence artificielle et les données réelles du marché marocain.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: <Clock size={20}/>, text: "Rapide (2 min)" },
                  { icon: <ShieldCheck size={20}/>, text: "Sans engagement" },
                  { icon: <TrendingUp size={20}/>, text: "Meilleur Prix" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-start gap-3">
                    <div className="text-[#FDD817]">{item.icon}</div>
                    <span className="text-white font-black text-[10px] uppercase tracking-widest">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={onEstimationClick}
                className="group relative px-10 py-6 bg-white text-[#1459DD] rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-[#FDD817] hover:text-slate-900 transition-all shadow-2xl flex items-center gap-4 active:scale-95"
              >
                <span>Estimer ma voiture gratuitement</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 transform lg:rotate-6 group-hover:rotate-0 transition-transform duration-700">
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-[3.5rem] border border-white/20 shadow-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200" className="rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Estimation NADO" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1459DD]/60 to-transparent"></div>
                  
                  {/* Floating data points */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center gap-4">
                    <div className="bg-white px-6 py-4 rounded-2xl shadow-2xl border border-slate-100 animate-bounce duration-[2000ms]">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-slate-900 font-black text-xs uppercase tracking-tight">Analyse de marché en cours...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUB BANNER A: NADO EXPERT */}
      <section className="px-4 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1459DD]/10 blur-3xl rounded-full translate-x-1/2"></div>
            <div className="relative z-10 flex flex-col max-w-2xl text-left">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="text-[#FDD817]" size={24} />
                <span className="text-[#FDD817] font-black text-[10px] uppercase tracking-[0.4em]">Label Confiance</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-6">Expertise <span className="text-[#1459DD]">110 Points</span> de contrôle</h2>
              <p className="text-slate-400 font-medium mb-8 leading-relaxed max-w-md">Ne laissez rien au hasard. Chaque véhicule certifié passe une inspection chirurgicale avant sa mise en ligne.</p>
              <button className="w-fit px-8 py-4 bg-[#1459DD] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all flex items-center gap-3 shadow-xl">Découvrir le rapport d'expertise <ArrowRight size={16} /></button>
            </div>
            <div className="relative z-10 w-full md:w-1/3 aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-800">
               <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Expertise" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ANNONCES PARTICULIERS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
               Dernières <br />
               <span className="text-[#1459DD]">ANNONCES</span> <span className="text-[#FDD817]">PARTICULIERS</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {vehicleListingsParticuliers.map(v => <VehicleCard key={v.id} vehicle={v} />)}
          </div>
          <div className="mt-16 flex justify-center">
            <button onClick={onSeeMoreClick} className="px-10 py-5 bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#1459DD] hover:text-white transition-all flex items-center gap-3 shadow-xl group">
              <span>Voir tout le catalogue particuliers</span>
              <PlusCircle size={18} className="group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* PUB BANNER B: FINANCEMENT FLASH */}
      <section className="px-4 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-[#FDD817] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group shadow-2xl shadow-yellow-100">
            <div className="relative z-10 flex flex-col max-w-2xl text-left">
              <div className="flex items-center gap-2 mb-4">
                <HandCoins className="text-slate-900" size={24} />
                <span className="text-slate-900 font-black text-[10px] uppercase tracking-[0.4em]">Solutions Finance</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-6">Financement <br /><span className="text-[#1459DD]">Accordé en 24H</span></h2>
              <p className="text-slate-800/70 font-bold mb-8 leading-relaxed max-w-md">Réponse de principe immédiate. Taux préférentiels pour nos clients Premium.</p>
              <button className="w-fit px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#1459DD] transition-all flex items-center gap-3 shadow-xl">Simuler mon crédit <TrendingUp size={16} /></button>
            </div>
            <div className="relative z-10 w-full md:w-1/3 aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-1000">
               <img src="https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover scale-125" alt="Finance" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ANNONCES PROS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
               Dernières <br />
               <span className="text-[#1459DD]">ANNONCES</span> <span className="text-[#FDD817]">PROFESSIONNELS</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {vehicleListingsPros.map(v => <VehicleCard key={v.id} vehicle={v} />)}
          </div>
          <div className="mt-16 flex justify-center">
            <button onClick={onSeeMoreClick} className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#1459DD] transition-all flex items-center gap-3 shadow-xl group">
              <span>Voir tout le catalogue pro</span>
              <PlusCircle size={18} className="group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. NADO LIVE EXPERIENCE */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
                <Radio size={14} className="text-[#FDD817] animate-pulse" />
                <span className="text-[#FDD817] font-black text-[10px] uppercase tracking-widest">Live Experience</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">Expériences <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Immersives</span></h2>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-10">
            {liveVideos.map((video) => (
              <div key={video.id} className="flex-shrink-0 w-[320px] aspect-[9/16] relative rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5">
                <img src={video.thumbnail} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={video.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-8 inset-x-8 z-20">
                  <h4 className="text-white font-black text-xl uppercase tracking-tighter leading-tight mb-2">{video.title}</h4>
                  <div className="flex items-center gap-3 text-slate-300"><Timer size={14} className="text-blue-500" /><span className="text-xs font-bold uppercase tracking-widest">{video.duration}</span></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"><div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500"><Play size={24} className="text-white fill-white ml-1" /></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DASHBOARD AUTO-ENCHÈRES */}
      <section className="py-24 bg-white relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#1459DD08,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col mb-16 items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1459DD]/10 border border-[#1459DD]/20 rounded-full mb-4 w-fit">
              <Gavel size={14} className="text-[#1459DD]" />
              <span className="text-[#1459DD] font-black text-[10px] uppercase tracking-widest">Elite Auction House</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">
              L'Arène des <br /><span className="text-[#1459DD]">Enchères Live</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Featured Auction */}
            <div className="lg:col-span-8 group relative bg-white border border-slate-100 rounded-[3.5rem] overflow-hidden hover:border-[#1459DD]/30 transition-all duration-700 h-full shadow-[0_32px_80px_-24px_rgba(0,0,0,0.06)] text-left">
               <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={auctions[0].image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" alt="Featured" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  <div className="absolute top-8 left-8 flex gap-3">
                    <span className="px-4 py-2 bg-red-600 text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] animate-pulse flex items-center gap-2"><Radio size={12}/> Live</span>
                    <span className="px-4 py-2 bg-white/30 backdrop-blur-md text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] border border-white/20 flex items-center gap-2"><Users size={12}/> {auctions[0].views} en ligne</span>
                  </div>
                  <div className="absolute bottom-10 right-10 flex flex-col items-end">
                    <span className="text-[#FDD817] font-black text-[10px] uppercase tracking-[0.3em] mb-2 drop-shadow-md">Clôture dans</span>
                    <div className="flex gap-2">
                       {['02', '45', '12'].map((n, i) => (
                         <div key={i} className="bg-white text-slate-950 w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-2xl">
                           {n}
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
               <div className="p-10 flex flex-col md:flex-row justify-between items-end gap-6">
                 <div className="text-left">
                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">{auctions[0].brand} {auctions[0].model}</h3>
                    <p className="text-slate-500 font-bold flex items-center gap-2 uppercase text-xs tracking-widest"><Calendar size={14} className="text-[#1459DD]"/> {auctions[0].year}</p>
                 </div>
                 <div className="text-right flex flex-col items-end">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Offre actuelle</span>
                    <span className="text-4xl font-black text-[#1459DD] tracking-tighter">{auctions[0].currentBid.toLocaleString()} MAD</span>
                    <button className="mt-6 px-10 py-4 bg-[#1459DD] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FDD817] hover:text-slate-950 transition-all flex items-center gap-3 shadow-xl shadow-blue-100">Placer une enchère <Gavel size={18}/></button>
                 </div>
               </div>
            </div>

            {/* Auction List */}
            <div className="lg:col-span-4 flex flex-col gap-6">
               {auctions.slice(1).map((auc) => (
                 <div key={auc.id} className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-6 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all group cursor-pointer relative text-left">
                    <div className="flex gap-6 items-center text-left">
                       <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-slate-200">
                          <img src={auc.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={auc.model} />
                       </div>
                       <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-black text-slate-900 uppercase tracking-tight text-lg">{auc.brand} {auc.model}</h4>
                            {auc.status === 'live' ? <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> : <BadgeCheck size={16} className="text-slate-300"/>}
                          </div>
                          <div className="flex items-center justify-between mt-4">
                             <div className="flex flex-col text-left">
                                <span className="text-[9px] font-bold text-slate-400 uppercase">Dernier prix</span>
                                <span className="text-lg font-black text-[#1459DD]">{auc.currentBid.toLocaleString()} MAD</span>
                             </div>
                             <button className="p-3 bg-white rounded-xl text-slate-400 group-hover:bg-[#FDD817] group-hover:text-slate-950 transition-all shadow-sm">
                               <ArrowRight size={18} />
                             </button>
                          </div>
                       </div>
                    </div>
                 </div>
               ))}
               
               <div className="mt-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 relative overflow-hidden group shadow-2xl text-left">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#1459DD]/20 blur-3xl rounded-full"></div>
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-4 relative z-10 leading-none">Vendre aux <br /><span className="text-[#FDD817]">enchères ?</span></h4>
                  <p className="text-slate-400 text-xs font-medium mb-6 relative z-10 leading-relaxed">Expertise gratuite et mise en ligne express sous 48h.</p>
                  <button className="w-full py-4 bg-[#1459DD] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all relative z-10 shadow-lg shadow-blue-900/20">Commencer</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BANNER 3: WHATSAPP EXPERT */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#1459DD] rounded-[4rem] p-10 md:p-20 relative overflow-hidden group shadow-2xl shadow-blue-100">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 skew-x-[-12deg] translate-x-20 transition-transform group-hover:translate-x-10 duration-1000"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 text-left">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">Besoin d'un <br /><span className="text-[#FDD817]">Expert NADO ?</span></h2>
                <button className="flex items-center gap-3 px-8 py-5 bg-white text-[#1459DD] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FDD817] hover:text-slate-950 transition-all shadow-2xl">
                  <ExternalLink size={18} /> Chatter sur WhatsApp
                </button>
              </div>
              <div className="flex-1 relative">
                <div className="relative z-10 rotate-6 group-hover:rotate-0 transition-transform duration-700">
                  <div className="bg-white/10 backdrop-blur-xl p-4 rounded-[3rem] border border-white/20 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800" className="rounded-[2.5rem]" alt="Expert" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. EXPÉRIENCE NADO: TÉMOIGNAGES */}
      <section className="py-24 bg-slate-50 overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16">
            <div className="lg:col-span-5 text-left">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mb-8">
                Ce que disent <br />
                <span className="text-[#1459DD]">NOS</span> <span className="text-[#FDD817]">CLIENTS</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10 max-w-sm text-left">
                La satisfaction de nos client est notre priorité absolue. Découvrez leur retours d’expérience
              </p>
              <div className="flex items-center gap-4">
                <button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all"><ChevronLeft size={20} /></button>
                <button onClick={nextTestimonial} className="w-12 h-12 rounded-full bg-[#FDD817] flex items-center justify-center text-slate-900 shadow-lg shadow-yellow-100 hover:scale-105 active:scale-95 transition-all"><ChevronRight size={20} strokeWidth={3} /></button>
              </div>
            </div>
            <div className="lg:col-span-7 relative text-left">
              <div className="bg-white rounded-[3.5rem] p-12 md:p-16 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.06)] border border-slate-100 relative overflow-hidden text-left">
                <div className="absolute top-10 left-10 text-slate-100 opacity-20 transform -translate-x-4 -translate-y-4"><Quote size={80} fill="currentColor" /></div>
                <div className="relative z-10 text-left">
                  <div className="flex items-center gap-1 text-[#FDD817] mb-8">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (<Star key={i} size={22} fill="currentColor" strokeWidth={0} />))}
                  </div>
                  <blockquote className="text-2xl md:text-3xl font-normal italic text-[#0f172a] leading-relaxed mb-12 text-left">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>
                  <div className="flex items-center gap-5 pt-8 border-t border-slate-50 text-left">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md"><img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].name} className="w-full h-full object-cover" /></div>
                    <div className="text-left">
                      <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight mb-1 text-left">{testimonials[activeTestimonial].name}</h4>
                      <p className="text-[#1459DD] font-black text-xs uppercase tracking-widest text-left">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NADO BLOG (ÉDITORIAL DARK EDITION) */}
      <section className="py-32 bg-slate-950 overflow-hidden text-left relative">
        {/* Background Typography */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 flex items-center justify-center select-none">
          <span className="text-[25vw] font-black text-white uppercase leading-none tracking-tighter">MAGAZINE</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                <Zap size={14} className="text-[#FDD817]" />
                <span className="text-white font-black text-[10px] uppercase tracking-[0.3em]">Blog Officiel</span>
              </div>
              <h2 className="text-5xl md:text-[110px] font-black text-white leading-[0.8] tracking-tighter uppercase mb-0">
                NADO <br /><span className="text-[#1459DD]">BLOG</span>
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-6 text-left md:text-right">
              <p className="text-slate-400 font-medium max-w-xs leading-relaxed uppercase text-[10px] tracking-widest">Décryptages, tendances et conseils d'experts de l'automobile au Maroc.</p>
              <button className="flex items-center gap-4 bg-white text-slate-950 px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#1459DD] hover:text-white transition-all group">
                Explorer le blog <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Featured Post - Large Cover Style */}
            <div className="lg:col-span-8 group relative aspect-[16/10] lg:aspect-auto lg:h-[700px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl">
              <img src={blogPosts[0].image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt={blogPosts[0].title} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute top-10 left-10">
                <div className="px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-black text-[10px] uppercase tracking-[0.3em] inline-block mb-4">
                  {blogPosts[0].category}
                </div>
              </div>

              <div className="absolute bottom-12 left-12 right-12 text-left">
                <div className="flex items-center gap-6 mb-6 text-white/60 font-black text-[10px] uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Calendar size={12} className="text-[#1459DD]" /> {blogPosts[0].date}</span>
                  <span className="flex items-center gap-2"><Clock size={12} className="text-[#1459DD]" /> {blogPosts[0].readTime} de lecture</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 group-hover:text-[#FDD817] transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="text-slate-300 font-medium leading-relaxed max-w-2xl text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  {blogPosts[0].excerpt}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#1459DD] flex items-center justify-center text-white scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                    <ArrowUpRight size={32} />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Posts - Vertical Cards */}
            <div className="lg:col-span-4 flex flex-col gap-10">
              {blogPosts.slice(1).map((post) => (
                <div key={post.id} className="group cursor-pointer flex-1 flex flex-col bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all">
                   <div className="relative aspect-video overflow-hidden">
                      <img src={post.image} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" alt={post.title} />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-white font-black text-[9px] uppercase tracking-widest border border-white/10">
                          {post.category}
                        </span>
                      </div>
                   </div>
                   <div className="p-10 flex-1 flex flex-col text-left">
                      <div className="flex items-center gap-4 mb-4 text-slate-500 font-black text-[9px] uppercase tracking-widest">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                        <span>{post.readTime}</span>
                      </div>
                      <h4 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight mb-4 group-hover:text-[#1459DD] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest group-hover:text-[#FDD817] transition-all">
                        Lire l'histoire <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODAL STORY */}
      {selectedStory && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300">
          <button onClick={() => setSelectedStory(null)} className="absolute top-6 right-6 z-[110] text-white hover:rotate-90 transition-transform p-2 bg-white/10 rounded-full"><X size={32} /></button>
          <div className="relative w-full max-w-[450px] aspect-[9/16] bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col">
            <div className="absolute top-4 inset-x-4 flex gap-1 z-[110]"><div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden"><div className="h-full bg-white transition-all duration-50" style={{ width: `${progress}%` }}></div></div></div>
            <img src={selectedStory.contentImg} className="absolute inset-0 w-full h-full object-cover" alt="Content" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 z-10"></div>
            <div className="relative z-20 mt-auto p-8 flex flex-col items-center text-center">
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-none">{selectedStory.title}</h3>
              <p className="text-white/80 text-sm font-medium leading-relaxed mb-8">{selectedStory.description}</p>
              <button className="w-full py-5 bg-[#1459DD] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 active:scale-95"><span>{selectedStory.cta}</span><ArrowRight size={18} /></button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes infinite-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-infinite-scroll { animation: infinite-scroll 35s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default Home;
