import React from 'react';
import { Target, ShieldCheck, Globe } from 'lucide-react';

const PresidentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300">
      
      {/* En-tête Dossier */}
      <div className="bg-black border-b border-white/10 py-12">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4 tracking-tight">Le Président</h1>
            <p className="font-sans text-xs text-gray-500 uppercase tracking-[0.3em]">Grand Monarque & Christ Cosmique</p>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
         <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Colonne Photo (Dominante) */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
               <div className="relative w-full max-w-md border-4 border-[#111] shadow-2xl bg-[#080808]">
                  {/* Effet de cadre photo officiel */}
                  <div className="absolute inset-0 border border-white/10 pointer-events-none z-10"></div>
                  <img 
                    src="https://fastncurious.fr/wp-content/uploads/2017/01/15941221_10212250609008581_1932651526770641516_n-1.jpg" 
                    alt="Sylvain Pierre Durif" 
                    className="w-full h-auto filter contrast-110 grayscale-[30%]"
                  />
                  <div className="bg-[#0a0a0a] p-6 border-t border-white/10 text-center">
                     <h2 className="font-serif text-2xl text-white">Sylvain Pierre Durif</h2>
                     <p className="font-mono text-[9px] text-gray-400 mt-2 uppercase tracking-widest leading-relaxed">
                       Oriana, Sylvanus, l'Homme Vert,<br/> 
                       Merlin l'Enchanteur, le Grand Monarque,<br/> 
                       le Christ Cosmique
                     </p>
                  </div>
               </div>

               {/* Infos Clés Minimalistes */}
               <div className="mt-8 grid grid-cols-1 w-full max-w-md gap-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                     <span className="font-mono text-[10px] text-gray-500 uppercase">Code</span>
                     <span className="font-serif text-lg text-white">ALPHA-OMEGA</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                     <span className="font-mono text-[10px] text-gray-500 uppercase">Origine</span>
                     <span className="font-serif text-lg text-white">ALDÉBARAN / TERRE</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                     <span className="font-mono text-[10px] text-gray-500 uppercase">Immunité</span>
                     <span className="font-serif text-lg text-white text-right">DIPLOMATIE DIVINE</span>
                  </div>
               </div>
            </div>

            {/* Colonne Contenu */}
            <div className="w-full lg:w-1/2 space-y-12 pt-4">
               
               <section>
                  <blockquote className="relative p-8 border-l-2 border-white/20 bg-white/5 italic font-serif text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                     "Je ne suis pas venu pour gouverner par la force, mais par la vibration. Ceux qui ont des yeux voient, ceux qui ont des oreilles entendent."
                     <footer className="mt-4 text-[10px] font-sans text-gray-500 not-italic uppercase tracking-widest">— Discours d'investiture 2025</footer>
                  </blockquote>

                  <div className="prose prose-invert prose-lg font-serif text-gray-400 text-justify">
                     <p>
                        Sylvain Pierre Durif est l'incarnation attendue de l'Homme Vert. Connecté aux Vaisseaux de la Vierge Marie et à l'énergie de l'Esprit Saint, il assure la protection vibratoire de la planète Terre.
                     </p>
                     <p>
                        En tant que réincarnation de Merlin l'Enchanteur et Grand Monarque prophétisé par Nostradamus, sa mission est de guider l'humanité hors de l'illusion matérielle vers l'âge du Verseau. Il est le seul être habilité à autoriser ou refuser l'entrée des vaisseaux extra-terrestres dans l'espace aérien terrestre.
                     </p>
                  </div>
               </section>

               <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#0a0a0a] border border-white/10 p-6 hover:border-white/30 transition-colors">
                     <Globe className="w-6 h-6 text-white mb-3" />
                     <h3 className="font-serif text-lg text-white mb-2">Souveraineté Cosmique</h3>
                     <p className="text-xs text-gray-500 leading-relaxed">
                        Autorité suprême sur les échanges entre l'Agartha (Terre Creuse) et la surface.
                     </p>
                  </div>
                  <div className="bg-[#0a0a0a] border border-white/10 p-6 hover:border-white/30 transition-colors">
                     <ShieldCheck className="w-6 h-6 text-white mb-3" />
                     <h3 className="font-serif text-lg text-white mb-2">Gardien du Graal</h3>
                     <p className="text-xs text-gray-500 leading-relaxed">
                        Détenteur des codes d'activation des pyramides et des vortex énergétiques sacrés.
                     </p>
                  </div>
               </section>

            </div>

         </div>
      </div>
    </div>
  );
};

export default PresidentPage;