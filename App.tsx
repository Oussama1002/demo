
import React, { useState } from 'react';
// Import missing icons from lucide-react
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VehicleDetail from './pages/VehicleDetail';
import Purchase from './pages/Purchase';
import Estimation from './pages/Estimation';
import Selling from './pages/Selling';
import Reprise from './pages/Reprise';
import Connect from './pages/Connect';
import About from './pages/About';
import AutoEnchere from './pages/AutoEnchere';
import Assistant from './components/Assistant';
import { MOCK_VEHICLE } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'detail' | 'purchase' | 'estimation' | 'selling' | 'reprise' | 'connect' | 'about' | 'enchere'>('home');

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };
  
  const navigateToPurchase = () => {
    setCurrentPage('purchase');
    window.scrollTo(0, 0);
  };

  const navigateToDetail = () => {
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  };

  const navigateToEstimation = () => {
    setCurrentPage('estimation');
    window.scrollTo(0, 0);
  };

  const navigateToSelling = () => {
    setCurrentPage('selling');
    window.scrollTo(0, 0);
  };

  const navigateToReprise = () => {
    setCurrentPage('reprise');
    window.scrollTo(0, 0);
  };

  const navigateToConnect = () => {
    setCurrentPage('connect');
    window.scrollTo(0, 0);
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
    window.scrollTo(0, 0);
  };

  const navigateToEnchere = () => {
    setCurrentPage('enchere');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Global Navbar - Constante sur tout le site */}
      <Navbar 
        onLogoClick={navigateToHome} 
        onAchatClick={navigateToPurchase}
        onVenteClick={navigateToSelling}
        onRepriseClick={navigateToReprise}
        onConnectClick={navigateToConnect}
        onAboutClick={navigateToAbout}
        onEnchereClick={navigateToEnchere}
      />
      
      {currentPage === 'home' && (
        <Home 
          onVehicleClick={navigateToDetail} 
          onSeeMoreClick={navigateToPurchase} 
          onEstimationClick={navigateToEstimation}
        />
      )}
      
      {currentPage === 'detail' && (
        <VehicleDetail vehicle={MOCK_VEHICLE} />
      )}

      {currentPage === 'purchase' && (
        <Purchase onVehicleClick={navigateToDetail} onBackClick={navigateToHome} />
      )}

      {currentPage === 'estimation' && (
        <Estimation onBack={navigateToHome} />
      )}

      {currentPage === 'selling' && (
        <Selling onBack={navigateToHome} />
      )}

      {currentPage === 'reprise' && (
        <Reprise onBack={navigateToHome} />
      )}

      {currentPage === 'connect' && (
        <Connect onBack={navigateToHome} />
      )}

      {currentPage === 'about' && (
        <About onBack={navigateToHome} onExploreClick={navigateToPurchase} />
      )}

      {currentPage === 'enchere' && (
        <AutoEnchere onBack={navigateToHome} onExploreClick={navigateToPurchase} />
      )}

      {/* Global Footer - Constante sur tout le site */}
      <footer className="bg-slate-900 text-white py-24 mt-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="text-3xl font-black tracking-tighter mb-6 uppercase cursor-pointer" onClick={navigateToHome}>
                <span className="text-[#1459DD]">NA</span>
                <span className="text-[#FDD817]">DO</span>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed">
                Le premier portail automobile premium au Maroc. Expertise, confiance et innovation.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#FDD817]">Navigation</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-300">
                <li><button onClick={navigateToHome} className="hover:text-white transition-colors text-left w-full">Accueil</button></li>
                <li><button onClick={navigateToPurchase} className="hover:text-white transition-colors text-left w-full">Acheter une voiture</button></li>
                <li><button onClick={navigateToSelling} className="hover:text-white transition-colors text-left w-full">Vendre ma voiture</button></li>
                <li><button onClick={navigateToAbout} className="hover:text-white transition-colors text-left w-full">À propos de NADO</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#FDD817]">Services</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-300">
                <li><button onClick={navigateToConnect} className="hover:text-white transition-colors text-left w-full text-[#FDD817]">NADO Connect</button></li>
                <li><button onClick={navigateToEnchere} className="hover:text-white transition-colors text-left w-full">Auto Enchère</button></li>
                <li><button onClick={navigateToReprise} className="hover:text-white transition-colors text-left w-full">Reprise Cash</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-[#FDD817]">Social Pulse</h4>
              <p className="text-xs text-slate-400 mb-6">Suivez nos livraisons en direct sur les réseaux.</p>
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#1459DD] transition-all"><Instagram size={18} /></button>
                <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#1459DD] transition-all"><Facebook size={18} /></button>
                <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#1459DD] transition-all"><Linkedin size={18} /></button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            © 2025 NADO PREMIUM AUTOMOTIVE • TOUS DROITS RÉSERVÉS
          </div>
        </div>
      </footer>

      <Assistant />
    </div>
  );
};

export default App;
