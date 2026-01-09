
import React from 'react';
import { Mail, PhoneCall, Facebook, Instagram, Linkedin, Plus, Menu, Radio, Gavel } from 'lucide-react';

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
  const navLinks = [
    { label: 'Achat', onClick: onAchatClick },
    { label: 'Vente', onClick: onVenteClick },
    { label: 'Auto-enchère', onClick: onEnchereClick, isHighlighted: true, icon: <Gavel size={12} /> },
    { label: 'Reprise', onClick: onRepriseClick },
    { label: 'Auto-financement', onClick: onConnectClick },
    { label: 'À propos', onClick: onAboutClick },
  ];

  const socialLinks = [
    { icon: <Facebook size={16} strokeWidth={1.5} />, href: '#' },
    { icon: <Instagram size={16} strokeWidth={1.5} />, href: '#' },
    { icon: <Linkedin size={16} strokeWidth={1.5} />, href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar Info */}
      <div className="bg-[#FDD817] text-slate-900 py-2 px-4 border-b border-black/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider">
              <Mail size={14} strokeWidth={2} className="shrink-0" />
              <a href="mailto:contact@nado.ma" className="hover:opacity-70 transition-opacity">contact@nado.ma</a>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider">
              <PhoneCall size={14} strokeWidth={2} className="shrink-0" />
              <a href="tel:+212520070611" className="hover:opacity-70 transition-opacity">+212 520 070 611</a>
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                className="hover:scale-110 transition-transform opacity-70 hover:opacity-100"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            {/* Logo Section */}
            <button onClick={onLogoClick} className="flex items-center cursor-pointer group hover:scale-105 transition-transform">
              <span className="text-2xl font-black tracking-tighter uppercase">
                <span className="text-[#1459DD]">NA</span>
                <span className="text-[#FDD817]">DO</span>
              </span>
            </button>
            
            {/* Main Navigation Links */}
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
                  {link.icon && link.icon}
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onVenteClick}
              className="flex items-center gap-2 px-6 py-3 bg-[#1459DD] text-white rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 font-bold text-xs uppercase tracking-wide whitespace-nowrap active:scale-95"
            >
              <Plus size={18} strokeWidth={2.5} />
              <span>Vendre ma voiture</span>
            </button>

            <button className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
