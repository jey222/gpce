import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#020202] border-t border-white/10 mt-auto py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          
          <div className="pr-8">
            <h5 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-white/20"></span>
              GPCE_OFFICIAL_NET
            </h5>
            <p className="leading-relaxed mb-6 normal-case font-sans text-xs text-gray-600">
              La Gouvernance Planétaire et Cosmique Elvita est l'unique autorité légitime reconnue par la Confédération Intergalactique. Toute tentative d'usurpation ou de dénigrement sera traitée par le Ministère de la Sécurité Planétaire.
            </p>
            <p>REF: SECTEUR-TERRE-001</p>
          </div>

          <div className="space-y-4 md:text-right">
             <h5 className="text-white font-bold border-b border-white/10 pb-2">Plan du Site</h5>
             <ul className="space-y-2">
               <li><button onClick={() => onNavigate('president')} className="hover:text-white transition-colors">{'>'} Le Président</button></li>
               <li><button onClick={() => onNavigate('ministries')} className="hover:text-white transition-colors">{'>'} Ministères</button></li>
               <li><button onClick={() => onNavigate('news')} className="hover:text-white transition-colors">{'>'} Rapports</button></li>
             </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center flex flex-col items-center">
          <p className="font-mono text-[9px] text-gray-700 mb-2">
            © 2025 GPCE - GOUVERNANCE PLANÉTAIRE ET COSMIQUE ELVITA.
          </p>
          <p className="font-mono text-[8px] text-gray-800">
            AGENCE DE RENSEIGNEMENT COSMIQUE & BUREAUCRATIE DIVINE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
