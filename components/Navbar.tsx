
import React, { useState, useEffect } from 'react';
import { Mail, PhoneCall, Facebook, Instagram, Linkedin, User, Menu, Radio, Gavel, X, ArrowRight, ChevronRight, Calculator, RefreshCw, Info } from 'lucide-react';

interface NavbarProps {
  onLogoClick: () => void;
  onAchatClick?: () => void;
  onVenteClick?: () => void;
  onRepriseClick?: () => void;
  onConnectClick?: () => void;
  onAboutClick?: () => void;
  onEnchereClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onLogoClick, onAchatClick, onVenteClick, onRepriseClick, onConnectClick, onAboutClick, onEnchereClick
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Achat', onClick: onAchatClick },
    { label: 'Vente', onClick: onVenteClick },
    { label: 'Auto-enchère', onClick: onEnchereClick, isHighlighted: true },
    { label: 'Reprise', onClick: onRepriseClick },
    { label: 'Auto-financement', onClick: onConnectClick },
    { label: 'À propos', onClick: onAboutClick },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} strokeWidth={1.5} />, href: '#' },
    { icon: <Instagram size={20} strokeWidth={1.5} />, href: '#' },
    { icon: <Linkedin size={20} strokeWidth={1.5} />, href: '#' },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar Info */}
      <div className="bg-[#FDD817] text-slate-900 py-2.5 px-4 border-b border-black/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-80">
              <Mail size={12} className="text-[#1459DD]" />
              <a href="mailto:contact@nado.ma" className="hover:text-[#1459DD] transition-colors">contact@nado.ma</a>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-80">
              <PhoneCall size={12} className="text-[#1459DD]" />
              <a href="tel:+212520070611" className="hover:text-[#1459DD] transition-colors">+212 520 070 611</a>
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                className="hover:text-[#1459DD] transition-colors opacity-60 hover:opacity-100"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-slate-200 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            {/* Logo Section */}
            <button onClick={onLogoClick} className="flex items-center cursor-pointer group hover:scale-105 transition-transform">
              <span className="text-2xl font-black tracking-tighter uppercase">
                <span className="text-[#1459DD]">NA</span>
                <span className="text-[#FDD817]">DO</span>
              </span>
            </button>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-3">
              {navLinks.map((link) => (
                <button 
                  key={link.label} 
                  onClick={link.onClick}
                  className={`text-[11px] font-extrabold uppercase tracking-tight transition-all flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap ${
                    link.isHighlighted ? 'text-[#1459DD] bg-blue-50 hover:bg-blue-100 shadow-sm font-black' : 
                    'text-slate-600 hover:text-[#1459DD] hover:bg-slate-50'
                  }`}
                >
                  {link.isHighlighted && <Radio size={10} className="animate-pulse" />}
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onConnectClick}
              className="hidden sm:flex items-center gap-2 px-6 py-3 bg-[#1459DD] text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 font-black text-[10px] uppercase tracking-widest active:scale-95"
            >
              <User size={16} strokeWidth={3} />
              <span>Se connecter</span>
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-3 text-slate-900 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* --- MOBILE DRAWER MENU (MATCHING SCREENSHOT) --- */}
        <div className={`fixed inset-0 z-[100] transition-all duration-500 lg:hidden ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
           {/* Backdrop Overlay */}
           <div 
             className={`absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
             onClick={() => setIsMobileMenuOpen(false)}
           />
           
           {/* Side Drawer Content */}
           <div className={`absolute top-0 right-0 h-full w-[85%] max-w-[420px] bg-white shadow-2xl transition-transform duration-500 flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              
              {/* Drawer Header */}
              <div className="p-8 flex items-center justify-between">
                 <span className="text-2xl font-black tracking-tighter uppercase" onClick={() => { onLogoClick(); setIsMobileMenuOpen(false); }}>
                   <span className="text-[#1459DD]">NA</span>
                   <span className="text-[#FDD817]">DO</span>
                 </span>
                 <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                    <X size={32} strokeWidth={1.5} />
                 </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-8 py-4 flex flex-col gap-6">
                 {navLinks.map((link) => (
                   <button 
                     key={link.label} 
                     onClick={() => { link.onClick?.(); setIsMobileMenuOpen(false); }}
                     className={`w-full text-left text-lg font-black uppercase tracking-tighter transition-all ${
                       link.isHighlighted ? 'text-[#1459DD]' : 'text-slate-800 hover:text-[#1459DD]'
                     }`}
                   >
                     {link.label}
                   </button>
                 ))}
              </div>

              {/* Drawer Footer (Centered section as per screenshot) */}
              <div className="p-10 flex flex-col items-center">
                 {/* Main Yellow CTA Button - NOW "Se connecter" */}
                 <button 
                   onClick={() => { onConnectClick?.(); setIsMobileMenuOpen(false); }}
                   className="w-full py-6 bg-[#FDD817] text-slate-900 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(253,216,23,0.4)] flex items-center justify-center gap-3 mb-12 active:scale-95 transition-transform"
                 >
                   <User size={20} strokeWidth={3} /> Se connecter
                 </button>
                 
                 {/* Social Icons Centered */}
                 <div className="flex justify-center gap-10 mb-12">
                   {socialLinks.map((s, i) => (
                     <a key={i} href={s.href} className="text-slate-400 hover:text-slate-900 transition-colors">
                       {s.icon}
                     </a>
                   ))}
                 </div>

                 {/* Divider */}
                 <div className="w-full h-px bg-slate-100 mb-10"></div>

                 {/* Support Section */}
                 <div className="text-center space-y-3">
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Support NADO</p>
                    <a href="tel:+212520070611" className="text-xl font-black text-slate-900 block hover:text-[#1459DD] transition-colors">+212 520 070 611</a>
                 </div>
              </div>
           </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
