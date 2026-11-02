import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Heart, ArrowUp, ExternalLink, Download } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    scrollToTop();
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="SS Logo" 
                className="w-12 h-12 object-contain rounded-xl p-1 bg-slate-900 border border-slate-700"
              />
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  STRUGGLE OF STUDENT
                </span>
                <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                  Community • Brand • Events • IT • Funding
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              A student-centric startup designed to be a single solution for all the problems faced by students, supporting rural and Tier 2 &amp; Tier 3 college students across India.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-400">MSME Udyam Reg:</span>
                <span className="font-mono text-white font-medium">{SITE_INFO.msmeRegistration}</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Col 5-7) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => navigateTo('home')} 
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('about')} 
                  className="hover:text-white transition-colors"
                >
                  About &amp; Community
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('verticals')} 
                  className="hover:text-white transition-colors"
                >
                  Our 4 Verticals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('contact')} 
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; Join Free
                </button>
              </li>
            </ul>
          </div>

          {/* Verticals (Col 8-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Our Verticals</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span>SS Brand (Identity &amp; Outreach)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span>SS Event Management</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span>SS IT Solutions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span>Funding for Ideas</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="/Struggle_of_Student_Startup_Profile.pdf"
                download
                className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-semibold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official Profile PDF</span>
              </a>
            </div>
          </div>

          {/* Contact Details (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Founder Contact</h4>
            <div className="text-sm space-y-2 text-slate-400">
              <p className="text-white font-semibold">Chanti Nelatalli</p>
              <p className="text-xs text-slate-500">Founder &amp; Community Lead</p>
              
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a href="tel:+919849603265" className="hover:text-white transition-colors">
                  +91 98496 03265
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a href="mailto:contact@struggleofstudent.org" className="hover:text-white transition-colors text-xs">
                  contact@struggleofstudent.org
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">
                  Hyderabad &amp; Telangana, India (Connecting 20+ Colleges)
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href={`https://wa.me/${SITE_INFO.founder.phoneClean}?text=Hello%20Chanti%2C%20I%20am%20interested%20in%20Struggle%20of%20Student`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-600/30 transition-colors"
              >
                <span>Direct WhatsApp Chat</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Vision 2047 & Bottom Line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <span className="text-red-400 font-bold tracking-wide">MISSION • VISION 2047:</span>
            <span>Creating awareness and career guidance for 10 Cr (100 Million) students by 2047.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              100% Free Forever <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Indian Youth
            </span>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
