
import React, { useState, useEffect, useRef } from 'react';
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
  label: string; 
  time: string; 
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const brands = [
    { name: 'Porsche', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Porsche_logo.svg' },
    { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg' },
    { name: 'Mercedes', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Mercedes-Benz_Logo_2010.svg' },
    { name: 'Audi', logo: 'https://upload.wikimedia.org/wikipedia/f/fa/Audi_logo_detail.svg' },
    { name: 'Land Rover', logo: 'https://upload.wikimedia.org/wikipedia/fr/c/c9/Land_Rover_Logo.svg' },
    { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
    { name: 'Bentley', logo: 'https://upload.wikimedia.org/wikipedia/fr/6/60/Logo_Bentley.svg' },
  ];

  const stories: Story[] = [
    { id: 1, title: 'Livraison 911', subtitle: 'Service Premium', label: 'NADO Officiel', time: 'IL Y A 2H', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=200', contentImg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800', description: 'Nous livrons votre véhicule de rêve directement devant votre porte, partout au Maroc.', cta: 'Découvrir le service' },
    { id: 2, title: 'Arrivage M5', subtitle: 'Nouveauté', label: 'NADO Actualités', time: 'IL Y A 2H', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=200', contentImg: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800', description: 'Une nouvelle BMW M5 vient de rejoindre notre inventaire.', cta: 'Voir le véhicule' },
    { id: 3, title: 'Showroom VIP', subtitle: 'Expérience', label: 'NADO Expert', time: 'IL Y A 2H', img: 'https://images.unsplash.com/photo-1603584173870-7f3bc1335384?auto=format&fit=crop&q=80&w=200', contentImg: 'https://images.unsplash.com/photo-1603584173870-7f3bc1335384?auto=format&fit=crop&q=80&w=800', description: 'Réservez une visite privée de notre showroom.', cta: 'Prendre RDV' },
    { id: 4, title: 'Expertise Pro', subtitle: 'Confiance', label: 'NADO Lab', time: 'IL Y A 2H', img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=200', contentImg: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800', description: '110 points de contrôle pour chaque véhicule.', cta: 'En savoir plus' },
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
    { id: 2, title: "Top 5 des routes les plus spectaculaires du Maroc pour un Road Trip Premium", category: "ÉVASION", date: "18 Mai 2025", readTime: "7 min", image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=800", excerpt: "De l'Atlas à la côte Atlantique, notre sélection de parcours d'exception." },
    { id: 3, title: "Maintenance : 3 secrets pour préserver la valeur de votre SUV de luxe", category: "CONSEILS", date: "12 Mai 2025", readTime: "5 min", image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800", excerpt: "Comment un entretien méticuleux peut vous faire gagner des millions à la revente." },
  ];

  const liveVideos: LiveVideo[] = [
    { id: 1, title: 'Essai : Porsche 911 GT3 RS', duration: '12:45', thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600', isLive: true, views: '1.2k' },
    { id: 2, title: 'Arrivage : Mercedes Classe G 63', duration: '08:20', thumbnail: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=600', isLive: false, views: '850' },
    { id: 3, title: 'Revue : BMW M4 Competition G82', duration: '15:10', thumbnail: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600', isLive: false, views: '2.4k' },
  ];

  const vehicleListingsCertifiees = [
    { ...MOCK_VEHICLE, id: 'c1', brand: 'Porsche', model: '911 Carrera S', year: 2022, price: 1450000, images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=200', status: 'disponible', transmission: 'Auto', fuel: 'Essence', mileage: 12500 },
    { ...MOCK_VEHICLE, id: 'c2', brand: 'BMW', model: 'M4 Competition', year: 2023, price: 1250000, images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1556182065-927e9d22a513?auto=format&fit=crop&q=80&w=200', status: 'disponible', transmission: 'Auto', fuel: 'Essence', mileage: 5400 },
    { ...MOCK_VEHICLE, id: 'c3', brand: 'Mercedes-Benz', model: 'G 63 AMG', year: 2021, price: 2850000, images: ['https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=200', status: 'disponible', transmission: 'Auto', fuel: 'Essence', mileage: 22000 },
  ];

  const vehicleListingsParticuliers = [
    { ...MOCK_VEHICLE, id: 'p1', brand: 'Range Rover', model: 'Sport SVR', year: 2022, price: 1680000, images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1611859328053-3cbc9f9399f4?auto=format&fit=crop&q=80&w=200', status: 'disponible', transmission: 'Auto', fuel: 'Diesel', mileage: 18900 },
    { ...MOCK_VEHICLE, id: 'p2', brand: 'Tesla', model: 'Model X Plaid', year: 2023, price: 1540000, images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=200', status: 'réservé', transmission: 'Auto', fuel: 'Élec', mileage: 1200 },
    { ...MOCK_VEHICLE, id: 'p3', brand: 'Porsche', model: 'Taycan Turbo S', year: 2022, price: 1950000, images: ['https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800'], videoThumb: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=200', status: 'vendu', transmission: 'Auto', fuel: 'Élec', mileage: 4500 },
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

  const scrollStories = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const VehicleCard = ({ vehicle }: { vehicle: any; key?: string | number }) => (
    <div onClick={onVehicleClick} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 hover:shadow-2xl transition-all group flex flex-col h-full text-left cursor-pointer shadow-sm">
      <div className="relative aspect-[16/11] overflow-hidden">
        <img src={vehicle.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={vehicle.model} />
        
        <div className="absolute bottom-4 right-4 w-24 h-36 rounded-2xl overflow-hidden border-2 border-white shadow-2xl z-20 group-hover:scale-110 transition-transform">
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
        <h3 className="text-2xl font-black uppercase text-slate-900 tracking-tight group-hover:text-[#1459DD] transition-colors mb-6">{vehicle.brand} {vehicle.model}</h3>
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
    <div className="flex flex-col relative bg-white text-left">
      {/* 1. HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1459DD]/10 skew-x-[-12deg] translate-x-20"></div>
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2400" className="w-full h-full object-cover opacity-40 scale-105" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1459DD]/20 border border-[#1459DD]/30 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FDD817] animate-pulse"></span>
            <span className="text-[#FDD817] font-black text-[10px] uppercase tracking-[0.3em]">Expérience Premium NADO</span>
          </div>
          <h1 className="text-6xl lg:text-[100px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-10">L'Auto <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1459DD] to-[#7ea9ff]">Redéfinie</span></h1>
          <p className="text-xl text-slate-300 max-w-md font-medium leading-relaxed mb-12 border-l-4 border-[#FDD817] pl-6">Le plus grand catalogue de véhicules certifiés au Maroc. Achat, vente et enchères en un seul lieu.</p>
        </div>
      </section>

      {/* 2. HISTOIRES NADO */}
      <section className="py-20 bg-[#020617] overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-6 text-white relative">
          <div className="flex flex-col mb-12">
            <span className="text-[10px] font-black text-[#FDD817] uppercase tracking-[0.4em] mb-2 leading-none">EN DIRECT DE NADO</span>
            <h2 className="text-4xl font-black uppercase tracking-tight leading-none">HISTOIRES NADO</h2>
          </div>

          <div className="relative group/nav">
            <button 
              onClick={() => scrollStories('right')}
              className="absolute right-[-15px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white text-slate-950 rounded-full flex items-center justify-center shadow-2xl opacity-0 group-hover/nav:opacity-100 transition-all hover:scale-110 active:scale-95"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>
            <button 
              onClick={() => scrollStories('left')}
              className="absolute left-[-15px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white text-slate-950 rounded-full flex items-center justify-center shadow-2xl opacity-0 group-hover/nav:opacity-100 transition-all hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto no-scrollbar pb-6 px-1"
            >
              {stories.map(s => (
                <div 
                  key={s.id} 
                  className="flex-shrink-0 w-[145px] md:w-[170px] aspect-[9/16] relative rounded-[2rem] overflow-hidden cursor-pointer group shadow-xl border border-white/5"
                  onClick={() => setSelectedStory(s)}
                >
                  <img src={s.contentImg} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" alt={s.label} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10"></div>
                  <div className="absolute top-4 left-4 z-20">
                     <div className="w-11 h-11 rounded-full border-[3px] border-[#1459DD] p-0.5 bg-slate-900 shadow-2xl">
                        <img src={s.img} className="w-full h-full rounded-full object-cover" alt="Logo NADO" />
                     </div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-20 text-left">
                     <span className="text-[11px] font-black text-white tracking-tight drop-shadow-lg block leading-none mb-1">{s.label}</span>
                     <span className="text-[9px] font-bold text-white/60 uppercase tracking-widest block">{s.time}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                        <Play size={18} className="text-white fill-white ml-0.5" />
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MOTEUR DE RECHERCHE (NEW COMPACT DESIGN) */}
      <section className="px-4 py-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-full opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#1459DD 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white rounded-2xl md:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-2 md:p-3 border border-slate-100 flex flex-col md:flex-row items-stretch md:items-center gap-2 group transition-all hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)]">
            
            {/* Zone Marque */}
            <div className="flex-1 flex items-center gap-4 px-6 py-3 hover:bg-slate-50 transition-colors cursor-pointer rounded-xl md:rounded-l-full group/item">
              <CarFront size={18} className="text-[#1459DD]" />
              <div className="flex-1 text-left">
                <label className="block text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1 group-hover/item:text-[#1459DD] transition-colors">Marque</label>
                <select className="w-full bg-transparent border-none text-sm font-black text-slate-900 outline-none cursor-pointer appearance-none">
                  <option>Toutes marques</option>
                  <option>Porsche</option>
                  <option>BMW</option>
                  <option>Mercedes</option>
                </select>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-100 ml-4"></div>
            </div>

            {/* Zone Modèle */}
            <div className="flex-1 flex items-center gap-4 px-6 py-3 hover:bg-slate-50 transition-colors cursor-pointer rounded-xl group/item">
              <Settings2 size={18} className="text-[#1459DD]" />
              <div className="flex-1 text-left">
                <label className="block text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1 group-hover/item:text-[#1459DD] transition-colors">Modèle</label>
                <select className="w-full bg-transparent border-none text-sm font-black text-slate-900 outline-none cursor-pointer appearance-none">
                  <option>Tous modèles</option>
                  <option>911 Carrera</option>
                  <option>Cayenne</option>
                </select>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-100 ml-4"></div>
            </div>

            {/* Zone Budget */}
            <div className="flex-1 flex items-center gap-4 px-6 py-3 hover:bg-slate-50 transition-colors cursor-pointer rounded-xl group/item">
              <Tags size={18} className="text-[#1459DD]" />
              <div className="flex-1 text-left">
                <label className="block text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1 group-hover/item:text-[#1459DD] transition-colors">Budget Max</label>
                <select className="w-full bg-transparent border-none text-sm font-black text-slate-900 outline-none cursor-pointer appearance-none">
                  <option>Indifférent</option>
                  <option>+ 500 000 MAD</option>
                  <option>+ 1 000 000 MAD</option>
                </select>
              </div>
            </div>

            {/* Bouton CTA */}
            <button className="md:ml-2 bg-[#1459DD] text-white px-8 md:px-10 py-4 md:py-4 rounded-xl md:rounded-full flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest shadow-lg hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all">
              <Search size={18} strokeWidth={3} />
              <span>Trouver</span>
            </button>
          </div>
        </div>

        {/* Logos Marques */}
        <div className="overflow-hidden py-10 mt-6 border-t border-slate-50">
          <div className="flex gap-20 whitespace-nowrap animate-infinite-scroll">
            {[...brands, ...brands].map((b, i) => (
              <img key={i} src={b.logo} alt={b.name} className="h-8 grayscale opacity-20 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" />
            ))}
          </div>
        </div>
      </section>

      {/* 4. ANNONCES CERTIFIÉES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">Dernières <br /><span className="text-[#1459DD]">ANNONCES</span> <span className="text-[#FDD817]">CERTIFIÉES</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {vehicleListingsCertifiees.map(v => <VehicleCard key={v.id} vehicle={v} />)}
          </div>
          <div className="mt-16 flex justify-center">
            <button onClick={onSeeMoreClick} className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase shadow-2xl flex items-center gap-3"><span>Voir tout le catalogue</span><ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

      {/* 6. PUB NADO EXPERT */}
      <section className="px-4 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group shadow-2xl">
            <div className="relative z-10 flex flex-col max-w-2xl text-left">
              <div className="flex items-center gap-2 mb-4"><ShieldCheck className="text-[#FDD817]" size={24} /><span className="text-[#FDD817] font-black text-[10px] uppercase tracking-widest">Label Confiance</span></div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">Expertise <span className="text-[#1459DD]">110 Points</span></h2>
              <p className="text-slate-400 font-medium mb-8 leading-relaxed max-w-md">Chaque véhicule certifié passe une inspection chirurgicale avant sa mise en ligne.</p>
              <button className="w-fit px-8 py-4 bg-[#1459DD] text-white rounded-2xl font-black text-xs uppercase flex items-center gap-3">Découvrir le rapport <ArrowRight size={16} /></button>
            </div>
            <div className="relative z-10 w-full md:w-1/3 aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-800"><img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Expertise" /></div>
          </div>
        </div>
      </section>

      {/* 7. ANNONCES PARTICULIERS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">Dernières <br /><span className="text-[#1459DD]">ANNONCES</span> <span className="text-[#FDD817]">PARTICULIERS</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {vehicleListingsParticuliers.map(v => <VehicleCard key={v.id} vehicle={v} />)}
          </div>
        </div>
      </section>

      {/* 8. FINANCEMENT FLASH */}
      <section className="px-4 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-[#FDD817] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
            <div className="relative z-10 flex flex-col max-w-2xl text-left">
              <div className="flex items-center gap-2 mb-4"><HandCoins size={24} /><span className="text-slate-900 font-black text-[10px] uppercase">Solutions Finance</span></div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">Financement <br /><span className="text-[#1459DD]">Accordé en 24H</span></h2>
              <p className="text-slate-800/70 font-bold mb-8 leading-relaxed max-w-md">Réponse de principe immédiate. Taux préférentiels pour nos clients Premium.</p>
              <button className="w-fit px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase flex items-center gap-3">Simuler mon crédit <TrendingUp size={16} /></button>
            </div>
            <div className="relative z-10 w-full md:w-1/3 aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl rotate-12"><img src="https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover scale-125" alt="Finance" /></div>
          </div>
        </div>
      </section>

      {/* 9. ANNONCES PROS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-left">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">Dernières <br /><span className="text-[#1459DD]">ANNONCES</span> <span className="text-[#FDD817]">PROS</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {vehicleListingsPros.map(v => <VehicleCard key={v.id} vehicle={v} />)}
          </div>
        </div>
      </section>

      {/* 5. NADO PRICE */}
      <section className="py-24 bg-[#1459DD] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">Combien vaut <br /><span className="text-[#FDD817]">VOTRE VOITURE ?</span></h2>
              <p className="text-blue-50 text-xl font-medium leading-relaxed mb-12 max-w-md">Obtenez une estimation précise en 2 minutes basée sur l'IA.</p>
              <button onClick={onEstimationClick} className="px-10 py-6 bg-white text-[#1459DD] rounded-[2rem] font-black text-sm uppercase shadow-2xl flex items-center gap-4"><span>Estimer ma voiture</span><ArrowRight size={20} /></button>
            </div>
            <div className="relative bg-white/10 backdrop-blur-xl p-4 rounded-[3.5rem] border border-white/20"><img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200" className="rounded-[2.5rem] grayscale" alt="Estimation" /></div>
          </div>
        </div>
      </section>

      {/* 10. EXPÉRIENCES IMMERSIVES */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-left">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Expériences <span className="text-[#1459DD]">Immersives</span></h2>
          </div>
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-10">
            {liveVideos.map((video) => (
              <div key={video.id} className="flex-shrink-0 w-[320px] aspect-[9/16] relative rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5">
                <img src={video.thumbnail} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={video.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-8 inset-x-8 z-20">
                  <h4 className="text-white font-black text-xl mb-2">{video.title}</h4>
                  <div className="flex items-center gap-3 text-slate-300"><Timer size={14} className="text-blue-500" /><span className="text-xs font-bold uppercase">{video.duration}</span></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"><Play size={24} className="text-white fill-white ml-1" /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. ENCHÈRES LIVE */}
      <section className="py-24 bg-white relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">L'Arène des <br /><span className="text-[#1459DD]">Enchères Live</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 group relative bg-white border border-slate-100 rounded-[3.5rem] overflow-hidden shadow-2xl">
               <div className="relative aspect-[16/9] overflow-hidden"><img src={auctions[0].image} className="w-full h-full object-cover" alt="Mis en avant" /></div>
               <div className="p-10 flex flex-col md:flex-row justify-between items-end gap-6">
                 <div><h3 className="text-3xl font-black text-slate-900 uppercase mb-2">{auctions[0].brand} {auctions[0].model}</h3><p className="text-slate-500 font-bold uppercase text-xs tracking-widest">{auctions[0].year}</p></div>
                 <div className="text-right flex flex-col items-end"><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Offre actuelle</span><span className="text-4xl font-black text-[#1459DD]">{auctions[0].currentBid.toLocaleString()} MAD</span><button className="mt-6 px-10 py-4 bg-[#1459DD] text-white rounded-2xl font-black text-xs uppercase shadow-xl">Placer une enchère <Gavel size={18}/></button></div>
               </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6">
               {auctions.slice(1).map((auc) => (
                 <div key={auc.id} className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-6 hover:bg-white hover:shadow-xl transition-all group cursor-pointer flex gap-6 items-center">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-slate-200"><img src={auc.image} className="w-full h-full object-cover" alt={auc.model} /></div>
                    <div className="flex-1">
                       <h4 className="font-black text-slate-900 uppercase text-lg mb-1">{auc.brand} {auc.model}</h4>
                       <div className="flex flex-col"><span className="text-[9px] font-bold text-slate-400 uppercase">Dernier prix</span><span className="text-lg font-black text-[#1459DD]">{auc.currentBid.toLocaleString()} MAD</span></div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. BANNER WHATSAPP */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#1459DD] rounded-[4rem] p-10 md:p-20 relative overflow-hidden group shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 text-left">
                <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">
                  BESOIN D'UN <br />
                  <span className="text-[#FDD817]">EXPERT <br />NADO ?</span>
                </h2>
                <a 
                  href="https://wa.me/212520070611" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-6 bg-white text-[#1459DD] rounded-3xl font-black text-sm uppercase shadow-2xl hover:scale-105 transition-transform"
                >
                  <ExternalLink size={24} strokeWidth={3} /> CHATTER SUR WHATSAPP
                </a>
              </div>
              <div className="flex-1 relative">
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-[4rem] border border-white/20 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)]">
                  <img 
                    src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200" 
                    className="rounded-[3.5rem] w-full h-auto object-cover" 
                    alt="Choix d'expert NADO" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. TÉMOIGNAGES */}
      <section className="py-24 bg-slate-50 overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16">
            <div className="lg:col-span-5 text-left"><h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mb-8">Ce que disent <br /><span className="text-[#1459DD]">NOS</span> <span className="text-[#FDD817]">CLIENTS</span></h2><p className="text-slate-500 font-medium text-lg mb-10 max-w-sm">La satisfaction de nos client est notre priorité absolue.</p><div className="flex items-center gap-4"><button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all"><ChevronLeft size={20} /></button><button onClick={nextTestimonial} className="w-12 h-12 rounded-full bg-[#FDD817] flex items-center justify-center text-slate-900 shadow-xl transition-all"><ChevronRight size={20} strokeWidth={3} /></button></div></div>
            <div className="lg:col-span-7 relative"><div className="bg-white rounded-[3.5rem] p-12 md:p-16 shadow-2xl border border-slate-100 relative overflow-hidden"><div className="absolute top-10 left-10 text-slate-100 opacity-20"><Quote size={80} fill="currentColor" /></div><div className="relative z-10"><div className="flex items-center gap-1 text-[#FDD817] mb-8">{[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (<Star key={i} size={22} fill="currentColor" strokeWidth={0} />))}</div><blockquote className="text-2xl md:text-3xl font-normal italic text-[#0f172a] leading-relaxed mb-12">"{testimonials[activeTestimonial].text}"</blockquote><div className="flex items-center gap-5 pt-8 border-t border-slate-50"><img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].name} className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md" /><div className="text-left"><h4 className="font-black text-slate-900 text-lg uppercase mb-1">{testimonials[activeTestimonial].name}</h4><p className="text-[#1459DD] font-black text-xs uppercase">{testimonials[activeTestimonial].role}</p></div></div></div></div></div>
          </div>
        </div>
      </section>

      {/* 14. BLOG NADO */}
      <section className="py-32 bg-slate-950 text-left relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-xl"><h2 className="text-5xl md:text-[110px] font-black text-white leading-[0.8] tracking-tighter uppercase mb-0">BLOG <br /><span className="text-[#1459DD]">NADO</span></h2></div>
            <button className="flex items-center gap-4 bg-white text-slate-950 px-8 py-4 rounded-2xl font-black text-[11px] uppercase group">Explorer le blog <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" /></button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 group relative aspect-[16/10] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl"><img src={blogPosts[0].image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" alt={blogPosts[0].title} /><div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div><div className="absolute bottom-12 left-12 right-12"><div className="flex items-center gap-6 mb-6 text-white/60 font-black text-[10px] uppercase tracking-widest"><span className="flex items-center gap-2"><Calendar size={12} className="text-[#1459DD]" /> {blogPosts[0].date}</span></div><h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] group-hover:text-[#FDD817] transition-colors">{blogPosts[0].title}</h3></div></div>
            <div className="lg:col-span-4 flex flex-col gap-10">
              {blogPosts.slice(1).map((post) => (
                <div key={post.id} className="group cursor-pointer bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all">
                   <div className="relative aspect-video overflow-hidden"><img src={post.image} className="w-full h-full object-cover" alt={post.title} /></div>
                   <div className="p-10 text-left"><h4 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight mb-4 group-hover:text-[#1459DD] transition-colors">{post.title}</h4><div className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest group-hover:text-[#FDD817] transition-all">Lire l'histoire <ArrowRight size={14} /></div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 15. MODAL HISTOIRE */}
      {selectedStory && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300">
          <button onClick={() => setSelectedStory(null)} className="absolute top-6 right-6 z-[110] text-white hover:rotate-90 transition-transform p-2 bg-white/10 rounded-full"><X size={32} /></button>
          <div className="relative w-full max-w-[450px] aspect-[9/16] bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col">
            <div className="absolute top-4 inset-x-4 flex gap-1 z-[110]"><div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden"><div className="h-full bg-white transition-all duration-50" style={{ width: `${progress}%` }}></div></div></div>
            <img src={selectedStory.contentImg} className="absolute inset-0 w-full h-full object-cover" alt="Contenu" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 z-10"></div>
            <div className="relative z-20 mt-auto p-8 flex flex-col items-center text-center">
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-none">{selectedStory.title}</h3>
              <p className="text-white/80 text-sm font-medium leading-relaxed mb-8">{selectedStory.description}</p>
              <button className="w-full py-5 bg-[#1459DD] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3"><span>{selectedStory.cta}</span><ArrowRight size={18} /></button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes infinite-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-infinite-scroll { animation: infinite-scroll 35s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Home;
