import React from 'react';
import { motion } from 'motion/react';
import { Monitor, MapPin, ArrowRight } from 'lucide-react';

export const HubSection: React.FC = () => {
  return (
    <section className="py-32 bg-brand-alabaster overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* Digital Hub - 60/40 Ratio (Visual 60) */}
          <div className="w-full md:w-3/5 relative">
            <motion.div 
              className="relative z-10"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://picsum.photos/seed/hub/1200/800" 
                alt="CFN Hub" 
                className="w-full h-full object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-gold p-12 hidden lg:block shadow-xl">
                <div className="flex items-center space-x-6">
                  <div className="text-brand-navy">
                    <p className="text-4xl font-serif font-bold">50K+</p>
                    <p className="text-[10px] uppercase tracking-widest font-display font-bold opacity-60">Youth Reached</p>
                  </div>
                  <div className="w-px h-12 bg-brand-navy/20"></div>
                  <div className="text-brand-navy">
                    <p className="text-4xl font-serif font-bold">10K</p>
                    <p className="text-[10px] uppercase tracking-widest font-display font-bold opacity-60">Graduates</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute -top-20 -left-20 w-64 h-64 border border-brand-navy/5 rounded-full z-0"></div>
          </div>

          {/* Content - 40 */}
          <div className="w-full md:w-2/5">
            <span className="text-brand-terracotta uppercase tracking-[0.4em] text-[10px] font-display font-bold mb-6 block">
              The Hybrid Hub Model
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-navy mb-8 leading-tight">
              A Dual-Delivery Ecosystem for <span className="italic">Sustainability</span>.
            </h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-navy flex items-center justify-center shrink-0">
                  <Monitor className="text-brand-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">The Digital Hub</h4>
                  <p className="text-sm text-brand-navy/60 leading-relaxed">
                    An online ecosystem featuring self-paced courses, global mentorship access, and purpose-assessment tools.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-gold flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-navy" size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">The Physical Hub</h4>
                  <p className="text-sm text-brand-navy/60 leading-relaxed">
                    A center for workshops, community meetups, and hands-on vocational training in Abuja, Nigeria.
                  </p>
                </div>
              </div>

              <button className="flex items-center text-xs uppercase tracking-widest font-display font-bold text-brand-navy group mt-4">
                Explore the Hub
                <ArrowRight size={16} className="ml-3 transform group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
