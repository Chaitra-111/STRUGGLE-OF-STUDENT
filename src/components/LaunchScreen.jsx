import React, { useState } from 'react';
import { Sparkles, Award, Rocket, CheckCircle2, HeartHandshake } from 'lucide-react';

export default function LaunchScreen({ onLaunch }) {
  const [isLaunching, setIsLaunching] = useState(false);

  const handleLaunchClick = () => {
    setIsLaunching(true);
    setTimeout(() => {
      onLaunch();
    }, 900);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl transition-all duration-700 ${
        isLaunching ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/15 via-red-600/20 to-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-xl w-full bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-6 overflow-hidden">
        
        {/* Top Decorative Gold Header */}
        <div className="flex flex-col items-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-red-500/20 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Official Website Launch Ceremony</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
          </div>

          <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
            Government of Telangana • Youth Empowerment Initiative
          </span>
        </div>

        {/* Minister Portrait in Ceremonial Frame */}
        <div className="relative flex justify-center py-1">
          <div className="relative group">
            {/* Pulsing golden aura */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 via-red-500 to-amber-500 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
            
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-amber-300 shadow-2xl bg-slate-950 flex items-center justify-center">
              <img 
                src="/images/minister-seethakka-launch.jpg" 
                alt="Hon'ble Minister Smt. Danasari Anasuya (Seethakka) Garu"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-red-600 text-white text-[11px] font-black uppercase tracking-wider shadow-lg border border-amber-200/50 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-200" />
              <span>Hon&apos;ble Minister</span>
            </div>
          </div>
        </div>

        {/* Dignitary Name & Credentials */}
        <div className="space-y-1.5 pt-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Smt. Danasari Anasuya{' '}
            <span className="text-amber-400">(Seethakka) Garu</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-300 leading-snug">
            Hon&apos;ble Minister for Panchayat Raj &amp; Rural Development,<br className="hidden sm:inline" /> Women &amp; Child Welfare, Government of Telangana
          </p>
        </div>

        {/* Platform Identity */}
        <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
          <div className="flex items-center justify-center gap-2 text-white font-bold">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>STRUGGLE OF STUDENT (SS)</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-semibold">100% Free For All Students</span>
          </div>
          <p className="text-[11px] text-slate-400">
            MSME Registered: UDYAM-TS-09-0284967 • Empowering 10 Cr Students by 2047
          </p>
        </div>

        {/* Specific Launch Text above the Button as requested */}
        <div className="space-y-3 pt-1">
          <div className="relative py-1">
            <div className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/10 via-red-500/15 to-amber-500/10 border border-amber-400/30 text-xs sm:text-sm font-bold text-amber-200 leading-relaxed">
              ⭐ A Momentous Launch by Hon&apos;ble Minister Seethakka Garu ⭐<br />
              <span className="text-[11px] sm:text-xs font-normal text-slate-300">
                Dedicating this platform to the bright future and career aspirations of rural &amp; Tier-2/3 students
              </span>
            </div>
          </div>

          {/* Launch Button */}
          <button
            onClick={handleLaunchClick}
            disabled={isLaunching}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:via-rose-500 hover:to-amber-500 text-white font-black text-base sm:text-lg shadow-xl hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 transform active:scale-98 flex items-center justify-center gap-3 group border border-amber-300/40 cursor-pointer"
          >
            <Rocket className={`w-5 h-5 text-amber-200 transition-transform duration-500 ${isLaunching ? '-translate-y-2 translate-x-2' : 'group-hover:-translate-y-1'}`} />
            <span>{isLaunching ? 'LAUNCHING PLATFORM...' : 'CLICK TO LAUNCH OFFICIAL WEBSITE'}</span>
            <Sparkles className="w-5 h-5 text-amber-200 animate-spin" style={{ animationDuration: '3s' }} />
          </button>
        </div>

      </div>
    </div>
  );
}
