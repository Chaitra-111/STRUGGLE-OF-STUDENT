import React, { useState } from 'react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Target, 
  Sparkles, 
  Award, 
  Users, 
  Building, 
  Maximize2, 
  CheckCircle, 
  ExternalLink, 
  Phone, 
  Mail, 
  ArrowRight 
} from 'lucide-react';
import { SITE_INFO, GALLERY_IMAGES } from '../data/content';

export default function AboutPage({ onOpenImage, setActivePage }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Leadership & Dignitaries',
    'Corporate Exposure',
    'Conclaves & Summits',
    'Team & Community',
    'Social Impact'
  ];

  const filteredImages = selectedCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  return (
    <div className="space-y-24 pb-20">
      
      {/* Page Header */}
      <section className="pt-12 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-bold uppercase tracking-wider">
            <span>Our Story &amp; Purpose</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            About Struggle of Student (SS)
          </h1>

          <p className="text-xl font-medium text-red-600">
            {SITE_INFO.tagline}
          </p>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Struggle of Student is a student-centric startup created as a unified catalyst for all the problems faced by students, especially focusing on students in rural areas and Tier 2 &amp; Tier 3 colleges across India.
          </p>
        </div>
      </section>

      {/* The Core Commitment: 100% Free Guarantee Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" /> Our Solemn Guarantee
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              100% Free For Every Student
            </h2>
            <p className="text-red-100 text-base sm:text-lg leading-relaxed font-medium">
              &ldquo;We will never charge one rupee from any student. Every service of the community is completely free for students.&rdquo;
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center min-w-[240px]">
            <span className="text-4xl sm:text-5xl font-black text-white">₹0</span>
            <span className="text-xs uppercase font-bold tracking-wider text-red-100 mt-1">Forever Zero Fee</span>
            <span className="text-[11px] text-red-200 mt-2">Zero hidden charges or subscriptions</span>
          </div>
        </div>
      </section>

      {/* Moments with Our Dignitaries & Guests (Matching Page 3 of Startup Profile) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-red-600 font-mono">
            State &amp; National Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Moments with Our Guests &amp; Leaders
          </h2>
          <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
            Struggle of Student has had the privilege of receiving high recognition from national cabinet ministers and state leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Rajnath Singh Garu & Revanth Reddy Garu (Full width & mobile-optimized) */}
          <div 
            onClick={() => onOpenImage(SITE_INFO.mainDignitaryMoment)}
            className="group rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col"
          >
            <div className="flex flex-col bg-slate-950">
              <div className="relative aspect-[3/2] bg-slate-950 overflow-hidden flex items-center justify-center">
                <img 
                  src={SITE_INFO.mainDignitaryMoment.src}
                  alt={SITE_INFO.mainDignitaryMoment.title}
                  className="w-full h-full object-contain sm:object-cover sm:object-center transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end justify-between p-4 sm:p-5 text-white pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-[11px] sm:text-xs font-bold shadow-md">
                    <Sparkles className="w-3.5 h-3.5" /> High Honor
                  </span>
                  <span className="p-1.5 rounded-lg bg-white/20 text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Dignitary Names Strip for immediate mobile & desktop clarity */}
              <div className="grid grid-cols-3 gap-1 bg-slate-900 border-t border-slate-800 p-2 text-center">
                <div className="bg-slate-800/90 rounded-lg p-1.5 flex flex-col justify-center border border-slate-700/50">
                  <span className="text-amber-400 font-extrabold text-[10px] sm:text-xs leading-tight">
                    Shri Rajnath Singh
                  </span>
                  <span className="text-[9px] text-slate-300 font-medium">Hon&apos;ble Raksha Mantri</span>
                </div>
                <div className="bg-red-950/70 rounded-lg p-1.5 flex flex-col justify-center border border-red-500/30">
                  <span className="text-white font-extrabold text-[10px] sm:text-xs leading-tight">
                    Chanti Nelatalli
                  </span>
                  <span className="text-[9px] text-red-300 font-medium">Founder, SS</span>
                </div>
                <div className="bg-slate-800/90 rounded-lg p-1.5 flex flex-col justify-center border border-slate-700/50">
                  <span className="text-emerald-400 font-extrabold text-[10px] sm:text-xs leading-tight">
                    Shri A. Revanth Reddy
                  </span>
                  <span className="text-[9px] text-slate-300 font-medium">Hon&apos;ble CM Telangana</span>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                  National &amp; State Honor
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                  Hon&apos;ble Raksha Mantri Shri Rajnath Singh Garu &amp; Hon&apos;ble CM Shri A. Revanth Reddy Garu
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Founder Chanti Nelatalli presenting honors and receiving recognition from Hon&apos;ble Raksha Mantri (Defence Minister of India) Shri Rajnath Singh Garu and Hon&apos;ble Chief Minister of Telangana Shri A. Revanth Reddy Garu for student community development.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-red-600">
                <span>View Full Resolution</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Union Minister G. Kishan Reddy Garu */}
          <div 
            onClick={() => onOpenImage(GALLERY_IMAGES[1])}
            className="group rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[3/2] bg-slate-950 overflow-hidden flex items-center justify-center">
              <img 
                src={GALLERY_IMAGES[1].src}
                alt={GALLERY_IMAGES[1].title}
                className="w-full h-full object-contain sm:object-cover sm:object-center transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end justify-between p-4 sm:p-5 text-white pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 text-white text-[11px] sm:text-xs font-bold shadow-md">
                  <Award className="w-3.5 h-3.5 text-red-400" /> Dignitary Felicitation
                </span>
                <span className="p-1.5 rounded-lg bg-white/20 text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                  Union Leadership
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                  Felicitation with Hon&apos;ble Union Minister Shri G. Kishan Reddy Garu
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  SS Founder Chanti Nelatalli being honored by Hon&apos;ble Union Minister Shri G. Kishan Reddy at a major national youth summit celebrating youth empowerment and grassroots leadership.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-red-600">
                <span>View Full Resolution</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Origin, Problem & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-wider uppercase text-red-600">The Problem We Solve</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Bridging the Great Divide in Indian Higher Education
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                In urban metros, college students enjoy access to elite corporate networking, campus tech incubators, hackathons, and corporate mentorship. However, over <strong>70% of India&apos;s youth</strong> study in rural, Tier 2, and Tier 3 engineering, arts, and science colleges.
              </p>
              <p>
                These students possess boundless drive and creative intellect, but are systematically held back by:
              </p>
              <ul className="space-y-2.5 pt-1">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                  <span>Absence of campus placement drives from tier-1 corporations and high-growth startups.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                  <span>Predatory commercial ed-tech institutes charging prohibitive tuition fees.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                  <span>Lack of resume-building, industry skills, and corporate conversational confidence.</span>
                </li>
              </ul>
              <p>
                <strong>Struggle of Student (SS)</strong> was founded to democratize this entire ecosystem — bringing real opportunities directly to every eager student at zero cost.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            {/* Mission Vision 2047 Card */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold">
                <Target className="w-3.5 h-3.5" /> OUR MISSION • VISION 2047
              </div>
              <h3 className="text-2xl sm:text-3xl font-black leading-snug">
                Creating awareness and career guidance for{' '}
                <span className="text-red-400">10 Cr (100 Million)</span> students by 2047.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                As India approaches its centenary year of Independence in 2047, our mission is to ensure every single youth has the confidence, skills, and industry gateway to thrive.
              </p>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" /> MSME Registered Enterprise
                </span>
                <span className="font-mono text-slate-300">{SITE_INFO.msmeRegistration}</span>
              </div>
            </div>

            {/* Current Track Record */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-2xl sm:text-3xl font-black text-slate-900">2,000+</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">Community Members</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-2xl sm:text-3xl font-black text-slate-900">20+</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">Colleges Partnered</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-2xl sm:text-3xl font-black text-slate-900">200+</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">Internships Placed</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Founder Profile Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="relative flex-shrink-0">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-red-500 shadow-md">
              <img 
                src="/images/founder-guest-felicitation.jpeg" 
                alt="Founder Chanti Nelatalli" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
              Founder
            </span>
          </div>

          <div className="space-y-4 text-center md:text-left flex-1">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">Leadership Voice</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Chanti Nelatalli
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                Founder, Struggle of Student Community
              </p>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
              &ldquo;I saw brilliant students from humble backgrounds in rural colleges give up on their dreams simply because nobody guided them on how to write a resume, speak confidently, or reach real hiring managers. We built Struggle of Student so no student has to struggle alone anymore.&rdquo;
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs">
              <a 
                href="tel:+919849603265" 
                className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-red-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" />
                <span>+91 98496 03265</span>
              </a>

              <a 
                href={`https://wa.me/${SITE_INFO.founder.phoneClean}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Community Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold tracking-wider uppercase text-red-600">Visual Journey</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Community in Pictures
          </h2>
          <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
            Real moments from our student assemblies, dignitary felicitations, high-impact youth conclaves, corporate tours, and community initiatives. Click any image to view full resolution.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Preserving 3:2 aspect ratio so full landscape photos never get cropped) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => onOpenImage(img)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[3/2] flex flex-col"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-contain sm:object-cover sm:object-center transition-transform duration-500 group-hover:scale-102 opacity-95 group-hover:opacity-100"
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-4 sm:p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                    {img.category}
                  </span>
                  <div className="p-1 rounded-full bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mt-1 leading-snug">{img.title}</h4>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">{img.description}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Bottom Action CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black">Want to bring SS to your college?</h3>
            <p className="text-slate-400 text-sm mt-1">We organize free on-campus career conclaves and leadership bootcamps.</p>
          </div>
          <button
            onClick={() => setActivePage('contact')}
            className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all whitespace-nowrap"
          >
            Partner With Us
          </button>
        </div>
      </section>

    </div>
  );
}
