import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  HeartHandshake,
  User,
  Building,
  GraduationCap,
  Lightbulb,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { SITE_INFO, FAQS } from '../data/content';

export default function ContactPage() {
  const [formRole, setFormRole] = useState('student');
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    college: '',
    stream: '',
    city: '',
    interest: 'Internships',
    message: ''
  });

  const roleTabs = [
    { id: 'student', label: 'Join as Student (100% Free)', icon: GraduationCap },
    { id: 'college', label: 'College / University Partner', icon: Building },
    { id: 'employer', label: 'Hire Students / Sponsor', icon: User },
    { id: 'startup', label: 'Submit Startup Idea', icon: Lightbulb },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const roleObj = roleTabs.find(r => r.id === formRole);
    const roleTitle = roleObj ? roleObj.label : formRole;

    const messageText = 
      `*New Application - Struggle of Student Community*\n` +
      `-----------------------------------------\n` +
      `*Category:* ${roleTitle}\n` +
      `*Full Name:* ${formData.name}\n` +
      `*Phone/WhatsApp:* ${formData.phone}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : '') +
      `*College/Org:* ${formData.college}\n` +
      (formData.city ? `*City/State:* ${formData.city}\n` : '') +
      `*Primary Interest:* ${formData.interest}\n` +
      (formData.message ? `*Notes:* ${formData.message}\n` : '') +
      `-----------------------------------------\n` +
      `Source: Official Website Submission`;

    const waLink = `https://wa.me/${SITE_INFO.founder.phoneClean}?text=${encodeURIComponent(messageText)}`;
    setLastWaUrl(waLink);

    // Automatically trigger WhatsApp in new tab
    try {
      window.open(waLink, '_blank');
    } catch (err) {
      console.log('Popup blocked or direct navigation', err);
    }
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* Page Header */}
      <section className="pt-12 md:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-bold uppercase tracking-wider">
            <span>Get In Touch</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Contact &amp; Join the Community
          </h1>

          <p className="text-xl font-medium text-red-600">
            Zero Fees • Direct Access • Empowering Every Student
          </p>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have questions or want to register? Connect directly with our team and Founder Chanti Nelatalli, or fill out the application below.
          </p>
        </div>
      </section>

      {/* Founder Direct Contact & Credentials Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Direct Phone & WhatsApp */}
          <div className="p-7 rounded-3xl bg-slate-950 text-white border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-slate-400">Direct Helpline</span>
                <h3 className="text-xl font-black text-white mt-1">Chanti Nelatalli</h3>
                <p className="text-xs text-red-400 font-semibold">Founder, Struggle of Student</p>
              </div>
              <p className="text-2xl font-black tracking-tight text-white font-mono">
                +91 98496 03265
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={`https://wa.me/${SITE_INFO.founder.phoneClean}?text=Hello%20Chanti%2C%20I%20want%20to%20connect%20with%20Struggle%20of%20Student`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="tel:+919849603265"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all text-center"
              >
                Direct Phone Call
              </a>
            </div>
          </div>

          {/* Legal MSME Credentials */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 space-y-4 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-slate-400">Government Registered</span>
                <h3 className="text-xl font-black text-slate-900 mt-1">MSME Verification</h3>
                <p className="text-xs text-emerald-600 font-semibold">Udyam Certified Enterprise</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs font-bold text-slate-800">
                {SITE_INFO.msmeRegistration}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Registered under the Ministry of Micro, Small and Medium Enterprises, Government of India.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Legitimate &amp; Transparent
              </span>
            </div>
          </div>

          {/* Free Guarantee & Community Promise */}
          <div className="p-7 rounded-3xl bg-red-600 text-white space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-red-200">Our Sacred Promise</span>
                <h3 className="text-xl font-black text-white mt-1">100% Free Forever</h3>
                <p className="text-xs text-red-100 font-semibold">Zero Fee For Any Student</p>
              </div>
              <p className="text-xs sm:text-sm text-red-100 leading-relaxed font-medium">
                &ldquo;We will never charge one rupee from any student. Every service of the community is completely free for students.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-red-500/80">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Vision 2047: 10 Cr Students
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Interactive Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
          
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-wider uppercase text-red-600">Fast Registration</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Application &amp; Collaboration Form
            </h2>
            <p className="text-sm text-slate-600">
              Select your category below and submit your details. Submitting connects directly with Founder Chanti Nelatalli on WhatsApp.
            </p>
          </div>

          {/* Role Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 p-1.5 bg-slate-100 rounded-2xl">
            {roleTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = formRole === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setFormRole(tab.id);
                    setFormSubmitted(false);
                  }}
                  className={`p-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    isActive 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${isActive ? 'text-red-600' : 'text-slate-400'}`} />
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {formSubmitted ? (
            <div className="p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Thank You for Reaching Out!</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Your application details have been formatted and directed to Founder <strong>Chanti Nelatalli (+91 98496 03265)</strong>.
              </p>

              {lastWaUrl && (
                <div className="pt-2">
                  <a
                    href={lastWaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp Directly</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      college: '',
                      stream: '',
                      city: '',
                      interest: 'Internships',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
                >
                  Submit Another Response
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    WhatsApp Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 98496 03265"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. student@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all"
                  />
                </div>

                {/* College / Institution Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {formRole === 'college' ? 'Institution Name' : formRole === 'employer' ? 'Company Name' : 'College / University Name'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="college"
                    required
                    value={formData.college}
                    onChange={handleInputChange}
                    placeholder={formRole === 'employer' ? 'e.g. Acme Tech Solutions' : 'e.g. Government Degree College, Warangal'}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all"
                  />
                </div>

                {/* City / District */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    City / District &amp; State
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Khammam, Telangana"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all"
                  />
                </div>

                {/* Primary Interest / Domain */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Primary Area of Interest
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all bg-white"
                  >
                    <option value="Internships">Internships (Technical &amp; Non-Technical)</option>
                    <option value="Jobs">Job Placement &amp; Hiring Openings</option>
                    <option value="Career Guidance">1-on-1 Career Guidance &amp; Resume Review</option>
                    <option value="SS Event Management">Event Management &amp; Organizing Team</option>
                    <option value="SS IT Solutions">SS IT Solutions (Student Developers)</option>
                    <option value="Funding for Ideas">Startup Idea / Venture Incubation</option>
                    <option value="College Chapter">Start an SS Chapter at My College</option>
                  </select>
                </div>

              </div>

              {/* Message / Details */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {formRole === 'startup' ? 'Describe Your Idea & What Help You Need' : 'Additional Message or Specific Questions'}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share any specifics about your academic branch, current challenges, or goals..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Connects immediately with Founder Chanti Nelatalli via WhatsApp.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application (Free)</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-red-600">Got Questions?</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about Struggle of Student community and its zero-fee model.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-red-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
