import React, { useState } from 'react';
import { Shield, Globe, User, X, Target } from 'lucide-react';
import { Minister } from '../types';

interface MinistriesProps {
  fullPage: boolean;
}

const ministriesData: Minister[] = [
  {
    id: "premier_ministre",
    department: "PREMIER MINISTRE",
    name: "Romain Jacrot",
    role: "BRAS DROIT DU PRÉSIDENT",
    shortDesc: "Coordonne l'ensemble de l'action gouvernementale et fait appliquer les décrets cosmiques.",
    fullBio: "Romain Jacrot est la clé de voûte de la GPCE. En lien direct et télépathique permanent avec Sylvain Durif, il traduit la volonté vibratoire du Grand Monarque en directives administratives concrètes. Il opère dans l'ombre pour garantir la stabilité de la structure.",
    missions: ["Supervision des Ministères", "Porte-parole du Président", "Gestion des crises dimensionnelles"],
    image: "", // Pas de photo pour le Premier Ministre
    icon: User,
    isPremier: true
  },
  {
    id: "defense",
    department: "MINISTÈRE DE LA SÉCURITÉ PLANÉTAIRE, COSMIQUE ET TECHNOLOGIQUE",
    name: "Gwendal Fralo",
    role: "AMIRAL DE LA FLOTTE ORIANA",
    shortDesc: "Direction des flottes, neutralisation des reptiliens et gestion de l'armement éthérique.",
    fullBio: "Gwendal Fralo dirige la force armée de la GPCE. Sous son commandement, la Flotte Oriana et les troupes au sol assurent la sécurité physique et vibratoire des citoyens. Il gère l'arsenal technologique supramental et le déploiement des vaisseaux-mères.",
    missions: ["Protection de l'espace aérien", "Traque des entités hostiles", "Déploiement des boucliers à plasma"],
    image: "https://eve-guides.fr/images/nav_1.jpg", // Image Vaisseau Spécifique
    icon: Shield,
    isPremier: false
  },
  {
    id: "interieur",
    department: "MINISTÈRE DE L'ADMINISTRATION TERRESTRE",
    name: "Selya Martin",
    role: "SECRÉTAIRE GÉNÉRALE",
    shortDesc: "Gestion des affaires civiles, de l'éducation vibratoire et de l'harmonie sociale.",
    fullBio: "Selya Martin a la charge de tout ce qui concerne la vie quotidienne des humains sur Terre. Elle prépare les structures sociales pour l'après-monnaie et l'intégration des nouvelles âmes. Elle supervise l'écologie planétaire.",
    missions: ["Éducation Cosmique", "Transition Alimentaire (Pranique)", "Relations Agartha-Surface"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80", // Terre vue de l'espace
    icon: Globe,
    isPremier: false
  }
];

const Ministries: React.FC<MinistriesProps> = ({ fullPage }) => {
  const [selectedMinister, setSelectedMinister] = useState<Minister | null>(null);

  const premierMinistre = ministriesData.find(m => m.isPremier);
  const otherMinisters = ministriesData.filter(m => !m.isPremier);

  return (
    <section className={`w-full bg-[#0a0a0a] border-b border-white/5 ${fullPage ? 'py-24' : 'py-16'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Organigramme Gouvernemental</h2>
          <div className="w-32 h-[1px] bg-white/20 mx-auto mb-6"></div>
          <p className="font-sans text-xs text-gray-500 uppercase tracking-widest max-w-2xl mx-auto">
            Structure officielle validée par le décret cosmique 2025-A.
          </p>
        </div>

        {/* NIVEAU 1 : PREMIER MINISTRE (Layout Spécial Sans Photo) */}
        {premierMinistre && (
          <div className="mb-16 flex justify-center">
            <div 
              onClick={() => setSelectedMinister(premierMinistre)}
              className="group relative w-full max-w-4xl bg-[#050505] border border-white/10 hover:border-yellow-900/30 cursor-pointer transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-900/50 to-transparent"></div>
              
              <div className="flex flex-col items-center text-center p-12 md:p-16">
                 {/* Icone Couronne/Symbole */}
                 <div className="mb-6 w-16 h-16 border border-white/10 rounded-full flex items-center justify-center bg-white/5">
                    <User className="w-6 h-6 text-yellow-600" />
                 </div>

                 <div className="mb-8">
                    <span className="font-sans text-xs text-yellow-600 font-bold uppercase tracking-[0.2em] mb-2 block">
                      {premierMinistre.name}
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                      {premierMinistre.department}
                    </h3>
                 </div>

                 <p className="font-serif text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                    {premierMinistre.shortDesc}
                 </p>

                 <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white group-hover:text-yellow-500 transition-colors">
                    <div className="w-8 h-[1px] bg-white/20 group-hover:bg-yellow-500 transition-colors"></div>
                    Dossier Confidentiel
                    <div className="w-8 h-[1px] bg-white/20 group-hover:bg-yellow-500 transition-colors"></div>
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* NIVEAU 2 : MINISTÈRES CLÉS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {otherMinisters.map((minister) => (
            <div 
              key={minister.id}
              onClick={() => setSelectedMinister(minister)}
              className="group bg-[#050505] border border-white/10 hover:border-white/30 cursor-pointer transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-64 relative overflow-hidden border-b border-white/5 bg-black">
                 <div className="absolute top-4 left-4 z-20 bg-black/80 px-3 py-1 border border-white/10">
                    <minister.icon className="w-5 h-5 text-gray-300" />
                 </div>
                 {/* Image specific styling for Selya Martin (B&W) */}
                 <img 
                    src={minister.image} 
                    alt={minister.department} 
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      minister.id === 'interieur' 
                        ? 'grayscale opacity-70 group-hover:opacity-90' // Always B&W for Selya
                        : 'grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100' // Color on hover for Gwendal
                    }`}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                 <h3 className="font-serif text-2xl text-white mb-3 leading-tight min-h-[4rem]">{minister.department}</h3>
                 <div className="flex items-center gap-2 mb-6">
                    <span className="h-[1px] w-4 bg-white/20"></span>
                    <p className="font-sans text-xs text-gray-500 font-bold uppercase tracking-widest">{minister.name}</p>
                 </div>
                 
                 <p className="font-serif text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                    {minister.shortDesc}
                 </p>
                 
                 <button className="w-full py-3 border border-white/10 text-[10px] uppercase tracking-widest text-gray-400 group-hover:bg-white group-hover:text-black transition-colors">
                    Consulter les ordres de mission
                 </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* MODAL FICHE MINISTÈRE */}
      {selectedMinister && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="relative w-full max-w-4xl bg-[#080808] border border-white/20 shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
              
              <button 
                onClick={() => setSelectedMinister(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Sidebar Image Modal - Hidden for Premier Ministre if no image */}
              {selectedMinister.image && (
                <div className="w-full md:w-1/3 bg-[#000] relative min-h-[300px] md:min-h-full">
                   <img 
                      src={selectedMinister.image} 
                      className={`w-full h-full object-cover opacity-60 ${selectedMinister.id === 'interieur' ? 'grayscale' : 'grayscale-0'}`} 
                      alt="" 
                   />
                   <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                      <h2 className="font-serif text-3xl text-white leading-none mb-1">{selectedMinister.name}</h2>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">{selectedMinister.role}</p>
                   </div>
                </div>
              )}

              {/* Content Modal - Full width if no image */}
              <div className={`w-full ${selectedMinister.image ? 'md:w-2/3' : 'md:w-full'} p-8 md:p-12 bg-[#0a0a0a]`}>
                 <div className="mb-8 border-b border-white/10 pb-6">
                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-2 block">Département</span>
                    <h3 className="font-serif text-2xl md:text-3xl text-white">{selectedMinister.department}</h3>
                    {!selectedMinister.image && (
                       <div className="mt-4">
                          <h2 className="font-serif text-2xl text-yellow-600 leading-none mb-1">{selectedMinister.name}</h2>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest">{selectedMinister.role}</p>
                       </div>
                    )}
                 </div>

                 <div className="space-y-8">
                    <div>
                       <h4 className="flex items-center gap-2 font-sans text-xs font-bold text-white uppercase tracking-widest mb-3">
                          <User className="w-4 h-4 text-gray-500" /> Biographie
                       </h4>
                       <p className="font-serif text-gray-400 leading-relaxed text-sm text-justify">
                          {selectedMinister.fullBio}
                       </p>
                    </div>

                    <div>
                       <h4 className="flex items-center gap-2 font-sans text-xs font-bold text-white uppercase tracking-widest mb-3">
                          <Target className="w-4 h-4 text-gray-500" /> Missions Prioritaires
                       </h4>
                       <ul className="space-y-3">
                          {selectedMinister.missions.map((mission, idx) => (
                             <li key={idx} className="flex items-center gap-3 text-sm text-gray-300 font-serif border-l border-white/10 pl-4">
                                <span className="w-1.5 h-1.5 bg-white/20 rounded-full"></span>
                                {mission}
                             </li>
                          ))}
                       </ul>
                    </div>

                    <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between">
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-[10px] uppercase tracking-widest text-gray-500">Connexion Sécurisée</span>
                       </div>
                       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Globe_icon.svg/1200px-Globe_icon.svg.png" className="w-6 h-6 invert opacity-20" alt="" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

    </section>
  );
};

export default Ministries;
