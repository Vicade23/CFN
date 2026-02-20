import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-alabaster">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 z-10 py-20 md:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-display font-bold mb-6 block">
              The African Renaissance
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-navy leading-[0.9] mb-8 tracking-tight">
              Raising a Generation of <span className="italic text-brand-gold">Purposeful</span> Africans.
            </h1>
            <p className="text-lg text-brand-navy/70 max-w-md leading-relaxed mb-10 font-sans">
              Capacity for Nations (CFN) is an elite youth empowerment hub equipping young leaders to transition from job seekers to value creators.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="btn-gold-filled">
                Join the Movement
              </button>
              <button className="flex items-center text-xs uppercase tracking-widest font-display font-bold text-brand-navy hover:text-brand-gold transition-colors group">
                <span className="w-8 h-[1px] bg-brand-navy mr-3 group-hover:bg-brand-gold transition-colors"></span>
                Discover Purpose
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[80vh]">
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Split Screen / Layered Layout */}
            <div className="relative w-full h-full">
              <img 
                src="https://picsum.photos/seed/leader/1200/1600" 
                alt="Young African Leader" 
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                referrerPolicy="no-referrer"
              />
              {/* Overlay Pattern */}
              <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply"></div>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #0A192F 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              
              {/* Floating Element */}
              <motion.div 
                className="absolute -bottom-10 -left-10 bg-brand-navy p-10 hidden lg:block"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <div className="border border-brand-gold/30 p-8">
                  <p className="text-brand-gold font-serif italic text-2xl mb-2">"Purpose is the prerequisite for opportunity."</p>
                  <p className="text-brand-alabaster/50 text-[10px] uppercase tracking-widest font-display">CFN Strategic Framework</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Proof Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-white/50 backdrop-blur-sm border-t border-brand-navy/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center opacity-40 grayscale">
          <span className="text-[10px] uppercase tracking-widest font-display font-bold text-brand-navy">Partner Institutions</span>
          <div className="flex space-x-12 items-center">
            <span className="font-serif font-bold text-xl">UNIVERSITY A</span>
            <span className="font-serif font-bold text-xl">COLLEGE B</span>
            <span className="font-serif font-bold text-xl">INSTITUTE C</span>
            <span className="font-serif font-bold text-xl">ACADEMY D</span>
          </div>
        </div>
      </div>
    </section>
  );
};
