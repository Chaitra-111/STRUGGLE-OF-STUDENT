import React, { useState } from 'react';
import { Menu, X, ArrowRight, Download, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export default function Navbar({ activePage, setActivePage, onReopenLaunch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About & Community' },
    { id: 'verticals', label: 'Our Verticals' },
    { id: 'contact', label: 'Contact & Join' },
  ];

  const handleNav = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      {/* Top micro-announcement bar */}
      <div className="bg-slate-950 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-red-600/30 text-red-400 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-red-500/20">
              <ShieldCheck className="w-3 h-3 text-red-400" /> MSME REGISTERED
            </span>
            <span className="text-slate-300 font-mono text-[11px]">{SITE_INFO.msmeRegistration}</span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300 font-medium">Goal: Guidance for 10 Cr Students by 2047</span>
          </div>
          <div className="flex items-center gap-3">
            {onReopenLaunch && (
              <button
                onClick={onReopenLaunch}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 hover:text-amber-200 transition-colors"
                title="View Launch Ceremony"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Launch Ceremony</span>
              </button>
            )}
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <HeartHandshake className="w-3 h-3" /> 100% Free For All Students
            </span>
            <span className="text-slate-600">|</span>
            <a 
              href="tel:+919849603265" 
              className="text-slate-300 hover:text-white transition-colors"
            >
              Helpline: +91 98496 03265
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Title */}
          <div 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <img 
                src="/images/logo.png" 
                alt="Struggle of Student Logo" 
                className="w-12 h-12 object-contain rounded-xl p-1 bg-slate-950 border border-slate-800 shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
                STRUGGLE OF STUDENT
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500">
                Your Talent • Your Skills • Your Opportunity
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activePage === link.id
                    ? 'text-red-600 bg-red-50/80 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onReopenLaunch && (
              <button
                onClick={onReopenLaunch}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-300/80 rounded-lg shadow-2xs transition-colors"
                title="Open Launch Ceremony"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                <span>Launch Screen</span>
              </button>
            )}

            <a
              href="/Struggle_of_Student_Startup_Profile.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
              title="Download Startup Profile"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF Profile</span>
            </a>
            
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>Join Community</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between ${
                activePage === link.id
                  ? 'bg-red-50 text-red-600 border-l-4 border-red-600'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{link.label}</span>
              {activePage === link.id && <ArrowRight className="w-4 h-4 text-red-600" />}
            </button>
          ))}

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            {onReopenLaunch && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReopenLaunch();
                }}
                className="w-full py-2.5 text-center text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>View Launch Ceremony Screen</span>
              </button>
            )}

            <button
              onClick={() => handleNav('contact')}
              className="w-full py-3 text-center text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm flex items-center justify-center gap-2"
            >
              <span>Join Community Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="/Struggle_of_Student_Startup_Profile.pdf"
              download
              className="w-full py-2.5 text-center text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Profile (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
