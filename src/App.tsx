import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './pages/Navbar';
import { Footer } from './pages/Footer';
import { Hero } from './pages/Hero';
import { ValueSection } from './pages/ValueSection';
import { ProgramSection } from './pages/ProgramSection';
import { HubSection } from './pages/HubSection';
import { PurposeAssessment } from './pages/PurposeAssessment';
import { MediaFeed } from './pages/MediaFeed';
import { Page } from './model/types';
import { Monitor, MapPin, ShieldCheck, Users, GraduationCap, Globe } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <ValueSection />
            <HubSection />
            <ProgramSection />
            
            {/* Mission Statement Section */}
            <section className="py-32 bg-brand-navy text-brand-alabaster relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                  <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-display font-bold mb-8 block">
                    Our Mission
                  </span>
                  <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">
                    Empowering young Africans to <span className="italic text-brand-gold">discover</span> their unique life purpose and build capacity for systemic impact.
                  </h2>
                  <button 
                    onClick={() => setCurrentPage('about')}
                    className="btn-gold-outline !border-brand-gold !text-brand-gold hover:!bg-brand-gold hover:!text-brand-navy"
                  >
                    Read Our Story
                  </button>
                </div>
              </div>
              {/* Decorative Background Text */}
              <div className="absolute -bottom-20 -right-20 text-[20vw] font-serif font-black text-white/5 pointer-events-none select-none italic">
                Renaissance
              </div>
            </section>
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-20"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row gap-20 items-center mb-32">
                <div className="w-full md:w-1/2">
                  <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-display font-bold mb-6 block">
                    Executive Overview
                  </span>
                  <h1 className="text-5xl md:text-7xl font-serif text-brand-navy mb-8 leading-tight">
                    The <span className="italic">Conviction</span> Behind the Movement.
                  </h1>
                  <p className="text-lg text-brand-navy/70 leading-relaxed mb-8">
                    Capacity for Nations (CFN) is a youth empowerment hub headquartered in Abuja, Nigeria. 
                    Established as a strategic response to the widespread "japa" (emigration) trend, CFN operates 
                    on the conviction that African youth can lead global transformation from within the continent.
                  </p>
                  <div className="grid grid-cols-2 gap-8 py-8 border-t border-brand-navy/10">
                    <div>
                      <p className="text-3xl font-serif text-brand-navy">Abuja</p>
                      <p className="text-[10px] uppercase tracking-widest font-display font-bold text-brand-gold">Headquarters</p>
                    </div>
                    <div>
                      <p className="text-3xl font-serif text-brand-navy">Pan-African</p>
                      <p className="text-[10px] uppercase tracking-widest font-display font-bold text-brand-gold">Scope</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img 
                    src="https://picsum.photos/seed/about/1200/1400" 
                    alt="CFN Leadership" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <ValueSection />
              
              {/* Strategic Roadmap */}
              <section className="py-32 border-t border-brand-navy/5">
                <div className="text-center mb-20">
                  <h2 className="text-4xl font-serif text-brand-navy mb-4">2025–2027 Strategic Roadmap</h2>
                  <p className="text-brand-navy/50 uppercase tracking-widest text-xs font-display">Measurable outcomes for the next three years</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    { icon: <Users />, label: 'Mass Outreach', value: '50,000', sub: 'Young Africans' },
                    { icon: <GraduationCap />, label: 'Skill Development', value: '10,000', sub: 'Graduates' },
                    { icon: <Globe />, label: 'Institutional Presence', value: '20', sub: 'Universities' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-12 bg-white border border-brand-navy/5">
                      <div className="w-12 h-12 bg-brand-navy/5 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
                        {stat.icon}
                      </div>
                      <p className="text-4xl font-serif text-brand-navy mb-2">{stat.value}</p>
                      <p className="text-[10px] uppercase tracking-widest font-display font-bold text-brand-gold mb-1">{stat.label}</p>
                      <p className="text-xs text-brand-navy/40">{stat.sub}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        );
      case 'programs':
        return (
          <motion.div
            key="programs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-20"
          >
            <ProgramSection />
            <section className="py-32 bg-brand-alabaster">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-serif text-brand-navy mb-8">Ready to Build Capacity?</h2>
                <button className="btn-gold-filled">Apply for Next Cohort</button>
              </div>
            </section>
          </motion.div>
        );
      case 'hub':
        return (
          <motion.div
            key="hub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-20"
          >
            <section className="max-w-7xl mx-auto px-6 mb-32">
              <div className="max-w-3xl mb-20">
                <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-display font-bold mb-6 block">
                  The Digital Hub
                </span>
                <h1 className="text-5xl md:text-7xl font-serif text-brand-navy mb-8 leading-tight">
                  Your <span className="italic">Gateway</span> to Global Relevance.
                </h1>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                <div>
                  <PurposeAssessment />
                </div>
                <div className="space-y-12">
                  <div className="p-10 bg-white border border-brand-navy/5">
                    <h3 className="font-serif text-2xl text-brand-navy mb-6">Member Portal</h3>
                    <p className="text-sm text-brand-navy/60 leading-relaxed mb-8">
                      Access your personalized dashboard, track your learning progress, and connect with global mentors.
                    </p>
                    <div className="space-y-4">
                      <input type="email" placeholder="Email" className="w-full bg-brand-alabaster border-none p-4 text-sm" />
                      <input type="password" placeholder="Password" className="w-full bg-brand-alabaster border-none p-4 text-sm" />
                      <button className="w-full btn-gold-filled !py-4">Login to Dashboard</button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-8 bg-brand-navy text-white">
                      <Monitor className="text-brand-gold mb-4" size={24} />
                      <h4 className="font-serif text-lg mb-2">Self-Paced</h4>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest">Learning Ecosystem</p>
                    </div>
                    <div className="p-8 bg-brand-gold text-brand-navy">
                      <ShieldCheck className="text-brand-navy mb-4" size={24} />
                      <h4 className="font-serif text-lg mb-2">Certified</h4>
                      <p className="text-[10px] text-brand-navy/50 uppercase tracking-widest">Global Standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-20 items-center">
                  <div className="w-full md:w-1/2 order-2 md:order-1">
                    <img 
                      src="https://picsum.photos/seed/physical/1200/800" 
                      alt="Physical Hub Abuja" 
                      className="w-full h-full object-cover shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-full md:w-1/2 order-1 md:order-2">
                    <span className="text-brand-terracotta uppercase tracking-[0.4em] text-[10px] font-display font-bold mb-6 block">
                      The Physical Hub
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-navy mb-8 leading-tight">
                      A Sanctuary for <span className="italic">Collaboration</span>.
                    </h2>
                    <p className="text-brand-navy/70 leading-relaxed mb-8">
                      Located in the heart of Abuja, our physical training center integrates hands-on vocational training with community meetups and high-impact workshops.
                    </p>
                    <div className="flex items-center space-x-4 text-brand-navy">
                      <MapPin className="text-brand-gold" size={20} />
                      <span className="text-sm font-display font-bold uppercase tracking-widest">Abuja, Nigeria</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        );
      case 'media':
        return (
          <motion.div
            key="media"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-20"
          >
            <div className="max-w-7xl mx-auto px-6 mb-20">
              <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-display font-bold mb-6 block">
                Publications & Media
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-brand-navy mb-8 leading-tight">
                Charging a <span className="italic">Generation</span>.
              </h1>
            </div>
            <MediaFeed />
          </motion.div>
        );
      case 'partner':
        return (
          <motion.div
            key="partner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-20 pb-32"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mb-24">
                <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-display font-bold mb-6 block">
                  Strategic Partnerships
                </span>
                <h1 className="text-6xl md:text-8xl font-serif text-brand-navy mb-8">Partner with <span className="italic">CFN</span></h1>
                <p className="text-xl text-brand-navy/70 leading-relaxed">
                  We collaborate with NGOs, the private sector, and global foundations to expand our reach and deepen our impact across the continent.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-12 bg-white border border-brand-navy/5">
                  <h3 className="font-serif text-3xl text-brand-navy mb-6">For Organizations</h3>
                  <p className="text-brand-navy/60 mb-8">Join our network of strategic partners to support youth empowerment and leadership development.</p>
                  <button className="btn-gold-filled w-full">Inquire for Partnership</button>
                </div>
                <div className="p-12 bg-brand-navy text-white">
                  <h3 className="font-serif text-3xl text-brand-gold mb-6">For Individuals</h3>
                  <p className="text-white/60 mb-8">Support our mission through mentorship, funding, or by hosting a campus tour at your institution.</p>
                  <button className="btn-gold-outline w-full !border-brand-gold !text-brand-gold hover:!bg-brand-gold hover:!text-brand-navy">Become a Mentor</button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}
