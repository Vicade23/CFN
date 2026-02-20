import React from 'react';
import { motion } from 'motion/react';
import { PROGRAMS } from '../model/types';
import { ArrowUpRight } from 'lucide-react';

export const ProgramSection: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-display font-bold mb-6 block">
            Operational Pillars
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-navy">
            Strategic <span className="italic">Pathways</span> to Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROGRAMS.map((program) => (
            <motion.div 
              key={program.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="aspect-[4/5] overflow-hidden mb-8 relative rounded-[8px]">
                <img 
                  src={`https://picsum.photos/seed/${program.title}/800/1000`} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/40 transition-colors duration-500"></div>
                <div className="absolute top-6 left-6 bg-brand-gold text-brand-navy px-3 py-1 text-[10px] font-display font-bold uppercase tracking-widest">
                  {program.pillar}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">{program.title}</h3>
                  <p className="text-sm text-brand-navy/60 leading-relaxed max-w-xs">
                    {program.description}
                  </p>
                </div>
                <button className="w-10 h-10 border border-brand-navy/10 flex items-center justify-center rounded-full group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-300">
                  <ArrowUpRight size={18} className="text-brand-navy group-hover:text-white transition-colors" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
