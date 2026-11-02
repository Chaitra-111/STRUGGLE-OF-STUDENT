import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Download, 
  Briefcase, 
  GraduationCap, 
  Compass, 
  Clock, 
  Mic, 
  Award, 
  Layers, 
  ChevronRight,
  HeartHandshake,
  Maximize2
} from 'lucide-react';
import { SITE_INFO, CORE_OFFERINGS, VERTICALS, GALLERY_IMAGES } from '../data/content';

const iconMap = {
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  Compass: Compass,
  Clock: Clock,
  Mic: Mic,
  Award: Award,
};

export default function HomePage({ setActivePage, onOpenImage }) {
  const previewImages = GALLERY_IMAGES.slice(0, 4);

  return (
    <div className="space-y-24 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-red-50/60 via-slate-50/30 to-transparent -z-10 pointer-events-none rounded-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            
            {/* Mission & Verification Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>VISION 2047</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-200">Guiding 100 Million Students</span>
              <ShieldCheck className="w-3.5 h-3.5 text-red-400 ml-1" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Your Talent. Your Skills.{' '}
              <span className="relative inline-block text-red-600">
                Your Opportunity.
                <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-red-200 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="6" />
                </svg>
              </span>
            </h1>

            {/* Tagline & Core Description */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl">
              <strong className="text-slate-900 font-semibold">Struggle of Student (SS)</strong> is a student-centric startup designed as a single solution for all challenges faced by students — especially empowering youth from rural areas and Tier 2 &amp; Tier 3 colleges across India.
            </p>

            {/* Free Pledge Callout */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-red-50 border border-red-200/80 text-red-800 text-sm font-semibold">
              <HeartHandshake className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>100% Free: We will never charge one rupee from any student.</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setActivePage('contact')}
                className="px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group active:scale-95"
              >
                <span>Join Student Community Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActivePage('verticals')}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-xs transition-all flex items-center gap-2 hover:border-slate-400"
              >
                <Layers className="w-4 h-4 text-slate-600" />
                <span>Explore 4 Verticals</span>
              </button>

              <a
                href="/Struggle_of_Student_Startup_Profile.pdf"
                download
                className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all flex items-center gap-2"
                title="Download Official Startup Profile PDF"
              >
                <Download className="w-4 h-4 text-slate-600" />
                <span>Profile (PDF)</span>
              </a>
            </div>

            {/* Micro verification footnote */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Government of India MSME Registered
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Udyam: {SITE_INFO.msmeRegistration}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 20+ Colleges Connected
              </span>
            </div>

          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {SITE_INFO.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-red-200 hover:shadow-sm transition-all text-center flex flex-col justify-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value === '₹0' ? (
                    <span className="text-emerald-600 font-black">{stat.value}</span>
                  ) : (
                    <span className="text-red-600 font-black">{stat.value}</span>
                  )}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">{stat.label}</div>
                <div className="text-xs text-slate-600 mt-0.5">{stat.change}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Prime National & State Recognition Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          
          <div 
            onClick={() => onOpenImage(SITE_INFO.mainDignitaryMoment)}
            className="lg:col-span-7 relative group cursor-pointer overflow-hidden bg-slate-950 aspect-16/10 lg:aspect-auto lg:h-full min-h-[360px]"
          >
            <img 
              src={SITE_INFO.mainDignitaryMoment.src}
              alt="Hon'ble Raksha Mantri Shri Rajnath Singh Garu, Hon'ble CM Shri A. Revanth Reddy Garu, and Founder Chanti Nelatalli"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-between p-6">
              <span className="self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600/95 text-white text-xs font-bold shadow-md">
                <Sparkles className="w-3.5 h-3.5" /> High Honor &amp; Recognition
              </span>

              <div className="flex items-center justify-between text-white text-xs">
                <span className="font-semibold text-slate-200">Click to view full high-resolution</span>
                <span className="p-1.5 rounded-lg bg-white/20 text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider uppercase text-red-600 font-mono">
                National &amp; State Recognition
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Honored by Hon&apos;ble Raksha Mantri &amp; Hon&apos;ble Chief Minister
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Founder <strong>Chanti Nelatalli</strong> receiving recognition from Hon&apos;ble Raksha Mantri (Defence Minister of India) <strong>Shri Rajnath Singh Garu</strong> in the esteemed presence of Hon&apos;ble Chief Minister of Telangana <strong>Shri A. Revanth Reddy Garu</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
              <span className="text-xs font-bold text-slate-900 block">
                Validation of Grassroots Student Impact
              </span>
              <p className="text-xs text-slate-500 leading-relaxed">
                A proud milestone reflecting Struggle of Student&apos;s commitment to provide 100% free career guidance to 10 Crore students by 2047.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onOpenImage(SITE_INFO.mainDignitaryMoment)}
                className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
              >
                <span>View Full Screen Photo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision 2047 Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-xl border border-slate-800">
          
          {/* Subtle watermarked logo in background */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
            <img src="/images/logo.png" alt="" className="w-96 h-96 object-contain" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Our Grand Purpose
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Creating Awareness &amp; Career Guidance for{' '}
              <span className="text-red-400">10 Crore (100 Million)</span> Students by 2047.
            </h2>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              India&apos;s youth demographic is our greatest asset, yet millions of bright minds in rural areas and Tier-2 &amp; Tier-3 colleges miss out simply due to lack of corporate exposure, expensive training fees, and gatekept networks. We are systematically tearing down those barriers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase text-slate-400">Zero Commercialization</span>
                <p className="text-sm font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Completely Free for Every Student
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase text-slate-400">Target Demographics</span>
                <p className="text-sm font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Rural &amp; Tier-2 / Tier-3 Colleges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide: 6 Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-wider uppercase text-red-600">Comprehensive Ecosystem</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What We Provide
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Everything a student needs to transition smoothly from college textbooks to high-growth professional careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_OFFERINGS.map((item) => {
            const Icon = iconMap[item.icon] || Briefcase;
            return (
              <div 
                key={item.id}
                className="group p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-red-50 border border-slate-200/80 group-hover:border-red-200 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-slate-700 group-hover:text-red-600 transition-colors" />
                    </div>
                    <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-red-100 group-hover:text-red-700 transition-colors">
                      #{item.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500">{item.badge}</span>
                  <span className="text-red-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Free Access <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* The 4 Verticals Snapshot */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold tracking-wider uppercase text-red-600">Structured Impact</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Our 4 Verticals: One Community, Many Ways to Grow
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Structured into 4 dedicated operational arms that unlock student potential across branding, live events, real technology, and venture funding.
              </p>
            </div>

            <button
              onClick={() => setActivePage('verticals')}
              className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors self-start md:self-auto"
            >
              <span>Explore All Verticals in Depth</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VERTICALS.map((vertical) => (
              <div 
                key={vertical.id}
                onClick={() => setActivePage('verticals')}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-red-500 transition-colors font-mono">
                      {vertical.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-red-500 transition-colors"></span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {vertical.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 leading-tight">
                    {vertical.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {vertical.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Community in Pictures Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold tracking-wider uppercase text-red-600">Real Proof &amp; Moments</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Community in Pictures
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              From moments with national leadership to corporate immersions at Microsoft and 2,000+ student conclaves.
            </p>
          </div>

          <button
            onClick={() => setActivePage('about')}
            className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors self-start md:self-auto"
          >
            <span>View Full Gallery (13 Images)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewImages.map((img, i) => (
            <div 
              key={i}
              onClick={() => onOpenImage(img)}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3 flex flex-col"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-bold tracking-wider uppercase text-red-400">{img.category}</span>
                <h4 className="text-sm font-bold leading-snug truncate">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-red-600 text-white p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
              Get Involved Today
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Ready to Shape Your Future or Partner With Us?
            </h2>
            <p className="text-red-100 text-base leading-relaxed">
              Whether you are a student seeking free career direction, a college looking to empower your campus, or a hiring partner looking for skilled talent — we welcome you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={() => setActivePage('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm shadow-md transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Join as a Student Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+919849603265"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all text-center border border-white/20"
            >
              Call Founder: +91 98496 03265
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
