import React from 'react';
import { motion } from 'motion/react';
import { CORE_VALUES } from '../model/types';
import { Target, Award, Lightbulb, Zap, Users, BarChart3 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Purpose': <Target size={32} strokeWidth={1.5} />,
  'Excellence': <Award size={32} strokeWidth={1.5} />,
  'Innovation': <Lightbulb size={32} strokeWidth={1.5} />,
  'Capacity': <Zap size={32} strokeWidth={1.5} />,
  'Community': <Users size={32} strokeWidth={1.5} />,
  'Impact': <BarChart3 size={32} strokeWidth={1.5} />,
};

const iconFillMap: Record<string, React.ReactNode> = {
  'Purpose': <Target size={32} strokeWidth={1.5} fill="currentColor" />,
  'Excellence': <Award size={32} strokeWidth={1.5} fill="currentColor" />,
  'Innovation': <Lightbulb size={32} strokeWidth={1.5} fill="currentColor" />,
  'Capacity': <Zap size={32} strokeWidth={1.5} fill="currentColor" />,
  'Community': <Users size={32} strokeWidth={1.5} fill="currentColor" />,
  'Impact': <BarChart3 size={32} strokeWidth={1.5} fill="currentColor" />,
};

export const ValueSection: React.FC = () => {
  return (
    <section className="py-32 bg-brand-alabaster">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row mb-24 items-end justify-between">
          <div className="max-w-2xl">
            <span className="text-brand-terracotta uppercase tracking-[0.4em] text-[10px] font-display font-bold mb-6 block">
              Our Foundation
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-navy leading-tight">
              Governed by Principles of <span className="italic">Excellence</span> and Impact.
            </h2>
          </div>
          <p className="text-brand-navy/50 text-sm max-w-xs mt-8 md:mt-0 font-sans leading-relaxed">
            We operate on the conviction that African youth can lead global transformation from within the continent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-navy/10 border border-brand-navy/10">
          {CORE_VALUES.map((value, index) => (
            <motion.div 
              key={value.title}
              className="bg-brand-alabaster p-12 group cursor-default relative overflow-hidden"
              whileHover={{ backgroundColor: '#0A192F' }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative z-10">
                <div className="text-brand-gold mb-8 transition-all duration-500">
                  <div className="group-hover:hidden">
                    {iconMap[value.title]}
                  </div>
                  <div className="hidden group-hover:block">
                    {iconFillMap[value.title]}
                  </div>
                </div>
                <h3 className="text-xl font-serif text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">{value.title}</h3>
                <p className="text-sm text-brand-navy/60 leading-relaxed group-hover:text-brand-alabaster/60 transition-colors">
                  {value.description}
                </p>
                <div className="mt-8 w-8 h-px bg-brand-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <span className="absolute top-8 right-8 text-brand-navy/5 font-serif italic text-6xl group-hover:text-white/5 transition-colors">0{index + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
