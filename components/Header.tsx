import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'president', label: 'Le Président' },
    { id: 'ministries', label: 'Ministères' },
    { id: 'protocols', label: 'Protocoles' },
    { id: 'news', label: 'Rapports Officiels' },
  ];

  return (
    <header className="w-full bg-[#080808] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Sceau Officiel GPCE - Vectoriel */}
          <div 
            className="flex items-center gap-5 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-14 h-14 relative flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-500">
               {/* Sceau Vectoriel SVG */}
               <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                  <defs>
                    <linearGradient id="sealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C5A059" />
                      <stop offset="100%" stopColor="#8A6E35" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Fond du Sceau */}
                  <circle cx="50" cy="50" r="48" fill="#020202" stroke="url(#sealGradient)" strokeWidth="1.5" />
                  
                  {/* Anneaux Orbitaux */}
                  <circle cx="50" cy="50" r="42" fill="none" stroke="url(#sealGradient)" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.6" />
                  <ellipse cx="50" cy="50" rx="38" ry="12" fill="none" stroke="url(#sealGradient)" strokeWidth="0.8" opacity="0.4" transform="rotate(45 50 50)" />
                  <ellipse cx="50" cy="50" rx="38" ry="12" fill="none" stroke="url(#sealGradient)" strokeWidth="0.8" opacity="0.4" transform="rotate(-45 50 50)" />
                  
                  {/* Grille Planétaire Abstraite */}
                  <path d="M 50 10 Q 90 50 50 90 Q 10 50 50 10" fill="none" stroke="url(#sealGradient)" strokeWidth="0.5" opacity="0.3" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="url(#sealGradient)" strokeWidth="0.5" opacity="0.3" />
                  
                  {/* Étoile Centrale (Sirius/Aldébaran) */}
                  <path d="M50 28 L 54 46 L 72 50 L 54 54 L 50 72 L 46 54 L 28 50 L 46 46 Z" fill="url(#sealGradient)" filter="url(#glow)" />
               </svg>
            </div>
            
            <div className="flex flex-col justify-center">
              <h1 className="font-serif text-2xl text-white tracking-widest leading-none mb-1 group-hover:text-yellow-600 transition-colors duration-500">G.P.C.E.</h1>
              <span className="text-[9px] font-sans text-gray-500 uppercase tracking-[0.2em] border-t border-white/10 pt-1 mt-1">
                Gouvernance Planétaire & Cosmique Elvita
              </span>
            </div>
          </div>

          {/* Desktop Nav - Clean Typography */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-gray-400">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`hover:text-white transition-colors relative py-2 uppercase tracking-wide text-xs ${
                  currentPage === item.id 
                    ? 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-yellow-600/50' 
                    : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 p-2 hover:bg-white/5 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 absolute w-full left-0 top-24 z-50 animate-in slide-in-from-top-2 shadow-2xl">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`text-left px-8 py-4 font-sans text-xs uppercase tracking-widest ${
                  currentPage === item.id ? 'text-yellow-500 bg-white/5 font-bold border-l-2 border-yellow-600' : 'text-gray-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;