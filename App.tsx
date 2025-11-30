import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ministries from './components/Ministries';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import PresidentPage from './components/pages/PresidentPage';
import ProtocolsPage from './components/pages/ProtocolsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'president':
        return <PresidentPage />;
      case 'ministries':
        return (
          <div className="min-h-screen bg-[#080808]">
            <Ministries fullPage={true} />
          </div>
        );
      case 'protocols':
        return <ProtocolsPage />;
      case 'news':
        return (
           <div className="max-w-7xl mx-auto px-4 py-16 min-h-screen bg-[#080808]">
              <div className="mb-12 border-b border-white/10 pb-6">
                <h2 className="font-serif text-4xl text-white mb-2">Archives & Rapports</h2>
                <p className="font-sans text-sm text-gray-500">Base de données officielle des opérations planétaires.</p>
              </div>
              <NewsSection />
           </div>
        );
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={() => setCurrentPage('news')} />
            
            <Ministries fullPage={false} />
            
            <div className="bg-[#080808] border-t border-white/5 py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6 gap-4">
                  <div>
                    <h3 className="font-serif text-3xl text-white mb-2">Communications Récentes</h3>
                    <p className="font-sans text-sm text-gray-500">Mises à jour prioritaires du gouvernement.</p>
                  </div>
                  <button 
                    onClick={() => setCurrentPage('news')}
                    className="px-6 py-2 border border-white/20 text-xs font-sans font-medium uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
                  >
                    Accéder aux Archives
                  </button>
                </div>
                
                {/* Full Width News - No Sidebar */}
                <NewsSection limit={3} />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-white/20 selection:text-white bg-[#080808] text-slate-300">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {/* Key is crucial for triggering animation on route change */}
      <main className="flex-grow page-transition-wrapper" key={currentPage}>
        <div className="animate-page-enter">
          {renderContent()}
        </div>
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;