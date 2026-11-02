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

  // Initialize strictly to Home page on first load / refresh
  useEffect(() => {
    // Reset any existing hash to #home
    setActivePage('home');
    if (window.location.hash !== '#home') {
      window.history.replaceState(null, '', window.location.pathname + '#home');
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'verticals', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const changePage = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrepareHome = () => {
    // Prepare Home Page directly behind the curtains before parting
    setActivePage('home');
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCompleteLaunch = () => {
    // Curtains have fully parted - reveal live interactive website
    setHasLaunched(true);
    setActivePage('home');
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-slate-800 font-sans overflow-x-hidden">
      
      {/* Minister Seethakka Garu Launch Screen & Curtains */}
      {!hasLaunched && (
        <LaunchScreen 
          onPrepareHome={handlePrepareHome}
          onCompleteLaunch={handleCompleteLaunch}
        />
      )}

      {/* Top Sticky Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={changePage} 
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
