import React, { useState } from 'react';
import { Sparkles, Award, Rocket, HeartHandshake, ShieldCheck } from 'lucide-react';
import { SITE_INFO } from '../data/content';

export default function LaunchScreen({ onPrepareHome, onCompleteLaunch }) {
  // Stage states: 'screen' (showing launch info) -> 'curtains-drawn' -> 'curtains-opening' -> 'completed'
  const [stage, setStage] = useState('screen');

  const handleLaunchClick = () => {
    // 1. Tell App to ensure Home Page is mounted directly behind the curtains
    if (onPrepareHome) {
      onPrepareHome();
    }

    // 2. Immediately draw curtains across the screen and hide the launch screen UI
    setStage('curtains-drawn');

    // 3. After 200ms, start the slow, majestic curtain parting
    setTimeout(() => {
      setStage('curtains-opening');
    }, 200);

    // 4. After the slow curtain animation finishes (3.6s), complete the launch
    setTimeout(() => {
      setStage('completed');
      if (onCompleteLaunch) {
        onCompleteLaunch();
      }
    }, 3800);
  };

  const isCurtainsActive = stage === 'curtains-drawn' || stage === 'curtains-opening';
  const areCurtainsParted = stage === 'curtains-opening';

  // If completed, unmount
  if (stage === 'completed') return null;

  return (
    <>
      {/* ======================================================== */}
      {/* 1. CEREMONIAL LAUNCH SCREEN (Portrait, Dedication, Button) */}
      {/* ======================================================== */}
      {!isCurtainsActive && (
        <div 
          className="fixed inset-0 z-[100] w-full h-full overflow-y-auto bg-slate-950 text-white flex flex-col justify-between"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Background ambient lighting glow */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-3xl" />
          </div>

          {/* Top Header Bar */}
          <header className="w-full px-4 sm:px-8 py-4 sm:py-5 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/logo.png" 
                  alt="SS Logo" 
                  className="w-10 h-10 object-contain rounded-xl p-1 bg-slate-900 border border-slate-700"
                />
                <div>
                  <span className="font-extrabold text-base tracking-tight text-white block">
                    STRUGGLE OF STUDENT (SS)
                  </span>
                  <span className="text-[10px] sm:text-xs text-red-400 font-semibold uppercase tracking-wider">
                    Your Talent • Your Skills • Your Opportunity
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Official Portal Inauguration</span>
              </div>
            </div>
          </header>

          {/* Main Full-Screen Hero Ceremonial Stage */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex items-center justify-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Minister Seethakka Garu Portrait (Clean, zero text on image) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Outer Golden Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 via-red-600 to-amber-400 rounded-3xl blur-lg opacity-70 animate-pulse" />
                  
                  <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/80 shadow-2xl bg-slate-900 flex flex-col">
                    <div className="w-full aspect-[4/3] sm:aspect-square overflow-hidden bg-slate-950 flex items-center justify-center">
                      <img 
                        src="/images/minister-seethakka-clean.jpg" 
                        alt="Hon'ble Minister Smt. Danasari Anasuya (Seethakka) Garu"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Dignitary Name Plate on Card */}
                    <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-amber-500/30 text-center space-y-1">
                      <span className="inline-block px-3 py-0.5 rounded-full bg-red-600/30 border border-red-500/40 text-red-300 text-[10px] font-bold uppercase tracking-wider">
                        Government of Telangana
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-white">
                        Smt. Danasari Anasuya (Seethakka) Garu
                      </h3>
                      <p className="text-[11px] sm:text-xs text-amber-300 font-medium">
                        Hon&apos;ble Minister for Panchayat Raj &amp; Rural Development,<br />Women &amp; Child Welfare
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ceremony Details, Dedication & Launch Button */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
                
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" /> Telangana State Youth Launch
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    Official Website Launch Ceremony
                  </h1>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                    Dedicated to empowering rural, Tier 2, and Tier 3 college students across Telangana and India with free internships, career guidance, and entrepreneurship opportunities.
                  </p>
                </div>

                {/* Core Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center lg:text-left">
                    <span className="text-xs font-bold text-emerald-400 flex items-center justify-center lg:justify-start gap-1.5">
                      <HeartHandshake className="w-4 h-4" /> 100% Free
                    </span>
                    <p className="text-[11px] text-slate-400 mt-0.5">Zero fees for any student</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center lg:text-left">
                    <span className="text-xs font-bold text-white flex items-center justify-center lg:justify-start gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-red-400" /> MSME Registered
                    </span>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5">{SITE_INFO.msmeRegistration}</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center lg:text-left">
                    <span className="text-xs font-bold text-amber-400 flex items-center justify-center lg:justify-start gap-1.5">
                      <Sparkles className="w-4 h-4" /> Vision 2047
                    </span>
                    <p className="text-[11px] text-slate-400 mt-0.5">Guiding 10 Cr Youth</p>
                  </div>
                </div>

                {/* Launch Text Box requested above the button */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-red-600/20 to-amber-500/15 border-2 border-amber-400/40 text-left space-y-1.5 shadow-lg">
                  <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm sm:text-base">
                    <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>A Great &amp; Historic Launch by Hon&apos;ble Minister Seethakka Garu</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    Dedicating the official platform of <strong>Struggle of Student (SS)</strong> to the youth and student community — igniting minds, fostering innovation, and securing equal opportunity for all.
                  </p>
                </div>

                {/* Grand Launch Button */}
                <div className="pt-2">
                  <button
                    onClick={handleLaunchClick}
                    className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:via-rose-500 hover:to-amber-500 text-white font-black text-base sm:text-xl shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform active:scale-98 flex items-center justify-center gap-3 border-2 border-amber-300/50 cursor-pointer"
                  >
                    <Rocket className="w-6 h-6 text-amber-200 transition-transform duration-500 group-hover:-translate-y-1" />
                    <span>CLICK HERE TO LAUNCH OFFICIAL WEBSITE</span>
                    <Sparkles className="w-5 h-5 text-amber-200 animate-spin" style={{ animationDuration: '3s' }} />
                  </button>
                </div>

              </div>

            </div>
          </main>

          {/* Bottom Footer Bar */}
          <footer className="w-full px-4 py-3 border-t border-slate-900 bg-slate-950/90 text-center text-[11px] text-slate-500">
            <span>Struggle of Student • Founded by Chanti Nelatalli • Connecting 20+ Colleges &amp; 2,000+ Students</span>
          </footer>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. GRAND RED VELVET STAGE CURTAINS OVERLAY (Directly reveals HOME PAGE)  */}
      {/* ========================================================================= */}
      {isCurtainsActive && (
        <div className="fixed inset-0 z-[200] pointer-events-none overflow-hidden">
          
          {/* Top Golden Valance / Pelmet with Gold Fringe */}
          <div className="absolute top-0 left-0 w-full h-10 sm:h-14 bg-gradient-to-b from-amber-600 via-amber-500 to-amber-700 shadow-2xl z-30 border-b-2 border-amber-300 flex items-center justify-center">
            <div className="flex items-center gap-2 text-slate-950 font-black text-xs sm:text-sm tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Official Inauguration Ceremony</span>
              <Sparkles className="w-4 h-4 text-amber-200" />
            </div>
            {/* Golden fringe tassels at bottom edge */}
            <div 
              className="absolute -bottom-2 left-0 w-full h-2 bg-repeat-x opacity-90"
              style={{
                backgroundImage: 'radial-gradient(circle at 4px 0px, #f59e0b 3px, transparent 4px)',
                backgroundSize: '8px 8px'
              }}
            />
          </div>

          {/* Left Red Velvet Curtain (Majestic 3.6s glide to the left revealing Home) */}
          <div 
            className="absolute top-0 left-0 w-1/2 h-full z-20 shadow-2xl transition-transform duration-[3600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              backgroundImage: "url('/images/curtain-fabric.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
              boxShadow: 'inset -20px 0 40px rgba(0,0,0,0.8), 10px 0 30px rgba(0,0,0,0.6)',
              transform: areCurtainsParted ? 'translateX(-100%) scaleX(0.12)' : 'translateX(0%) scaleX(1)',
              transformOrigin: 'left center'
            }}
          >
            {/* Vertical Silk Velvet Highlight Shading */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60 pointer-events-none" />
          </div>

          {/* Right Red Velvet Curtain (Majestic 3.6s glide to the right revealing Home) */}
          <div 
            className="absolute top-0 right-0 w-1/2 h-full z-20 shadow-2xl transition-transform duration-[3600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              backgroundImage: "url('/images/curtain-fabric.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
              boxShadow: 'inset 20px 0 40px rgba(0,0,0,0.8), -10px 0 30px rgba(0,0,0,0.6)',
              transform: areCurtainsParted ? 'translateX(100%) scaleX(0.12)' : 'translateX(0%) scaleX(1)',
              transformOrigin: 'right center'
            }}
          >
            {/* Vertical Silk Velvet Highlight Shading */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/60 pointer-events-none" />
          </div>

          {/* Center Golden Seal / Rosette (unclips gently as curtains slowly part) */}
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-1000 ease-out flex flex-col items-center ${
              areCurtainsParted ? 'opacity-0 scale-125' : 'opacity-100 scale-100'
            }`}
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 border-4 border-amber-100 shadow-2xl flex flex-col items-center justify-center p-2 text-slate-950 font-black text-center animate-pulse">
              <Award className="w-7 h-7 text-red-700" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider leading-none mt-1">
                Officially
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase text-red-700 leading-none">
                Launched
              </span>
            </div>
          </div>

          {/* Celebratory Golden Confetti & Light Beams Burst over the revealed Home Page */}
          {areCurtainsParted && (
            <div className="absolute inset-0 z-10 pointer-events-none animate-fadeIn flex items-center justify-center">
              {/* Radial Golden Light Beam */}
              <div className="w-[850px] h-[850px] bg-amber-400/20 rounded-full blur-3xl animate-ping" style={{ animationDuration: '3s' }} />

              {/* Confetti particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(40)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-xs animate-bounce"
                    style={{
                      left: `${(i * 2.6) % 100}%`,
                      top: `${(i * 3.1) % 85}%`,
                      backgroundColor: ['#f59e0b', '#dc2626', '#10b981', '#fbbf24', '#ffffff', '#ec4899'][i % 6],
                      transform: `rotate(${i * 45}deg)`,
                      animationDuration: `${1.4 + (i % 4) * 0.4}s`,
                      animationDelay: `${(i % 6) * 0.15}s`
                    }}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </>
  );
}
