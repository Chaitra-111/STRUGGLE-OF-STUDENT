import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import LaunchScreen from './components/LaunchScreen';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VerticalsPage from './pages/VerticalsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Show launch screen on every page load/refresh as requested
  const [hasLaunched, setHasLaunched] = useState(false);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'verticals', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const changePage = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      
      {/* Minister Seethakka Garu Launch Screen Overlay */}
      {!hasLaunched && (
        <LaunchScreen onLaunch={() => setHasLaunched(true)} />
      )}

      {/* Top Sticky Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={changePage} 
        onReopenLaunch={() => setHasLaunched(false)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={changePage} 
            onOpenImage={setSelectedImage} 
          />
        )}
        {activePage === 'about' && (
          <AboutPage 
            setActivePage={changePage} 
            onOpenImage={setSelectedImage} 
          />
        )}
        {activePage === 'verticals' && (
          <VerticalsPage 
            setActivePage={changePage} 
          />
        )}
        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Lightbox Image Modal */}
      <ImageModal 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />

      {/* Global Footer */}
      <Footer setActivePage={changePage} />
    </div>
  );
}
