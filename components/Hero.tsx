import React from 'react';

interface HeroProps {
  onNavigate?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full bg-[#080808] min-h-[60vh] flex items-center justify-center border-b border-white/5 overflow-hidden">
      
      {/* Background Image - Subtle & Dark */}
      <div className="absolute inset-0 z-0 opacity-30">
         <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
            alt="Atmosphère Planétaire" 
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-[#080808]/80 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        
        <div className="mb-8 inline-block">
          <span className="py-1 px-3 border border-white/20 rounded-full bg-white/5 font-sans text-[10px] text-gray-300 uppercase tracking-widest backdrop-blur-md">
            Administration Centrale
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
          Gouvernance<br/>
          <span className="text-gray-500 italic">Planétaire & Cosmique</span>
        </h1>

        <p className="font-sans text-base md:text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
          L'organe officiel de régulation entre les civilisations de surface, l'Agartha et la Confédération Intergalactique. Sous la présidence de Sylvain Durif, nous assurons la sécurité vibratoire de la Terre.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={onNavigate}
            className="px-8 py-4 bg-white text-black font-sans text-sm font-medium hover:bg-gray-200 transition-all rounded-sm min-w-[200px]"
          >
            Consulter les Rapports
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;