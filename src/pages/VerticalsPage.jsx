import React, { useState } from 'react';
import { 
  Briefcase, 
  Sparkles, 
  Code, 
  Calendar, 
  Lightbulb, 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  GraduationCap, 
  Compass, 
  Clock, 
  Mic, 
  Award,
  ChevronRight
} from 'lucide-react';
import { VERTICALS, CORE_OFFERINGS, SITE_INFO } from '../data/content';

const iconMap = {
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  Compass: Compass,
  Clock: Clock,
  Mic: Mic,
  Award: Award,
};

const verticalIcons = {
  'ss-brand': Sparkles,
  'ss-events': Calendar,
  'ss-it': Code,
  'funding-ideas': Lightbulb,
};

export default function VerticalsPage({ setActivePage }) {
  const [activeVerticalTab, setActiveVerticalTab] = useState(VERTICALS[0].id);

  const currentVertical = VERTICALS.find(v => v.id === activeVerticalTab) || VERTICALS[0];
  const CurrentIcon = verticalIcons[currentVertical.id] || Sparkles;

  return (
    <div className="space-y-24 pb-20">
      
      {/* Page Header */}
      <section className="pt-12 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-bold uppercase tracking-wider">
            <span>Operational Structure</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Verticals
          </h1>

          <p className="text-xl font-medium text-red-600">
            One Community • Many Ways to Grow
          </p>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Struggle of Student operates through 4 distinct specialized divisions designed to equip students with leadership, technical mastery, event production skills, and entrepreneurial backing.
          </p>
        </div>
      </section>

      {/* Interactive Verticals Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Vertical Selector Tabs (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {VERTICALS.map((v) => {
              const TabIcon = verticalIcons[v.id] || Sparkles;
              const isActive = v.id === activeVerticalTab;
              return (
                <button
                  key={v.id}
                  onClick={() => setActiveVerticalTab(v.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                    isActive 
                      ? 'bg-red-600 text-white border-red-600 shadow-md translate-x-1' 
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl flex-shrink-0 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-red-50 text-red-600'
                  }`}>
                    <TabIcon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-bold uppercase ${
                        isActive ? 'text-red-200' : 'text-slate-400'
                      }`}>
                        Vertical {v.number}
                      </span>
                      {isActive && <ChevronRight className="w-4 h-4 text-white" />}
                    </div>
                    <h3 className="font-bold text-base mt-0.5">{v.title}</h3>
                    <p className={`text-xs mt-1 line-clamp-1 ${
                      isActive ? 'text-red-100' : 'text-slate-500'
                    }`}>
                      {v.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Vertical Card Detail (Col 5-12) */}
          <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 font-mono">
                  Vertical #{currentVertical.number}
                </span>
                <h2 className="text-3xl font-black text-slate-900">
                  {currentVertical.title}
                </h2>
                <p className="text-base text-slate-500 font-medium">
                  {currentVertical.tagline}
                </p>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 self-start sm:self-auto flex-shrink-0">
                <CurrentIcon className="w-8 h-8" />
              </div>
            </div>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {currentVertical.description}
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Initiatives &amp; Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentVertical.features.map((feature, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Highlight */}
            <div className="p-5 rounded-2xl bg-slate-950 text-white flex items-start gap-4">
              <Sparkles className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block">
                  Proven Impact
                </span>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">
                  {currentVertical.highlight}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setActivePage('contact')}
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-2"
              >
                <span>Get Involved in this Vertical</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Complete Offerings Section */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-wider uppercase text-red-600">The 6 Foundational Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Every Student Receives
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every single offering is provided 100% free of charge to any registered student in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_OFFERINGS.map((item) => {
              const Icon = iconMap[item.icon] || Briefcase;
              return (
                <div 
                  key={item.id}
                  className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-red-400 transition-all flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 100% Free
                    </span>
                    <span className="text-slate-400 font-mono">Pillar #{item.id}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Download Profile PDF Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">Official Documentation</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Download Startup Profile Document
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Get the complete official PDF profile covering community background, 4 verticals, college network statistics, and MSME registration details.
            </p>
          </div>

          <a
            href="/Struggle_of_Student_Startup_Profile.pdf"
            download
            className="px-7 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2.5 whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-red-400" />
            <span>Download Official PDF (3.8 MB)</span>
          </a>
        </div>
      </section>

    </div>
  );
}
