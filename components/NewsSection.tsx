import React, { useState } from 'react';
import { Article } from '../types';
import { Eye, X, Shield, Lock } from 'lucide-react';

interface NewsSectionProps {
  limit?: number;
}

const articles: Article[] = [
  {
    id: 'RPT-25-118',
    category: 'Sécurité',
    classification: 'OFFICIEL',
    date: '10 DÉCEMBRE 2025',
    author: 'Ministère de la Sécurité (R. Jacrot)',
    title: 'Neutralisation d\'une base souterraine obsolète',
    excerpt: 'Les forces spéciales astrales ont mené une opération chirurgicale sous le Massif Central.',
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80', // Image grotte sombre/bunker
    content: `
      <p class="mb-4"><strong>RAPPORT D'INTERVENTION #8892</strong></p>
      <p class="mb-4">Suite aux directives du Président Durif, les forces de sécurité dirigées par Romain Jacrot ont investi l'ancienne base souterraine du secteur 4 (Massif Central).</p>
      <p class="mb-4">Cette infrastructure, anciennement utilisée par des factions dissidentes (Illuminati), a été purifiée par vibrations sonores à haute fréquence. Aucune violence physique n'a été nécessaire. Les entités présentes ont été transmutées ou renvoyées vers leurs plans d'origine.</p>
      <p class="mb-4">Le site est désormais sous le contrôle de la Flotte Oriana et servira de centre de guérison vibratoire pour les citoyens.</p>
      <p><em>Fin du rapport.</em></p>
    `
  },
  {
    id: 'RPT-25-112',
    category: 'Technologie',
    classification: 'CONFIDENTIEL',
    date: '05 DÉCEMBRE 2025',
    author: 'Ministère des Techno. (G. Fralo)',
    title: 'Arrivée de la 3ème vague de vaisseaux-mères',
    excerpt: 'La flotte mariale confirme son positionnement en orbite géostationnaire.',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="mb-4"><strong>OBSERVATION ORBITALE</strong></p>
      <p class="mb-4">Le Ministre Gwendal Fralo confirme la détection de trois immenses structures plasmatiques au-dessus de l'Atlantique, du Pacifique et de l'Océan Indien.</p>
      <p class="mb-4">Ces vaisseaux, appartenant à la flotte de la Vierge Marie, sont invisibles à l'œil nu (3D) mais parfaitement perceptibles via les instruments de mesure supramentaux de la GPCE.</p>
      <p class="mb-4">Ils diffusent actuellement une énergie d'apaisement (Orgone positive) pour contrer les tentatives de déstabilisation géopolitique mondiale.</p>
    `
  },
  {
    id: 'DEC-25-001',
    category: 'Décret',
    classification: 'PUBLIC',
    date: '01 DÉCEMBRE 2025',
    author: 'Le Cabinet Présidentiel',
    title: 'Allocution sur la fin du système monétaire',
    excerpt: 'Transition vers l\'économie basée sur le Mana et l\'échange de services.',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="mb-4"><strong>TRANSITION ÉCONOMIQUE</strong></p>
      <p class="mb-4">Citoyens de la Terre,</p>
      <p class="mb-4">Le système de dette actuel touche à sa fin mathématique. La GPCE prépare l'infrastructure pour le basculement vers le "Crédit Universel", basé sur la contribution vibratoire de chaque individu.</p>
      <p class="mb-4">Dès le 1er Janvier 2026, les banques centrales seront placées sous tutelle administrative cosmique. Vos dettes fictives seront annulées.</p>
      <p>Préparez-vous à l'abondance.</p>
    `
  },
  {
    id: 'RPT-25-099',
    category: 'Diplomatie',
    classification: 'RESTREINT',
    date: '28 NOVEMBRE 2025',
    author: 'Selya Martin',
    title: 'Ouverture du portail Agartha-Pyrénées',
    excerpt: 'Première délégation officielle reçue depuis 1947.',
    imageUrl: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="mb-4"><strong>RENCONTRE INTRATERRESTRE</strong></p>
      <p class="mb-4">Une délégation de 12 représentants de la cité de Telos (Agartha) a été reçue par Selya Martin près du Pic de Bugarach.</p>
      <p class="mb-4">Les discussions ont porté sur le partage des technologies de l'énergie libre et la purification des océans.</p>
    `
  }
];

const NewsSection: React.FC<NewsSectionProps> = ({ limit }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const displayArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayArticles.map((article) => (
          <article 
            key={article.id} 
            className="group bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all cursor-pointer flex flex-col h-full"
            onClick={() => setSelectedArticle(article)}
          >
            {/* Image Cover */}
            <div className="relative h-48 overflow-hidden w-full border-b border-white/5">
               <div className="absolute top-3 left-3 z-10">
                  <span className="px-2 py-1 bg-black/80 border border-white/10 text-[9px] font-sans font-medium text-white uppercase tracking-widest backdrop-blur-md">
                    {article.category}
                  </span>
               </div>
               <img 
                 src={article.imageUrl} 
                 alt={article.title}
                 className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale group-hover:grayscale-0 duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-sans text-gray-500 uppercase">{article.date}</span>
                  {article.classification === 'TOP SECRET' && (
                     <div className="flex items-center gap-1 text-red-800">
                        <Lock className="w-3 h-3" />
                        <span className="text-[9px] font-bold uppercase tracking-wider">Top Secret</span>
                     </div>
                  )}
               </div>
               
               <h3 className="font-serif text-xl text-white mb-3 group-hover:text-gray-200 leading-snug transition-colors">
                 {article.title}
               </h3>
               
               <p className="font-sans text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4 flex-grow">
                 {article.excerpt}
               </p>

               <div className="pt-4 border-t border-white/5 mt-auto flex items-center justify-between">
                  <span className="text-[10px] text-gray-600 font-medium uppercase tracking-widest">{article.id}</span>
                  <span className="flex items-center gap-2 text-xs text-white hover:underline underline-offset-4">
                     Lire le dossier <Eye className="w-3 h-3" />
                  </span>
               </div>
            </div>
          </article>
        ))}
      </div>

      {/* MODAL DE LECTURE */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-500">
          <div className="bg-[#0f0f0f] border border-white/10 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in slide-in-from-bottom-4 duration-500">
            
            {/* Modal Header */}
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 text-white rounded-full z-20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-64 sm:h-80 w-full">
               <img 
                 src={selectedArticle.imageUrl} 
                 className="w-full h-full object-cover opacity-50 grayscale"
                 alt="Cover" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/50 to-transparent"></div>
               <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                     <span className="bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                        {selectedArticle.category}
                     </span>
                     <span className="text-gray-400 border border-white/10 bg-white/5 text-[10px] font-bold px-2 py-1 uppercase tracking-widest flex items-center gap-1">
                        <Shield className="w-3 h-3" /> {selectedArticle.classification}
                     </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
                    {selectedArticle.title}
                  </h2>
               </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 md:p-12 font-serif text-gray-300">
               <div className="flex justify-between border-b border-white/10 pb-6 mb-8 text-xs font-sans text-gray-500 uppercase tracking-widest">
                  <span>Date : {selectedArticle.date}</span>
                  {/* Source removed per request */}
                  <span>ID: {selectedArticle.id}</span>
               </div>

               <div 
                 className="prose prose-invert prose-lg max-w-none prose-p:leading-loose prose-p:text-gray-300 prose-headings:font-serif prose-headings:text-white"
                 dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
               />

               <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center text-center gap-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Globe_icon.svg/1200px-Globe_icon.svg.png" className="w-8 h-8 invert opacity-30" alt="Sceau" />
                  <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-sans">
                     Document Certifié par la GPCE<br/>
                     Toute reproduction interdite sans accord galactique.
                  </p>
               </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default NewsSection;