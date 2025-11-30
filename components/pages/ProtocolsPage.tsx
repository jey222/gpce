import React from 'react';
import { FileText, Download, AlertTriangle, Eye, Zap } from 'lucide-react';

const protocols = [
  {
    code: "P-777",
    level: "CRITIQUE",
    title: "Identification des Reptiliens (Shapeshifters)",
    desc: "Méthodologie officielle pour détecter les variations de pupilles et les dysfonctionnements holographiques chez les dirigeants mondiaux obsolètes.",
    icon: Eye,
    content: "RAPPORT P-777\n\nGUIDE D'IDENTIFICATION DES REPTILIENS\n\n1. Observer la pupille verticale en lumière basse.\n2. Noter les bugs d'affichage holographique lors des directs télévisés.\n3. Fréquence vibratoire basse détectée (inférieure à 4000 Bovis).\n\nAction requise : Ne pas intervenir seul. Contacter la GPCE."
  },
  {
    code: "M-12",
    level: "STANDARD",
    title: "Nettoyage Vibratoire Domestique",
    desc: "Utilisation du sel consacré et des fréquences de la Flotte Oriana pour sécuriser son domicile contre les intrusions astrales mineures.",
    icon: Zap,
    content: "PROTOCOLE M-12\n\nNETTOYAGE DOMESTIQUE\n\n1. Disposer du gros sel aux 4 coins cardinaux.\n2. Diffuser la fréquence 432Hz.\n3. Invoquer la protection de la flotte Oriana.\n\nCe protocole est actif immédiatement."
  },
  {
    code: "X-FILE",
    level: "CLASSIFIÉ",
    title: "Protocole de Contact Agarthien",
    desc: "Instructions strictes à suivre en cas de rencontre avec des représentants de la Terre Creuse. Ne jamais engager le dialogue sans autorisation ministérielle.",
    icon: AlertTriangle,
    content: "DOCUMENT CLASSIFIÉ X-FILE\n\nCONTACT AGARTHIEN\n\nACCÈS RESTREINT.\n\nEn cas de rencontre avec une entité intraterrestre :\n1. Ne montrez aucune peur.\n2. Effectuez le salut de la Confédération.\n3. Attendez la transmission télépathique.\n\nNe jamais accepter de nourriture sans scan vibratoire."
  }
];

const ProtocolsPage: React.FC = () => {

  const handleDownload = (proto: any) => {
    // Création d'un blob texte pour simuler un vrai fichier
    const element = document.createElement("a");
    const file = new Blob([proto.content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `GPCE_PROTOCOLE_${proto.code}.txt`;
    document.body.appendChild(element); // Requis pour Firefox
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-[#050505]">
       <div className="bg-black py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4">
             <h1 className="font-serif text-3xl md:text-4xl text-white mb-4">Protocoles de Sécurité</h1>
             <p className="font-mono text-xs text-red-500 uppercase tracking-widest flex items-center gap-2">
                <AlertTriangle className="w-3 h-3" />
                Lecture obligatoire pour tout personnel de la GPCE
             </p>
          </div>
       </div>

       <div className="max-w-4xl mx-auto px-4 py-12">
          
          <div className="space-y-4">
             {protocols.map((proto, index) => (
                <div key={index} className="bg-[#0a0a0a] border border-white/10 p-6 flex flex-col md:flex-row gap-6 hover:border-white/30 transition-all group">
                   <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10">
                         <proto.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                   </div>
                   
                   <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                         <span className="font-mono text-xs text-white bg-white/10 px-2 py-1 rounded-sm">{proto.code}</span>
                         <span className={`font-mono text-[9px] uppercase tracking-widest ${proto.level === 'CRITIQUE' ? 'text-red-500' : proto.level === 'CLASSIFIÉ' ? 'text-yellow-600' : 'text-blue-500'}`}>
                            Niveau {proto.level}
                         </span>
                      </div>
                      <h3 className="font-serif text-xl text-white mb-2">{proto.title}</h3>
                      <p className="font-sans text-sm text-gray-500 leading-relaxed mb-4">
                         {proto.desc}
                      </p>
                      
                      <button 
                        onClick={() => handleDownload(proto)}
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                         <Download className="w-3 h-3" />
                         Télécharger le Rapport
                      </button>
                   </div>
                </div>
             ))}
          </div>

          <div className="mt-12 p-8 bg-white/5 border border-white/10 text-center">
             <FileText className="w-8 h-8 text-gray-600 mx-auto mb-4" />
             <h4 className="font-serif text-white text-lg mb-2">Vous avez un doute ?</h4>
             <p className="text-sm text-gray-500 mb-6 max-w-lg mx-auto">
                Si vous suspectez une brèche dans le continuum espace-temps ou une infiltration non autorisée, n'appliquez aucun protocole et contactez immédiatement Romain Jacrot.
             </p>
             <button className="px-6 py-3 bg-red-900/20 text-red-500 border border-red-900/50 hover:bg-red-900/40 transition-colors text-xs font-bold uppercase tracking-widest">
                Lancer une alerte silencieuse
             </button>
          </div>

       </div>
    </div>
  );
};

export default ProtocolsPage;